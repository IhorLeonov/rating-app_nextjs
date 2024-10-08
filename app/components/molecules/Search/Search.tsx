"use client";

import s from "./Search.module.css";
import cn from "classnames";
import GlassIcon from "../../../lib/icons/glass.svg";

import { SearchProps } from "./Search.props";
import { Input, Button } from "../..";
import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search({ className, ...props }: SearchProps) {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push(`/search?q=${search}`);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    e.key === "Enter" && goToSearch();
  };

  return (
    <form role="search" className={cn(className, s.search)} {...props}>
      <Input
        className={s.input}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button
        aria-label="Search the site"
        appearance="primary"
        className={s.button}
        onClick={goToSearch}
      >
        <GlassIcon />
      </Button>
    </form>
  );
}
