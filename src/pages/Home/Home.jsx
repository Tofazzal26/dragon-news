import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="border md:col-span-2">
          <h1>News Coming Soon</h1>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
