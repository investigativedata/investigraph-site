"use client";

import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Stack from "@mui/joy/Stack";

import { getProxy, getSchema } from "~/lib/ftm";
import EntitiesTable from "~/lib/ftm/components/EntitiesTable";
import {
  EntityCaption,
  EntityLink,
  EntitySchema,
} from "~/lib/ftm/components/Entity";
import EntityProperty from "~/lib/ftm/components/Property";
import PropertyStack from "~/lib/ftm/components/PropertyStack";
import PropertyTable from "~/lib/ftm/components/PropertyTable";
import type { Entity, TEntity } from "~/lib/ftm/types";

import { Headline, Paragraph } from "~/components/common/typo";

type Props = {
  readonly entity: TEntity;
  readonly reversed: { [key: string]: TEntity[] };
  readonly reversedTotal: number;
};

const stackProps: string[] = ["summary", "description", "notes", "abstract"];

const hasProps = (props: string[], entity: Entity) => {
  for (const p of props) {
    if (entity.hasProperty(p)) {
      return true;
    }
  }
  return false;
};

export default function EntityScreen(props: Props) {
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
          <EntitySchema entity={entity} />
        </Chip>
        {entity.hasProperty("country") && (
          <Chip variant="soft" color="neutral" sx={{ width: "auto" }}>
            <EntityProperty entity={entity} prop="country" />
          </Chip>
        )}
        {!entity.hasProperty("country") &&
          entity.hasProperty("jurisdiction") && (
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
      {props.reversedTotal > 0 && (
        <Stack>
          <Headline level="h4">
            Referenced by {props.reversedTotal} other entities
          </Headline>
          {Object.keys(props.reversed).map((schema) => (
            <section key={schema}>
              <Headline level="h5" color="neutral">
                {getSchema(schema).plural}
              </Headline>
              <Paragraph>{getSchema(schema).description}</Paragraph>
              <EntitiesTable
                schema={schema}
                entities={props.reversed[schema]}
                detailUrl={getSchema(schema).isEdge}
              />
            </section>
          ))}
        </Stack>
      )}
    </Box>
  );
}
