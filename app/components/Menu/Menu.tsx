// import { getMenu } from "@/app/api/menu";
import { AppContext } from "@/app/context/app.context";
import { useContext } from "react";

export function Menu() {
  // const menu = await getMenu(0);
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
}
