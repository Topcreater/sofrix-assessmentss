import React from "react";
import { Input, Button, Card } from "antd";
import Image from "next/image";
import faces from '../../../../public/assets/images/Faces.svg'
import apple from '../../../../public/assets/images/app.png'
import playStore from '../../../../public/assets/images/playstore.png'

const HeroSection = () => {
  return (
    <>
      <div className="bg-white md:py-12 py-8  mb-0 mt-[-1]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:text-left md:w-[45%] flex justify-center flex-col mx-auto">
            <h1 className="text-customBlue font-bold leading-tight text-2xl md:text-4xl lg:md:text-6xl md:w-1/3 text-center md:text-left">
              FAANG INVESTING COMMUNITY
            </h1>
            <p className="text-customBlue mt-4 md:w-2/3 text-xl block text-center md:text-left">
              We help people working in <span className="font-semibold">BigTech</span> make better financial decisions with the data and insights provided by AI.
            </p>
            <div className="block md:hidden">
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="my-2 bg-black text-white rounded-lg flex items-center px-5">
                  <Image src={apple} height={40} width={40} alt="apple"></Image>
                  <div>
                    <span className="text-xs font-light">
                      DOWNLOAD ON THE
                    </span>
                    <p className="font-bold">
                      Apple Store

                    </p>
                  </div>
                </div>

                <div className="my-2 bg-black text-white rounded-lg flex items-center space-x-5 px-7">
                  <Image src={playStore} height={30} width={30} alt="apple"></Image>
                  <div>
                    <span className="text-xs font-light">
                      GET IT ON                    </span>
                    <p className="font-bold">
                      Google Play
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2  justify-center mt-8 md:mt-0 hidden md:flex">
            <Card
              className="w-full max-w-md shadow-md rounded-2xl border-[20px]"
              style={{ borderColor: "#02a9e5" }}
            >
              <h1 className="text-center mb-6" style={{ color: "#02a9e5" }}>
                Welcome Back
              </h1>
              <div className="space-y-4">
                <Input
                  placeholder="gracelebon@gmail.com"
                  className="rounded-md h-10"
                />
                <Input
                  placeholder="**********"
                  className="rounded-md h-10"
                />
                <div className="text-right">
                  <a href="" style={{ color: "#02a9e5" }}>Forgot Password?</a>
                </div>
                <Button
                  type="primary"
                  className="w-full h-10"
                  style={{ backgroundColor: "#02a9e5", borderColor: "#02a9e5" }}
                >
                  Log In
                </Button>
                <div className="text-center mt-2 flex justify-center  items-center">
                  <p className="mx-6">Don’t have an account?</p>{" "}
                  <a href="" style={{ color: "#02a9e5", fontWeight: 'bold' }}>Create One</a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Image src={faces} alt="img" className="hidden mx-auto justify-center md:flex mb-0" />

    </>
  );
};

export default HeroSection;
