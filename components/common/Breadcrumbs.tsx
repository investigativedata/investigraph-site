import MuiBreadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";

import Link from "./Link";

export type Breadrumb = { label: string; url?: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Breadrumb[] }) {
  return crumbs.length > 1 ? (
    <MuiBreadcrumbs>
      {crumbs.map(({ label, url }) =>
        url ? (
          <Link key={label} href={url}>
            {label}
          </Link>
        ) : (
          <Typography key={label}>{label}</Typography>
        )
      )}
    </MuiBreadcrumbs>
  ) : null;
}
