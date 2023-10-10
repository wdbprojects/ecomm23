import { NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <NavLink to="/login" className={navigationMenuTriggerStyle()}>
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
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default NavMenu;
