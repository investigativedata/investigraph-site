import type { Metadata } from "next";

import type { IEntityDatum, IEntityUrlParams } from "~/lib/ftm/types";

import api from "~/api";
import Page from "~/components/Page";
import Ellipsis from "~/components/common/Ellipsis";
import EntityScreen from "~/screens/EntityScreen";

interface Params extends IEntityUrlParams {
  readonly dataset: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const entity = await getEntity(params);
  const dataset = await api.getDataset(params.dataset);
  return {
    title: `${entity.caption} - ${dataset.title}`,
    description: `${entity.caption} is a ${entity.schema} found in the dataset ${dataset.title}. ${dataset.summary}`,
  };
}

const getEntity = async (params: Params): Promise<IEntityDatum> =>
  await api.getEntity(params.dataset, params.slug[0]);

export default async function EntityPage({ params }: { params: Params }) {
  const dataset = await api.getDataset(params.dataset);
  const entity = await getEntity(params);
  const crumbs = [
    {
      label: "Catalog",
      url: "/datasets",
    },
    {
      label: <Ellipsis text={dataset.title} />,
      url: `/datasets/${params.dataset}`,
    },
    {
      label: "Entities",
      url: `/datasets/${params.dataset}/entities`,
    },
    {
      label: <Ellipsis text={entity.caption} />,
    },
  ];
  return (
    <Page crumbs={crumbs}>
      <EntityScreen entity={entity} />
    </Page>
  );
}