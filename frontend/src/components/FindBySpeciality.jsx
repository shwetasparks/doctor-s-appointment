import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assetss";

function FindBySpeciality() {
  return (
    <div className="flex flex-col  items-center py-16 gap-8">
        <h1 className="text-3xl font-semibold">Find by Speciality</h1>
        <p className="text-center sm:w-1/3 text-sm">
          Simply browse through our extensive list of trusted doctors, schedule
          your  appointment hassle-free.
        </p>
    
      <div className=" flex items-center  sm:justify-center overflow-scroll">
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} className="flex flex-col items-center gap-2 text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
              <img className='w-16 sm:w-24 mb-2 m-4' src={item.image} />
              <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FindBySpeciality;
