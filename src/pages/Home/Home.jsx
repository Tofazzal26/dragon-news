import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="md:col-span-2">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} aNews={aNews} />
          ))}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
