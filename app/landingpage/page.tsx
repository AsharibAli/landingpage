"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

const LandingPage: NextPage = () => {
  const onGrandPrix2023Click = useCallback(() => {
    // Please sync "Hero Carousel - 2" to the project
  }, []);

  const onPreImageClick = useCallback(() => {
    // Please sync "Hero Carousel - 4" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Hero Carousel - 2" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Hero Carousel - 3" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "Hero Carousel - 4" to the project
  }, []);

  const onFAQTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-black w-full h-[900px] overflow-hidden text-left text-base text-foundation-flat-basic-white-normal font-european-bodyheavy-european">
      <div className="absolute top-[893px] left-[0px] bg-whitesmoke [filter:blur(4px)] w-[1440px] h-[125px]" />
      <Image
        className="absolute top-[0px] left-[0px] w-[1514px] h-[944px] object-cover"
        alt=""
        src="/rectangle-29@2x.png"
        width={100}
        height={100}
      />
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.9),_rgba(60,_60,_60,_0.69)_36.46%,_rgba(255,_255,_255,_0))] w-[1440px] h-[911px] mix-blend-multiply" />
      <div className="absolute top-[664px] left-[135px] rounded-2xl bg-hayya-flat-corn-normal w-[152px] h-[51px] overflow-hidden flex flex-col items-center justify-center text-center text-hayya-solid-color-charcoal">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 h-14 flex flex-row py-4 px-6 box-border items-center justify-center">
            <b className="self-stretch flex-1 relative tracking-[0.01em] leading-[24px]">
              Learn More
            </b>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-[146px] left-[1010.19px] w-[52px] h-[57px]"
        alt=""
        src="/splash-stare.svg"
        width={100}
        height={100}
      />
      <div className="absolute top-[280px] left-[782px] w-[242px] h-[354px] opacity-[0.6]" />
      <Image
        className="absolute top-[221.84px] left-[861px] w-[341.79px] h-[460.95px] object-cover"
        alt=""
        src="/expo-2023@2x.png"
        width={100}
        height={100}
      />
      <div className="absolute top-[671px] left-[939px]" />
      <div className="absolute top-[262px] left-[135px] w-[419px] h-52 text-[80px] font-reckless-neue">
        <div className="absolute top-[23px] left-[-6px] leading-[120%] font-semibold inline-block w-[570px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
          <p className="m-0">Qatar Expo</p>
          <p className="m-0">2023</p>
        </div>
        <div className="absolute top-[226px] left-[0px] text-xl tracking-[0.01em] leading-[30px] font-medium font-european-bodyheavy-european inline-block w-[469px]">
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
        src="/door@2x.png"
        width={100}
        height={100}
      />
      <Image
        className="absolute top-[138.45px] left-[1229px] w-[199.71px] h-[285.15px] object-cover cursor-pointer"
        alt=""
        src="/grand-prix-2023@2x.png"
        onClick={onGrandPrix2023Click}
        width={100}
        height={100}
      />
      <Image
        className="absolute top-[141px] left-[1431px] w-[201.05px] h-[279.82px] object-cover opacity-[0.7]"
        alt=""
        src="/mask-group@2x.png"
        width={100}
        height={100}
      />
      <Image
        className="absolute top-[498px] left-[1229px] w-[206px] h-[272.24px] object-cover cursor-pointer"
        alt=""
        src="/pre@2x.png"
        onClick={onPreImageClick}
        width={100}
        height={100}
      />
      <div className="absolute top-[792px] right-[0px] bg-gray-300 w-[1129px] h-[108px] overflow-hidden text-21xl text-gray-200">
        <div className="absolute top-[0px] left-[0px] bg-hayya-flat-corn-normal w-6 h-1" />
        <div className="absolute top-[4px] left-[0px] w-[1129px] h-[104px]">
          <div className="absolute top-[32px] left-[46px] w-[190px] h-10 text-foundation-flat-basic-white-normal">
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
            <div className="absolute top-[-0.25px] left-[-0.25px] box-border w-[0.5px] h-[56.5px] border-r-[0.5px] border-solid border-gray-400" />
            <div className="absolute top-[8px] left-[23.67px] w-[180px] h-10">
              <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
                02
              </div>
              <div className="absolute top-[2px] left-[56.33px] w-32 flex flex-col items-start justify-start gap-[6px] text-lg text-gray-400">
                <b className="relative leading-[100%] inline-block w-[196px]">
                  Grand Prix 2023
                </b>
                <b className="self-stretch relative text-xs leading-[100%] text-gray-200">
                  INFORMATION
                </b>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[24px] left-[592px] w-[203.67px] h-14 cursor-pointer font-helvetica-neue"
            onClick={onGroupContainer1Click}
          >
            <div className="absolute top-[-0.25px] left-[-0.25px] box-border w-[0.5px] h-[56.5px] border-r-[0.5px] border-solid border-gray-400" />
            <div className="absolute top-[8px] left-[23.67px] w-[180px] h-10">
              <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
                03
              </div>
              <div className="absolute top-[2px] left-[51.33px] w-[175px] flex flex-col items-start justify-start gap-[6px] text-lg text-gray-400 font-european-bodyheavy-european">
                <b className="relative leading-[100%] inline-block w-[178px]">{`AFC Asian Cup 2023 `}</b>
                <b className="self-stretch relative text-xs leading-[100%] text-gray-200">
                  INFORMATION
                </b>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[24px] left-[872px] w-[209.33px] h-14 cursor-pointer"
            onClick={onGroupContainer2Click}
          >
            <div className="absolute top-[-0.25px] left-[-0.25px] box-border w-[0.5px] h-[56.5px] border-r-[0.5px] border-solid border-gray-400" />
            <div className="absolute top-[8px] left-[24.33px] w-[185px] h-10">
              <div className="absolute top-[0px] left-[0px] leading-[100%] font-medium">
                04
              </div>
              <div className="absolute top-[2px] left-[58.67px] w-[134px] flex flex-col items-start justify-start gap-[6px] text-lg text-gray-400 font-helvetica-neue">
                <b className="relative leading-[100%] inline-block w-36">
                  Abu-Samra Pass
                </b>
                <b className="self-stretch relative text-xs leading-[100%] text-gray-200">
                  INFORMATION
                </b>
              </div>
            </div>
          </div>
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
                src="/general--chevron-down.svg"
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
                src="/medical--eye.svg"
                width={100}
                height={100}
              />
              <div className="relative leading-[150%] font-medium">
                Accessibility
              </div>
              <Image
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/general--chevron-down1.svg"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="box-border w-[1440px] flex flex-row py-4 px-20 items-center justify-between border-b-[1px] border-solid border-gray-400">
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
              src="/stars1.svg"
              width={100}
              height={100}
            />
            <div
              className="relative leading-[150%] font-medium cursor-pointer"
              onClick={onFAQTextClick}
            >
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
      <div className="absolute top-[900px] left-[0px] bg-whitesmoke w-[1440px] h-[5175px] overflow-hidden text-center text-3xl text-hayya-solid-color-charcoal">
        <div
          className="absolute top-[1036px] left-[-2px] bg-khaki-100 w-[1440px] h-[1630px]"
          data-scroll-to="rectangle"
        />
        <Image
          className="absolute top-[1284px] left-[644px] w-[152.5px] h-0"
          alt=""
          src="/vector-1.svg"
          width={100}
          height={100}
        />
        <div className="absolute top-[2214.14px] left-[185px] w-[237px] h-[305.86px] text-left">
          <div className="absolute top-[0px] left-[2px] w-[234px] h-[225.86px]">
            <b className="absolute top-[126.86px] left-[52px] leading-[120%] inline-block w-[130px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
              Tourist Visa
            </b>
            <div className="absolute top-[162.86px] left-[0px] text-sm leading-[150%] font-medium text-gray-100 text-center inline-block w-[234px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
              Are you planning to come to Qatar for visiting its beautiful
              spots? Request Hayya to enter the country
            </div>
            <Image
              className="absolute h-[27%] w-[26.07%] top-[0%] right-[37.18%] bottom-[73%] left-[36.75%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-7762.svg"
              width={100}
              height={100}
            />
            <div className="absolute top-[81.86px] left-[89px] rounded-2xl flex flex-col py-1 px-2 items-center justify-center text-xs border-[1px] border-solid border-gainsboro">
              <div className="flex flex-row items-center justify-center">
                <b className="relative tracking-[0.01em] leading-[24px]">
                  Type A
                </b>
              </div>
            </div>
          </div>
          <div className="absolute top-[249.86px] left-[0px] rounded-2xl box-border w-[237px] overflow-hidden flex flex-col items-center justify-center text-center text-base border-[1px] border-solid border-hayya-solid-color-charcoal">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-row py-4 px-6 items-center justify-center">
                  <b className="relative tracking-[0.01em] leading-[24px]">
                    Apply for Tourist Visa
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2215px] left-[592px] w-64 h-[305px]">
          <div className="absolute h-[73.77%] w-full top-[0%] right-[0%] bottom-[26.23%] left-[0%]">
            <b className="absolute w-[96.88%] top-[56%] left-[1.56%] leading-[120%] inline-block [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">{`Conferences & Events`}</b>
            <div className="absolute w-full top-[72%] left-[0%] text-sm leading-[150%] font-medium text-gray-100 inline-block [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
              Will you attend an event or conference hosted in Qatar? To
              participate you need to get an Hayya
            </div>
            <Image
              className="absolute h-[27.11%] w-[23.83%] top-[0%] right-[37.89%] bottom-[72.89%] left-[38.28%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-7763.svg"
              width={100}
              height={100}
            />
            <div className="absolute h-[14.22%] w-[21.48%] top-[36%] right-[39.06%] bottom-[49.78%] left-[39.45%] rounded-2xl box-border flex flex-col py-1 px-2 items-center justify-center text-left text-xs border-[1px] border-solid border-gainsboro">
              <div className="flex flex-row items-center justify-center">
                <b className="relative tracking-[0.01em] leading-[24px]">
                  Type B
                </b>
              </div>
            </div>
          </div>
          <div className="absolute h-[18.36%] w-[92.58%] top-[81.64%] right-[3.52%] bottom-[0%] left-[3.91%] rounded-2xl box-border overflow-hidden flex flex-col items-center justify-center text-base border-[1px] border-solid border-hayya-solid-color-charcoal">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-row py-4 px-6 items-center justify-center">
                  <b className="relative tracking-[0.01em] leading-[24px]">
                    Apply for Hayya Visit
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2214.14px] left-[1018px] w-[237px] h-[305.86px] text-left">
          <div className="absolute top-[0px] left-[2px] w-[234px] h-[225.86px]">
            <b className="absolute top-[126.86px] left-[34px] leading-[120%] inline-block w-[165px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
              Hayya with Me
            </b>
            <div className="absolute top-[162.86px] left-[0px] text-sm leading-[150%] font-medium text-gray-100 text-center inline-block w-[234px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
              Do you receive a voucher code by a family member or a friends?
              Redeem your code and request Hayya.
            </div>
            <Image
              className="absolute h-[27%] w-[26.07%] top-[0%] right-[37.18%] bottom-[73%] left-[36.75%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-7764.svg"
              width={100}
              height={100}
            />
            <div className="absolute top-[81.86px] left-[89px] rounded-2xl flex flex-col py-1 px-2 items-center justify-center text-xs border-[1px] border-solid border-gainsboro">
              <div className="flex flex-row items-center justify-center">
                <b className="relative tracking-[0.01em] leading-[24px]">
                  Type C
                </b>
              </div>
            </div>
          </div>
          <div className="absolute top-[249.86px] left-[0px] rounded-2xl box-border w-[237px] overflow-hidden flex flex-col items-center justify-center text-center text-base border-[1px] border-solid border-hayya-solid-color-charcoal">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-row py-4 px-6 items-center justify-center">
                  <b className="relative tracking-[0.01em] leading-[24px]">
                    Apply for Hayya with me
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute top-[1878px] left-[0px] w-[1440px] h-[788px] hidden"
          alt=""
          src="/mask-group1.svg"
          width={100}
          height={100}
        />
        <Image
          className="absolute h-[2.78%] w-[10%] top-[20.98%] right-[3.26%] bottom-[76.24%] left-[86.74%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/star.svg"
          width={100}
          height={100}
        />
        <Image
          className="absolute h-[3.63%] w-[13.06%] top-[0%] right-[81.46%] bottom-[96.37%] left-[5.49%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/star1.svg"
          width={100}
          height={100}
        />
        <Image
          className="absolute h-[1.93%] w-[6.94%] top-[34.79%] right-[85.69%] bottom-[63.28%] left-[7.36%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/star2.svg"
          width={100}
          height={100}
        />
        <Image
          className="absolute h-[2.74%] w-[9.86%] top-[52.29%] right-[6.39%] bottom-[44.97%] left-[83.75%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/star3.svg"
          width={100}
          height={100}
        />
        <Image
          className="absolute h-[3.98%] w-[14.31%] top-[70.54%] right-[80.9%] bottom-[25.48%] left-[4.79%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/star4.svg"
          width={100}
          height={100}
        />
        <div className="absolute top-[4829px] left-[0px] bg-hayya-solid-color-charcoal w-[1440px] flex flex-col py-10 px-20 box-border items-start justify-start text-foundation-flat-basic-white-normal">
          <div className="self-stretch flex flex-row items-start justify-start gap-[120px]">
            <div className="w-[312px] flex flex-col items-start justify-start gap-[16px]">
              <div className="relative text-xs tracking-[0.05em] leading-[20px] uppercase font-medium text-left inline-block w-[300px]">
                Legal terms
              </div>
              <b className="relative tracking-[0.01em] leading-[32px]">
                Term of use
              </b>
              <b className="relative tracking-[0.01em] leading-[32px]">
                Privacy Policy
              </b>
              <b className="relative tracking-[0.01em] leading-[32px]">
                Cookie Policy
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative text-xs tracking-[0.05em] leading-[20px] uppercase font-medium text-left inline-block w-[300px]">
                Support
              </div>
              <b className="relative tracking-[0.01em] leading-[32px]">FAQ</b>
              <b className="relative tracking-[0.01em] leading-[32px]">
                Contact
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-10 px-0 items-start justify-start">
            <div className="self-stretch relative rounded-sm box-border h-0 opacity-[0.12] border-[1px] border-solid border-foundation-flat-basic-white-normal" />
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-sm">
            <Image
              className="self-stretch relative max-h-full w-[300px] overflow-hidden shrink-0"
              alt=""
              src="/hayya-logo.svg"
            />
            <div className="relative leading-[150%] font-medium inline-block w-[300px] shrink-0">
              © 2023 Qatar Hayya | All rights reserved
            </div>
            <div className="w-[300px] flex flex-row items-center justify-end gap-[40px]">
              <Image
                className="relative w-6 h-6"
                alt=""
                src="/social--facebook.svg"
              />
              <Image
                className="relative w-6 h-6"
                alt=""
                src="/social--instagram.svg"
              />
              <div className="relative w-6 h-6">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <Image
                  className="absolute h-[64.47%] w-[91.67%] top-[16.67%] right-[4.17%] bottom-[18.86%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <Image
                className="relative w-6 h-6"
                alt=""
                src="/social--twitter.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[3770px] left-[626px] w-[186px] flex flex-row items-center justify-start gap-[8px] text-lg">
          <Image className="relative w-4 h-4" alt="" src="/stars2.svg" />
          <div className="relative tracking-[0.1em] leading-[20px] uppercase font-black">
            EXPLORE MORE
          </div>
        </div>
        <div className="absolute top-[3814px] left-[525px] text-[45px] leading-[120%] font-semibold font-reckless-neue text-left inline-block w-[389px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
          Hayya Mobile App
        </div>
        <div className="absolute top-[3944px] left-[120px] w-[1323.95px] h-[638.6px] text-left text-[30px] text-black">
          <div className="absolute top-[92.11px] left-[315.35px] bg-khaki-200 w-[1008.6px] h-[469.28px]" />
          <Image
            className="absolute top-[422px] left-[499px] w-[287.4px] h-[40.77px] overflow-hidden"
            alt=""
            src="/badges.svg"
          />
          <b className="absolute top-[169px] left-[499px] leading-[44px] inline-block text-darkslategray w-[643px] h-[90px]">
            <p className="m-0">{`Manage all of your activities through `}</p>
            <p className="m-0">a unified window.</p>
          </b>
          <div className="absolute top-[86.07px] left-[0px] shadow-[7.886825084686279px_11.83023738861084px_23.66px_rgba(41,_41,_42,_0.5)] w-[289.36px] h-[578.73px] [transform:_rotate(-17.3deg)] [transform-origin:0_0]">
            <Image
              className="absolute h-[94.42%] w-[87.21%] top-[3.02%] right-[6.28%] bottom-[2.56%] left-[6.51%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/screen@2x.png"
            />
            <Image
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/iphone-x@2x.png"
            />
          </div>
          <div className="absolute top-[378px] left-[499px] text-lg leading-[28px] inline-block w-[158px] h-[29px]">
            <span className="font-medium">{`Get the App `}</span>
            <b>NOW!</b>
          </div>
          <div className="absolute top-[286px] left-[498.11px] text-xl leading-[32px] inline-block w-[571.42px] h-[65.4px]">
            Download the app to manage your Hayya ID, keep track of your events
            and stay on track with your travel plan.
          </div>
        </div>
        <div className="absolute top-[1201px] left-[calc(50%_-_169px)] text-29xl leading-[120%] font-semibold font-reckless-neue text-left inline-block w-[337px] h-[50px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
          Hayya Journey
        </div>
        <div className="absolute top-[1961px] left-[calc(50%_-_212px)] text-29xl leading-[120%] font-semibold font-reckless-neue text-left inline-block w-[424px] h-[50px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
          Hayya Enrty Visa’s
        </div>
        <div className="absolute top-[2964px] left-[calc(50%_-_147px)] text-29xl leading-[120%] font-semibold font-reckless-neue inline-block w-[294px] h-[65px] [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
          Qatar Events
        </div>
        <div className="absolute top-[3097px] left-[136px] w-[277.95px] h-[399.94px] text-left text-base text-darkgray">
          <div className="absolute top-[303.05px] left-[0px] w-[251.51px] h-[96.89px]">
            <div className="absolute top-[70.09px] left-[0px] leading-[26px] inline-block w-[93.8px] h-[26.8px]">
              Oct 12, 2023
            </div>
            <div className="absolute top-[0px] left-[0px] text-3xl leading-[26px] font-medium text-hayya-solid-color-charcoal inline-block w-[251.51px] h-[53.6px]">
              <p className="m-0">Doha Expo</p>
              <p className="m-0">2023</p>
            </div>
          </div>
          <Image
            className="absolute top-[0px] left-[0px] rounded-2xl w-[277.95px] h-[277.58px] object-cover"
            alt=""
            src="/rectangle-291@2x.png"
          />
        </div>
        <div className="absolute top-[3097px] left-[445px] w-[279px] h-[399.94px] text-left text-base text-darkgray">
          <div className="absolute top-[303.05px] left-[0.23px] w-[251.51px] h-[96.89px]">
            <div className="absolute top-[70.09px] left-[0px] leading-[26px] inline-block w-[91.74px] h-[26.8px]">
              July 9, 2023
            </div>
            <div className="absolute top-[0px] left-[0px] text-3xl leading-[26px] font-medium text-hayya-solid-color-charcoal inline-block w-[251.51px] h-[53.6px]">
              <p className="m-0">Grand Prix</p>
              <p className="m-0">2023</p>
            </div>
          </div>
          <Image
            className="absolute top-[0px] left-[0px] rounded-lg w-[279px] h-[278px] object-cover"
            alt=""
            src="/rectangle-31@2x.png"
          />
        </div>
        <div className="absolute top-[3097px] left-[754.23px] w-[278.31px] h-[399.94px] text-left text-base text-darkgray">
          <div className="absolute top-[303.05px] left-[0.23px] w-[251.51px] h-[96.89px]">
            <div className="absolute top-[70.09px] left-[0px] leading-[26px] inline-block w-[97.92px] h-[26.8px]">
              Jan 23, 2024
            </div>
            <div className="absolute top-[0px] left-[0px] text-3xl leading-[26px] font-medium text-hayya-solid-color-charcoal inline-block w-[251.51px] h-[53.6px]">
              <p className="m-0">AFC Asian</p>
              <p className="m-0">{`Cup 2023 `}</p>
            </div>
          </div>
          <Image
            className="absolute top-[0px] left-[0px] rounded-lg w-[278.31px] h-[278.31px] object-cover"
            alt=""
            src="/image@2x.png"
          />
        </div>
        <div className="absolute top-[3097px] left-[1063.69px] w-[278.31px] h-[399.94px] text-left text-base text-darkgray">
          <div className="absolute top-[303.05px] left-[0px] w-[251.51px] h-[96.89px]">
            <div className="absolute top-[70.09px] left-[0px] leading-[26px] inline-block w-[88.65px] h-[26.8px]">
              Oct 5, 2023
            </div>
            <div className="absolute top-[0px] left-[0px] text-3xl leading-[26px] font-medium text-hayya-solid-color-charcoal inline-block w-[251.51px] h-[53.6px]">
              <p className="m-0">Geneva Motor</p>
              <p className="m-0">Show</p>
            </div>
          </div>
          <Image
            className="absolute top-[0px] left-[0px] rounded-lg w-[278.31px] h-[278.31px] object-cover"
            alt=""
            src="/image1@2x.png"
          />
          <Image
            className="absolute top-[0px] left-[0.31px] rounded-lg w-[278px] h-[278px] object-cover"
            alt=""
            src="/rectangle-32@2x.png"
          />
        </div>
        <Image
          className="absolute top-[3530px] left-[709px] w-14 h-3.5"
          alt=""
          src="/slider.svg"
        />
        <div className="absolute top-[1161px] left-[631px] w-[182px] h-5 text-lg">
          <div className="absolute top-[0px] left-[0px] w-[182px] h-5">
            <Image
              className="absolute top-[2px] left-[0px] w-4 h-4"
              alt=""
              src="/stars3.svg"
            />
            <div className="absolute top-[0px] left-[28px] tracking-[0.1em] leading-[20px] uppercase font-black">
              How it Goes?
            </div>
          </div>
        </div>
        <div className="absolute top-[1929px] left-[619px] w-[201px] h-5 text-lg">
          <div className="absolute top-[0px] left-[0px] w-[201px] h-5">
            <div className="absolute top-[0px] left-[0px] w-[201px] h-5">
              <Image
                className="absolute top-[1px] left-[0px] w-4 h-4"
                alt=""
                src="/stars4.svg"
              />
              <div className="absolute top-[0px] left-[31px] tracking-[0.1em] leading-[20px] uppercase font-black">
                How to apply?
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2918px] left-[603px] w-[233px] h-5 text-lg">
          <div className="absolute top-[0px] left-[0px] w-[233px] h-5">
            <Image
              className="absolute top-[1px] left-[0px] w-4 h-4"
              alt=""
              src="/stars5.svg"
            />
            <div className="absolute top-[0px] left-[34px] tracking-[0.1em] leading-[20px] uppercase font-black">
              WHat’s Trending
            </div>
          </div>
        </div>
        <div className="absolute top-[78px] left-[548px] w-[343px] h-[123px] opacity-[0] text-lg">
          <Image
            className="absolute top-[123px] left-[96px] w-[152.5px] h-0"
            alt=""
            src="/vector-5.svg"
          />
          <div className="absolute top-[0px] left-[78px] w-[186px] flex flex-row items-center justify-start gap-[8px]">
            <Image className="relative w-4 h-4" alt="" src="/stars6.svg" />
            <div className="relative tracking-[0.1em] leading-[20px] uppercase font-black">
              What you get
            </div>
          </div>
          <div className="absolute top-[44px] left-[calc(50%_-_171.5px)] text-29xl leading-[120%] font-semibold font-reckless-neue text-left inline-block w-[343px] h-12 [text-shadow:0px_12px_40px_rgba(0,_0,_0,_0.04)]">
            Hayya Services
          </div>
        </div>
        <div className="absolute top-[1350px] left-[173px] w-[318px] h-[212px]">
          <div className="absolute top-[130px] left-[0px] w-[318px] h-[92px]">
            <b className="absolute top-[0px] left-[51.5px] capitalize">
              Know your Visa Type
            </b>
            <div className="absolute top-[46px] left-[13px] text-sm leading-[20px] font-medium text-black inline-block w-[291px]">
              Three VISA types are available based on your purpose of travel
              and/or your corresponding eligibility criteria.
            </div>
          </div>
        </div>
        <Image
          className="absolute h-[1.56%] w-[5.63%] top-[26.25%] right-[74.17%] bottom-[72.18%] left-[20.21%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-77621.svg"
        />
        <Image
          className="absolute h-[1.56%] w-[5.63%] top-[26.25%] right-[46.94%] bottom-[72.18%] left-[47.43%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-4526.svg"
        />
        <b className="absolute top-[1481px] left-[632.5px] capitalize text-gray-100">
          Fill In three Stages
        </b>
        <div className="absolute top-[1522px] left-[583px] text-sm leading-[20px] font-medium text-black inline-block w-[293px]">
          Your personal, residence, and accommodation information will be
          collected and processed before approving your VISA.
        </div>
        <Image
          className="absolute top-[1350px] left-[402px] w-[248px] h-[27.67px]"
          alt=""
          src="/arc-2.svg"
        />
        <Image
          className="absolute top-[1450px] left-[796px] w-[248px] h-[27.67px]"
          alt=""
          src="/arc-1.svg"
        />
        <Image
          className="absolute h-[3.84%] w-[13.82%] top-[25.09%] right-[16.18%] bottom-[71.06%] left-[70%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-77641.svg"
        />
        <div className="absolute top-[1350px] left-[949px] w-[318px] h-[212px]">
          <div className="absolute top-[140px] left-[0px] w-[318px] h-[92px]">
            <b className="absolute top-[-7px] left-[47.5px] capitalize">
              Get your Hayya Card!
            </b>
            <div className="absolute top-[32px] left-[33px] text-sm leading-[20px] font-medium text-black inline-block w-[271px]">
              <p className="m-0">
                After the provided information is reviewed and approved, your
                hayya digital card
              </p>
              <p className="m-0">will be issued in no time.</p>
            </div>
          </div>
          <Image
            className="absolute h-[19.81%] w-[13.21%] top-[12.26%] right-[43.4%] bottom-[67.92%] left-[43.4%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/travel--plane.svg"
          />
        </div>
        <div className="absolute top-[483px] left-[-1034px] w-[3506.11px] h-[548.17px] opacity-[0] text-left text-base text-foundation-flat-basic-white-normal">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[800px]">
            <div className="relative w-[276.11px] h-[548.17px] text-xl">
              <div className="absolute top-[0px] left-[0px] rounded-t-181xl rounded-b-lg bg-foundation-flat-basic-white-normal w-[275.64px] h-[548.17px]" />
              <Image
                className="absolute top-[0px] left-[0.11px] w-[276px] h-[548px] object-cover"
                alt=""
                src="/group-52@2x.png"
              />
              <div className="absolute top-[367px] left-[28.11px] leading-[27.28px] font-black">
                Accommodation
              </div>
              <div className="absolute top-[406px] left-[27.11px] w-[84px] h-2 text-sm">
                <div className="absolute top-[0px] left-[0px] leading-[5.52px] font-medium inline-block w-[84px] h-2">
                  Description
                </div>
              </div>
              <div className="absolute w-[66.28%] top-[calc(50%_+_187.91px)] right-[16.7%] left-[17.02%] h-14 text-center text-base">
                <div className="absolute w-full top-[calc(50%_-_28px)] right-[0%] left-[0%] rounded-2xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-hayya-flat-corn-normal">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-col py-0 px-6 items-center justify-center">
                      <div className="self-stretch flex flex-row py-4 px-6 items-center justify-center">
                        <b className="relative tracking-[0.01em] leading-[24px]">
                          Learn More
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[276px] h-[548.17px]">
              <div className="absolute top-[0px] left-[0px] rounded-t-181xl rounded-b-2xl bg-foundation-flat-basic-white-normal w-[275.64px] h-[548.17px]" />
              <div className="absolute top-[0px] left-[0px] w-[276px] h-[548px] text-center">
                <Image
                  className="absolute top-[0px] left-[0px] w-[276px] h-[548px] object-cover"
                  alt=""
                  src="/group-51@2x.png"
                />
                <div className="absolute w-[66.3%] top-[calc(50%_+_188px)] right-[16.7%] left-[16.99%] h-14">
                  <div className="absolute w-full top-[calc(50%_-_28px)] right-[0%] left-[0%] rounded-2xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-hayya-flat-corn-normal">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="flex-1 flex flex-col py-0 px-6 items-center justify-center">
                        <div className="self-stretch flex flex-row py-4 px-6 items-center justify-center">
                          <b className="relative tracking-[0.01em] leading-[24px]">
                            Learn More
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[367px] left-[28px] text-xl leading-[27.28px] font-black">
                Transportation
              </div>
              <div className="absolute top-[406px] left-[28px] w-[85px] h-2 text-sm">
                <div className="absolute top-[0px] left-[0px] leading-[5.52px] font-medium inline-block w-[85px] h-2">
                  Description
                </div>
              </div>
            </div>
            <div className="relative w-[277px] h-[548.17px]">
              <div className="absolute top-[0px] left-[1px] rounded-t-181xl rounded-b-lg bg-foundation-flat-basic-white-normal w-[275.64px] h-[548.17px]" />
              <div className="absolute top-[0px] left-[0px] w-[277px] h-[548px] text-center">
                <Image
                  className="absolute top-[0px] left-[0px] w-[277px] h-[548px] object-cover"
                  alt=""
                  src="/group-511@2x.png"
                />
                <div className="absolute w-[66.06%] top-[calc(50%_+_188px)] right-[17.01%] left-[16.93%] h-14">
                  <div className="absolute w-full top-[calc(50%_-_28px)] right-[0%] left-[0%] rounded-2xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-hayya-flat-corn-normal">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="flex-1 flex flex-col py-0 px-6 items-center justify-center">
                        <div className="self-stretch flex flex-row py-4 px-6 items-center justify-center">
                          <b className="relative tracking-[0.01em] leading-[24px]">
                            Learn More
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[367px] left-[27px] text-xl leading-[27.28px] font-black inline-block w-[163px] h-[21px]">
                Health Insurance
              </div>
              <div className="absolute top-[406px] left-[27px] w-[73px] h-2 text-sm">
                <div className="absolute top-[0px] left-[0px] leading-[5.52px] font-medium inline-block w-[73px] h-2">
                  Description
                </div>
              </div>
            </div>
            <div className="relative w-[277px] h-[548.17px]">
              <div className="absolute top-[0px] left-[1px] rounded-t-181xl rounded-b-2xl bg-foundation-flat-basic-white-normal w-[275.64px] h-[548.17px]" />
              <div className="absolute top-[0px] left-[0px] w-[277px] h-[548px] text-center">
                <Image
                  className="absolute top-[0px] left-[0px] w-[277px] h-[548px] object-cover"
                  alt=""
                  src="/group-512@2x.png"
                />
                <div className="absolute w-[66.06%] top-[calc(50%_+_188px)] right-[17.01%] left-[16.93%] h-14">
                  <div className="absolute w-full top-[calc(50%_-_28px)] right-[0%] left-[0%] rounded-2xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-hayya-flat-corn-normal">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="flex-1 flex flex-col py-0 px-6 items-center justify-center">
                        <div className="self-stretch flex flex-row py-4 px-6 items-center justify-center">
                          <b className="relative tracking-[0.01em] leading-[24px]">
                            Learn More
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[367px] left-[29px] text-xl leading-[27.28px] font-black">
                Venue Access
              </div>
              <div className="absolute top-[407px] left-[29px] w-[73px] h-2 text-sm">
                <div className="absolute top-[0px] left-[0px] leading-[5.52px] font-medium inline-block w-[73px] h-2">
                  Description
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2089px] left-[calc(50%_+_62px)] text-base font-medium text-black">
          Your Have?
        </div>
        <div className="absolute top-[2087px] left-[calc(50%_-_264px)] w-[223px] h-[75px] text-base text-black">
          <div className="absolute top-[0px] left-[calc(50%_-_103.5px)] font-medium">
            You’re?
          </div>
          <div className="absolute top-[30px] left-[0px] shadow-[0px_8px_18px_rgba(0,_0,_0,_0.07)] w-[223px] h-[45px] text-left text-sm text-dImageray">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-foundation-flat-basic-white-normal w-[223px] h-[45px]" />
            <div className="absolute top-[12px] left-[calc(50%_-_97.91px)] inline-block w-[148.67px]">
              Choose your nationality
            </div>
          </div>
          <Image
            className="absolute top-[41px] left-[183px] w-6 h-6"
            alt=""
            src="/vuesaxlineararrowdown.svg"
          />
        </div>
        <div className="absolute top-[2117px] left-[775px] shadow-[0px_8px_18px_rgba(0,_0,_0,_0.07)] w-[233px] h-[45px] text-left text-sm text-dImageray">
          <div className="absolute top-[0px] left-[0px] w-[233px] h-[45px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-foundation-flat-basic-white-normal w-[233px] h-[45px]" />
            <div className="absolute top-[12px] left-[calc(50%_-_102.3px)] inline-block w-[182.89px] h-[18px]">
              Country of residence
            </div>
          </div>
          <Image
            className="absolute top-[11px] left-[190px] w-6 h-6"
            alt=""
            src="/vuesaxlineararrowdown1.svg"
          />
        </div>
        <Image
          className="absolute top-[2304px] left-[507px] w-[155px] h-0"
          alt=""
          src="/line-3.svg"
        />
        <Image
          className="absolute top-[2304px] left-[933px] w-[155px] h-0"
          alt=""
          src="/line-4.svg"
        />
        <Image
          className="absolute h-[2.28%] w-[8.19%] top-[69.58%] right-[4.58%] bottom-[28.14%] left-[87.22%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/star5.svg"
        />
        <div className="absolute h-[0.35%] w-[1.11%] top-[33.46%] right-[49.51%] bottom-[66.2%] left-[49.38%]" />
        <Image
          className="absolute h-[0.35%] w-[44.79%] top-[33.47%] right-[28.33%] bottom-[66.18%] left-[26.88%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-51187.svg"
        />
        <Image
          className="absolute top-[3039px] left-[644px] w-[152.5px] h-0"
          alt=""
          src="/vector-2.svg"
        />
        <Image
          className="absolute top-[3883px] left-[644px] w-[152.5px] h-0"
          alt=""
          src="/vector-4.svg"
        />
        <Image
          className="absolute top-[2034px] left-[644px] w-[152.5px] h-0"
          alt=""
          src="/vector-3.svg"
        />
        <Image
          className="absolute top-[2973px] left-[1219px] w-[124px] h-12"
          alt=""
          src="/group-51190.svg"
        />
        <Image
          className="absolute top-[229px] left-[819px] w-[621px] h-[742px] opacity-[0]"
          alt=""
          src="/group-51192.svg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
