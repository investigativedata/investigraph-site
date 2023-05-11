import { redirect } from "next/navigation";

import type { IPublicQuery } from "~/lib/ftm/api/types";
import { getPublicQuery } from "~/lib/ftm/api/util";

import api from "~/api";
import Page from "~/components/Page";
import Ellipsis from "~/components/common/Ellipsis";
import EntitiesScreen from "~/screens/EntitiesScreen";

type Params = { readonly dataset: string };

export default async function EntitiesPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: IPublicQuery;
}) {
  const dataset = await api.getDataset(params.dataset);

  if (Object.keys(searchParams).length === 0) {
    // redirect to default schema if no query params
    const defaultSchema = dataset.things.schemata.sort(
      (a, b) => b.count - a.count
    )[0];
    defaultSchema &&
      redirect(
        `/datasets/${dataset.name}/entities?schema=${defaultSchema.name}`
      );
  }

  const query = {
    ...getPublicQuery(searchParams),
    featured: true,
    nested: true,
  };
  const result = await api.getEntities(params.dataset, query);
  const crumbs = [
    {
      label: "Catalog",
      url: "/datasets",
    },
    {
      label: <Ellipsis text={dataset.title} />,
      url: `/datasets/${dataset.name}`,
    },
    {
      label: "Entities",
    },
  ];
  return (
    <Page crumbs={crumbs}>
      <EntitiesScreen dataset={dataset} result={result} />
    </Page>
  );
}
