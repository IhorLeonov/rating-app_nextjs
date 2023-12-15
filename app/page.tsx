import { Htag, Button, P, Tag, Rating } from "@/components";
import { Metadata } from "next";
import { API } from "./api";
import { MenuItem } from "@/interfaces/menu.interface";
import axios from "axios";

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: "ComputedMeta",
  };
}

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ "content-type": "application/json" }),
  });

  return res.json();
}

export default async function Home() {
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: 0,
  });

  return (
    <>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <P size="l">Big</P>
      <P size="m">Medium</P>
      <P size="s">Small</P>
      <Tag size="s" color="ghost">
        Ghost
      </Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag size="m" color="grey">
        Grey
      </Tag>
      <Tag size="m" color="primary">
        Primary
      </Tag>
      <Rating isEditable />
    </>
  );
}
