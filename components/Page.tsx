"use client";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Grid from "@mui/joy/Grid";

import Header from "./Header";
import theme from "~/theme";
import styles from "./Page.module.css";

type TPage = { title: string };

export default function Page({
  title,
  children,
}: React.PropsWithChildren<TPage>) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <section className={styles.page}>
        <Header title={title} />
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
