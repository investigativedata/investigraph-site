import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

export default () => {
  const router = useRouter();
  const url = usePathname();
  const [q, update] = useState(useSearchParams().get("q") || "");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        router.push(`${url}?q=${q}`);
      }}
    >
      <Stack spacing={1}>
        <Input
          value={q}
          onChange={(e) => update(e.target.value)}
          placeholder="Search for a person, company or organization"
          required
          startDecorator={<SearchIcon />}
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};
