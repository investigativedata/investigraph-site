"use client";

import Link from "@mui/joy/Link";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import Button from "@mui/joy/Button";
import type { INKDataset } from "~/lib/ftm/types";
import { getDataset, getCatalog } from "~/lib/api";
import { Page } from "~/components";

type Params = { dataset: string };

export default async function DatasetPage({ params }: { params: Params }) {
  const dataset = await getDataset(params.dataset);
  return (
    <Page title={dataset.title}>
      <Typography level="body2">Last updated: {dataset.updated_at}</Typography>
      <Button
        aria-label={`api url for ${dataset.title}`}
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        endDecorator={<LaunchIcon />}
      >
        Api
      </Button>
      <Typography level="body1">{dataset.summary}</Typography>

      {dataset.publisher ? (
        <div>
          <Typography level="h3">Publisher</Typography>
          {dataset.publisher.url ? (
            <Link href={dataset.publisher.url}>{dataset.publisher.name}</Link>
          ) : (
            <Typography>{dataset.publisher.name}</Typography>
          )}
          <Typography level="body1">{dataset.publisher.description}</Typography>
        </div>
      ) : null}

      {dataset.things ? (
        <Box sx={{ width: "100%" }}>
          <Typography level="h3">Schemata</Typography>
          <Table aria-label="schemata entities count">
            <tbody>
              {dataset.things.schemata.map((s) => (
                <tr key={s.name}>
                  <td>{s.plural}</td>
                  <td>
                    <Typography color="primary">{s.count}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Typography level="h3">Countries</Typography>
          <Table aria-label="counries entities count">
            <tbody>
              {dataset.things.countries.map((s) => (
                <tr key={s.code}>
                  <td>{s.label}</td>
                  <td>
                    <Typography color="primary">{s.count}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      ) : null}
    </Page>
  );
}

export async function generateStaticParams() {
  const catalog = await getCatalog();
  return catalog.datasets.map((d) => ({ dataset: d.name }));
}
