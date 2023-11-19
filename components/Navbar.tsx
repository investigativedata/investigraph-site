import Typography from "@mui/joy/Typography";
import { styled } from "@mui/joy/styles";

import { Link } from "~/components/common";
import { SITE } from "~/config";

import styles from "./Navbar.module.scss";

const Nav = styled("nav")(() => ({
  position: "fixed",
  backgroundColor: "white",
  zIndex: 100,
}));

const HomeLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.tertiary,
}));

export default function Navbar() {
  return (
    <Nav sx={{ boxShadow: "sm" }} role="navigation" className={styles.navbar}>
      <Typography
        level="h1"
        fontSize="md"
        color="neutral"
        sx={{ fontFamily: "var(--font-family-mono)" }}
      >
        <HomeLink href="/datasets">{SITE}</HomeLink>
      </Typography>
    </Nav>
  );
}
