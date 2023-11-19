import { notFound, redirect } from "next/navigation";

import { getEntityUrl, getEntityUrlParams } from "~/lib/ftm";
import type {
  IEntityDatum,
  IEntityUrlParams,
  INKDataset,
} from "~/lib/ftm/types";

import api from "~/api";

interface Data {
  readonly entity: IEntityDatum;
  readonly datasets: INKDataset[];
  readonly reversed: { [key: string]: IEntityDatum[] };
  readonly reversedTotal: number;
}

interface Reversed {
  readonly schema: string;
  readonly entities: IEntityDatum[];
}

const getReversedData = async (
  schema: string,
  entityId: string
): Promise<Reversed> => {
  const { entities } = await api.getEntities({
    schema,
    reverse: entityId,
    nested: true,
    // order_by: "-date",
  });
  return { schema, entities };
};

export const getData = async (params: IEntityUrlParams): Promise<Data> => {
  const entityId = params.slug[0];
  const [catalog, entity, reversedResult] = await Promise.all([
    api.getCatalog(),
    api.getEntity(entityId),
    api.getEntities({
      reverse: entityId,
      dehydrate: true,
      limit: 0,
    }),
  ]);
  if (!entity) notFound();
  const { slug } = getEntityUrlParams(entity);
  if (slug[1] !== params.slug[1] || entity.id !== entityId) {
    const urlPrefix = `/datasets/${params.dataset}/entities`;
    redirect(getEntityUrl(entity, urlPrefix));
  }
  const reversedResults = await Promise.all(
    reversedResult.coverage.schemata.map((schema) =>
      getReversedData(schema.name, entityId)
    )
  );
  const reversed = Object.fromEntries(
    reversedResults.map(({ schema, entities }) => [schema, entities])
  );
  const datasets = catalog.datasets.filter(
    (d) => entity.datasets.indexOf(d.name) > -1
  );
  return {
    entity,
    datasets,
    reversed,
    reversedTotal: reversedResult.total,
  };
};
