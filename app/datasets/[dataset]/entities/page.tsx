import api from "~/api";
import Page from "~/components/Page";
import Ellipsis from "~/components/common/Ellipsis";
import EntitiesScreen from "~/screens/EntitiesScreen";

type Params = { readonly dataset: string };

export default async function EntitiesPage({ params }: { params: Params }) {
  const dataset = await api.getDataset(params.dataset);
  const result = await api.getEntities(params.dataset, { limit: 100 });
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
      <EntitiesScreen dataset={dataset} entities={result.entities} />
    </Page>
  );
}
