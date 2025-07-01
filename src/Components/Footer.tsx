import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt,FaEnvelope  } from "react-icons/fa";
import Logo from "../assets/newlogos.webp";
import { Link } from "react-router-dom";

function Footer() {



    const handleLocationClick = (): void => {
    window.open('https://maps.app.goo.gl/DVm2Vafa3DbKTCBD9', '_blank');
  };
  return (
   <footer className="footer max-w-[1550px] mx-auto sm:footer-horizontal bg-base-200 text-base-content p-10 mt-16
   ">
  <aside>
    <Link to="/" className="navbar-center flex items-center">
          <img className="h-12" src={Logo} alt="ELLE POWER trading & services logo" />
          <h2 className="ml-2  font-bold text-lg lg:text-gray-900 xl:text-2xl">
            ELLE POWER
            <p className="text-[0.6rem] tracking-[1px] lg:text-[0.7rem] xl:text-[0.9rem]">
              Trading & Services
            </p>
          </h2>
        {/* </div> */}
       </Link>
     <div className="w-full flex flex-col gap-4 mt-8 lg:gap-3">
            <div  className="flex gap-2 text-black/60">
              <span>
                <FaLocationDot
                  className="text-ctmred text-xl"
                />
              </span> 
              <p onClick={handleLocationClick} className="cursor-pointer hover:underline hover:text-ctmred">Tenogpahan Sison Surigao Del Norte</p>
            </div>
            <hr className="w-full text-gray-300" />
            <div className="flex gap-2 text-black/60">
              <span>
                <FaPhoneAlt
                  className="text-ctmred text-xl"
                />
              </span>
             <a href="tel:09771742249" className="hover:underline hover:text-ctmred">
    09771742249
  </a>
            </div>
            <hr className="w-full text-gray-300" />
            <div className="flex gap-2 text-black/60">
              <span>
                <FaEnvelope 
                  className="text-ctmred text-xl"
                  
                />
              </span>
            <a href="mailto:ellepower08@gmail.com" className="hover:underline hover:text-ctmred ">
    ellepower08@gmail.com
  </a>
            </div>
            <hr className="w-full text-gray-300" />
            <h1 className="text-xl text-black/60">License #22-00023077</h1>
          </div>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Commercial Services</a>
    <a className="link link-hover">Residential Services</a>
    <a className="link link-hover">Industrial Services</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Product</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  );
}

export default Footer;
