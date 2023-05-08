"use client";

import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";

import type { Breadrumb } from "~/components/Breadcrumbs";
import { SITE } from "~/config";
import theme from "~/theme";

import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import styles from "./Page.module.css";

type TPage = { title?: string; crumbs: Breadrumb[] };

export default function Page({
  title = SITE,
  crumbs,
  children,
}: React.PropsWithChildren<TPage>) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <section className={styles.page}>
        <Breadcrumbs crumbs={crumbs} />
        {children}
      </section>
    </CssVarsProvider>
  );
}
