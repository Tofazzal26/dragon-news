import { IoBookmarkOutline } from "react-icons/io5";
import { GoGitBranch } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const NewsCard = ({ aNews }) => {
  const {
    title,
    author,
    thumbnail_url,
    image_url,
    rating,
    total_view,
    details,
    _id,
  } = aNews;

  return (
    <div className="my-8">
      <div className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
          <div className="flex items-center bg-[#eeeeee] justify-between">
            <div className="p-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src={author.img}
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <div className="flex flex-col">
                  <span className="hover:underline dark:text-gray-600 font-semibold">
                    {author.name}
                  </span>

                  <span>{author.published_date}</span>
                </div>
              </a>
            </div>
            <div className="flex gap-4 p-2">
              <IoBookmarkOutline color="#706f6f" size={20} />
              <GoGitBranch color="#706f6f" size={20} />
            </div>
          </div>
          <div className="mt-3">
            <h2 className="font-semibold text-xl my-6">{title}</h2>
            <img src={image_url} alt="" />
            <div className="text-[#706f6f] text-base my-6">
              {details.length > 200 ? (
                <p>
                  {details.slice(0, 200)}{" "}
                  <Link
                    to={`/details/${_id}`}
                    className="text-[#fb6f56] font-semibold"
                  >
                    Read More...
                  </Link>
                </p>
              ) : (
                <p>{details}</p>
              )}
            </div>
            <div className="divider"></div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-600 font-semibold">
              Reviews: {rating.number}
            </span>
            <div>
              <span className="flex gap-2 text-gray-500 font-semibold">
                <FaEye color="#706f6f" size={22} /> {total_view}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
