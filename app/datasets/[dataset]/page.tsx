import type { Metadata } from "next";

import api from "~/api";
import Page from "~/components/Page";
import Ellipsis from "~/components/common/Ellipsis";
import DatasetScreen from "~/screens/DatasetScreen";

type Params = { readonly dataset: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const dataset = await api.getDataset(params.dataset);
  return {
    title: dataset.title,
    description: dataset.summary,
  };
}

export default async function DatasetPage({ params }: { params: Params }) {
  const dataset = await api.getDataset(params.dataset);
  const breadcrumbs = [
    {
      label: "Catalog",
      url: "/datasets",
    },
    { label: <Ellipsis text={dataset.title} /> },
  ];

  return (
    <Page crumbs={breadcrumbs}>
      <DatasetScreen dataset={dataset} />
    </Page>
  );
}

export async function generateStaticParams() {
  const catalog = await api.getCatalog();
  return catalog.datasets.map((d) => ({ dataset: d.name }));
}
