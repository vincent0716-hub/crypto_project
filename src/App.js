import logo from "./logo.svg";
import "./App.css";
import {
  FontAwesomeIcon,
  FaTwitter,
  FaDiscord,
  FaBars,
  FaFacebook,
  FaYoutube,
  FaWindowClose,
  FaWallet,
  FaPencilRuler,
  FaBolt,
  FaSatelliteDish,
  FaChessQueen,
  FaBoxes,
  FaAngleDown,
} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Home from "./pages/home";
import Login from "./pages/LoginPage/Login";
import { connectToDatabase } from "./db";
import crypto1 from "./components/crypto1.png";
import crypto2 from "./components/crypto2.png";
import box1 from "./components/box1.png";
import box2 from "./components/box2.png";
import choose from "./components/choose.png";
import { Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [post, setPost] = useState([]);
  const Home = useRef(null);
  const Market = useRef(null);
  const ChooseUs = useRef(null);
  const Join = useRef(null);
  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  function closeDropdown() {
    if (isDropdownOpen) {
      document.querySelector(".popup")?.classList.add("slide-out");
      setTimeout(() => setIsDropdownOpen(false), 300);
    } else {
      setIsDropdownOpen(true);
    }
  }
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  {
    /** useEffect(() => {
    const word = async () => {
      try {
        const reponse = await fetch(
          "https://ielabflow1.gamania.com/iWorkflow2.API-1020/api/HR_IntraCompanyTransfer/ConvertHtmlToPdf",
          {
            method: "GET",
          }
        );
        const data = await reponse.json();
        console.log("dataWORD", data);
        console.log("dataWORDbaseBB", data.baseBB);
        const base64Data = data.baseBB;
        const base64Data2 = data.baseDD;
        console.log("baseBB", base64Data);
        const decodedData = atob(base64Data);
        const decodedData2 = atob(base64Data2);
        // Step 2: Convert the decoded data to a Uint8Array
        const uint8Array = new Uint8Array(decodedData2.length);
        console.log("uint8Array", uint8Array);
        for (let i = 0; i < decodedData2.length; ++i) {
          uint8Array[i] = decodedData2.charCodeAt(i);
        }
        const blob = new Blob([uint8Array], { type: "application/pdf" }); // Adjust the MIME type accordingly
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      } catch (error) {
        console.log("erroWORD", error);
      }
    };
    word();*/
  }

  const caculation = (number) => {
    number = number.toFixed(2);
    return number;
  };
  const crypto4data = [post[0], post[1], post[2], post[3]];
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  } else {
    console.log("You are on the server,Cannot execute");
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log("api get", res);
        setPost(res.data);
        console.log("post", post);
        console.log("post000", post[0]);
        console.log("crypto4data", crypto4data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsLoading(true); // Set loading state to true if an error occurs
      });
  }, []);
  const handlehome = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleMarket = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleChoose = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleJoin = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleHomeM = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector(".popup")?.classList.add("slide-out");
    setTimeout(() => setIsDropdownOpen(false), 300);
  };
  const handleMarketM = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector(".popup")?.classList.add("slide-out");
    setTimeout(() => setIsDropdownOpen(false), 300);
  };
  const handleChooseM = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector(".popup")?.classList.add("slide-out");
    setTimeout(() => setIsDropdownOpen(false), 300);
  };
  const handleJoinM = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector(".popup")?.classList.add("slide-out");
    setTimeout(() => setIsDropdownOpen(false), 300);
  };
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [color, setcolor] = useState(false);
  const changeColor = () => {
    setcolor(true);
    if (color == true) setcolor(false);
  };
  ///////database connection

  ///////database connection

  /// git add . -> git status -> git commit -m "xxx" -> git push crypto
  return (
    <div className="App bg-[#0f051d] h-screen w-screen">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <nav
                className={
                  navbar
                    ? "fixed bg-[black] text-[#f3f2f4] w-full z-[9999]"
                    : "fixed w-full bg-[transparent] text-[#f3f2f4] z-[9999]"
                }
              >
                <div
                  className="flex text-[20px] items-center justify-between
        m-0 max-w-[100%] p-7
        font-Grotesk
        "
                >
                  <Link to="/">
                    <a className="text-[2rem] cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all">
                      COINDOM
                    </a>
                  </Link>
                  <ul className="flex gap-[3rem]  max-[750px]:hidden font-extrabold  font-GroteskEB">
                    <li>
                      <Link to="/">
                        <a className="cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all">
                          Home
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => scrollToSection(Market)}
                        className="cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all"
                      >
                        Market
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => scrollToSection(ChooseUs)}
                        className="cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all"
                      >
                        Choose Us
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => scrollToSection(Join)}
                        className="cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all"
                      >
                        Join
                      </a>
                    </li>
                  </ul>

                  <span className="flex gap-[1rem] text-[24px]  justify-center items-center relative">
                    <div
                      className={
                        color
                          ? "max-[425px]:hidden absolute -left-24 w-12 h-6 bg-gradient-to-tr from-[#0f051d] to-[#130749] rounded-xl overflow-hidden  shadow-lg border-[1px] border-white"
                          : "max-[425px]:hidden absolute -left-24 w-12 h-6 bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-xl overflow-hidden  shadow-lg border-[1px] border-black"
                      }
                    >
                      <div
                        onClick={changeColor}
                        className={
                          color
                            ? " hidden"
                            : " rounded-full h-5 w-5 bg-white absolute right-0 cursor-pointer shadow-lg"
                        }
                      ></div>
                      <div
                        onClick={changeColor}
                        className={
                          color
                            ? " rounded-full h-5 w-5 bg-white absolute left-0 cursor-pointer shadow-lg "
                            : " hidden"
                        }
                      ></div>
                    </div>
                    <Link eventKey="link-2" to="/login">
                      <a className=" text-[20px] cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] hover:text-transparent hover:transition-all">
                        Login
                      </a>
                    </Link>
                    <FaTwitter
                      className="cursor-pointer max-[750px]:hidden"
                      onMouseEnter={() => setIsHovered2(true)}
                      onMouseLeave={() => setIsHovered2(false)}
                      style={{
                        color: isHovered2 ? "#ff00ea" : "",
                        transition: "color 0.5s ease",
                      }}
                    ></FaTwitter>
                    <FaDiscord
                      className="cursor-pointer max-[750px]:hidden"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      style={{
                        color: isHovered ? "#ff00ea" : "",
                        transition: "color 0.5s ease",
                      }}
                    ></FaDiscord>
                    <FaBars
                      onClick={toggleDropdown}
                      className="min-[750px]:hidden cursor-pointer"
                    ></FaBars>
                  </span>
                </div>
              </nav>
              {isDropdownOpen && (
                <div
                  className={
                    isDropdownOpen
                      ? " popup fixed z-[999999] h-screen  w-screen top-0 left-0 bg-[#f3f2f4]"
                      : "popupclose"
                  }
                >
                  <GrClose
                    onClick={closeDropdown}
                    className="absolute right-[30px] top-10 w-6 h-6"
                  ></GrClose>
                  <div className="w-full h-full font-semibold text-[24px] text-black font-Grotesk flex justify-center items-center">
                    <div className="w-full  bg-[] cursor-pointer flex justify-center items-center flex-col">
                      <h1
                        onClick={() => handleHomeM("section1")}
                        className="mt-12 "
                      >
                        HOME
                      </h1>
                      <h1
                        onClick={() => handleMarketM("section2")}
                        className="mt-12"
                      >
                        MARKET
                      </h1>
                      <h1
                        onClick={() => handleChooseM("sectionM3")}
                        className="mt-12"
                      >
                        CHOOSE US
                      </h1>
                      <h1
                        onClick={() => handleJoinM("section5")}
                        className="mt-12"
                      >
                        JOIN
                      </h1>
                      <div
                        className={
                          color
                            ? "my-12 relative  w-12 h-6 bg-gradient-to-tr from-[#0f051d] to-[#130749] rounded-xl overflow-hidden  shadow-lg border-[1px] border-white"
                            : "my-12 relative  w-12 h-6 bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-xl overflow-hidden  shadow-lg border-[1px] border-black"
                        }
                      >
                        <div
                          onClick={changeColor}
                          className={
                            color
                              ? " hidden"
                              : " rounded-full h-5 w-5 bg-white absolute right-0 cursor-pointer shadow-lg"
                          }
                        ></div>
                        <div
                          onClick={changeColor}
                          className={
                            color
                              ? " rounded-full h-5 w-5 bg-white absolute left-0 cursor-pointer shadow-lg "
                              : " hidden"
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/**from-[#0f051d] to-[#130749] */}
              <section
                ref={Home}
                className={
                  color
                    ? "bg-gradient-to-t from-[#0f051d] to-[#130749] w-full h-[100vh] "
                    : "bg-gradient-to-t from-[#b231d9] to-[#7136c3] w-full h-[100vh] "
                }
              >
                <div className="container_home w-[100%] absolute">
                  <div className=" relative items-center top-52 ">
                    <img
                      src={crypto1}
                      className="max-[750px]:hidden animate-bounce absolute w-[8%] left-24"
                    ></img>
                    <h1 className="text-white text-[105px] font-Grotesk m-0 p-0 min-[375px]:px-[10%] min-[32px]:text-4xl min-[375px]:text-5xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
                      TRACK AND TRADE
                      <br></br>
                      <span className="bg-clip-text bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] text-transparent transition-all">
                        {" "}
                        CRYPTO CURRENCIES
                      </span>
                    </h1>
                    <img
                      src={crypto2}
                      className="max-[750px]:hidden animate-bounce absolute right-24 w-[8%] top-0"
                    ></img>
                    <button
                      onClick={() => handleMarket("section2")}
                      className="min-[769px]:hidden text-[20px] font-Grotesk rounded-[100px] max-[320px]:px-12 px-20 py-4 mt-12 bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] text-white "
                    >
                      <div className="flex">
                        {" "}
                        SEE PRICES{" "}
                        <FaAngleDown className="mt-1 ml-2 animate-bounce"></FaAngleDown>
                      </div>
                    </button>
                  </div>

                  {isLoading ? (
                    <div className="loader top-32"></div>
                  ) : (
                    <div className="max-[600px]:hidden max-[750px]:gap-[50%] max-[750px]:px-48 max-w-5xl mt-72 px-12 mx-auto  items-center justify-between text-white  flex max-[750px]:grid max-[750px]:grid-cols-2">
                      {crypto4data.map((CryptoSource) => (
                        <a className="w-[10%] max-[750px]:w-[100%] font-Grotesk items-center justify-center">
                          <img
                            src={CryptoSource.image}
                            className=" m-0 p-0 "
                          ></img>
                          <p className="">
                            {CryptoSource.name}
                            <span
                              className={
                                CryptoSource.market_cap_change_percentage_24h >
                                0
                                  ? "text-[#09e509] p-1 w-[50px]"
                                  : "text-[red] p-1 w-[50px]"
                              }
                            >
                              {caculation(
                                CryptoSource.market_cap_change_percentage_24h
                              )}
                              %
                            </span>
                            <br></br>${CryptoSource.current_price}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </section>
              {/**from-[#0f051d] to-[#130749] */}
              <section
                ref={Market}
                className={
                  color
                    ? "h-screen w-screen from-[#0f051d] to-[#130749] bg-gradient-to-b"
                    : "h-screen w-screen from-[#b231d9] to-[#7136c3] bg-gradient-to-b"
                }
              >
                <div className="bg-[] h-full w-full flex justify-center items-center">
                  <div className="h-[80%] w-[80%] bg-[] overflow-scroll container max-[426px]:hidden">
                    <h1 className="text-white font-extrabold  font-GroteskEB text-[32px] text-left">
                      Market Update
                    </h1>
                    <div className=" relative mt-6 w-full h-12 bg-gradient-to-r from-[#2600fc] to-[#ff00ea] justify-center items-center text-white  flex font-extrabold  font-GroteskEB">
                      <h1 className="text-left absolute left-6">Coin</h1>
                      <h1 className="text-left absolute left-[40%]">Price</h1>
                      <h1 className="text-left absolute right-[30%]">
                        24h Change
                      </h1>
                      <h1 className="text-left absolute right-6">Market Cap</h1>
                    </div>
                    {isLoading ? (
                      <div className="loader mt-48"></div>
                    ) : (
                      <div>
                        {post.map((CryptoSource) => (
                          <div className="my-4 font-semibold flex border-b border-white relative  w-full h-12 justify-center items-center text-white ">
                            <img
                              src={CryptoSource.image}
                              className="text-left absolute left-6 w-[2%] m-0 p-0 "
                            ></img>
                            <p className="text-left absolute left-16">
                              {CryptoSource.name}
                            </p>
                            <p className="text-left absolute left-[40%]">
                              ${CryptoSource.high_24h}
                            </p>
                            <span
                              className={
                                CryptoSource.market_cap_change_percentage_24h >
                                0
                                  ? "text-[#09e509] p-1 w-[50px] text-left absolute right-[30%] "
                                  : "text-[red] p-1 text-left absolute right-[30%] w-[55px]"
                              }
                            >
                              {caculation(
                                CryptoSource.market_cap_change_percentage_24h
                              )}
                              %
                            </span>
                            <p className="text-left absolute right-6">
                              $ {CryptoSource.market_cap}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="h-[80%] w-[80%] bg-[] overflow-scroll container min-[426px]:hidden">
                    <h1 className="text-white font-extrabold  font-GroteskEB text-[32px] text-left">
                      Market Update
                    </h1>
                    <div className=" relative mt-6 w-full h-12 bg-gradient-to-r from-[#2600fc] to-[#ff00ea] justify-center items-center text-white  flex font-extrabold  font-GroteskEB">
                      <h1 className="text-left absolute left-6">Coin</h1>
                      <h1 className="text-left absolute right-10">Price</h1>
                    </div>
                    {isLoading ? (
                      <div className="loader mt-48"></div>
                    ) : (
                      <div>
                        {post.map((CryptoSource) => (
                          <div className="my-4 font-semibold flex border-b border-white relative  w-full h-12 justify-center items-center text-white ">
                            {" "}
                            <img
                              src={CryptoSource.image}
                              className="text-left absolute left-6 w-[8%] m-0 p-0 "
                            ></img>
                            <p className="text-left absolute left-16">
                              {CryptoSource.name}
                            </p>
                            <span
                              className={
                                CryptoSource.market_cap_change_percentage_24h >
                                0
                                  ? "text-[#09e509] p-1 w-[50px] text-left absolute right-[10%] "
                                  : "text-[red] p-1 text-left absolute right-[10%] w-[55px]"
                              }
                            >
                              {caculation(
                                CryptoSource.market_cap_change_percentage_24h
                              )}
                              %
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </section>
              {/**from-[#0f051d] to-[#130749] */}
              <section
                ref={ChooseUs}
                className={
                  color
                    ? "min-[1024px]:h-screen w-screen from-[#0f051d] to-[#130749] bg-gradient-to-t"
                    : "min-[1024px]:h-screen w-screen from-[#b231d9] to-[#7136c3] bg-gradient-to-t"
                }
              >
                <div className="w-full h-full">
                  <div className="font-Grotesk w-full h-[15%] bg-[] flex justify-center items-center text-white text-[70px] text-center max-[320px]:text-[30px] max-[320px]:mb-24">
                    <h1>
                      WHY{" "}
                      <span className="bg-clip-text bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] text-transparent transition-all">
                        CHOOSE US
                      </span>
                    </h1>
                  </div>
                  <div className="w-full h-[85%] flex bg-[]  justify-center items-center max-[1023px]:hidden">
                    <div className="w-[80%] h-full bg-yellow flex">
                      <div className="w-[32%] h-full bg-[] ">
                        <div className="bg-[#232136] mb-6 min-w-[330px] w-full h-1/3 rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex p-8">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaWallet className="w-8 h-8 "></FaWallet>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                CONNECT YOUE WALLET
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Use Trust Wallet, Metamask or to connect to the
                                app.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#232136] mb-6 min-w-[330px] w-full h-1/3 rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex p-8">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaPencilRuler className="w-8 h-8 "></FaPencilRuler>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                SELECT YOUR QUANTITY
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Upload your crypto and set a title, description
                                and price.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#232136] min-w-[330px] w-full h-1/3 rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex p-8">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaBolt className="w-8 h-8 "></FaBolt>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                CONFIRM TRANSACTION
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Earn by selling your crypto on our marketplace.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[32%] h-full bg-[] flex justify-center items-center">
                        <img src={choose} className=" w-[100%]"></img>
                      </div>
                      <div className="w-[35%] h-full bg-[]">
                        <div className="bg-[#232136] mb-6 min-w-[330px] w-full h-1/3 rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex p-8">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaSatelliteDish className="w-8 h-8 "></FaSatelliteDish>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                RECEIVE YOUR OWN NFTS
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Invest all your crypto at one place on one
                                platform.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#232136] mb-6 min-w-[330px] w-full h-1/3 rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex p-8">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaChessQueen className="w-8 h-8 "></FaChessQueen>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                TAKE A MARKET TO SELL
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Discover, collect the right crypto collections
                                to buy or sell.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#232136] min-w-[330px] w-full h-1/3 rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex p-8">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaBoxes className="w-8 h-8 "></FaBoxes>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                DRIVE YOUR COLLECTION
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                We make it easy to Discover, Invest and manage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-full flex bg-[]  justify-center items-center min-[1024px]:hidden">
                    <div className="w-[80%] h-full bg-yellow  ">
                      <div className="w-full h-full bg-[] ">
                        <div className="bg-[#232136] mb-6  w-full  rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex  pt-8 pl-8 pb-8 max-[321px]:hidden">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaWallet className="w-8 h-8 "></FaWallet>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                CONNECT YOUE WALLET
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Use Trust Wallet, Metamask or to connect to the
                                app.
                              </p>
                            </div>
                          </div>
                          <div className="  min-[321px]:hidden  justify-center items-center flex">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4 ">
                                <FaWallet className="w-8 h-8 "></FaWallet>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px] max-[320px]:text-[16px]">
                                CONNECT YOUE WALLET
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-2 max-[320px]:text-[12px]">
                                Use Trust Wallet, Metamask or to connect to the
                                app.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#232136] mb-6  w-full rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex  pt-8 pl-8 pb-8 max-[321px]:hidden">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaPencilRuler className="w-8 h-8 "></FaPencilRuler>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                SELECT YOUR QUANTITY
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Upload your crypto and set a title, description
                                and price.
                              </p>
                            </div>
                          </div>
                          <div className="  min-[321px]:hidden  justify-center items-center flex">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4 ">
                                <FaPencilRuler className="w-8 h-8 "></FaPencilRuler>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px] max-[320px]:text-[16px]">
                                SELECT YOUR QUANTITY
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-2 max-[320px]:text-[12px]">
                                Upload your crypto and set a title, description
                                and price.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#232136] mb-6  w-full rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex pt-8 pl-8 pb-8 max-[321px]:hidden">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaBolt className="w-8 h-8 "></FaBolt>
                              </div>
                            </div>
                            <div className=" h-full pl-6  font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                CONFIRM TRANSACTION
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Earn by selling your crypto on our marketplace.
                              </p>
                            </div>
                          </div>
                          <div className="  min-[321px]:hidden  justify-center items-center flex">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4 ">
                                <FaBolt className="w-8 h-8 "></FaBolt>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center max-[320px]:text-[16px] ">
                              <h4 className="text-[25px] max-[320px]:text-[16px]">
                                CONFIRM TRANSACTION
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-2 max-[320px]:text-[12px]">
                                Earn by selling your crypto on our marketplace.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#232136] mb-6 w-full  rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex  pt-8 pl-8 pb-8 max-[321px]:hidden">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaSatelliteDish className="w-8 h-8 "></FaSatelliteDish>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                RECEIVE YOUR OWN NFTS
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Invest all your crypto at one place on one
                                platform.
                              </p>
                            </div>
                          </div>
                          <div className="  min-[321px]:hidden  justify-center items-center flex">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4 ">
                                <FaSatelliteDish className="w-8 h-8 "></FaSatelliteDish>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px] max-[320px]:text-[16px]">
                                RECEIVE YOUR OWN NFTS
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-2 max-[320px]:text-[12px]">
                                Invest all your crypto at one place on one
                                platform.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#232136] mb-6   w-full rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex  pt-8 pl-8 pb-8 max-[321px]:hidden">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaChessQueen className="w-8 h-8 "></FaChessQueen>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                TAKE A MARKET TO SELL
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                Discover, collect the right crypto collections
                                to buy or sell.
                              </p>
                            </div>
                          </div>
                          <div className="  min-[321px]:hidden  justify-center items-center flex">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4 ">
                                <FaChessQueen className="w-8 h-8 "></FaChessQueen>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px] max-[320px]:text-[16px]">
                                TAKE A MARKET TO SELL
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-2 max-[320px]:text-[12px]">
                                Discover, collect the right crypto collections
                                to buy or sell.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#232136] mb-6   w-full  rounded-[20px] border-2 border-[#393844] flex">
                          <div className="flex  pt-8 pl-8 pb-8 max-[321px]:hidden">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4">
                                <FaBoxes className="w-8 h-8 "></FaBoxes>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px]">
                                DRIVE YOUR COLLECTION
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-4">
                                We make it easy to Discover, Invest and manage.
                              </p>
                            </div>
                          </div>

                          <div className="  min-[321px]:hidden  justify-center items-center flex">
                            <div className="h-full ">
                              <div className="text-white bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] rounded-[20px] p-4 ">
                                <FaBoxes className="w-8 h-8 "></FaBoxes>
                              </div>
                            </div>
                            <div className=" h-full pl-6 font-GroteskEB text-white text-left justify-center items-center ">
                              <h4 className="text-[25px] max-[320px]:text-[16px]">
                                DRIVE YOUR COLLECTION
                              </h4>
                              <p className="text-[18px] text-[#e7e6e8] mt-2 max-[320px]:text-[12px]">
                                We make it easy to Discover, Invest and manage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[35%] h-full bg-[]"></div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                ref={Join}
                className={
                  color
                    ? "h-screen w-screen from-[#0f051d] to-[#130749] bg-gradient-to-b"
                    : "h-screen w-screen from-[#b231d9] to-[#7136c3] bg-gradient-to-b"
                }
              >
                <div className=" relative items-center top-52 ">
                  <img
                    src={crypto1}
                    className="max-[750px]:hidden animate-bounce absolute w-[8%] left-[300px]"
                  ></img>
                  <h1 className="text-white text-[105px] font-Grotesk m-0 p-0  min-[25px]:px-[10%] min-[250px]:text-4xl min-[375px]:px-[10%] min-[375px]:text-5xl min-[320px]:px-[10%] min-[320px]:text-4xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
                    JOIN US VIA
                    <br></br>
                    <span className="bg-clip-text bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] text-transparent transition-all">
                      {" "}
                      DISCORD
                    </span>
                  </h1>
                  <p className="text-[22px] text-white mt-4 font-Grotesk mx-12">
                    Invest and manage all your crypto at one place
                  </p>
                  <img
                    src={crypto2}
                    className="max-[750px]:hidden animate-bounce absolute right-[300px] w-[8%] top-0"
                  ></img>
                  <a href="https://discord.com/">
                    <button className="text-[20px] font-Grotesk rounded-[100px] px-12 py-4 mt-24 bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] text-white ">
                      Join Via Discord
                    </button>
                  </a>
                </div>
              </section>
              <footer
                className={
                  color
                    ? "h-screen w-screen from-[#130749] to-[#0f051d] bg-gradient-to-b"
                    : "h-[100vm] flex w-screen bg-gradient-to-t from-[#b231d9] to-[#7136c3]  "
                }
              >
                <img src={box1} className="relative left-0  w-[20%]"></img>
                <div className="w-full bg-[]  flex items-center justify-center">
                  {" "}
                  <div className="relative ">
                    {" "}
                    <div className="w-full  bg-[] flex items-center justify-center text-white gap-6">
                      <FaTwitter
                        className="w-10 h-10 cursor-pointer max-[750px]:w-5 max-[750px]:h-5"
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                        style={{
                          color: isHovered3 ? "#ff00ea" : "",
                          transition: "color 0.5s ease",
                        }}
                      ></FaTwitter>
                      <FaDiscord
                        className="w-10 h-10 cursor-pointer max-[750px]:w-5 max-[750px]:h-5"
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}
                        style={{
                          color: isHovered4 ? "#ff00ea" : "",
                          transition: "color 0.5s ease",
                        }}
                      ></FaDiscord>
                      <FaFacebook
                        className="w-10 h-10 cursor-pointer max-[750px]:w-5 max-[750px]:h-5"
                        onMouseEnter={() => setIsHovered5(true)}
                        onMouseLeave={() => setIsHovered5(false)}
                        style={{
                          color: isHovered5 ? "#ff00ea" : "",
                          transition: "color 0.5s ease",
                        }}
                      ></FaFacebook>
                      <FaYoutube
                        className="w-10 h-10 cursor-pointer max-[750px]:w-5 max-[750px]:h-5"
                        onMouseEnter={() => setIsHovered6(true)}
                        onMouseLeave={() => setIsHovered6(false)}
                        style={{
                          color: isHovered6 ? "#ff00ea" : "",
                          transition: "color 0.5s ease",
                        }}
                      ></FaYoutube>
                    </div>
                    <div className="w-full bg-[] mt-4 max-[750px]:text-[12px]">
                      <h1 className="cursor-pointer text-white font-Grotesk">
                        Privacy{" "}
                        <span className="ml-12 cursor-pointer">
                          {" "}
                          Terms of Use
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                <img src={box2} className="relative right-0  w-[20%] "></img>
              </footer>{" "}
            </div>
          }
        />

        <Route path="/login" Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
