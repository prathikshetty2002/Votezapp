import React from "react";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const VotingPanelPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex font-tienne items-center justify-start mx-[auto] p-[79px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start max-w-[1160px] mb-[20px] mx-[auto] w-[100%]">
          <div className="md:h-[289px] h-[453px] relative w-[100%]">
            <div className="absolute bottom-[0] font-tienne md:h-[289px] h-[393px] inset-x-[0] mx-[auto] w-[100%]">
              <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-[auto] p-[37px] sm:px-[20px] w-[auto]">
                <Text
                  className="md:ml-[0] ml-[46px] mt-[17px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Name: Prabhat Shukla
                </Text>
                <Text
                  className="md:ml-[0] ml-[46px] mt-[12px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Age : 20
                </Text>
                <Text
                  className="md:ml-[0] ml-[46px] mt-[11px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Party : Independent
                </Text>
                <Text
                  className="md:ml-[0] ml-[46px] mt-[11px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Education : B.TECH AI&ML
                </Text>
              </div>
              <div className="absolute bg-bluegray_400 border-[5px] border-blue_800 border-solid flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-start mx-[auto] p-[29px] sm:px-[20px] top-[0] w-[100%]">
                <div className="bg-blue_800 border-[3px] border-light_blue_A701 border-solid h-[56px] md:mt-[0] my-[4px] rounded-[50%] w-[56px]"></div>
                <Text
                  className="md:ml-[0] ml-[27px] not-italic text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Prabhat Shukla
                </Text>
                <div className="flex md:flex-1 flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[214px] md:w-[100%] w-[59%]">
                  <Text
                    className="not-italic text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Independent
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[48px] mt-[2px] w-[auto]"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <Img
              src="images/img_vintageglasses.png"
              className="absolute h-[135px] object-cover right-[17%] top-[11%] w-[135px]"
              alt="vintageglasses"
            />
            <Text
              className="absolute font-dmserifdisplay left-[0] not-italic text-left text-white_A700 top-[0] w-[auto]"
              as="h3"
              variant="h3"
            >
              Voting Panel
            </Text>
          </div>
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[4px] mt-[68px] p-[20px] w-[100%]">
            <div className="bg-white_A700 border-[3px] border-light_blue_A701 border-solid h-[56px] md:ml-[0] ml-[9px] md:mt-[0] my-[13px] rounded-[50%] w-[56px]"></div>
            <Text
              className="md:ml-[0] ml-[17px] not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Naredra Modi
            </Text>
            <div className="h-[69px] md:ml-[0] ml-[140px] md:mt-[0] mt-[13px] relative md:w-[100%] w-[59%]">
              <div className="absolute flex flex-row sm:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] top-[3%] w-[100%]">
                <Text
                  className="mb-[14px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  BJP
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[29px] mt-[25px] w-[auto]"
                  alt="arrowright_One"
                />
              </div>
              <Img
                src="images/img_vector.svg"
                className="absolute h-[69px] inset-y-[0] my-[auto] right-[27%] w-[auto]"
                alt="vector"
              />
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[4px] mt-[49px] p-[9px] w-[100%]">
            <div className="bg-white_A700 border-[3px] border-light_blue_A701 border-solid h-[56px] md:ml-[0] ml-[20px] md:mt-[0] my-[24px] rounded-[50%] w-[56px]"></div>
            <Text
              className="md:ml-[0] ml-[27px] not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Rahul Gandhi
            </Text>
            <div className="h-[103px] md:ml-[0] ml-[140px] relative md:w-[100%] w-[58%]">
              <Img
                src="images/img_akariconshand.svg"
                className="absolute h-[103px] inset-y-[0] my-[auto] right-[26%] w-[103px]"
                alt="akariconshand"
              />
              <div className="absolute flex flex-row sm:gap-[40px] inset-x-[0] items-end justify-between mx-[auto] top-[26%] w-[100%]">
                <Text
                  className="not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Congress
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[29px] mt-[12px] w-[auto]"
                  alt="arrowright_Two"
                />
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[4px] mt-[49px] p-[29px] sm:px-[20px] w-[100%]">
            <div className="bg-white_A700 border-[3px] border-light_blue_A701 border-solid h-[56px] md:mt-[0] my-[4px] rounded-[50%] w-[56px]"></div>
            <Text
              className="md:ml-[0] ml-[34px] not-italic text-black_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Arvind Kejriwal
            </Text>
            <div className="flex md:flex-1 flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[96px] md:w-[100%] w-[60%]">
              <Text
                className="mt-[2px] not-italic text-black_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                AAP
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-[29px] w-[auto]"
                alt="arrowright_Three"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start md:ml-[0] ml-[5px] mt-[29px] md:w-[100%] w-[84%]">
            <div className="bg-gray_400 h-[31px] mb-[7px] md:mt-[0] mt-[2px] w-[31px]"></div>
            <Text
              className="not-italic text-left text-white_A700 w-[auto]"
              as="h4"
              variant="h4"
            >
              I have selected Baburao from independent as my candidate.
            </Text>
          </div>
          <Button
            className="common-pointer bg-blue_800 cursor-pointer font-normal leading-[normal] min-w-[314px] md:ml-[0] ml-[425px] mt-[25px] not-italic py-[10px] sm:text-[26px] md:text-[28px] text-[30px] text-center text-white_A700 w-[auto]"
            onClick={() => navigate("/frametwelve")}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </>
  );
};

export default VotingPanelPage;
