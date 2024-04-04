import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import Q_zone1 from "../../assets/qZone1.png";
import Q_zone2 from "../../assets/qZone2.png";
import Q_zone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Login With</h1>
      <div className="space-y-2 my-6">
        <div className="border-2 mx-au rounded-md w-full border-[#78a0bb]">
          <button className="flex gap-2 mx-auto py-2">
            {" "}
            <FaGoogle size={20} color="#5a8af8" />
            <span className="text-[#5a8af8] text-base font-semibold">
              Login With Google
            </span>
          </button>
        </div>
        <div className="border-2 mx-au rounded-md w-full border-[#747474]">
          <button className="flex gap-2 mx-auto py-2">
            {" "}
            <FaGithub size={20} color="#645a52" />
            <span className="text-[#645a52] text-base font-semibold">
              Login With Google
            </span>
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold my-6">Find Us On </h1>
        <div>
          <div className="border-2 rounded-t-md">
            <a className="flex items-center p-4 gap-4" href="">
              <span>
                <FaFacebookF
                  className="bg-[#f3f3f3] rounded-full p-2"
                  size={40}
                  color="#3B599C"
                />
              </span>
              <span className="font-semibold text-lg text-[#706f6f]">
                Facebook
              </span>
            </a>
          </div>
          <div className="border-x-2">
            <a className="flex items-center p-4 gap-4" href="">
              <span>
                <FaTwitter
                  className="bg-[#f3f3f3] rounded-full p-2"
                  size={40}
                  color="#2e9cfe"
                />
              </span>
              <span className="font-semibold text-lg text-[#706f6f]">
                Twitter
              </span>
            </a>
          </div>
          <div className="border-2 rounded-b-md">
            <a className="flex items-center p-4 gap-4" href="">
              <span>
                <FaInstagram
                  className="bg-[#f3f3f3] rounded-full p-2"
                  size={40}
                  color="#d82d7e"
                />
              </span>
              <span className="font-semibold text-lg text-[#706f6f]">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold mt-6">Q-Zone</h1>

        <div>
          <img className="w-full" src={Q_zone1} alt="" />
          <img className="w-full" src={Q_zone2} alt="" />
          <img className="w-full" src={Q_zone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
