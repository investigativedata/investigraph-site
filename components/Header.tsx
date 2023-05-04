"use client";

import Typography from "@mui/joy/Typography";
import styles from "./Header.module.scss";


export default function Header({ title }: { title: string }) {
  return (
    <header className={styles.header}>
      <Typography level="h1" color="primary">
        {title}
      </Typography>
    </header>
  );
}
