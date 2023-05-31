"use client";

import Stack from "@mui/joy/Stack";

import Catalog from "~/lib/ftm/components/Catalog";
import type { INKCatalog } from "~/lib/ftm/types";

import { Headline } from "~/components/common";

export default function CatalogScreen({ catalog }: { catalog: INKCatalog }) {
  return (
    <Stack>
      <Headline level="h1" color="primary">
        Data catalog
      </Headline>
      <Catalog catalog={catalog} detail={true} />
    </Stack>
  );
}
