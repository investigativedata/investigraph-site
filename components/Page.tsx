"use client";

import CssBaseline from "@mui/joy/CssBaseline";
import Grid from "@mui/joy/Grid";
import { CssVarsProvider } from "@mui/joy/styles";

import type { Breadrumb } from "~/components/common/Breadcrumbs";
import { SITE } from "~/config";
import theme from "~/theme";

import Header from "./Header";
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
      <section className={styles.page}>
        <Header title={title} crumbs={crumbs} />
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "100%" }}
        >
          {children}
        </Grid>
      </section>
    </CssVarsProvider>
  );
}
