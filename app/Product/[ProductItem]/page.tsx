"use client";

import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from "next/image";
import ASGARD from "../../assests/asgard-sofa.png";
import ASGARD2 from "../../assests/outdoor-sofa.png";
import ASGARD3 from "../../assests/bella-chair.png";
import ASGARD4 from "../../assests/cloud-sofa.png";
import ASGARD5 from "../../assests/kent-coffee-table.png";
import Rating from "../../components/rating";
import Link from "next/link";
import { RiLinkedinBoxFill as Li } from "react-icons/ri";
import { AiFillTwitterCircle as Tw } from "react-icons/ai";
import { RiFacebookCircleFill as Fb } from "react-icons/ri";
import { BsHeart as Heart } from "react-icons/bs";
import { BsHeartFill as HeartFill } from "react-icons/bs";
import { useState } from "react";
import SOFA1 from "../../assests/big-sofa1.png";
import SOFA2 from "../../assests/big-sofa2.png";
import MODULARSOFA from "../../assests/modular-sofa.png";
import DININGTABLE from "../../assests/dining-table.png";
import BARTABLE from "../../assests/bar-table.png";
import TEAKMIRROR from "../../assests/teak-mirror.png";
import SideCart from "@/app/components/sidecart";

export default function ProductApp() {


  const [quantity, setQuantity] = useState<number>(1);

  const [favourite, setFavourite] = useState<boolean>(false);

  const [size, setSize] = useState<"XL" | "L" | "XS">("XL");

  const [cart, setCart] = useState<boolean>(false);

  function changeFavourite() {
    if(favourite) {
      setFavourite(false);
    } else {
      setFavourite(true);
    }
  }

  function openCart() {
    setCart(true);
  }

  function changeSize(val: "XL" | "L" | "XS") {
    setSize(val);
  }

  function inc() {
    let num = quantity;

    setQuantity(++num);
  }

  function dec() {
    let num = quantity;
    if (num >= 2) {
      setQuantity(--num);
    }
  }

  return (
    <div className="product-main font-[family-name:var(--mypoppins)] relative max-w-[1440px] mx-auto">
      <SideCart val={{cart, setCart}}></SideCart>
      <Navbar className=""></Navbar>
      <div className="">
        <div className="sm:mx-20 mx-2 my-10">
          <div className="flex items-center h-10 gap-5 text-xl">
            <div className="text-[#9f9f9f] text-sm">
              <Link href={"/"}>Home</Link>
            </div>{" "}
            &gt;{" "}
            <div className="text-[#9f9f9f] text-sm">
              <Link href={"/Shop"}>Shop</Link>
            </div>{" "}
            &gt;{" "}
            <div className="border-l ps-10 border-black h-full flex items-center text-sm">
              Asgaard sofa
            </div>
          </div>
        </div>


        <div className="flex xl:gap-20 gap-10 w-full md:flex-row flex-col ">
          <div className="flex gap-10 xl:flex-row flex-col-reverse xl:ps-0 md:self-start xl:self-auto px-3 md:ps-10 md:w-1/2">
            <div className="flex xl:flex-col flex-row xl:ps-20 gap-10">
              <div className="bg-[#FFF9E5] w-[70px] flex items-center max-h-[70px] rounded-lg">
                <Image
                  src={ASGARD2}
                  alt="asgaard"
                  className="object-cover"
                ></Image>
              </div>
              <div className="bg-[#FFF9E5] w-[70px] flex items-center max-h-[70x] rounded-lg">
                <Image
                  src={ASGARD3}
                  alt="asgaard"
                  className="object-cover"
                ></Image>
              </div>
              <div className="bg-[#FFF9E5] w-[70px] max-h-[70px] flex items-center rounded-lg">
                <Image
                  src={ASGARD4}
                  alt="asgaard"
                  className="object-cover w-[60px]"
                ></Image>
              </div>
              <div className="bg-[#FFF9E5] w-[70px] flex items-center max-h-[70px] rounded-lg">
                <Image
                  src={ASGARD5}
                  alt="asgaard"
                  className="object-cover"
                ></Image>
              </div>
            </div>
            <div className="bg-[#FFF9E5] md:max-w-[400px] max-h-[430px] flex items-center rounded-xl">
              <Image
                className="w-full h-auto object-cover"
                src={ASGARD}
                alt="asgaard"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:w-1/2 px-5">
            <div className="poppins-thin">
              <h2 className="text-3xl w-fit xl:text-4xl">Asgaard sofa</h2>
            </div>
            <div>
              <h3 className="text-[#9f9f9f] text-xl">Rs. 250,000.00</h3>
            </div>
            <div className="h-[30px] flex items-center">
              <div className="pe-5">
                <Rating></Rating>
              </div>
              <div className="border-l h-full border-l-black text-xs text-[#9f9f9f] poppins-thin flex items-center ps-5">
                5 Customer Reviews
              </div>
            </div>
            <div>
              <p className="text-[12px]  md:max-w-[400px]">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
            </div>
            <div className="mb-2">
              <div className="text-[13px] mb-2 text-[#9f9f9f]">Size</div>
              <div className="flex gap-3">
                <div
                  onClick={() => {
                    changeSize("XL");
                  }}
                  className={`w-7 h-7 text-xs cursor-pointer flex justify-center items-center ${
                    size === "XL" ? `bg-[#FBEBB5]` : `bg-[#FAF4F4]`
                  } rounded-sm`}
                >
                  XL
                </div>
                <div
                  onClick={() => {
                    changeSize("L");
                  }}
                  className={`w-7 h-7 text-xs flex cursor-pointer justify-center items-center ${
                    size === "L" ? `bg-[#FBEBB5]` : `bg-[#FAF4F4]`
                  } rounded-sm`}
                >
                  L
                </div>
                <div
                  onClick={() => {
                    changeSize("XS");
                  }}
                  className={`w-7 h-7 text-xs flex cursor-pointer justify-center items-center ${
                    size === "XS" ? `bg-[#FBEBB5]` : `bg-[#FAF4F4]`
                  } bg-[#FAF4F4] rounded-sm`}
                >
                  XS
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="text-[13px] mb-2 text-[#9f9f9f]">Color</div>
              <div className="flex gap-3">
                <div className="w-7 h-7 text-xs flex justify-center items-center bg-[#816DFA] rounded-full"></div>
                <div className="w-7 h-7 text-xs flex justify-center items-center bg-[#000000] rounded-full"></div>
                <div className="w-7 h-7 text-xs flex justify-center items-center bg-[#CDBA7B]  rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="flex border-[1.5px] border-[#9f9f9f] rounded-xl justify-between items-center px-2 w-[100px] max-w-[300px]">
                  <button
                    onClick={() => {
                      dec();
                    }}
                    className="outline-none"
                  >
                    -
                  </button>
                  <div className="text-lg">{quantity}</div>
                  <button
                    onClick={() => {
                      inc();
                    }}
                    className="outline-none"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => {openCart()}} className="btn2 w-fit text-sm xl:text-lg xl:w-[200px]">Add To Cart</button>
              </div>
            </div>

            <div className="border-t py-5 my-8 border-t-[#9f9f9f] w-full flex  justify-between md:justify-normal">
              <div className="flex flex-col gap-3 text-sm w-full text-[#9f9f9f]">
                <div className="flex justify-between md:justify-normal">
                  <div className="text-[#9f9f9f] md:w-20 w-8">SKU </div>
                  <div><span className="me-2">:</span> SS001</div>
                </div>
                <div className="flex justify-between md:justify-normal">
                  <div className="text-[#9f9f9f] w-8 md:w-20">Category</div>
                  <div><span className="me-2">:</span> Sofas</div>
                </div>
                <div className="flex justify-between md:justify-normal">
                  <div className="text-[#9f9f9f] w-8 md:w-20 me-2">Tags</div>
                  <div className="text-end"><span className="me-2">:</span> Sofa, Chair, Home, Shop</div>
                </div>
                <div className="flex justify-between md:justify-normal">
                  <div className="text-[#9f9f9f] w-8 md:w-20">Share</div>
                  <div className="flex items-center text-end"><span className="me-2">:</span> <span className="inline-flex flex-wrap gap-4"><Fb className="text-black text-2xl"></Fb> <Li className="text-black text-2xl"></Li> <Tw className="text-black text-2xl"></Tw></span></div>
                </div>
              </div>
              <div onClick={() => {changeFavourite()}} className="self-end text-3xl pe-3 text-red-400 ms-20 cursor-pointer">{!favourite ? <Heart></Heart> : <HeartFill></HeartFill>}</div>
            </div>
          </div>
        </div>



        <div className="description w-full border-t px-10 border-t-[#9f9f9f] mx-auto">
          <div className="flex justify-center md:justify-between gap-5 lg:gap-16 text-sm md:text-2xl my-10 flex-wrap">
            <h3>Description</h3>
            <h3 className="text-[#9f9f9f] min-w-fit">Additional Information</h3>
            <h3 className="text-[#9f9f9f] min-w-fit">Reviews [5]</h3>
          </div>

          <div className="lg:px-32 text-[#9f9f9f] text-sm lg:text-start text-center">
            <div className="mb-5">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</div>
            <div>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</div>
          </div>

          <div className="flex justify-between xl:gap-0 gap-5 px-7 my-10 md:flex-row flex-col">
            <div className="bg-[#FFF9E5] rounded-lg md:w-[550px] md:h-[300px] flex items-center"><Image src={SOFA2} alt="sofa2"></Image></div>
            <div className="bg-[#FFF9E5] rounded-lg md:w-[550px] md:h-[300px] flex items-center"><Image src={SOFA1} alt="sofa1"></Image></div>
          </div>

          <div className="related-products pb-12 border-t mt-16 border-t-[#9f9f9f]">
        <div>
          <div>
            <h2 className="text-4xl text-center mb-8 mt-12">
              Related Products
            </h2>
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

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
