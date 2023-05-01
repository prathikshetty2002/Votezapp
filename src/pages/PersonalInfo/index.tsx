import React from "react";

import { Text, Line, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const PersonalInfoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex flex-col font-dmserifdisplay gap-[123px] sm:gap-[40px] md:gap-[40px] justify-start mx-[auto] p-[74px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex items-end max-w-[1083px] mx-[auto] sm:pl-[20px] pl-[336px] md:pl-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end w-[100%]">
            <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[20%]">
              <Text
                className="not-italic text-left text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Personal Info
              </Text>
              <Line className="bg-blue_801 h-[3px] w-[100%]" />
            </div>
            <Text
              className="common-pointer md:ml-[0] ml-[89px] not-italic text-left text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
              onClick={() => navigate("/electionpage")}
            >
              Elections
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[91px] not-italic text-left text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
              onClick={() => navigate("/frametwelve")}
            >
              Contact
            </Text>
            <div
              className="common-pointer h-[35px] md:ml-[0] ml-[91px] relative md:w-[100%] w-[19%]"
              onClick={() => navigate("/rules")}
            >
              <div className="absolute bg-blue_800 h-[34px] inset-x-[0] mx-[auto] rounded-[5px] top-[0] w-[100%]"></div>
              <Text
                className="absolute h-[100%] inset-[0] justify-center m-[auto] not-italic text-left text-white_A700 w-[max-content]"
                as="h5"
                variant="h5"
              >
                Vote
              </Text>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start mb-[127px] md:ml-[0] ml-[125px] md:w-[100%] w-[75%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[30%]">
              <Img
                src="images/img_group6.svg"
                className="h-[275px] w-[auto]"
                alt="groupSix"
              />
              <Button className="bg-blue_800 cursor-pointer font-normal leading-[normal] min-w-[282px] mt-[61px] not-italic py-[12px] text-[18px] text-center text-white_A700 w-[auto]">
                Change profile picture
              </Button>
              <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[36px] mt-[60px] md:w-[100%] w-[50%]">
                <Img
                  src="images/img_edit.svg"
                  className="h-[27px] w-[27px]"
                  alt="edit"
                />
                <Text
                  className="not-italic text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  Edit Profile
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[6px] md:w-[100%] w-[53%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[88px] items-start justify-start md:w-[100%] w-[89%]">
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[49%]">
                    <Text
                      className="font-normal font-padauk md:ml-[0] ml-[2px] not-italic text-blue_800 text-left w-[auto]"
                      variant="body4"
                    >
                      Name:
                    </Text>
                    <Text
                      className="font-dmserifdisplay md:ml-[0] ml-[2px] not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      John Doe
                    </Text>
                    <div className="h-[55px] md:h-[64px] md:ml-[0] ml-[2px] mt-[34px] relative w-[85%]">
                      <Text
                        className="absolute bottom-[0] font-dmserifdisplay left-[0] not-italic text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Papa John Doe
                      </Text>
                      <Text
                        className="absolute font-normal font-padauk inset-x-[0] mx-[auto] not-italic text-blue_800 text-left top-[0] w-[max-content]"
                        variant="body4"
                      >
                        Father’s/Mother’s Name:
                      </Text>
                    </div>
                    <Text
                      className="font-normal font-padauk md:ml-[0] ml-[2px] mt-[33px] not-italic text-blue_800 text-left w-[auto]"
                      variant="body4"
                    >
                      Age:
                    </Text>
                    <Text
                      className="font-dmserifdisplay md:ml-[0] ml-[2px] not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      19
                    </Text>
                    <div className="h-[55px] mt-[34px] relative w-[100%]">
                      <Text
                        className="font-normal font-padauk mb-[-3.29px] ml-[2px] not-italic text-blue_800 text-left w-[auto] z-[1]"
                        variant="body4"
                      >
                        Email:
                      </Text>
                      <Text
                        className="font-dmserifdisplay mt-[auto] mx-[auto] not-italic text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        john.doe@gmail.com
                      </Text>
                    </div>
                    <Text
                      className="font-normal font-padauk md:ml-[0] ml-[2px] mt-[32px] not-italic text-blue_800 text-left w-[auto]"
                      variant="body4"
                    >
                      Aadhar Number:
                    </Text>
                  </div>
                  <div className="h-[52px] sm:mt-[0] mt-[176px] relative sm:w-[100%] w-[33%]">
                    <Text
                      className="font-normal font-padauk mb-[-6.23px] ml-[4px] not-italic text-blue_800 text-left w-[auto] z-[1]"
                      variant="body4"
                    >
                      Mobile Number:
                    </Text>
                    <Text
                      className="font-dmserifdisplay mt-[auto] mx-[auto] not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      +91 9191505010
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-dmserifdisplay md:ml-[0] ml-[2px] not-italic text-left text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  6100 4080 9126 0909
                </Text>
                <Text
                  className="font-normal font-padauk md:ml-[0] ml-[2px] mt-[34px] not-italic text-blue_800 text-left w-[auto]"
                  variant="body4"
                >
                  Address
                </Text>
                <Text
                  className="font-dmserifdisplay md:ml-[0] ml-[2px] not-italic text-left text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  XYZ, Street No. 92, Gurgaon, Uttar Pardesh, 100021
                </Text>
                <div className="flex flex-row items-center justify-between md:ml-[0] ml-[2px] mt-[33px] md:w-[100%] w-[72%]">
                  <div className="md:h-[28px] h-[51px] relative w-[16%]">
                    <Text
                      className="absolute bottom-[0] font-dmserifdisplay left-[0] not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      True
                    </Text>
                    <Text
                      className="absolute font-normal font-padauk inset-x-[0] mx-[auto] not-italic text-blue_800 text-left top-[0] w-[max-content]"
                      variant="body4"
                    >
                      Eligible:
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[auto]">
                    <Text
                      className="font-normal font-padauk not-italic text-blue_800 text-left w-[auto]"
                      variant="body4"
                    >
                      Verified:
                    </Text>
                    <Text
                      className="font-dmserifdisplay not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      True
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoPage;
