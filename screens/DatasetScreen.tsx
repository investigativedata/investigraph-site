"use client";

import { usePathname } from "next/navigation";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import {
  DatasetHeader,
  DatasetMeta,
  PublisherMeta,
} from "~/lib/ftm/components/Dataset";
import CountryFlag from "~/lib/ftm/components/common/CountryFlag";
import DateDisplay from "~/lib/ftm/components/common/Date";
import type { INKDataset } from "~/lib/ftm/types";

import { Headline, Paragraph } from "~/components/common";
import Link from "~/components/common/Link";

export default function DatasetScreen({ dataset }: { dataset: INKDataset }) {
  const basePath = usePathname();
  const entitiesPath = `${basePath}/entities`;
  const getSearchUrl = (param: string, value: string) =>
    `${entitiesPath}?${param}=${value}`;
  return (
    <Stack sx={{ position: "relative", pt: 2 }}>
      <DatasetHeader dataset={dataset} />
      <Link href={entitiesPath}>
        <Button
          startDecorator={<ChevronRightIcon />}
          variant="solid"
          size="sm"
          color="primary"
          aria-label={`entities in ${dataset.title}`}
          sx={{ mr: "auto", fw: 600, mt: 2, mb: 2 }}
        >
          Browse entities
        </Button>
      </Link>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid sm={12} md={6}>
          <DatasetMeta dataset={dataset} />
        </Grid>
        <Grid sm={12} md={6}>
          {dataset.publisher && <PublisherMeta publisher={dataset.publisher} />}
        </Grid>
      </Grid>

      {dataset.coverage.entities > 0 && (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid sm={12} md={6}>
            <Headline level="h3">Types of entities</Headline>
            <Table aria-label="schemata entities count">
              <tbody>
                {dataset.coverage.schemata
                  .sort((a, b) => b.count - a.count)
                  .map((s) => (
                    <tr key={s.name}>
                      <td>
                        <Link href={getSearchUrl("schema", s.name)}>
                          {s.plural}
                        </Link>
                      </td>
                      <td>{s.count}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Grid>
          {dataset.coverage.countries.length > 0 && (
            <Grid sm={12} md={6}>
              <Headline level="h3">Countries</Headline>
              <Table aria-label="counries entities count">
                <tbody>
                  {dataset.coverage.countries
                    .sort((a, b) => b.count - a.count)
                    .map((s) => (
                      <tr key={s.code}>
                        <td>
                          <CountryFlag iso={s.code} />
                          <Link href={getSearchUrl("country", s.code)}>
                            {s.label}
                          </Link>
                        </td>
                        <td>{s.count}</td>
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
