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
  readonly dataset: INKDataset;
};

export default function EntitiesScreen(props: Props) {
  const { dataset, result } = props;
  return (
    <Stack sx={{ position: "relative", pt: 2 }}>
      <DatasetHeader dataset={dataset} />
      <Typography level="h3" color="primary" sx={{ mt: 4 }}>
        {result.total} entities
      </Typography>
      {result.total < dataset.coverage.entities && (
        <Typography level="body1" color="neutral">
          This dataset contains {dataset.coverage.entities} entities in total.
        </Typography>
      )}
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
