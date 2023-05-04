import type { INKCatalog } from "~/lib/ftm/types";

type ComponentProps = { catalog: INKCatalog };

export default function Catalog({ catalog }: ComponentProps) {
  return (
    <code>
      <pre>{JSON.stringify(catalog, null, 2)}</pre>
    </code>
  );
}
