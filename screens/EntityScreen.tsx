"use client";

import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";

import { getProxy } from "~/lib/ftm";
import {
  EntityCaption,
  EntityLink,
  EntityProperty,
  PropertyStack,
  PropertyTable,
  Schema,
} from "~/lib/ftm/components";
import type { Entity, TEntity } from "~/lib/ftm/types";

import { Headline } from "~/components/common/typo";

type Props = {
  entity: TEntity;
  reversedEntities: TEntity[];
};

const stackProps: string[] = ["summary", "description", "note", "abstract"];

const hasProps = (props: string[], entity: Entity) => {
  for (const p of props) {
    if (entity.hasProperty(p)) {
      return true;
    }
  }
  return false;
};

export default function EntitiesScreen(props: Props) {
  const entity = getProxy(props.entity);
  const tableProps = Array.from(entity.schema.getProperties(), (x) => x[0])
    .filter((p) => stackProps.indexOf(p) < 0)
    .filter((n) => n !== "name");
  const hasTableProps = hasProps(tableProps, entity);

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
        {entity.hasProperty("country") && (
          <Chip variant="soft" color="neutral" sx={{ width: "auto" }}>
            <EntityProperty entity={entity} prop="country" />
          </Chip>
        )}
        {entity.hasProperty("jurisdiction") && (
          <Chip variant="soft" color="neutral" sx={{ width: "auto" }}>
            <EntityProperty entity={entity} prop="jurisdiction" />
          </Chip>
        )}
      </Stack>
      <Headline sx={{ marginTop: 0 }} level="h2" color="primary">
        <EntityCaption entity={entity} />
      </Headline>
      <PropertyStack entity={entity} props={stackProps} />
      {hasTableProps && (
        <>
          <Headline level="h5">Properties</Headline>
          <PropertyTable entity={entity} props={tableProps} />
        </>
      )}
      {props.reversedEntities.length > 0 && (
        <Stack>
          <Headline level="h4">
            Referenced by {props.reversedEntities.length} other entities
          </Headline>
          <List>
            {props.reversedEntities.map((e) => (
              <ListItem key={e.id}>
                <EntityLink entity={e} icon={true} />
              </ListItem>
            ))}
          </List>
        </Stack>
      )}
    </Box>
  );
}
