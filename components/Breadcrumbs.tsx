import MuiBreadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";

import Link from "./common/Link";

export type Breadrumb = { label: string | React.ReactNode; url?: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Breadrumb[] }) {
  if (crumbs.length == 0) return null;
  return (
    <MuiBreadcrumbs sx={{ padding: 0, fontSize: "sm" }}>
      {crumbs.map(({ label, url }, ix) =>
        url ? (
          <Link key={ix} href={url}>
            {label}
          </Link>
        ) : (
          <Typography sx={{ fontSize: "inherit" }} key={ix}>
            {label}
          </Typography>
        )
      )}
    </MuiBreadcrumbs>
  );
}
