"use client";

import Context from "~/lib/ftm/context";

export default function Layout({ children }: { children: React.ReactNode }) {
  const ctx = { urlPrefix: "/entities" };
  return <Context.Provider value={ctx}>{children}</Context.Provider>;
}
