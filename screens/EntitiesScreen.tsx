"use client";

import { useContext } from "react";

import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

import { EntityLink } from "~/lib/ftm/components";
import Context from "~/lib/ftm/context";
import type { INKDataset, TEntity } from "~/lib/ftm/types";

type Props = {
  entities: TEntity[];
  dataset: INKDataset;
};

export default function EntitiesScreen(props: Props) {
  const { dataset, entities } = props;
  const urlPrefix = `/datasets/${dataset.name}/entities/`;
  return (
    <Context.Provider value={{ urlPrefix }}>
      <List>
        {entities.map((e) => (
          <EntityLink key={e.id} entity={e} icon />
        ))}
      </List>
    </Context.Provider>
  );
}
