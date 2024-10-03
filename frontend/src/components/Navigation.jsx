import {assets} from '../assets/assets_frontend/assetss'


function Navigation() {
    return (
        <div className='flex items-center justify-between my-6 border brder-black-600 '>
            <div><img src={assets.logo}/></div>
            <div className='flex gap-8 font-semibold'>
                <p>HOME</p>
                <p>ALL DOCTORS</p>
                <p>ABOUT</p>
                <p>CONTACT</p>
            </div>
            <div className='bg-black px-4 py-2 text-white rounded-3xl'>
                <button>Create account</button>
            </div>
            <hr className='' />
            
        </div>
        
    )
}

export default Navigation
