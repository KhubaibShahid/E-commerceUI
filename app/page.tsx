import Image from "next/image";
import Navbar from "./components/nav";
import SOFA from "./assests/sofa.png";
import SIDETABLE from "./assests/square-table.png";
import CLOUDSOFA from "./assests/cloud-sofa.png";
import MODULARSOFA from "./assests/modular-sofa.png";
import DININGTABLE from "./assests/dining-table.png";
import BARTABLE from "./assests/bar-table.png";
import TEAKMIRROR from "./assests/teak-mirror.png";
import ASGAARDSOFA from "./assests/asgard-sofa.png";
import CLOCK from "./assests/Group.svg";
import CALENDER from "./assests/calender.svg";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="home-container max-w-[1440px] mx-auto">
      {/* hero-section */}
      <Navbar className="bg-[#FBEBB5]"></Navbar>
      <div className="hero-section h-[85svh] max-h-[700px] bg-[#FBEBB5] w-[100%] flex lg:items-center justify-center">
        <div className="main-screen w-full flex md:flex-row md:gap-20 md:items-center md:justify-center lg:max-h-[900px] flex-col-reverse items-center justify-center">
          <div className="w-[50%] h-full flex items-center md:justify-end sm:justify-center">
            <div className="text-center md:text-start">
              <h2 className="text-[30px] md:text-[40px] text-black mb-10">
                Rocket Single <br className="md:block hidden" /> Seater
              </h2>
              <div className="text-[24px] underline-btn inline-flex">
                Shop Now
              </div>
            </div>
          </div>

          <div className="md:w-[60%] md:h-full lg:pt-0 xl:pt-0 lg:me-20 md:mt-32 lg:mt-0">
            <Image
              className="scale-x-[-1] w-[300px] md:w-[500px] xl:w-[500px]"
              alt="sofa"
              src={SOFA}
            ></Image>
          </div>
        </div>
      </div>

      {/* /hero-section */}

      {/* view-section */}

      <div className="view-section bg-[#F4F4F4] py-10">
        <div className="flex justify-evenly flex-wrap items-center gap-y-10">
          <div className="card flex flex-col ">
            <div className="md:h-[300px]">
              <Image
                className="md:w-[300px] w-[200px]"
                src={SIDETABLE}
                alt="side-table1"
              ></Image>
            </div>
            <div className="text-xl md:text-2xl mb-10">Side table</div>
            <div className="md:text-lg text-sm underline-btn inline-flex max-w-fit">
              View More
            </div>
          </div>
          <div className="card flex flex-col">
            <div className="md:h-[300px]">
              <Image
                className="md:w-[300px] w-[200px]"
                src={CLOUDSOFA}
                alt="side-table2"
              ></Image>
            </div>
            <div className=" text-xl md:text-2xl mb-10">Side table</div>
            <div className="md:text-lg text-sm underline-btn inline-flex max-w-fit">
              View More
            </div>
          </div>
        </div>
      </div>

      {/* /view-section */}

      {/* top-pics */}

      <div className="top-picks pb-10">
        <div>
          <div>
            <h2 className="text-4xl text-center mb-8 mt-12">
              Tops Picks For You
            </h2>
            <div className="text-[#9F9F9F] text-center">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </div>
          </div>
          <div className="mt-20 mx-10">
            <div className="flex justify-around flex-wrap">
              <div className="card flex flex-col w-[250px] ">
                <div className="h-[200px] self-center mb-6">
                  <Image className="w-[200px]" src={MODULARSOFA} alt=""></Image>
                </div>
                <div className="text-xs mb-4">Trenton modular sofa_3</div>
                <div className="text-xl inline-flex max-w-fit">
                  Rs. 25,000.00
                </div>
              </div>
              <div className="card flex flex-col w-[250px] ">
                <div className="h-[200px] self-center mb-6">
                  <Image
                    className="md:w-[300px]"
                    src={DININGTABLE}
                    alt=""
                  ></Image>
                </div>
                <div className="text-xs mb-4">Trenton modular sofa_3</div>
                <div className="text-xl inline-flex max-w-fit">
                  Rs. 25,000.00
                </div>
              </div>
              <div className="card flex flex-col w-[250px] ">
                <div className="h-[200px] self-center mb-6">
                  <Image className="md:w-[300px]" src={BARTABLE} alt=""></Image>
                </div>
                <div className="text-xs mb-4">Trenton modular sofa_3</div>
                <div className="text-xl inline-flex max-w-fit">
                  Rs. 25,000.00
                </div>
              </div>
              <div className="card flex flex-col w-[250px] ">
                <div className="h-[200px] self-center mb-6">
                  <Image
                    className="md:w-[300px]"
                    src={TEAKMIRROR}
                    alt=""
                  ></Image>
                </div>
                <div className="text-xs mb-4">Trenton modular sofa_3</div>
                <div className="text-xl inline-flex max-w-fit">
                  Rs. 25,000.00
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <div className="text-2xl underline-btn text-center inline-block">
                View More
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /top-pics */}

      {/* new-arrivals */}

      <div className="new-arrival bg-[#FFF9E5] md:h-[80svh] lg:h-[100svh] max-h-[700px] md:pb-0 py-10">
        <div className="flex items-center justify-center h-full">
          <div className="lg:w-[70%] md:w-[60%] hidden md:block">
            <Image
              className="w-full"
              alt="asgaard-sofa"
              src={ASGAARDSOFA}
            ></Image>
          </div>
          <div className="md:w-[30%]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl">New Arrivals</h2>
              <div className="lg:w-[70%] md:w-[60%] block md:hidden">
                <Image
                  className="w-full"
                  alt="asgaard-sofa"
                  src={ASGAARDSOFA}
                ></Image>
              </div>
              <h3 className="text-3xl md:text-3xl lg:text-[40px] font-black mb-12 mt-5">
                Asgaard Sofa
              </h3>
              <button className="btn md:text-sm lg:text-xl min-w-fit">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* /new-arrivals */}

      {/* our-blogs */}

      <div className="our-blogs pb-10">
        <div>
          <div>
            <h2 className="text-4xl text-center mb-8 mt-12">Our Blogs</h2>
            <div className="text-[#9F9F9F] text-center">
              Find a bright ideal to suit your taste with our great selection
            </div>
          </div>
          <div className="mt-20 mx-10">
            <div className="flex md:justify-around flex-wrap gap-10 justify-center">
              <div className="card text-center">
                <div className="box1 mb-6 sm:w-[350px] sm:h-[350px] w-[300px] h-[300px]"></div>

                <div className="text-[17px] mb-3">
                  Going all-in with millennial design
                </div>

                <div className="underline-btn text-xl inline-block mb-5">
                  Read More
                </div>

                <div className="flex text-sm justify-center gap-5">
                  <div className="font-light flex items-center gap-2 poppins-thin">
                    <Image alt="clock" src={CLOCK}></Image>5 min
                  </div>
                  <div className="font-light flex items-center gap-2 poppins-thin">
                    <Image alt="clock" src={CALENDER}></Image>
                    <span>
                      12<sup>th</sup>
                    </span>{" "}
                    Oct 2022
                  </div>
                </div>
              </div>
              <div className="card text-center">
                <div className="box2 mb-6 sm:w-[350px] sm:h-[350px] w-[300px] h-[300px]"></div>

                <div className="text-[17px] mb-3">
                  Going all-in with millennial design
                </div>

                <div className="underline-btn text-xl inline-block mb-5">
                  Read More
                </div>

                <div className="flex text-sm justify-center gap-5">
                  <div className="font-light flex items-center gap-2 poppins-thin">
                    <Image alt="clock" src={CLOCK}></Image>5 min
                  </div>
                  <div className="font-light flex items-center gap-2 poppins-thin">
                    <Image alt="clock" src={CALENDER}></Image>
                    <span>
                      12<sup>th</sup>
                    </span>{" "}
                    Oct 2022
                  </div>
                </div>
              </div>
              <div className="card text-center">
                <div className="box3 mb-6 sm:w-[350px] sm:h-[350px] w-[300px] h-[300px]"></div>
                <div className="text-[17px] mb-3">
                  Going all-in with millennial design
                </div>

                <div className="underline-btn text-xl inline-block mb-5">
                  Read More
                </div>

                <div className="flex text-sm justify-center gap-5">
                  <div className="font-light flex items-center gap-2 poppins-thin">
                    <Image alt="clock" src={CLOCK}></Image>5 min
                  </div>
                  <div className="font-light flex items-center gap-2 poppins-thin">
                    <Image alt="clock" src={CALENDER}></Image>
                    <span>
                      12<sup>th</sup>
                    </span>{" "}
                    Oct 2022
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <div className="text-lg underline-btn text-center inline-block">
                View All Post
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /our-blogs */}

      {/* instagram */}

      <div className="instagram w-full bg-insta h-[450px] relative">
        <div className="absolute top-0 left-0 opacity-80 bg-[#FAF4F4] w-full h-full z-[-10px]"></div>
        <div className="sticky top-0 z-[10px] h-full">
          <div className="flex justify-center flex-col items-center h-full">
            <h2 className="text-[57px] poppins-bold mb-0">Our Instagram</h2>
            <h3 className="text-xl poppins-thin mb-5">
              Follow our store on Instagram
            </h3>
            <button className="text-xl px-[70px] py-3 bg-[#fAf4f4] shadow-xl rounded-full poppins-thin">
              Follow Us
            </button>
          </div>
        </div>
      </div>

      {/* /instagram */}

      {/* footer */}

      <Footer></Footer>

      {/* /footer */}
    </div>
  );
}
