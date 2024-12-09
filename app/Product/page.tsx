import Navbar from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import ASGARD from "../assests/asgard-sofa.png"
import ASGARD2 from "../assests/outdoor-sofa.png";
import ASGARD3 from "../assests/bella-chair.png";
import ASGARD4 from "../assests/cloud-sofa.png";
import ASGARD5 from "../assests/kent-coffee-table.png";
import Rating from "../components/rating";


export default function ProductApp() {
  return (
    <div className="product-main">
      <Navbar className=""></Navbar>
      <div className="container">
        <div className="mx-20 my-10">
          <div className="flex items-center h-10 gap-5 text-xl">
            <div className="text-[#9f9f9f] text-sm">Home</div> &gt;{" "}
            <div className="text-[#9f9f9f] text-sm">Shop</div> &gt;{" "}
            <div className="border-l ps-10 border-black h-full flex items-center text-sm">
              Asgaard sofa
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-10">
            <div className="flex flex-col ps-20 gap-10">
                <div className="bg-[#FFF9E5] w-[70px] h-[70px] rounded-lg">
                <Image src={ASGARD2} alt="asgaard" className="object-cover"></Image>
                </div>
                <div className="bg-[#FFF9E5] w-[70px] h-[70x] rounded-lg">
                <Image src={ASGARD3} alt="asgaard" className="object-cover"></Image>

                </div>
                <div className="bg-[#FFF9E5] w-[70px] h-[70px] rounded-lg">
                <Image src={ASGARD4} alt="asgaard" className="object-cover w-[60px]"></Image>
                </div>
                <div className="bg-[#FFF9E5] w-[70px] h-[70px] rounded-lg">
                <Image src={ASGARD5} alt="asgaard" className="object-cover"></Image>
                </div>
            </div>
            <div className="bg-[#FFF9E5] w-[400px] h-[430px] flex items-center rounded-xl">
            <Image className="w-[400px] object-cover" src={ASGARD} alt="asgaard"></Image>
            </div>
          </div>
          <div>
            <div className="poppins-thin">
                <h2 className="text-4xl">Asgaard sofa</h2>
            </div>
            <div><h3 className="text-[#9f9f9f] text-xl">Rs. 250,000.00</h3></div>
            <div className="h-[30px] flex items-center">
                <div className="pe-5"><Rating></Rating></div>
                <div className="border-l h-full border-l-black text-xs poppins-thin flex items-center ps-5">5 Customer Reviews</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
