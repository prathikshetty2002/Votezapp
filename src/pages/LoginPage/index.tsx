import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const LoginPagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex sm:flex-col md:flex-col flex-row gap-[105px] sm:gap-[40px] md:gap-[40px] items-start mx-[auto] pr-[190px] sm:pr-[20px] md:pr-[40px] py-[190px] w-[100%]">
        <Img
          src="images/img_login1.png"
          className="h-[551px] sm:h-[auto] mb-[92px] object-cover md:w-[100%] w-[auto]"
          alt="loginOne"
        />
        <div className="flex items-center justify-start mr-[100px] md:mt-[0] mt-[48px] md:w-[100%] w-[30%]">
          <div className="flex flex-col items-start justify-start w-[100%]">
            <Text
              className="font-dmserifdisplay not-italic text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Login
            </Text>
            <div className="font-padauk h-[72px] md:h-[77px] md:ml-[0] ml-[2px] mt-[34px] relative w-[100%]">
              <Text
                className="absolute left-[0] not-italic text-left text-white_A700 top-[0] w-[auto]"
                variant="body3"
              >
                Email
              </Text>
              <div className="absolute bg-white_A700 bottom-[0] h-[43px] inset-x-[0] mx-[auto] w-[100%]"></div>
            </div>
            <div className="font-padauk md:h-[51px] h-[71px] mt-[8px] relative w-[100%]">
              <Text
                className="absolute left-[0] not-italic text-left text-white_A700 top-[0] w-[auto]"
                variant="body3"
              >
                Password
              </Text>
              <div className="absolute bg-white_A700 bottom-[0] h-[43px] inset-x-[0] mx-[auto] w-[100%]"></div>
            </div>
            <Text
              className="font-padauk mt-[9px] not-italic text-blue_400 text-left w-[auto]"
              variant="body3"
            >
              Forgot Password ?
            </Text>
            <Text
              className="common-pointer font-padauk not-italic text-blue_400 text-left w-[auto]"
              variant="body3"
              onClick={() => navigate("/")}
            >
              Not a user? Register now
            </Text>
            <Button
              className="common-pointer bg-blue_800 cursor-pointer font-bold font-padauk leading-[normal] min-w-[180px] mt-[11px] py-[6px] text-[20px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/personalinfo")}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
