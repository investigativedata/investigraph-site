"use client";

import Context from "~/lib/ftm/context";

type Params = { dataset: string; slug: string[] };

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const urlPrefix = `/datasets/${params.dataset}/entities`;
  const ctx = { entityId: params.slug[0], urlPrefix };
  return <Context.Provider value={ctx}>{children}</Context.Provider>;
}
