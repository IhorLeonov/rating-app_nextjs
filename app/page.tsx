import { Htag, Button, P, Tag, Rating } from "@/components";
import { Metadata } from "next";

import { Menu } from "@/components/Menu/Menu";
// import PageProducts from "./products/[alias]/page";

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: "ComputedMeta",
  };
}

export default function Home() {
  return (
    <>
      {/* <PageProducts /> */}
      Main Page
      <Menu />
      {/* <Htag tag="h1">Hello</Htag> */}
      {/* <Button appearance="primary" arrow="right">
        Кнопка
      </Button> */}
      {/* <Button appearance="ghost" arrow="right">
        Кнопка
      </Button> */}
      {/* <P size="l">Big</P>
      <P size="m">Medium</P>
      <P size="s">Small</P> */}
      {/* <Tag size="s" color="ghost">
        Ghost
      </Tag> */}
      {/* <Tag size="m" color="red">
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
      <Rating isEditable /> */}
    </>
  );
}
