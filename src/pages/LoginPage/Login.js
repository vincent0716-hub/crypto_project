import React, { useRef, useEffect } from "react";
import "./Login.css";
import Layout from "../../components/Layout";
import bg from "../../components/background2.jpg";
import bg1 from "../../components/bg1.jpg";
import bg2 from "../../components/bg2.png";
import bg3 from "../../components/bg3.png";
import bg4 from "../../components/NNbg4.png";
import { Helmet } from "react-helmet";
import Parallax from "parallax-js";
const Login = () => {
  const parallaxContainer = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(parallaxContainer.current);

    // Clean up the parallax instance when the component is unmounted
    return () => {
      parallaxInstance.destroy();
    };
  }, []);
  //let scene = document.getElementById("scene");
  //let parallax = new Parallax(scene);
  //const parallaxContainer = useRef(null);

  /*useEffect(() => {
    //const parallaxInstance = new Parallax(parallaxContainer.current);

    return () => {
      parallaxInstance.destroy();
    };
  }, []);*/
  return (
    <Layout>
      {/** */}{" "}
      <section className="w-screen h-screen sectionlogin relative  justify-center items-center overflow-hidden">
        <div className="absolute w-screen h-screen" ref={parallaxContainer}>
          {" "}
          <div data-depth-x="0.1" className="w-[125%]">
            <img
              id="scene"
              src={bg1}
              className="absolute object-cover object-center w-[130%] h-screen top-0 z-0"
            ></img>
          </div>
          <div data-depth="-0.2" className=" w-56 h-56">
            {" "}
            <img
              id="scene"
              src={bg3}
              className="absolute  top-5 left-36  z-10"
            ></img>
          </div>
          <div data-depth-x="-0.1" className=" w-full h-full">
            <img
              id="scene"
              src={bg4}
              className="absolute object-cover object-center w-[130%] h-screen top-0 z-0"
            ></img>
          </div>
        </div>
        <div className=" relative w-screen h-screen flex justify-center items-center ">
          <div className="login relative text-white p-[60px] flex w-[500px] flex-col gap-[30px] ">
            <h2 className="text-white text-[2.5em] w-full relative text-center mb-[10px]">
              Sign In
            </h2>
            <div>
              <input
                type="text"
                placeholder="UserName"
                className="relative w-full px-[15px] py-[20px] outline-none text-[1.25em] text-[#ffffff] rounded-[5px] inputbox"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="relative w-full px-[15px] py-[20px] outline-none text-[1.25em] text-[#ffffff] rounded-[5px] inputbox"
              ></input>
            </div>
            <div>
              <input
                type="submit"
                value="Login"
                className="relative w-full px-[15px] py-[20px] outline-none text-[1.25em] text-[#ffffff] rounded-[5px] inputbox loginbutton"
              ></input>
            </div>
            <div className="flex justify-between text-[1.25rem]">
              <a href="#">Forgot Password</a>
              <a href="#">Signup</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
