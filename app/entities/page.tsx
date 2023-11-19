import type { IPublicQuery } from "~/lib/ftm/api/types";
import { getPublicQuery } from "~/lib/ftm/api/util";

import api from "~/api";
import Page from "~/components/Page";
import EntitiesScreen from "~/screens/EntitiesScreen";

export default async function EntitiesPage({
  searchParams,
}: {
  searchParams: IPublicQuery;
}) {
  const query = {
    ...getPublicQuery(searchParams),
    featured: true,
    nested: true,
    limit: 10,
  };
  const result = await api.getEntities(query);
  const crumbs = [
    {
      label: "Entities",
    },
  ];
  return (
    <Page crumbs={crumbs}>
      <EntitiesScreen result={result} />
    </Page>
  );
}
