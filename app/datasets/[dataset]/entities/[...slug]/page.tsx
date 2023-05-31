import type { Metadata } from "next";

import Page from "~/components/Page";
import Ellipsis from "~/components/common/Ellipsis";
import EntityScreen from "~/screens/EntityScreen";

import type { Params } from "./data";
import { getData } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { entity, dataset } = await getData(params);
  return {
    title: `${entity.caption} - ${dataset.title}`,
    description: `${entity.caption} is a ${entity.schema} found in the dataset ${dataset.title}. ${dataset.summary}`,
  };
}

export default async function EntityPage({ params }: { params: Params }) {
  const { dataset, entity, reversed, reversedTotal } = await getData(params);
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
      <EntityScreen
        entity={entity}
        reversed={reversed}
        reversedTotal={reversedTotal}
      />
    </Page>
  );
}
