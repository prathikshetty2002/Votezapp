import React from "react";

import { Text, Line } from "components";
import { useNavigate } from "react-router-dom";

const ElectionPagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex flex-col font-dmserifdisplay gap-[130px] sm:gap-[40px] md:gap-[40px] items-end justify-start mx-[auto] p-[74px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] gap-[91px] items-start justify-end ml-[auto] md:w-[100%] w-[58%]">
          <div className="h-[38px] relative md:w-[100%] w-[46%]">
            <Text
              className="ml-[auto] not-italic text-left text-white_A700 w-[auto]"
              as="h5"
              variant="h5"
            >
              Elections
            </Text>
            <div className="absolute flex flex-col h-[100%] inset-[0] justify-center m-[auto] w-[100%]">
              <Text
                className="mr-[191px] not-italic text-left text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Personal Info
              </Text>
              <Line className="bg-blue_801 h-[3px] md:ml-[0] ml-[234px] w-[31%]" />
            </div>
          </div>
          <Text
            className="common-pointer not-italic text-left text-white_A700 w-[auto]"
            as="h5"
            variant="h5"
            onClick={() => navigate("/frametwelve")}
          >
            Contact
          </Text>
          <div
            className="common-pointer h-[35px] relative md:w-[100%] w-[19%]"
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
        <div className="flex flex-col items-start justify-start mb-[138px] mr-[82px] md:w-[100%] w-[83%]">
          <Text
            className="not-italic text-left text-white_A700 w-[auto]"
            as="h5"
            variant="h5"
          >
            Upcoming Elections :
          </Text>
          <div className="bg-gray_400 flex flex-row md:gap-[40px] items-center justify-between mt-[16px] p-[12px] rounded-[5px] w-[100%]">
            <Text
              className="ml-[14px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              UP state election:
            </Text>
            <Text
              className="mr-[39px] mt-[3px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              02-04-2022
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[7px] mt-[41px] not-italic text-left text-white_A700 w-[auto]"
            as="h5"
            variant="h5"
          >
            Other Elections :{" "}
          </Text>
          <div className="bg-gray_400 flex sm:flex-col flex-row md:gap-[40px] items-start justify-between mt-[19px] p-[10px] rounded-[5px] w-[100%]">
            <Text
              className="sm:ml-[0] ml-[5px] sm:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Manipur state Election:{" "}
            </Text>
            <Text
              className="mr-[31px] sm:mt-[0] mt-[6px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              04-04-2022
            </Text>
          </div>
          <div className="bg-gray_400 flex sm:flex-col flex-row md:gap-[40px] items-start justify-between mt-[35px] p-[10px] rounded-[5px] w-[100%]">
            <Text
              className="sm:ml-[0] ml-[5px] sm:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Chhatishgarh state Election:{" "}
            </Text>
            <Text
              className="mb-[2px] mr-[31px] sm:mt-[0] mt-[5px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              12-04-2022
            </Text>
          </div>
          <div className="bg-gray_400 flex sm:flex-col flex-row md:gap-[40px] items-start justify-between mt-[35px] p-[10px] rounded-[5px] w-[100%]">
            <Text
              className="sm:ml-[0] ml-[5px] sm:mt-[0] mt-[7px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Bangluru state Election:
            </Text>
            <Text
              className="mb-[2px] mr-[32px] sm:mt-[0] mt-[5px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              20-04-2022
            </Text>
          </div>
          <div className="bg-gray_400 flex sm:flex-col flex-row md:gap-[40px] items-center justify-between mt-[35px] p-[12px] rounded-[5px] w-[100%]">
            <Text
              className="sm:ml-[0] ml-[3px] sm:mt-[0] mt-[3px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Gurgaon Municipal Corporation
            </Text>
            <Text
              className="mr-[29px] not-italic text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              26-04-2022
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectionPagePage;
