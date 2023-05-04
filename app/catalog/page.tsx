import type { INKCatalog } from "~/lib/ftm/types";

import { getCatalog } from "~/lib/api";
import { Catalog } from "~/lib/ftm/components";

export default async function Page() {
  const catalog = await getCatalog();
  return (
    <main>
      <h1>Catalog</h1>
      <Catalog catalog={catalog} />
    </main>
  );
}
