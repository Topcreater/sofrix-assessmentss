import Image from 'next/image'
import React from 'react'
import backgroundVectors from '../.././../../public/assets/images/bgIcon.svg'
import accounts from '../.././../../public/assets/images/Groups Cards.svg'

function Accounts() {
    return (
        <div>
            <div className='md:px-10 px-4 mx-auto bg-darkBlueBg -mt-3'>
                <div className="relative w-full h-[500px]  py-5 md:py-10">
                    <div className="absolute inset-0 ">
                        <Image
                            src={backgroundVectors}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 md:flex md:justify-start md:items-start py-5 lg:py-0 lg:h-full bg-white rounded-2xl">
                        <div className='flex flex-col-reverse items-center justify-center md:flex md:flex-row md:items-center md:justify-evenly pt-5 mx-auto '>
                            <p className=' md:w-2/3 lg:w-1/3 text-center text-customBlue text-xl'>
                                Connect your brokerage accounts and get access to trading ideas, aggregated stats and discussions in your tech investing community right away.
                                Sign In
                            </p>
                            <div className='flex items-center justify-center mb-4  md:mb-0'>
                                <Image src={accounts} alt='Image' className='w-[50%] lg:w-[80%]'>
                                </Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts
