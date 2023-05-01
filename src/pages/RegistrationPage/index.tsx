import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const RegistrationPagePage: React.FC = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray_900 flex sm:flex-col md:flex-col flex-row gap-[229px] sm:gap-[40px] md:gap-[40px] items-start mx-[auto] p-[108px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Img
          src="images/img_figure.svg"
          className="h-[666px] md:ml-[0] ml-[35px] md:mt-[0] mt-[9px] w-[auto]"
          alt="figure"
        />
        <div className="flex flex-col items-start justify-start mr-[207px] md:mt-[0] mt-[4px] md:w-[100%] w-[30%]">
          <Text
            className="font-dmserifdisplay not-italic text-left text-white_A700 w-[auto]"
            as="h2"
            variant="h2"
          >
            Registration form
          </Text>
          <Text
            className="font-padauk mt-[30px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Name
          </Text>
          <div
            className="common-pointer bg-white_A700 h-[43px] w-[100%]"
            onClick={() => googleSignIn()}
          ></div>
          <Text
            className="font-padauk mt-[8px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Date Of Birth
          </Text>
          <div className="bg-white_A700 h-[43px] w-[100%]"></div>
          <Text
            className="font-padauk mt-[8px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Father’s/Mother’s Name
          </Text>
          <div className="bg-white_A700 h-[43px] w-[100%]"></div>
          <Text
            className="font-padauk mt-[8px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Email
          </Text>
          <div className="bg-white_A700 h-[43px] w-[100%]"></div>
          <Text
            className="font-padauk mt-[8px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Mobile No.
          </Text>
          <div className="bg-white_A700 h-[43px] w-[100%]"></div>
          <Text
            className="font-padauk mt-[8px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Password
          </Text>
          <div className="bg-white_A700 h-[43px] w-[100%]"></div>
          <Text
            className="font-padauk mt-[8px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Re-enter Password
          </Text>
          <div className="bg-white_A700 h-[43px] w-[100%]"></div>
          <Text
            className="font-padauk mt-[8px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Aadhar Number
          </Text>
          <div className="bg-white_A700 h-[43px] w-[100%]"></div>
          <Button
            className="common-pointer bg-blue_800 cursor-pointer font-bold font-padauk leading-[normal] min-w-[180px] md:ml-[0] ml-[91px] mt-[37px] py-[6px] rounded-[5px] text-[20px] text-center text-white_A700 w-[auto]"
            onClick={() => navigate("/loginpage")}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegistrationPagePage;
