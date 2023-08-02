"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

const HeroCarousel1: NextPage = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Hero Carousel - 2" to the project
  }, []);

  const onGrandPrix20231Click = useCallback(() => {
    // Please sync "Hero Carousel - 2" to the project
  }, []);

  return (
    <div className="relative bg-black w-full h-[900px] overflow-hidden text-left text-base text-hayya-ui-02-white font-european-bodyheavy-european">
      <Image
        className="absolute top-[0px] left-[0px] w-[1514px] h-[944px] object-cover"
        alt=""
        src="/rectangle-29.png"
        width={100}
        height={100}
      />
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.9),_rgba(60,_60,_60,_0.69)_36.46%,_rgba(255,_255,_255,_0))] w-[1440px] h-[911px] mix-blend-multiply" />
      <div className="absolute top-[654px] left-[135px] rounded-2xl bg-hayya-flat-corn-normal w-[152px] h-[51px] overflow-hidden flex flex-col items-center justify-center text-center text-hayya-solid-color-charcoal">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 h-14 flex flex-row py-4 px-6 box-border items-center justify-center">
            <b className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px]">
              Learn More
            </b>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-[146px] left-[1004.19px] w-[52px] h-[57px]"
        alt=""
        src="/splash-stare.svg"
        width={100}
        height={100}
      />
      <div className="absolute top-[280px] left-[782px] w-[242px] h-[354px] opacity-[0.6]" />
      <Image
        className="absolute top-[221.84px] left-[855px] w-[341.79px] h-[460.95px] object-cover"
        alt=""
        src="/expo-2023.svg"
        width={100}
        height={100}
      />
      <div className="absolute top-[671px] left-[939px]" />
      <div className="absolute top-[792px] right-[0px] bg-gray-200 w-[1129px] h-[108px] overflow-hidden text-21xl text-gray-100">
        <div className="absolute top-[0px] left-[0px] bg-hayya-flat-corn-normal w-6 h-1" />
        <div className="absolute top-[4px] left-[0px] w-[1129px] h-[104px]">
          <div className="absolute top-[32px] left-[46px] w-[190px] h-10 text-hayya-ui-02-white">
            <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
              01
            </div>
            <div className="absolute top-[2px] left-[51px] w-[147px] flex flex-col items-start justify-start gap-[6px] text-lg">
              <b className="relative leading-[100%] inline-block w-36">
                Doha Expo 2023
              </b>
              <b className="self-stretch relative text-xs leading-[100%]">
                INFORMATION
              </b>
            </div>
          </div>
          <div
            className="absolute top-[24px] left-[312px] w-[203.67px] h-14 cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[-0.25px] left-[-0.25px] box-border w-[0.5px] h-[56.5px] border-r-[0.5px] border-solid border-gray-300" />
            <div className="absolute top-[8px] left-[23.67px] w-[180px] h-10">
              <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
                02
              </div>
              <div className="absolute top-[2px] left-[56.33px] w-32 flex flex-col items-start justify-start gap-[6px] text-lg text-gray-300">
                <b className="relative leading-[100%] inline-block w-[196px]">
                  Grand Prix 2023
                </b>
                <b className="self-stretch relative text-xs leading-[100%] text-gray-100">
                  INFORMATION
                </b>
              </div>
            </div>
          </div>
          <div className="absolute top-[24px] left-[592px] w-[203.67px] h-14 font-helvetica-neue">
            <div className="absolute top-[-0.25px] left-[-0.25px] box-border w-[0.5px] h-[56.5px] border-r-[0.5px] border-solid border-gray-300" />
            <div className="absolute top-[8px] left-[23.67px] w-[180px] h-10">
              <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
                03
              </div>
              <div className="absolute top-[2px] left-[51.33px] w-[175px] flex flex-col items-start justify-start gap-[6px] text-lg text-gray-300 font-european-bodyheavy-european">
                <b className="relative leading-[100%] inline-block w-[178px]">{`AFC Asian Cup 2023 `}</b>
                <b className="self-stretch relative text-xs leading-[100%] text-gray-100">
                  INFORMATION
                </b>
              </div>
            </div>
          </div>
          <div className="absolute top-[24px] left-[872px] w-[209.33px] h-14">
            <div className="absolute top-[-0.25px] left-[-0.25px] box-border w-[0.5px] h-[56.5px] border-r-[0.5px] border-solid border-gray-300" />
            <div className="absolute top-[8px] left-[24.33px] w-[185px] h-10">
              <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
                04
              </div>
              <div className="absolute top-[2px] left-[58.67px] w-[134px] flex flex-col items-start justify-start gap-[6px] text-lg text-gray-300 font-helvetica-neue">
                <b className="relative leading-[100%] inline-block w-36">
                  Abu-Samra Pass
                </b>
                <b className="self-stretch relative text-xs leading-[100%] text-gray-100">
                  INFORMATION
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[262px] left-[135px] w-[419px] h-52 text-[80px] font-reckless-neue">
        <div className="absolute top-[23px] left-[-6px] leading-[120%] font-semibold inline-block w-[570px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
          <p className="m-0">Qatar Expo</p>
          <p className="m-0">2023</p>
        </div>
        <div className="absolute top-[226px] left-[0px] text-[20px] tracking-[0.01em] leading-[30px] font-medium font-european-bodyheavy-european inline-block w-[469px]">
          The International Horticultural Expo 2023 will be hosted by the State
          of Qatar. Located on the west of Doha city, 2,5km from West Bay, 3,5km
          from Doha Port and about 12km away from HIA.
        </div>
      </div>
      <div className="absolute top-[252px] left-[135px] tracking-[0.2em] uppercase font-medium">
        the HAYYA EXPerience
      </div>
      <Image
        className="absolute top-[147px] left-[1623px] w-[199.42px] h-[268.95px] object-cover"
        alt=""
        src="/door.svg"
        width={100}
        height={100}
      />
      <Image
        className="absolute top-[138.45px] left-[1226px] w-[199.71px] h-[285.15px] object-cover cursor-pointer"
        alt=""
        src="/grand-prix-2023.svg"
        onClick={onGrandPrix20231Click}
        width={100}
        height={100}
      />
      <Image
        className="absolute top-[141px] left-[1425px] w-[185.05px] h-[279.82px] object-cover opacity-[0.7]"
        alt=""
        src="/afc.svg"
        width={100}
        height={100}
      />
      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start text-sm">
        <div className="bg-hayya-solid-color-charcoal [backdrop-filter:blur(4px)] w-[1440px] h-8 flex flex-col py-0 px-20 box-border items-end justify-center">
          <div className="w-[400px] flex flex-row items-center justify-end gap-[16px]">
            <div className="flex flex-row items-center justify-center gap-[4px]">
              <div className="relative leading-[150%] font-medium">Eng</div>
              <Image
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down.svg"
                width={100}
                height={100}
              />
            </div>
            <Image
              className="relative w-1.5 h-1.5"
              alt=""
              src="/stars.svg"
              width={100}
              height={100}
            />
            <div className="flex flex-row items-center justify-center gap-[4px]">
              <Image
                className="relative w-4 h-4"
                alt=""
                src="/eye.svg"
                width={100}
                height={100}
              />
              <div className="relative leading-[150%] font-medium">
                Accessibility
              </div>
              <Image
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/chevron-down.svg"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="box-border w-[1440px] flex flex-row py-4 px-20 items-center justify-between border-b-[1px] border-solid border-gray-300">
          <div className="w-[400px] flex flex-row items-center justify-start">
            <Image
              className="relative w-[120px] h-[25.85px]"
              alt=""
              src="/logo.svg"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[400px] flex flex-row items-center justify-end gap-[20px]">
            <b className="relative leading-[150%]">Home</b>
            <Image
              className="relative w-1.5 h-1.5"
              alt=""
              src="/stars.svg"
              width={100}
              height={100}
            />
            <div className="relative leading-[150%] font-medium">
              Apply for Hayya
            </div>
            <div className="rounded-2xl bg-hayya-flat-corn-normal w-[118px] h-10 overflow-hidden shrink-0 flex flex-col items-center justify-center text-center text-base text-hayya-solid-color-charcoal">
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 h-14 flex flex-row py-4 px-6 box-border items-center justify-center">
                  <b className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px]">
                    Log in
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel1;
