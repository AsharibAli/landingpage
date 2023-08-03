"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

const HeroCarousel2: NextPage = () => {
  const onAFCImageClick = useCallback(() => {
    // Please sync "Hero Carousel - 3" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Hero Carousel - 3" to the project
  }, []);

  return (
    <div className="relative bg-black w-full h-[900px] overflow-hidden text-left text-base text-hayya-ui-02-white font-european-bodyheavy-european">
      <Image
        className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-2xl w-[1444px] h-[900px] object-cover"
        alt=""
        src="/rectangle-31.png"
        width={100}
        height={100}
      />
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.9),_rgba(60,_60,_60,_0.69)_36.46%,_rgba(255,_255,_255,_0))] w-[1440px] h-[911px] mix-blend-multiply" />
      <Image
        className="absolute top-[231px] left-[880px] w-[308.6px] h-[452.88px] object-cover"
        alt=""
        src="/grand-2023.svg"
        width={100}
        height={100}
      />
      <div className="absolute top-[653px] left-[135px] rounded-2xl bg-hayya-flat-corn-normal w-[152px] h-[51px] overflow-hidden flex flex-col items-center justify-center text-center text-hayya-solid-color-charcoal">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 h-14 flex flex-row py-4 px-6 box-border items-center justify-center">
            <b className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px]">
              Learn More
            </b>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-[146px] left-[1008px] w-[52px] h-[57px]"
        alt=""
        src="/splash-stare.svg"
        width={100}
        height={100}
      />
      <div className="absolute top-[671px] left-[939px]" />
      <div className="absolute top-[314px] left-[135px] w-[428px] h-[149px] text-[80px] font-reckless-neue">
        <div className="absolute top-[-29px] left-[0px] leading-[120%] font-semibold inline-block w-[613px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
          <p className="m-0">{`Grand Prix `}</p>
          <p className="m-0">2023</p>
        </div>
      </div>
      <div className="absolute top-[490px] left-[135px] text-[20px] tracking-[0.01em] leading-[30px] font-medium inline-block w-[469px]">
        Get up to speed with everything you need to know about the 2023 Qatar
        Grand Prix, which takes place at the 5.38-kilometre Lusail International
        Circuit on Sunday, October 8.
      </div>
      <div className="absolute top-[252px] left-[135px] tracking-[0.2em] uppercase font-medium">
        the HAYYA EXPerience
      </div>
      <Image
        className="absolute top-[138px] left-[1237px] w-[201.05px] h-[285.82px] object-cover opacity-[0.7] cursor-pointer"
        alt=""
        src="/afc1.svg"
        onClick={onAFCImageClick}
        width={100}
        height={100}
      />
      <Image
        className="absolute top-[495px] left-[1237px] w-[200.63px] h-[265px] object-cover"
        alt=""
        src="/expo1.svg"
        width={100}
        height={100}
      />
      <div className="absolute top-[792px] right-[0px] bg-gray-200 w-[1129px] h-[108px] overflow-hidden text-21xl text-gray-100">
        <div className="absolute top-[4px] left-[0px] w-[1129px] h-[104px]">
          <div className="absolute top-[32px] left-[46px] w-[190px] h-10">
            <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
              01
            </div>
            <div className="absolute top-[2px] left-[51px] w-[147px] flex flex-col items-start justify-start gap-[6px] text-lg text-gray-300">
              <b className="relative leading-[100%] inline-block w-36">
                Doha Expo 2023
              </b>
              <div className="self-stretch relative text-xs leading-[100%] font-medium text-gray-100">
                INFORMATION
              </div>
            </div>
          </div>
          <div className="absolute top-[24px] left-[312px] w-[203.67px] h-14 text-hayya-ui-02-white">
            <div className="absolute top-[-0.25px] left-[-0.25px] box-border w-[0.5px] h-[56.5px] border-r-[0.5px] border-solid border-gray-300" />
            <div className="absolute top-[8px] left-[23.67px] w-[180px] h-10">
              <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
                02
              </div>
              <div className="absolute top-[2px] left-[56.33px] w-32 flex flex-col items-start justify-start gap-[6px] text-lg">
                <b className="relative leading-[100%] inline-block w-[196px]">
                  Grand Prix 2023
                </b>
                <b className="self-stretch relative text-xs leading-[100%]">
                  INFORMATION
                </b>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[24px] left-[592px] w-[203.67px] h-14 cursor-pointer font-helvetica-neue"
            onClick={onGroupContainer1Click}
          >
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
          <div className="absolute top-[-4px] left-[312px] bg-hayya-flat-corn-normal w-6 h-1" />
        </div>
      </div>
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

export default HeroCarousel2;
