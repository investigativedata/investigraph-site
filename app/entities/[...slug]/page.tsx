import type { Metadata } from "next";

import type { IEntityUrlParams } from "~/lib/ftm/types";

import Page from "~/components/Page";
import Ellipsis from "~/components/common/Ellipsis";
import EntityScreen from "~/screens/EntityScreen";

import { getData } from "./data";

export async function generateMetadata({
  params,
}: {
  params: IEntityUrlParams;
}): Promise<Metadata> {
  const { entity } = await getData(params);
  return {
    title: entity.caption,
    description: `${entity.caption} is a ${entity.schema}`,
  };
}

export default async function EntityPage({
  params,
}: {
  params: IEntityUrlParams;
}) {
  const { entity, datasets, reversed, reversedTotal } = await getData(params);
  const crumbs = [
    {
      label: "Catalog",
      url: "/datasets",
    },
    {
      label: "Entities",
      url: "/entities",
    },
    {
      label: <Ellipsis text={entity.caption} />,
    },
  ];

  return (
    <Page crumbs={crumbs}>
      <EntityScreen
        entity={entity}
        datasets={datasets}
        reversed={reversed}
        reversedTotal={reversedTotal}
      />
    </Page>
  );
}
