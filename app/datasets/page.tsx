import { getCatalog } from "~/lib/api";

import Page from "~/components/Page";
import CatalogScreen from "~/screens/CatalogScreen";

const breadcrumbs = [
  {
    label: "Catalog",
  },
];

export default async function CatalogPage() {
  const catalog = await getCatalog();
  return (
    <Page crumbs={breadcrumbs}>
      <CatalogScreen catalog={catalog} />
    </Page>
  );
}
