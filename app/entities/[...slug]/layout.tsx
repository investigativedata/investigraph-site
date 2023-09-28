"use client";

import Context from "~/lib/ftm/context";

type Params = { slug: string[] };

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const urlPrefix = "/entities";
  const ctx = { entityId: params.slug[0], urlPrefix };
  return <Context.Provider value={ctx}>{children}</Context.Provider>;
}
