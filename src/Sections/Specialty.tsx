import image1 from "../assets/special1.webp"
import image2 from "../assets/special2.webp"
import image3 from "../assets/special3.webp"
import image4 from "../assets/special4.webp"
import image5 from "../assets/special5.webp"
import image6 from "../assets/special6 (1).webp"
import image7 from "../assets/special7.webp"

   type specialtytype = {
    img : string,
    text: string
  }
function Specialty() {
  

  const specialty : specialtytype [] = [
    {img : image1, text :"REMANUFACTURING OF DISTRIBUTION TRANSFORMERS"},
    {img : image2, text :"REWINDING OF POWER TRANSFORMER"},
    {img : image3, text :"REWINDING OF DISTRIBUTION TRANSFORMER"},
    {img : image4, text :"REWINDING OF AUTOMATIC RECLOSER"},
    {img : image5, text :"CONSTRUCTION & DESIGN"},
    {img : image6, text :"DISTRIBUTION & DESIGN"},
    {img : image7, text :"SUBSTATION"},
  ]
  return (
   <section className="w-full text-center bg-base-100  py-16 lg:py-32  ">
    <h2 className="text-2xl font-bold ">Elle Power Specialty </h2>
        <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-8 gap-3 px-4 justify-items-center lg:h-[800px] ">

        <figure  className="w-full  bg-green-500  lg:row-span-4 relative rounded-xl overflow-hidden lg:max-h-[400px] max-w-[550px] shadow-md">
          <div className="absolute inset-0 w-full bg-black/50 " />

          <img src={image2} alt="REMANUFACTURING OF POWER TRANSFORMERS" className="h-full w-full object-cover" loading="lazy"  />
        <figcaption className=" w-full absolute bottom-8 left-1/2  -translate-x-1/2  py-2 px-4 z-10 flex items-center justify-center">
  <p className="bg-base-100 font-medium text-sm font-primary  py-2 px-12 text-center rounded-xl">REMANUFACTURING OF POWER TRANSFORMERS</p>
</figcaption>


        </figure >
        {/* <div className="w-full bg-pink-500   lg:row-span-3"></div> */}
         <figure  className="w-full bg-pink-500   lg:row-span-3 relative rounded-xl overflow-hidden  lg:max-h-[300px] max-w-[550px] shadow-md">
          <div className="absolute inset-0 w-full bg-black/50 " />
          <img src={image7} alt="SUBSTATION" className="h-full w-full object-cover" loading="lazy"  />
        <figcaption className=" w-full absolute bottom-8 left-1/2  -translate-x-1/2  py-2 px-4 flex justify-center items-center z-10 ">
  <p className="bg-base-100 font-medium text-sm font-primary  py-2 px-12 text-center rounded-xl">SUBSTATION</p>
</figcaption>


        </figure >
        {/* <div className="w-full bg-blue-500   lg:row-span-4"></div> */}
          <figure  className="w-full bg-pink-500   lg:row-span-4 relative rounded-xl overflow-hidden lg:max-h-[400px] max-w-[550px] shadow-md">
          <div className="absolute inset-0 w-full bg-black/50 " />

          <img src={image5} alt="CONSTRUCTION & DESIGN" className="h-full w-full object-cover" loading="lazy"  />
        <figcaption className=" w-full absolute bottom-8 left-1/2  -translate-x-1/2  py-2 px-4 z-10 flex items-center justify-center">
  <p className="bg-base-100 font-medium text-sm font-primary  py-2 px-12 text-center rounded-xl">CONSTRUCTION & DESIGN</p>
</figcaption>


        </figure >
        {/* <div className="w-full bg-amber-500  lg:row-span-5"></div> */}
          <figure  className="w-full bg-pink-500   lg:row-span-5 relative rounded-xl overflow-hidden h-full  lg:max-h-[500px] max-w-[550px] shadow-md">
          <div className="absolute inset-0 w-full bg-black/50 " />

          <img src={image1} alt="REMANUFACTURING OF DISTRIBUTION TRANSFORMERS" className="h-full w-full object-cover" loading="lazy"  />
        <figcaption className=" w-full absolute bottom-8 left-1/2  -translate-x-1/2  py-2 px-4 z-10 flex items-center justify-center">
  <p className="bg-base-100 font-medium text-sm font-primary  py-2 px-12 text-center rounded-xl">REMANUFACTURING OF DISTRIBUTION TRANSFORMERS </p>
</figcaption>


        </figure >
        {/* <div className="w-full bg-purple-500 lg:row-span-2"></div> */}
         <figure  className="w-full bg-pink-500   lg:row-span-2 relative rounded-xl overflow-hidden lg:max-h-[200px] max-w-[550px] shadow-md">
          <div className="absolute inset-0 w-full bg-black/50 " />

          <img src={image3} alt="REWINDING OF DISTRIBUTION TRANSFORMER" className="h-full w-full object-cover" loading="lazy"  />
        <figcaption className=" w-full absolute bottom-8 left-1/2  -translate-x-1/2  py-2 px-4 z-10 flex items-center justify-center">
  <p className="bg-base-100 font-medium text-sm font-primary  py-2 px-12 text-center rounded-xl">REWINDING OF DISTRIBUTION TRANSFORMER</p>
</figcaption>


        </figure >
        {/* <div className="w-full bg-red-500    lg:row-span-4"></div> */}
          <figure  className="w-full bg-pink-500   lg:row-span-4 relative rounded-xl overflow-hidden  lg:max-h-[400px] max-w-[550px] shadow-md">
          <div className="absolute inset-0 w-full bg-black/50 " />

          <img src={image6} alt="DISTRIBUTION & DESIGN" className="h-full w-full object-cover" loading="lazy"  />
        <figcaption className=" w-full absolute bottom-8 left-1/2  -translate-x-1/2  py-2 px-4 z-10 flex items-center justify-center">
  <p className="bg-base-100 font-medium text-sm font-primary  py-2 px-12 text-center rounded-xl"> DISTRIBUTION & DESIGN</p>
</figcaption>


        </figure >
        {/* <div className="w-full bg-red-500    lg:row-span-2 "></div> */}
         <figure  className="w-full bg-pink-500   lg:row-span-2 relative rounded-xl overflow-hidden lg:max-h-[200px] max-w-[550px] shadow-md ">
          <div className="absolute inset-0 w-full bg-black/50 " />

          <img src={image4} alt="REWINDING OF AUTOMATIC RECLOSER" className="h-full w-full object-cover " loading="lazy"  />
        <figcaption className=" w-full absolute bottom-8 left-1/2  -translate-x-1/2  py-2 px-4 z-10 flex items-center justify-center">
  <p className="bg-base-100 font-medium text-sm font-primary  py-2 px-12 text-center rounded-xl">REWINDING OF AUTOMATIC RECLOSER </p>
</figcaption>


        </figure >

        </div>

        <div className=" hidden w-full lg:grid grid-cols-7 mt-12 ">
          {specialty.map((img,index)=>(
            <img key={index} src={img.img} alt={img.text} className="h-full max-h-[200px] w-full" />
          ))}
        </div>
   </section>
  )
}

export default Specialty
