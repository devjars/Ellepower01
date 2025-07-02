  import image1 from "../assets/special1.webp";
  import image2 from "../assets/special2.webp";
  import image3 from "../assets/special3.webp";
  import image4 from "../assets/special4.webp";
  import image5 from "../assets/special5.webp";
  import image6 from "../assets/special6 (1).webp";
  import image7 from "../assets/special7.webp";
  import Imageblurr from "../assets/specialblurr.webp";
  import { LazyLoadImage } from "react-lazy-load-image-component";
  import "react-lazy-load-image-component/src/effects/blur.css";
  import SpecialtyCard from "../Components/SpecialtyCard";

  type specialtytype = {
    img: string;
    text: string;
  };

  
  function Specialty() {
    const specialty: specialtytype[] = [
      { img: image1, text: "REMANUFACTURING OF DISTRIBUTION TRANSFORMERS" },
      { img: image2, text: "REWINDING OF POWER TRANSFORMER" },
      { img: image3, text: "REWINDING OF DISTRIBUTION TRANSFORMER" },
      { img: image4, text: "REWINDING OF AUTOMATIC RECLOSER" },
      { img: image5, text: "CONSTRUCTION & DESIGN" },
      { img: image6, text: "DISTRIBUTION & DESIGN" },
      { img: image7, text: "SUBSTATION" },
    ];
    return (
      <section className="w-full text-center bg-base-100 py-8">
        <h2 className="text-2xl font-bold">Elle Power Specialty</h2>

        <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-8 gap-3 px-4 justify-items-center lg:h-[800px]">

        
          <SpecialtyCard img={image1} blurrimg={Imageblurr} title="REMANUFACTURING OF POWER TRANSFORMERS" 
          classname="lg:row-span-4 lg:max-h-[400px] w-[550px] " imgclass=" lg:h-[400px]  " />
          <SpecialtyCard img={image7} blurrimg={Imageblurr} title="SUBSTATION" 
          classname="lg:row-span-3 lg:max-h-[300px]"  imgclass=" lg:h-[300px]" />

          <SpecialtyCard img={image5} blurrimg={Imageblurr} title="CONSTRUCTION & DESIGN" 
          classname="lg:row-span-4 lg:max-h-[400px] "   imgclass=" lg:h-[400px]"/>

          <SpecialtyCard img={image1} blurrimg={Imageblurr} title="REMANUFACTURING OF DISTRIBUTION TRANSFORMERS" 
          classname="lg:row-span-5 lg:max-h-[500px]"  imgclass=" lg:h-[500px]" />

          <SpecialtyCard img={image3} blurrimg={Imageblurr} title="REWINDING OF DISTRIBUTION TRANSFORMER"
          classname="lg:row-span-2 lg: lg:max-h-[200px] "  imgclass=" lg:h-[200px]" />

          <SpecialtyCard img={image6} blurrimg={Imageblurr} title="DISTRIBUTION & DESIGN" 
          classname="lg:row-span-4 lg:max-h-[400px] lg:h-[400px]"  imgclass=" lg:h-[400px] " />
          
          <SpecialtyCard img={image4} blurrimg={Imageblurr} title="REWINDING OF AUTOMATIC RECLOSER" 
          classname="lg:row-span-2 lg:max-h-[200px]"  imgclass=" lg:h-[200px]" />



        </div>
        <div className="hidden w-full lg:grid grid-cols-7 mt-12">
          {specialty.map((item, index) => (
            <LazyLoadImage
              key={index}
              src={item.img}
              placeholderSrc={Imageblurr}
              effect="blur"
              alt={item.text}
              className="h-full max-h-[200px] w-full object-cover"
            />
          ))}
        </div>
      </section>
    );
  }

  export default Specialty;
