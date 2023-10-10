import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 py-2 text-neutral-100">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link
            to="/login"
            className="hover:underline text-xs sm:text-sm font-light"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="hover:underline text-xs sm:text-sm font-light"
          >
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
