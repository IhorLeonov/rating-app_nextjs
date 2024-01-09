import { getMenu } from "@/api/menu";

export async function Menu() {
  // const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
  //   firstCategory: 0,
  // });

  const menu = await getMenu(0);
  return <div>{menu.length}</div>;
}
