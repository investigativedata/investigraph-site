"use client";

import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

import { Breadcrumbs } from "~/components/common";
import type { Breadrumb } from "~/components/common/Breadcrumbs";
import { SITE } from "~/config";

import styles from "./Header.module.scss";

export default function Header({
  crumbs,
  title = SITE,
}: {
  title?: string;
  crumbs: Breadrumb[];
}) {
  return (
    <header className={styles.header}>
      <Stack>
        <Typography level="h3" color="neutral">
          {title}
        </Typography>
        <Breadcrumbs crumbs={crumbs} />
      </Stack>
    </header>
  );
}
