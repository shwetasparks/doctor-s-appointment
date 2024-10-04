import { assets } from "../assets/assets_frontend/assetss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


function Navigation() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-between py-3 mb-4 mt-2 ">
        <div>
          <img className="cursor-pointer" src={assets.logo} />
        </div>
        <ul className=" hidden gap-8 font-semibold md:flex items-start ">
          <NavLink to="/">
            <li>HOME</li>
          </NavLink>
          <NavLink to="/doctors">
            <li>ALL DOCTORS</li>
          </NavLink>
          <NavLink to="/about">
            <li>ABOUT</li>
          </NavLink>
          <NavLink to="/contact">
            <li>CONTACT</li>
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <img className="w-12 rounded-full" src={assets.profile_pic} />
              <img className="w-3" src={assets.dropdownIcon} />

              {/*  */}
              <div className="absolute top-0 right-0 pt-10 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100-rounded flex flex-col gap-4">
                  <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={()=>navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointment</p>
                  <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-black text-white px-8 py-3 rounded-3xl"
            >
              Create account
            </button>
          )}
        </div>
      </div>
      <hr className="h-0.5 bg-gray-300 border-none" />
    </div>
  );
}

export default Navigation;
