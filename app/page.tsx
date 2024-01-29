// import { Htag, Button, P, Tag, Rating } from "@/components";
// import PageProducts from "./products/[alias]/page";
// import { MenuItem } from "@/interfaces/menu.interface";
// import axios from "axios";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: "ComputedMeta",
  };
}

// Page Router ()
// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const firstCategory = 0;
//   const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
//     firstCategory,
//   });
//   return {
//     props: {
//       menu,
//       firstCategory,
//     },
//   };
// };

export default async function Home() {
  return (
    <>
      {/* <PageProducts /> */}
      Main Page
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
