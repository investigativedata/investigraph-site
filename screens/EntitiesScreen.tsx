"use client";

import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

import type { IEntitiesResult } from "~/lib/ftm/api/types";
import { DatasetHeader } from "~/lib/ftm/components/Dataset";
import EntityCard from "~/lib/ftm/components/EntityCard";
import type { INKDataset } from "~/lib/ftm/types";

type Props = {
  readonly result: IEntitiesResult;
};

export default function EntitiesScreen(props: Props) {
  const { result } = props;
  return (
    <Stack sx={{ position: "relative", pt: 2 }}>
      <Typography level="h3" color="primary" sx={{ mt: 4 }}>
        {result.total} entities
      </Typography>
      <List sx={{ mt: 2 }}>
        {result.entities.map((e) => (
          <ListItem key={e.id} style={{ display: "block" }}>
            <EntityCard entity={e} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
