import Navbar from "../components/nav";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Services from "../components/service";

export default function MyAccount() {
  return (
    <div className="account-main font-[family-name:var(--mypoppins)]">
      <Navbar className=""></Navbar>
      <Banner location="my account" heading="My Account"></Banner>
      <div className="flex my-20 justify-around md:flex-row flex-col items-center gap-y-10">
        <div className="md:max-w-[400px] w-[80%] flex items-center flex-col gap-10 px-3 md:border-none border-b border-b-black md:pb-0 pb-10">
            <h2 className="text-3xl text-start w-full font-bold">Log In</h2>
            <div className="flex flex-col w-full gap-5">
                <label htmlFor="username">Username or email address</label>
                <input id="username" className="inp" type="text" />
            </div>
            <div className="flex flex-col gap-5 w-full">
                <label htmlFor="password">Password</label>
                <input id="password" className="inp " type="text" />
            </div>
            <div className="flex gap-5 items-center w-full">
                <input id="remember" className="w-7 h-7 rounded-xl border border-[#9f9f9f]" type="checkbox" />
                <label htmlFor="remember" className="poppins-thin text-sm">Remember me</label>
            </div>
            <div className="flex gap-10 items-center justify-between flex-wrap md:flex-nowrap w-full">
                <button className="btn2 poppins-thin min-w-fit text-xl w-[200px]">Log In</button>
                <div className="poppins-thin2 text-md text-black font-bold min-w-fit">Lost Your Password?</div>
            </div>
        </div>
        <div className="md:max-w-[400px] w-[80%] flex items-center flex-col gap-10 px-3">
            <h2 className="text-3xl text-start w-full font-bold">Register</h2>
            <div className="flex flex-col w-full gap-5">
                <label htmlFor="email">Email address</label>
                <input id="email" className="inp" type="text" />
            </div>
            <div className="flex flex-col gap-5 w-full text-sm poppins-light mb-10">
                <div>A link to set a new password will be sent to your email address.</div>
                <div>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
            </div>
            
            <div className="flex gap-10 w-full">
                <button className="btn2 poppins-thin text-xl w-[200px]">Register</button>
            </div>
        </div>

      </div>
        <Services></Services>
      <Footer></Footer>
    </div>
  );
}
