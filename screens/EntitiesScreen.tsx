"use client";

import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";

import { DatasetHeader, EntityCard } from "~/lib/ftm/components";
import type { INKDataset, TEntity } from "~/lib/ftm/types";

import { Headline } from "~/components/common/typo";

type Props = {
  readonly entities: TEntity[];
  readonly dataset: INKDataset;
};

export default function EntitiesScreen(props: Props) {
  return (
    <Stack sx={{ position: "relative", pt: 2 }}>
      <DatasetHeader dataset={props.dataset} />
      <Headline level="h3" color="primary">
        {props.dataset.things?.total} Entities
      </Headline>
      <List>
        {props.entities.map((e) => (
          <ListItem key={e.id} style={{ display: "block"}}>
            <EntityCard entity={e} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
