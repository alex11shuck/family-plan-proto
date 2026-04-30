import { Outlet } from "react-router";
import { NavMenu } from "./NavMenu";

export function Layout() {
  return (
    <>
      <Outlet />
      <NavMenu />
    </>
  );
}
