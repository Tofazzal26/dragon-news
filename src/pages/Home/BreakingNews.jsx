import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div>
      <div className="flex gap-6">
        <button className="btn btn-secondary">Breaking News</button>
        <Marquee speed={100}>
          <NavLink className="mr-12" to="/">
            Match Highlights: Germany vs Spain — as it happened...
          </NavLink>
          <NavLink className="mr-12" to="/">
            Match Highlights: Germany vs Spain — as it happened...
          </NavLink>
          <NavLink className="mr-12" to="/">
            Match Highlights: Germany vs Spain — as it happened...
          </NavLink>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
