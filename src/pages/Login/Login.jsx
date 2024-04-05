import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="bg-[#ffffff] mt-14 shadow-lg lg:w-1/2 md:w-3/4 mx-auto">
          <div className="md:w-3/4 lg:w-1/2 mx-auto py-14">
            <h1 className="font-semibold text-3xl text-center">
              Login your account
            </h1>
            <div className="divider"></div>
            <form onSubmit={handleLogin}>
              <label className="text-lg font-semibold ">Email Address</label>
              <br />

              <input
                type="email"
                name="email"
                className="bg-[#f3f3f3] p-3 w-full my-4 rounded-sm outline-none text-[#9f9f9f]"
                placeholder="Enter your email address"
                required
              />
              <br />
              <label className="text-lg font-semibold">Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="bg-[#f3f3f3] p-3 rounded-sm my-4 w-full outline-none text-[#9f9f9f]"
                placeholder="Enter your password"
                required
              />
              <br />
              <button className="bg-[#403f3f] text-xl rounded-sm p-2 w-full my-4 font-semibold text-white">
                Login
              </button>
              <p className="font-semibold text-[#706f6f] text-center">
                Do not Have An Account ?{" "}
                <Link to="/register" className="text-[#fa6c57]">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
