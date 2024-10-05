import { assets } from "../assets/assets_frontend/assetss";

function Header() {
    return (
       <div className="bg-[#504DC1] text-white rounded-xl mt-4 md:px-10 lg:px-12 px-6 ">
         <div className="flex flex-col md:flex-row flex-wrap items-center justify-between px-16 sm:1/2 ">

            {/* left side */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[6vw] md:mb-[-30px]'> 
                <h1 className="text-5xl md:text-4xl lg:text-5xl  py-5 font-bold md:leading-tight lg:leading-tight "> Book Appointment <br />  With Trusted Doctors</h1>
                <div className="md:1/2 flex items-end gap-4 mb-4">
                    <img className="w-28" src={assets.groupProfiles} />
                    <p>Simply browse through our extensive list of trusted doctors, <br />
                    schedule your appointment hassle-free.</p>
                </div>

                <div className="flex items-center gap-2 bg-white text-black px-6 rounded-full  " >
                    <a href="#speciality" className=" my-3 font-semibold">Book appointment</a>
                    <img src={assets.arrow_icon} />
                </div>
            </div>

            {/* right*/}
            <div className="md:w-1/2  md:relative">
                <img className=" w-full md:absolute rounded-lg  h-auto" src={assets.header_img} />
            </div>
            
        </div>
        
       </div>
    )
}

export default Header
