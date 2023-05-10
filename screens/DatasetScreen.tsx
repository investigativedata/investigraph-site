"use client";

import { usePathname } from "next/navigation";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import {
  CountryFlag,
  DatasetHeader,
  DatasetMeta,
  DateDisplay,
  PublisherMeta,
} from "~/lib/ftm/components";
import type { INKDataset } from "~/lib/ftm/types";

import { Headline, Paragraph } from "~/components/common";

export default function DatasetScreen({ dataset }: { dataset: INKDataset }) {
  const basePath = usePathname();
  return (
    <Stack sx={{ position: "relative", pt: 2 }}>
      <DatasetHeader dataset={dataset} />
      <Button
        href={`${basePath}/entities`}
        component="a"
        startDecorator={<ChevronRightIcon />}
        variant="solid"
        size="sm"
        color="primary"
        aria-label={`entities in ${dataset.title}`}
        sx={{ mr: "auto", fw: 600, mt: 2, mb: 2 }}
      >
        Browse entities
      </Button>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid sm={12} md={6}>
          <DatasetMeta dataset={dataset} />
        </Grid>
        <Grid sm={12} md={6}>
          {dataset.publisher && <PublisherMeta publisher={dataset.publisher} />}
        </Grid>
      </Grid>

      {dataset.things && (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid sm={12} md={6}>
            <Headline level="h3">Types of entities</Headline>
            <Table aria-label="schemata entities count">
              <tbody>
                {dataset.things.schemata
                  .sort((a, b) => b.count - a.count)
                  .map((s) => (
                    <tr key={s.name}>
                      <td>{s.plural}</td>
                      <td>
                        <Typography color="primary">{s.count}</Typography>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Grid>
          {dataset.things.countries.length && (
            <Grid sm={12} md={6}>
              <Headline level="h3">Countries</Headline>
              <Table aria-label="counries entities count">
                <tbody>
                  {dataset.things.countries
                    .sort((a, b) => b.count - a.count)
                    .map((s) => (
                      <tr key={s.code}>
                        <td>
                          <CountryFlag iso={s.code} /> {s.label}
                        </td>
                        <td>
                          <Typography color="primary">{s.count}</Typography>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Grid>
          )}
        </Grid>
      )}
    </Stack>
  );
}
