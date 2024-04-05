import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
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
              Register your account
            </h1>
            <div className="divider"></div>
            <form onSubmit={handleRegister}>
              <label className="text-lg font-semibold ">Your Name</label>
              <br />
              <input
                type="text"
                name="name"
                className="bg-[#f3f3f3] p-3 w-full my-4 rounded-sm outline-none text-[#9f9f9f]"
                placeholder="Your Name"
                required
              />
              <label className="text-lg font-semibold ">Photo URL</label>
              <br />
              <input
                type="text"
                name="photo"
                className="bg-[#f3f3f3] p-3 w-full my-4 rounded-sm outline-none text-[#9f9f9f]"
                placeholder="Enter your URL"
                required
              />
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
              <input type="checkbox" required name="check" />
              <span className="text-[#706F6F] font-semibold ml-3">
                Accept Term & Conditions
              </span>
              <button className="bg-[#403f3f] text-xl rounded-sm p-2 w-full my-4 font-semibold text-white">
                Login
              </button>
              <p className="font-semibold text-[#706f6f] text-center">
                You Have An Account ?{" "}
                <Link to="/login" className="text-[#fa6c57]">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
