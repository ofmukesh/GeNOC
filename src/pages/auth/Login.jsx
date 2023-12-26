import React, { useEffect } from "react";
import LogoImage from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import authSignIn from "../../api/auth/authSignIn";
import AuthToken from "../../api/auth/authToken";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthToken()) {
      return navigate("/");
    }
  }, [navigate]);

  function handleSingIn(e) {
    e.preventDefault();
    authSignIn().then(() => {
      return navigate("/");
    });
  }
  return (
    <>
      <section className="bg-gray-50 min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img className="w-8 h-8 mr-2" src={LogoImage} alt="logo" />
            {process.env.REACT_APP_NAME}
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1> */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSingIn}>
                <div>
                  <label
                    htmlFor="reg_no"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Reg no.
                  </label>
                  <input
                    type="number"
                    name="reg_no"
                    id="reg_no"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="0123456789"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-900  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Do you having any issue?{" "}
                  <Link
                    className="text-blue-800 font-bold underline"
                    to="/contact-us"
                  >
                    Contact us
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
