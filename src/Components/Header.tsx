import Logo from "../assets/newlogos.webp";
import { Link } from "react-router-dom";
const Header = () => {



  const nav = [
    { li: 'Home', link: '/', },
    { li: 'About us', link: '/notfound', offset: -10 },
    {
      li: 'Services', link: '/notfound', offset: 230, subli: [
        { li: 'Commersial Service', link: '/notfound' },
        { li: 'Residential Service', link: '/notfound' },
        { li: 'Industrial Service', link: '/notfound' },
      ]
    },
    { li: 'Product', link: '/notfound', offset: -50 },
    { li: 'Contact us', link: '/notfound', offset: 10 },
  ];

  return (
    <header  className="navbar bg-primary shadow-sm lg:h-[5rem] lg:bg-base-100 lg:px-8 xl:px-12 min-w-[300px] max-w-[1536px] mx-auto">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <nav tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow">
            {nav.map((item, idx) => (
              <li key={item.li + idx} className="font-primary ">
                {item.subli ? (
                  <details>
                    <summary className="font-semibold font-primary text-lg" >{item.li}</summary>
                    <ul className="ml-2">
                      {item.subli.map((sub, subIdx) => (
                        <li key={sub.li + subIdx}>
                          <Link
                            to={sub.link}
                           
                            className="text-lg"
                          >
                            {sub.li}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    to={item.link}
                   
                    className="font-medium font-primary text-xl py-2"
                  >
                    {item.li}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-3">
              <button className="btn btn-sm btn-primary w-full [@media(min-width:400px)]:hidden">FREE QUOTE</button>
            </li>
          </nav>
        </div>

        {/* Logo */}
      <Link to="/notfound" className="navbar-center flex items-center h-full">
  <img className="h-14 w-14" src={Logo} alt="ELLE POWER trading & services logo" />
  <div className="ml-2 text-white lg:text-gray-900 xl:text-2xl font-primary text-center">
    <h2 className="font-bold lg:text-2xl">ELLE POWER</h2>
    <p className="text-[0.6rem] tracking-[1px] lg:text-[0.7rem] xl:text-[0.9rem] font-bold">
      Trading & Services
    </p>
  </div>
</Link>

      </div>

      {/* Center Nav (Desktop Only) */}
 {/* Desktop Nav */}

           <nav className="hidden lg:flex w-full   justify-center items-center">
  <ul className="  flex items-center gap-6">
    {nav.map((nav, index) =>
      nav.subli ? (
        <li key={index} className="dropdown">
          <p tabIndex={0}className="text-lg  font-primary cursor-pointer transition-all duration-300 hover:text-primary ">{nav.li}</p>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
           {nav.subli.map((subli,index)=>(
            <li key={index}> 
            <Link to={subli.link}>
              {subli.li}
            </Link></li>
           ))}
          </ul>
        </li>
      ) : (
        <li className="text-lg  font-primary cursor-pointer transition-all duration-300 hover:text-primary " key={index}>
          <Link to={nav.link}>
          {nav.li}
          </Link>
        </li>
      )
    )}
  </ul>
</nav>



      {/* CTA Button */}
      <div className="navbar-end hidden [@media(min-width:400px)]:flex">
        <button className="btn btn-xs sm:btn-sm md:btn-base lg:btn-primary font-primary py-5">GET A FREE QUOTE</button>
      </div>
    </header>
  );
};

export default Header;
