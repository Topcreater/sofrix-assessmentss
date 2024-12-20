import Image from 'next/image'
import React from 'react'
import backgroundVectors from '../.././../../public/assets/images/bgIcon.svg'
import qr from '../.././../../public/assets/images/QR Code.svg'
import persons from '../.././../../public/assets/images/Illistration.svg'
function QrCode() {
    return (
        <div className='md:px-10 mx-auto md:bg-customBlue bg-white  -mt-3'>
            <div className="relative w-full md:h-[500px] pb-5 md:py-10">
                <div className="absolute inset-0 hidden md:block">
                    <Image
                        src={backgroundVectors}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 flex justify-start items-start lg:h-full ">
                    <div className='hidden md:block'>
                        <Image src={qr} alt="QR Code" className="md:h-[50%] lg:h-[70%]" />
                    </div>
                    <div className='border-2 border-white rounded-2xl bg-white mx-10 w-full flex justify-evenly items-center'>
                        <Image src={persons} alt='ASfs' className='w-[30%] h-[40%] -ml-28 lg:-ml-52 hidden md:block'></Image>
                        <div className='md:w-2/3'>
                            <h2 className="text-customBlue text-center text-lg ">
                                <span className="font-semibold">Sign up today</span> and manage your portfolio like a pro with personalized assistant and access  to a trusted tech community of 1200 members who connected $150M+ of assets.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default QrCode
