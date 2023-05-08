import NextLink from "next/link";

import { styled } from "@mui/joy/styles";

const Link = styled(NextLink)(({ theme }) => ({
  color: theme.vars.palette.primary[500],
}));

export default Link;
