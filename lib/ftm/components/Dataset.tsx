"use client";

import Link from "@mui/joy/Link";
import type { INKDataset } from "~/lib/ftm/types";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import SearchIcon from "@mui/icons-material/Search";

export default function Dataset({ dataset }: { dataset: INKDataset }) {
  return (
    <Card variant="outlined" sx={{ width: "100%", marginBottom: "1rem" }}>
      <Typography level="body2">{dataset.updated_at}</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        {dataset.title}
      </Typography>
      <Button
        aria-label={`api url for ${dataset.title}`}
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        endDecorator={<LaunchIcon />}
      >
        Api
      </Button>
      <Typography level="body1">{dataset.summary}</Typography>
      <Box sx={{ display: "flex", columnGap: "1rem" }}>
        <div>
          <Typography level="body3">Entities:</Typography>
          <Typography fontWeight="lg">10.000</Typography>
        </div>
        {dataset.publisher ? (
          <div>
            <Typography level="body3">Publisher:</Typography>
            {dataset.publisher.url ? (
              <Link href={dataset.publisher.url}>{dataset.publisher.name}</Link>
            ) : (
              <Typography>{dataset.publisher.name}</Typography>
            )}
          </div>
        ) : null}
        <Button
          startDecorator={<SearchIcon />}
          variant="solid"
          size="sm"
          color="primary"
          aria-label={`Explore ${dataset.title}`}
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          Explore
        </Button>
      </Box>
    </Card>
  );
}
