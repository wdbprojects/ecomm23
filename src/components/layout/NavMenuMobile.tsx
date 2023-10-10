import { NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavMenuMobile = () => {
  return (
    <>
      <NavigationMenuItem>
        <NavLink to="/login" className={`${navigationMenuTriggerStyle()}`}>
          Home
        </NavLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavLink to="/login" className={navigationMenuTriggerStyle()}>
          About
        </NavLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavLink to="/login" className={navigationMenuTriggerStyle()}>
          Products
        </NavLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavLink to="/login" className={navigationMenuTriggerStyle()}>
          Cart
        </NavLink>
      </NavigationMenuItem>
    </>
  );
};
export default NavMenuMobile;
