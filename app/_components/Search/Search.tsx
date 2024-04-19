"use client";

import { SearchProps } from "./Search.props";
import s from "./Search.module.css";
import cn from "classnames";
import { Input, Button } from "..";
import { useState, KeyboardEvent } from "react";
import GlassIcon from "../../_lib/icons/glass.svg";
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
    <div className={cn(className, s.search)} {...props}>
      <Input
        className={s.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button appearance="primary" className={s.button} onClick={goToSearch}>
        <GlassIcon />
      </Button>
    </div>
  );
}
