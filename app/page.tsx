import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: "ComputedMeta",
  };
}

export default async function Home() {
  return <div>Main Page</div>;
}
