import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold">All Category</h1>
      <div className="">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-gray-400 block m-4 rounded-md py-3 px-10 text-lg text-black font-semibold"
                : "block m-4 rounded-md py-3 px-10 text-lg text-[#8b8b8b] font-semibold"
            }
            to={`/category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
