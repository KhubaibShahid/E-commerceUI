"use State"
import { BsBagX } from "react-icons/bs";
import { IoMdCloseCircle as Close } from "react-icons/io";
import Asgard from "../assests/asgard-sofa.png";
import Image from "next/image";
import { Dispatch } from "react";
import { SetStateAction } from "react";

export default function SideCart({val} : {val : {cart: boolean, setCart: Dispatch<SetStateAction<boolean>>}}) {

    const {cart, setCart} = val;

  return cart ? (
    <div className="flex fixed max-w-[1440px] overflow-hidden bg-black w-full z-20 h-full bg-opacity-20 justify-end items-start">
      <div className="shopCart  bg-white md:max-h-[746px] w-[417px] border ">
        <div className="flex items-center justify-between px-10">
          <h3 className="text-2xl font-bold border-b border-b-[#9f9f9f] w-[80%] py-5">
            Shopping Cart
          </h3>
          <div>
            <BsBagX onClick={() => {setCart(false)}} className="text-[#9f9f9f] cursor-pointer"></BsBagX>
          </div>
        </div>

        <div className="flex flex-col justify-between">

        <div className="items border max-h-[500px] h-[60svh] min-h-[100px]">
          <div className="flex items-center justify-between px-2 sm:px-10">
            <div className=" w-[80%] py-5 flex items-center gap-5">
              <div className="w-24 h-24 flex items-center rounded-lg bg-[#FBEBB5]">
                <Image src={Asgard} alt="asgaard"></Image>
              </div>
              <div>
                <h4 className="text-sm mb-1">Asgaard sofa</h4>
                <div className="flex items-center gap-3">
                  <div>1</div>
                  <div>x</div>{" "}
                  <div className="text-xs text-yellow-600">Rs. 250,000.00</div>
                </div>
              </div>
            </div>
            <div>
              <Close className="text-xl text-[#9f9f9f]"></Close>
            </div>
          </div>
        </div>

        <div>
          <div className="flex my-5 px-10 py-5 justify-between border-b border-b-[#9f9f9f]">
            <div>Subtotal</div>
            <div className="text-yellow-600">Rs. 250,000.00</div>
          </div>

          <div className="flex justify-evenly my-8">
            <button className="text-xs border border-black px-8 rounded-xl py-1">
              View Cart
            </button>
            <button className="text-xs border border-black px-8 rounded-xl py-1">
              Checkout
            </button>
          </div>
        </div>

        </div>

      </div>
    </div>
  ) : <div></div> ;
}
