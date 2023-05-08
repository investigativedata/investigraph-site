import api from "~/api";
import Page from "~/components/Page";
import EntitiesScreen from "~/screens/EntitiesScreen";

type Params = {
  dataset: string;
};

export default async function EntitiesPage(params: Params) {
  // if (params.dataset === undefined) return null;
  params.dataset = "gdho";
  const dataset = await api.getDataset(params.dataset);
  const result = await api.getEntities(params.dataset, { limit: 10 });
  const crumbs = [
    {
      label: "Catalog",
      url: "/datasets",
    },
    {
      label: "Dataset",
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
