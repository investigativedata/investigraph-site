"use client";

import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Stack from "@mui/joy/Stack";

import { getProxy } from "~/lib/ftm";
import {
  EntityCaption,
  EntityProperty,
  PropertyStack,
  PropertyTable,
  Schema,
} from "~/lib/ftm/components";
import type { TEntity } from "~/lib/ftm/types";

import { Headline } from "~/components/common/typo";

type Props = {
  entity: TEntity;
};

const stackProps: string[] = ["summary", "description", "note", "abstract"];

export default function EntitiesScreen(props: Props) {
  const entity = getProxy(props.entity);
  const tableProps = Array.from(entity.schema.getProperties(), (x) => x[0])
    .filter((p) => stackProps.indexOf(p) < 0)
    .filter((n) => n !== "name");

  return (
    <Box sx={{ paddingTop: 4 }}>
      <Stack
        sx={{ pb: 1 }}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2 }}
      >
        <Chip variant="soft" color="neutral" sx={{ width: "auto" }}>
          <Schema entity={entity} />
        </Chip>
        {entity.hasProperty("country") ? (
          <Chip variant="soft" color="neutral" sx={{ width: "auto" }}>
            <EntityProperty entity={entity} prop="country" />
          </Chip>
        ) : null}
        {entity.hasProperty("jurisdiction") ? (
          <Chip variant="soft" color="neutral" sx={{ width: "auto" }}>
            <EntityProperty entity={entity} prop="jurisdiction" />
          </Chip>
        ) : null}
      </Stack>
      <Headline sx={{ marginTop: 0 }} level="h2" color="primary">
        <EntityCaption entity={entity} />
      </Headline>
      <PropertyStack entity={entity} props={stackProps} />
      <Headline level="h5">Properties</Headline>
      <PropertyTable entity={entity} props={tableProps} />
    </Box>
  );
}
