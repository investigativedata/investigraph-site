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
  readonly reversedEntities: IEntityDatum[];
}

export const getData = async (params: Params): Promise<Data> => {
  const entityId = params.slug[0];
  const [dataset, entity, reversedResult] = await Promise.all([
    api.getDataset(params.dataset),
    api.getEntity(params.dataset, entityId),
    api.getEntities(params.dataset, { reverse: entityId }),
  ]);
  if (!dataset || !entity) notFound();
  const { slug } = getEntityUrlParams(entity);
  if (slug[1] !== params.slug[1] || entity.id !== params.slug[0]) {
    const urlPrefix = `/datasets/${params.dataset}/entities`;
    redirect(getEntityUrl(entity, urlPrefix));
  }
  return { dataset, entity, reversedEntities: reversedResult.entities };
};
