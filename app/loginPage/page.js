"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  faEye,
  faEyeSlash,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ColorProvider, useColor } from "@/ColorContext";

const Loginpage = () => {
  const { color } = useColor(); // Get the selected color from context
  const { colorSecond } = useColor(); // Get the selected color from context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://vehicle-weight-backend.vercel.app/api/proxyLogin/login",
        { username, password }
      );
      const token = response.data.token;

      localStorage.setItem("ProxyAdminAuthToken", token);
      setMessage("Login successful");
      router.push("/mainPage");
    } catch (error) {
      router.push("/mainPage");

      setMessage("Authentication failed");
    }
  };

  useEffect(() => {
    localStorage.removeItem("ProxyAdminAuthToken");
  }, []);

  const closeLogin = () => {
    localStorage.removeItem("AdminAuthToken");
    localStorage.removeItem("EmployeeAuthToken");
    router.push("/adminLogin");
  };

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center   "
        style={{ backgroundColor: "#000000" }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="max-w-md w-full px-6 ">
            <div className="flex flex-col items-center justify-center h-full">
              <p
                className="text-3xl font-sans mb-4 font-bold bg-gradient-to-r text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to right, ${color},  ${colorSecond})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                BOOMERANG
              </p>
            </div>

            <div
              className="flex border-[#00f5001c] bg-gradient-to-b from-[rgb(20,32,51)] to-black rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm relative"
              style={{
                borderWidth: "1px",
                borderColor: `linear-gradient(to right, ${colorSecond}, ${color})`,
              }}
            >
              <div className="w-full p-3 lg:w-96 border-solid ">
                <div>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={closeLogin}
                    className="cursor-pointer absolute right-2 top-2"
                    style={{ color }}
                  />
                </div>

                <div className="mt-4 relative">
                  <label className="block  pt-3  text-white text-sm md:text-base font-light mb-2 ">
                    Username
                  </label>
                  <input
                    className="bg-gray-200  focus:outline-none focus:shadow-outline border rounded py-1 px-4 block w-full appearance-none pr-10 text-sm md:text-base"
                    style={{ borderColor: colorSecond }}
                    type="text"
                    value={username}
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 mt-11">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="cursor-pointer"
                      style={{ color: colorSecond }}
                    />
                  </div>
                </div>

                <div className="mt-4 relative">
                  <label className="block  text-sm md:text-base font-light mb-2 text-white">
                    Password
                  </label>
                  <input
                    className="bg-gray-200  focus:outline-none focus:shadow-outline border rounded py-1 px-4 block w-full appearance-none pr-10 text-sm md:text-base"
                    style={{ borderColor: colorSecond }}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 mt-8">
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ color: colorSecond }}
                    />
                  </div>
                </div>
                <div className="mb-4 flex justify-end">
                  <Link
                    href="/forgotPassword"
                    className="text-sm md:text-sm mr-2"
                    style={{ colorSecond }}
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="flex justify-center mt-0">
                  <button
                    className="font-bold py-2 rounded-md text-sm px-5 w-full"
                    style={{
                      backgroundColor: colorSecond,
                      color: "white",
                    }}
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
                <p className="justify-center flex mt-3 text-white">
                Or{" "}
                <Link
                  href="/signUpPage"
                  className="ml-1"
                  style={{
                    color: color,
                    borderBottomColor: color,
                    borderBottomWidth: "1px", // Only apply bottom border
                    borderStyle: "solid", // Ensure the border is solid
                  }}
                >
                  SignUp
                </Link>{" "}
              </p>
              

                {message && <p className="mt-4 text-red-500">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
