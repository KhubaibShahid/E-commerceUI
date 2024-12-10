"use client";

import Navbar from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import FILTER from "../assests/filter.svg";
import VIEW from "../assests/view.svg";
import SIZE from "../assests/size.svg";
import MODULARSOFA from "../assests/modular-sofa.png";
import DININGTABLE from "../assests/dining-table.png";
import BARTABLE from "../assests/bar-table.png";
import TEAKMIRROR from "../assests/teak-mirror.png";
import COFFEETABLE from "../assests/coffe-table.png";
import KENTTABLE from "../assests/kent-coffee-table.png";
import ROUNDTABLE from "../assests/round-coffee-table.png";
import TEAKTABLE from "../assests/teak-coffee-table.png";
import PLAINCONSOLE from "../assests/plain-console.png";
import SIDEBOARD from "../assests/teak-sideboard.png";
import CHAIRS from "../assests/chair-set.png";
import BELLACHAIR from "../assests/bella-chair.png";
import SQUARETABLE from "../assests/square-table.png";
import ASGARDSOFA from "../assests/asgard-sofa.png";
import MAYASOFA from "../assests/maya-sofa.png";
import OUTDOORSOFA from "../assests/outdoor-sofa.png";
import Banner from "../components/banner";
import Services from "../components/service";

const items = [
  {
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    img: MODULARSOFA,
  },
  {
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    img: DININGTABLE,
  },
  {
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    img: BARTABLE,
  },
  {
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    img: TEAKMIRROR,
  },
  {
    name: "Grain coffee table", //
    price: "Rs. 15,000.00",
    img: COFFEETABLE,
  },
  {
    name: "Kent coffee table",
    price: "Rs. 225,000.00",
    img: KENTTABLE,
  },
  {
    name: "Round Coffee table_color 2",
    price: "Rs. 251,000.00",
    img: ROUNDTABLE,
  },
  {
    name: "Reaclaimed teak coffee table",
    price: "Rs. 25,200.00",
    img: TEAKTABLE,
  },
  {
    name: "Plain console_",
    price: "Rs. 258,200.00",
    img: PLAINCONSOLE,
  },
  {
    name: "Reclaimed teak Sideboard",
    price: "Rs. 20,000.00",
    img: SIDEBOARD,
  },
  {
    name: "SJP_0825",
    price: "Rs. 200,000.00",
    img: CHAIRS,
  },
  {
    name: "Bella chair and table",
    price: "Rs. 100,000.00",
    img: BELLACHAIR,
  },
  {
    name: "Granite square side table",
    price: "Rs. 258,800.00",
    img: SQUARETABLE,
  },
  {
    name: "Asgard sofa",
    price: "Rs. 250,000.00",
    img: ASGARDSOFA,
  },
  {
    name: "Maya sofa three seater",
    price: "Rs. 115,000.00",
    img: MAYASOFA,
  },
  {
    name: "Outdoor sofa set",
    price: "Rs. 244,000.00",
    img: OUTDOORSOFA,
  },
];

export default function ShopApp() {
  return (
    <div className="main-shop mx-auto max-w-[1440px] font-[family-name:var(--mypoppins)]">
      <Navbar className=""></Navbar>
      <Banner location="Shop" heading="Shop"></Banner>

      {/* option */}

      <div className=" lg:h-[100px] bg-[#FAF4F4] w-full my-10">
        <div className="flex h-full lg:px-12 lg:items-center lg:justify-between lg:flex-row flex-col py-10 justify-center gap-5 items-center">
          <div className="flex flex-wrap gap-y-5 items-center justify-center">
            <div className="flex justify-around w-[200px] me-5">
              <div className="flex gap-3 items-center text-xs md:text-sm lg:text-lg poppins-thin">
                <Image src={FILTER} alt="filter"></Image>
                Filter
              </div>
              <Image src={VIEW} alt="filter"></Image>
              <Image src={SIZE} alt="filter"></Image>
            </div>
            <div className="border-l-[1.5px] border-black h-[33px] w-fit text-xs md:text-xs lg:text-lg poppins-thin flex items-center ps-6">
              Showing 1–16 of 32 results
            </div>
          </div>

          <div className="flex gap-5 flex-wrap justify-center">
            <div className="flex items-center gap-5 text-sm md:text-md lg:text-xl poppins-thin">
              <div className="">Show</div>
              <input
                value={16}
                type="number"
                className="w-12 h-12 text-[#9f9f9f] text-sm md:text-md lg:text-xl ps-[15px]"
              />
            </div>
            <div className="flex items-center gap-5 text-sm md:text-md lg:text-xl poppins-thin">
              <div>Short by</div>
              <input
                value={"Default"}
                type="text"
                className="w-40 h-12 text-[#9f9f9f] text-sm md:text-md lg:text-xl ps-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* /option */}

      {/* items */}

      <div className="items px-5">
        <div className="flex justify-evenly flex-wrap max-w-[1200px] mx-auto">
          {items.map((v, i) => (
            <div key={i} className="card flex flex-col w-[250px] ">
              <div className="h-[200px] self-center mb-6 flex items-center">
                <Image className="w-[200px]" src={v.img} alt=""></Image>
              </div>
              <div className="text-xs mb-4">{v.name}</div>
              <div className="text-xl inline-flex max-w-fit">{v.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-20">
        <div className="flex w-[400px] justify-around">
          <div className="bg-[#FBEBB5] rounded-lg py-4 px-6">1</div>
          <div className="bg-[#FFF9E5] rounded-lg py-4 px-6">2</div>
          <div className="bg-[#FFF9E5] rounded-lg py-4 px-6">3</div>
          <div className="bg-[#FFF9E5] rounded-lg py-4 px-6">Next</div>
        </div>
      </div>

      {/* /items */}

      <Services></Services>

      <Footer></Footer>
    </div>
  );
}
