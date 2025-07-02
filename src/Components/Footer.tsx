import { FaLocationDot,FaHouseChimneyWindow,FaIndustry   } from "react-icons/fa6";
import { FaPhoneAlt,FaEnvelope ,FaCity  } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/newlogos.webp";
import { Link } from "react-router-dom";

function Footer() {



    const handleLocationClick = (): void => {
    window.open('https://maps.app.goo.gl/DVm2Vafa3DbKTCBD9', '_blank');
  };
  return (
   <div className="w-full  lg:mt-12 flex justify-center bg-gray-100 py-16">
  <div className="w-[95%] lg:w-[80%] grid justify-items-center gap-8 lg:grid-cols-3">

    {/* Logo + Contact */}
    <div className="w-[90%]">
      <div className="flex items-center gap-2 min-h-[4rem]">
        <div className="w-[4rem] h-[4rem] shrink-0">
          <img
            className="w-full h-full object-contain"
            src={logo}
            alt="ELLE POWER trading & services logo"
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold leading-tight lg:text-gray-900 xl:text-2xl">
            ELLE POWER
          </h1>
          <p className="text-[0.7rem] font-bold tracking-[1px] lg:text-[0.7rem] xl:text-[0.9rem] leading-tight">
            Trading & Services
          </p>
        </div>
      </div>

      <p className="mt-2 text-black/60 text-sm leading-snug">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="w-full flex flex-col gap-4 mt-8 lg:gap-3 text-sm">
        {/* Location */}
        <div className="flex gap-2 text-black/60 items-center">
          <FaLocationDot className="text-ctmred text-xl shrink-0" />
          <p
            onClick={handleLocationClick}
            className="cursor-pointer hover:underline hover:text-ctmred"
          >
            Tenogpahan Sison Surigao Del Norte
          </p>
        </div>
        <hr className="w-full text-gray-300" />

        {/* Phone */}
        <div className="flex gap-2 text-black/60 items-center">
          <FaPhoneAlt className="text-ctmred text-xl shrink-0" />
          <a href="tel:09771742249" className="hover:underline hover:text-ctmred">
            09771742249
          </a>
        </div>
        <hr className="w-full text-gray-300" />

        {/* Email */}
        <div className="flex gap-2 text-black/60 items-center">
          <FaEnvelope className="text-ctmred text-xl shrink-0" />
          <a
            href="mailto:ellepower08@gmail.com"
            className="hover:underline hover:text-ctmred"
          >
            ellepower08@gmail.com
          </a>
        </div>
        <hr className="w-full text-gray-300" />
        <h1 className="text-black/60 text-base">License #22-00023077</h1>
      </div>
    </div>

    {/* Quick Links */}
    <div className="w-[90%]">
      <h1 className="text-2xl font-medium leading-tight">Quick Links</h1>
      <div className="flex flex-col gap-2 lg:gap-4 mt-4 text-sm">
        {["home", "about", "service", "product"].map((link) => (
          <Link key={link} to={`/${link}`}>
            <p className="flex gap-3 items-center text-black/60 text-lg hover:text-ctmred">
              <GoArrowUpRight className="text-ctmred shrink-0" />
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </p>
          </Link>
        ))}
      </div>
    </div>

    {/* Services */}
    <div className="w-[90%]">
      <h1 className="text-2xl font-medium leading-tight">Our Services</h1>
      <div className="flex flex-col gap-2 lg:gap-4 mt-4 text-sm">
        <p className="flex gap-3 items-center text-black/60 text-lg">
          <FaCity className="text-ctmred shrink-0" />
          Commercial Services
        </p>
        <p className="flex gap-3 items-center text-black/60 text-lg">
          <FaHouseChimneyWindow className="text-ctmred shrink-0" />
          Residential Services
        </p>
        <p className="flex gap-3 items-center text-black/60 text-lg">
          <FaIndustry className="text-ctmred shrink-0" />
          Industrial Services
        </p>
      </div>
    </div>
  </div>
</div>

  );
}

export default Footer;
