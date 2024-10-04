import { assets } from "../assets/assets_frontend/assetss";

function Header() {
    return (
       <div>
         <div className="flex items-center justify-between ">
            {/* section1 */}
            <div>
                <h1>Book Appointments <br />
               With Trusted Soctors</h1>
                <div className="flex items-end justify-between">
                    <img src={assets.groupProfiles} />
                    <p>Simply browse through our extensive list of trusted doctors, <br />
                    schedule your appointment hassle-free.</p>
                </div>
                <div>
                    <button>Book appointment</button>
                    <img src={assets.arrow_icon} />
                </div>

            </div>
            {/* section 2 */}
            <div>
                <img src={assets.header_img} />
            </div>
            
        </div>
       </div>
    )
}

export default Header
