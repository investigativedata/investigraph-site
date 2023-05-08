import MuiBreadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";

import Link from "./common/Link";

export type Breadrumb = { label: string; url?: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Breadrumb[] }) {
  return crumbs.length > 1 ? (
    <MuiBreadcrumbs sx={{ padding: 0, fontSize: "sm" }}>
      {crumbs.map(({ label, url }) =>
        url ? (
          <Link key={label} href={url}>
            {label}
          </Link>
        ) : (
          <Typography sx={{ fontSize: "inherit" }} key={label}>
            {label}
          </Typography>
        )
      )}
    </MuiBreadcrumbs>
  ) : null;
}
