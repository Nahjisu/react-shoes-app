import { useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <ul className="flex justify-end p-4">
          <li
            className="text-white p-4 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="text-white p-4 cursor-pointer"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </li>
          <li
            className="text-white p-4 cursor-pointer"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
