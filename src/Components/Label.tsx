import { FaBolt } from "react-icons/fa6"
import { Link } from "react-router-dom"
type props = {
    label : string,
    link : string
}

function Label({label,link} : props) {
  return (
   <Link to={link} className="btn uppercase font-primary">
   <div className="badge badge-sm bg-primary text-base-100"><FaBolt/></div>
   {label}
</Link>


  )
}

export default Label
