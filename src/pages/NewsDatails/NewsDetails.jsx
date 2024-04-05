import { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { NavLink, useParams } from "react-router-dom";
const NewsDetails = () => {
  const { id } = useParams();
  const [NewsDetails, setNewsDetails] = useState({});

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const details = data.find((newsDetails) => newsDetails._id == id);
        setNewsDetails(details);
      });
  }, [id]);

  const { image_url, title, details } = NewsDetails;

  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div className="grid gap-4 md:grid-cols-3 rounded-sm">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold my-6">Dragon News</h2>
            <div className="border-2">
              <div className="p-6 space-y-6">
                <img src={image_url} alt="" />
                <h2 className="font-semibold text-xl my-6">{title}</h2>
                {details && (
                  <div>
                    {details?.length > 200 ? (
                      <p>{details?.slice(0, 200)}</p>
                    ) : (
                      { details }
                    )}
                  </div>
                )}

                <div>
                  <NavLink to="/">
                    <button className="bg-[#D72050] text-white px-6 py-3">
                      All news in this category
                    </button>
                  </NavLink>
                </div>
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
