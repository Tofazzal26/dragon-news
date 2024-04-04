import logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center space-y-2 mt-6">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-[#706f6f] text-lg">
        Journalism Without Fear or Favour
      </p>
      <h2 className="text-xl text-[#403F3F]">
        {moment().format("dddd, MMMM D, YYYY ")}
      </h2>
    </div>
  );
};

export default Header;
