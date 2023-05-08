import type { INKCatalog } from "~/lib/ftm/types";

import { getCatalog } from "~/lib/api";
import { Catalog } from "~/lib/ftm/components";

import { Page } from "~/components";

export default async function CatalogPage() {
  const catalog = await getCatalog();
  return (
    <Page title="Catalog">
      <Catalog catalog={catalog} detail={true} />
    </Page>
  );
}
