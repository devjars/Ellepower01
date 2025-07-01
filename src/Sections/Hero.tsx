import bg from "../assets/1687350836573.webp"
import { RxArrowTopRight } from "react-icons/rx";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
type AboutDetails = {
  countmax: number;
  title: string;
  description: string;
};

function Hero() {

     const about: AboutDetails[] = [
    {
      countmax: 5000,
      title: "Projects Completed",
      description:
        "Successfully delivered a wide range of electrical projects across residential, commercial, and industrial sectors.",
    },
    {
      countmax: 10,
      title: "Years of Experience",
      description:
        "A decade of proven expertise in providing safe, reliable, and code-compliant electrical solutions.",
    },
    {
      countmax: 100,
      title: "Certified Experts",
      description:
        "A skilled team of licensed electricians and technicians trained to meet the highest industry standards.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-between " 
    style={{backgroundImage: `url(${bg})`, backgroundRepeat : "no-repeat", backgroundSize : "cover", backgroundPosition: "center"}}>
      
      <div className="w-full h-full flex flex-col items-center justify-center gap-37 py-16  bg-gradient-to-t from-black/90 via-black/85 to-black/90
      px-6 sm:px-12">
        <div className="w-full flex flex-col items-center text-center pt-16 lg:pt-28 lg:w-[75%] ">
            <h2 className="text-3xl text-base-100 font-bold font-primary leading-12 min-[360px]:text-4xl lg:leading-16 lg:text-6xl ">
                Reliable Electric Services For <br/> <span className="text-primary">Every Need</span></h2>
            <p className="text-lg  mt-4 font-secondary text-accent lg:text-xl lg:font-medium lg:mt-8 ">Serving residential, commercial, and industrial clients with expert workmanship, dependable service, and lasting results.</p>
            <div className="w-full flex flex-col gap-4 items-center mt-8 lg:flex-row lg:justify-center">
                <Link to="/book-service" className="flex items-center justify-center gap-4 btn btn-primary btn-wide py-6 rounded-full font-bold font-primary">
             BOOK A SERVICE <span><RxArrowTopRight /></span>
                </Link>
                  <Link to="/product" className="flex items-center justify-center gap-4 btn btn-secondary btn-wide btn-outline py-6 rounded-full font-bold font-primary">
                BROWSE PRODUCT <span><RxArrowTopRight /></span>
                </Link>
               


            </div>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-full md:w-[90%] lg:flex-row">
            {about.map((about,index)=>(
             <div key={index} className="w-full card card-border bg-base-100 ">
                <div className="card-body">
                    <h3 className="font-bold text-2xl text-primary font-secondary flex lg:text-3xl lg:font-black">{about.countmax} <span><BsPlus /></span> </h3>
                    <h2 className="card-title">{about.title}</h2>
                    <p>{about.description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
