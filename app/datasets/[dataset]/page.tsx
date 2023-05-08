import type { Metadata } from "next";

import { getCatalog, getDataset } from "~/lib/api";

import { Page } from "~/components";
import DatasetScreen from "~/screens/DatasetScreen";

type Params = { dataset: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const dataset = await getDataset(params.dataset);
  return {
    title: dataset.title,
    description: dataset.summary,
  };
}

const breadcrumbs = [
  {
    label: "Catalog",
    url: "/datasets",
  },
  { label: "Dataset" },
];

export default async function DatasetPage({ params }: { params: Params }) {
  const dataset = await getDataset(params.dataset);
  return (
    <Page crumbs={breadcrumbs}>
      <DatasetScreen dataset={dataset} />
    </Page>
  );
}

export async function generateStaticParams() {
  const catalog = await getCatalog();
  return catalog.datasets.map((d) => ({ dataset: d.name }));
}
