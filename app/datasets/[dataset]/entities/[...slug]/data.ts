import { notFound, redirect } from "next/navigation";

import { getEntityUrl, getEntityUrlParams } from "~/lib/ftm";
import type {
  IEntityDatum,
  IEntityUrlParams,
  INKDataset,
} from "~/lib/ftm/types";

import api from "~/api";

export interface Params extends IEntityUrlParams {
  readonly dataset: string;
}

interface Data {
  readonly dataset: INKDataset;
  readonly entity: IEntityDatum;
  readonly reversed: { [key: string]: IEntityDatum[] };
  readonly reversedTotal: number;
}

interface Reversed {
  readonly schema: string;
  readonly entities: IEntityDatum[];
}

const getReversedData = async (
  dataset: string,
  schema: string,
  entityId: string
): Promise<Reversed> => {
  const { entities } = await api.getEntities(dataset, {
    schema,
    reverse: entityId,
    nested: true,
    order_by: "-date",
  });
  return { schema, entities };
};

export const getData = async (params: Params): Promise<Data> => {
  const entityId = params.slug[0];
  const [dataset, entity, reversedResult] = await Promise.all([
    api.getDataset(params.dataset),
    api.getEntity(params.dataset, entityId),
    api.getEntities(params.dataset, {
      reverse: entityId,
      dehydrate: true,
      limit: 0,
    }),
  ]);
  if (!dataset || !entity) notFound();
  const { slug } = getEntityUrlParams(entity);
  if (slug[1] !== params.slug[1] || entity.id !== entityId) {
    const urlPrefix = `/datasets/${params.dataset}/entities`;
    redirect(getEntityUrl(entity, urlPrefix));
  }
  const reversedResults = await Promise.all(
    Object.keys(reversedResult.schemata).map((schema) =>
      getReversedData(params.dataset, schema, entityId)
    )
  );
  const reversed = Object.fromEntries(
    reversedResults.map(({ schema, entities }) => [schema, entities])
  );
  return { dataset, entity, reversed, reversedTotal: reversedResult.total };
};
