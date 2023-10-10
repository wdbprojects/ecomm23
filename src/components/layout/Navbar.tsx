import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Moon, ShoppingCart, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-slate-200 py-2">
        <div className="align-element flex items-center justify-between gap-x-3">
          {/* LOGO / MOBILE ICON */}
          <div className="flex flex-row items-center gap-x-3">
            <div className="navbar-start md:hidden">
              <Button variant="outline" size="icon" onClick={toggleNavbar}>
                <Menu />
              </Button>
            </div>
            <div className="flex-1">
              <Link to="/" className="btn btn-ghost normal-case text-xl">
                ECOMM23
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-auto grow justify-center">
            <nav className="flex flex-row w-full justify-center gap-4">
              <NavigationMenuItem className="list-none">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active linkStyles"
                      : "linkStyles"
                  }
                >
                  Home
                </NavLink>
              </NavigationMenuItem>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active linkStyles"
                    : "linkStyles"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active linkStyles"
                    : "linkStyles"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active linkStyles"
                    : "linkStyles"
                }
              >
                Cart
              </NavLink>
            </nav>
          </div>

          <div className="flex gap-x-2 justify-end">
            <Button variant="ghost" size="icon">
              <Moon />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="transition-all duration-1000">
          <nav className="md:hidden fixed flex flex-col w-full items-center  bg-slate-500 p-6 gap-y-3 transition-all duration-1000">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active linkStylesMobile"
                  : "linkStylesMobile "
              }
              onClick={toggleNavbar}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active linkStylesMobile"
                  : "linkStylesMobile "
              }
              onClick={toggleNavbar}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active linkStylesMobile"
                  : "linkStylesMobile "
              }
              onClick={toggleNavbar}
            >
              Products
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active linkStylesMobile"
                  : "linkStylesMobile"
              }
              onClick={toggleNavbar}
            >
              Cart
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;
