"use client";

import Context from "~/lib/ftm/context";

type Params = { dataset: string };

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const urlPrefix = "/entities";
  return <Context.Provider value={{ urlPrefix }}>{children}</Context.Provider>;
}
