import { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { NavLink, useParams } from "react-router-dom";
const NewsDetails = () => {
  const { id } = useParams();
  const [NewsDetails, setNewsDetails] = useState([]);

  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div className="grid md:grid-cols-3">
          <div className="col-span-2">
            <h2>Dragon News</h2>
            <div className="border-2">
              <div>
                <img src="" alt="" />
                <h2></h2>
                <p></p>
                <NavLink>
                  <button>All news in this category</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <RightSideNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
