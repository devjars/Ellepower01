import Logo1 from "../assets/logoipsum-264.svg"
import Logo2 from "../assets/logoipsum-330.svg"
import Logo3 from "../assets/logoipsum-342.svg"
import Logo4 from "../assets/logoipsum-343.svg"
import Logo5 from "../assets/logoipsum-375.svg"





function Partnership() {

    const logo:string [] = [Logo1,Logo2,Logo3,Logo4,Logo5]

  return (
   <div className="w-full flex flex-col items-center bg-base-100 pt-28">
    <h2 className="font-medium font-primary text-xl text-center px-4">Trusted Electrical Contractor for Industry Leaders</h2>
     <div className="flex justify-center items-center px-3 border border-base-300 max-w-[90%]  lg:justify-center rounded-xl mt-6">
       <div className="w-full flex items-center gap-4 py-3 md:p-4  overflow-scroll">
         {logo.map((log,index)=>(
        <img key={index} src={log}  alt={log} loading="lazy" className="h-8"/>
     ))}
       </div>
     </div>

    
   </div>
  )
}

export default Partnership
