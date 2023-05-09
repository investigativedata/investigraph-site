"use client";

import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";

import { EntityCaption, Schema } from "~/lib/ftm/components";
import type { TEntity } from "~/lib/ftm/types";

import { Headline } from "~/components/common/typo";

type Props = {
  entity: TEntity;
};

export default function EntitiesScreen(props: Props) {
  const { entity } = props;
  return (
    <Box sx={{ paddingTop: 4 }}>
      <Chip variant="soft" color="neutral" sx={{ width: "auto" }}>
        <Schema entity={entity} />
      </Chip>
      <Headline sx={{ marginTop: 0 }} level="h1" color="primary">
        <EntityCaption entity={entity} />
      </Headline>
    </Box>
  );
}
