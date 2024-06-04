interface Page {
  params: { type: string };
}

export default function Page({ params }: Page) {
  return <div>Page {params.type}</div>;
}
