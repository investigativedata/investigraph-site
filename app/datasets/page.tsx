import api from "~/api";

import Page from "~/components/Page";
import CatalogScreen from "~/screens/CatalogScreen";

const breadcrumbs = [
  {
    label: "Catalog",
  },
];

export default async function CatalogPage() {
  const catalog = await api.getCatalog();
  return (
    <Page crumbs={breadcrumbs}>
      <CatalogScreen catalog={catalog} />
    </Page>
  );
}
