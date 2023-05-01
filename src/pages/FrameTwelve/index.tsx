import React from "react";

import { Text, Button, Img, Line } from "components";
import { useNavigate } from "react-router-dom";

const FrameTwelvePage: React.FC = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="bg-white_A700 flex items-center justify-start pb-[59px] w-[100%]">
          <div className="flex flex-col gap-[58px] items-center justify-start w-[100%]">
            <header className="border-b-[1px] border-gray_900_26 border-solid flex items-center justify-center md:px-[20px] px-[96px] py-[18px] w-[100%]">
              <div className="flex flex-row md:gap-[40px] gap-[893px] items-center justify-between self-stretch md:w-[100%] w-[auto]">
                <div className="header-row my-[8px]">
                  <div className="flex flex-row gap-[12px] items-center justify-start">
                    <div className="bg-light_blue_A700 h-[25px] rounded-[12px] w-[25px]"></div>
                    <Text
                      className="font-semibold text-gray_901 text-left w-[auto]"
                      variant="body4"
                    >
                      VOTEZAPP
                    </Text>
                  </div>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <ul className="flex flex-row gap-[59px] sm:hidden items-center justify-start self-stretch w-[auto] common-row-list">
                  <li className="mt-[10px] mb-[9px] sm:w-[100%] sm:mb-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-semibold text-[18px] text-gray_901 text-left"
                      href="javascript:"
                    >
                      About
                    </a>
                  </li>
                  <li className="mt-[10px] mb-[9px] sm:w-[100%] sm:mb-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-semibold text-[18px] text-gray_901 text-left"
                      href="javascript:"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px]">
                    <Button
                      className="common-pointer bg-light_blue_A701 cursor-pointer font-semibold leading-[normal] px-[16px] py-[10px] rounded-[8px] text-[18px] text-center text-white_A700"
                      onClick={() => navigate("/")}
                    >
                      Vote
                    </Button>
                  </li>
                </ul>
              </div>
            </header>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1331px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-1 flex-col justify-start md:mt-[0] mt-[65px] md:w-[100%] w-[51%]">
                <div className="h-[172px] relative w-[100%]">
                  <Text
                    className="absolute h-[100%] inset-[0] justify-center m-[auto] not-italic text-gray_901 text-left tracking-[-3.52px] sm:w-[100%] w-[99%]"
                    as="h1"
                    variant="h1"
                  ></Text>
                  <Img
                    src="images/img_ellipse5.svg"
                    className="absolute bottom-[13%] h-[33px] left-[0] w-[auto]"
                    alt="ellipseFive"
                  />
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[12px] mt-[2px] md:w-[100%] w-[78%]">
                  <Text
                    className="font-normal leading-[148.52%] not-italic text-black_900_90 text-left w-[100%]"
                    variant="body4"
                  >
                    can participate in voting on various topics and decisions, without the need for any technical knowledge.

Our user-friendly interface makes it easy to find and participate in polls. You can view the poll details, see the different options available, and choose the one that best represents your opinion.

VoteZapp uses a secure and transparent blockchain-based voting system, ensuring that every vote is counted fairly and accurately. You can rest assured that your vote is private, and that the results are tamper-proof and immutable.
                  </Text>
                  <div className="flex flex-row gap-[23px] items-center justify-start md:w-[100%] w-[51%]">
                    <Button className="bg-light_blue_A701 cursor-pointer font-semibold leading-[normal] min-w-[116px] px-[16px] py-[10px] rounded-[8px] text-[18px] text-center text-white_A700 w-[auto]">
                      Vote Now
                    </Button>
                    <div className="flex items-start justify-start px-[16px] py-[10px] self-stretch w-[auto]">
                      <a
                        className="font-semibold text-[18px] text-gray_900_aa text-left underline w-[auto]"
                        href="javascript:"
                      >
                        Read Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[514px] h-[556px] relative md:w-[100%] w-[39%]">
                <Img
                  src="images/img_frame10.png"
                  className="absolute bottom-[0] h-[514px] object-cover right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[300px] rounded-tr-[300px] w-[94%]"
                  alt="frameTen"
                />
                <Img
                  src="images/img_frame9.png"
                  className="absolute h-[514px] left-[0] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[300px] rounded-tr-[300px] top-[0] w-[94%]"
                  alt="frameNine"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex font-dmserifdisplay items-start justify-start p-[160px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[70px] md:w-[100%] w-[68%]">
            <Text
              className="not-italic rotate-[90deg] text-black_900 text-left w-[auto]"
              variant="body5"
            >
              Features
            </Text>
            <div className="bg-blue_800 h-[668px] md:ml-[0] ml-[37px] md:mt-[0] my-[18px] rotate-[90deg] w-[1%]"></div>
            <div className="flex items-center justify-start md:ml-[0] ml-[52px] md:w-[100%] w-[76%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[58px] items-start justify-start md:w-[100%] w-[84%]">
                  <Img
                    src="images/img_lock.png"
                    className="h-[74px] md:h-[auto] object-cover sm:w-[100%] w-[18%]"
                    alt="lock"
                  />
                  <Text
                    className="sm:mt-[0] mt-[12px] not-italic text-black_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Secured by 256 bit encryption
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[63px] items-start justify-start md:ml-[0] ml-[4px] mt-[59px] w-[100%]">
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[74px] w-[73px]"
                    alt="arrowdown"
                  />
                  <Text
                    className="sm:mt-[0] mt-[12px] not-italic text-black_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Backed by ethereum based technology
                  </Text>
                </div>
                <div className="flex flex-row gap-[63px] items-start justify-start md:ml-[0] ml-[4px] mt-[55px] md:w-[100%] w-[68%]">
                  <Img
                    src="images/img_approveddelivery.png"
                    className="h-[73px] md:h-[auto] object-cover w-[72px]"
                    alt="approveddeliver"
                  />
                  <Text
                    className="mt-[8px] not-italic text-black_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Verifiable transactions
                  </Text>
                </div>
                <div className="flex flex-row gap-[63px] items-start justify-start md:ml-[0] ml-[3px] mt-[44px] md:w-[100%] w-[46%]">
                  <Img
                    src="images/img_handcursor.png"
                    className="h-[75px] md:h-[auto] object-cover w-[74px]"
                    alt="handcursor"
                  />
                  <Text
                    className="mt-[13px] not-italic text-black_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Easy to use
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[64px] items-start justify-start md:ml-[0] ml-[4px] mt-[53px] md:w-[100%] w-[91%]">
                  <Img
                    src="images/img_lowprice.png"
                    className="h-[73px] md:h-[auto] object-cover sm:w-[100%] w-[72px]"
                    alt="lowprice"
                  />
                  <Text
                    className="sm:mt-[0] mt-[11px] not-italic text-black_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Cheaper than ballot voting system
                  </Text>
                </div>
                <div className="flex flex-row gap-[63px] items-start justify-start md:ml-[0] ml-[4px] mt-[50px] md:w-[100%] w-[66%]">
                  <Img
                    src="images/img_timespan.png"
                    className="h-[74px] md:h-[auto] object-cover w-[73px]"
                    alt="timespan"
                  />
                  <Text
                    className="mt-[12px] not-italic text-black_901 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Faster voting process
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_900 flex font-dmserifdisplay items-center justify-start p-[148px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start max-w-[1114px] mx-[auto] my-[30px] w-[100%]">
            <Text
              className="not-italic rotate-[90deg] text-left text-white_A700 w-[auto]"
              variant="body5"
            >
              About
            </Text>
            <div className="bg-white_A700 h-[668px] sm:ml-[0] ml-[46px] rotate-[90deg] w-[1%]"></div>
            <Text
              className="sm:ml-[0] ml-[39px] not-italic text-justify text-white_A700"
              as="h3"
              variant="h3"
            >
              <>
                An online voting system that will replace the <br />
                old ballot sytem or paper system. Over the time <br />
                we have utilized the required technology in every
                <br />
                sector to improve efficiency and save the extra
                <br />
                resources. But the voting system is still very <br />
                expensive and requires a bigger workforce.
                <br />
                The system is slower and still not completely <br />
                tamper proof. We bring the system that is safe,
                <br />
                reliable and solve the modern issues like higher
                <br />
                reachability of the booth, crowd free voting, <br />
                inexpensive, faster results and others.
              </>
            </Text>
          </div>
        </div>
        <div className="bg-white_A700 flex font-dmserifdisplay items-center justify-end p-[110px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[32px] items-start justify-start max-w-[1029px] mt-[11px] mx-[auto] w-[100%]">
            <div className="h-[138px] md:ml-[0] ml-[3px] relative w-[100%]">
              <Text
                className="m-[auto] not-italic text-black_900 text-left w-[auto]"
                variant="body6"
              >
                Follow these easy steps
              </Text>
              <Line className="absolute bg-blue_800 bottom-[20%] h-[5px] left-[0] w-[67%]" />
            </div>
            <div className="flex items-center justify-start md:w-[100%] w-[71%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[99%]">
                    <Img
                      src="images/img_registration1.png"
                      className="h-[93px] sm:h-[auto] object-cover md:w-[100%] w-[14%]"
                      alt="registrationOne"
                    />
                    <Text
                      className="md:mt-[0] mt-[21px] not-italic text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Register yourself by filling the required informations
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[44px] items-start justify-start mt-[40px] md:w-[100%] w-[41%]">
                    <Img
                      src="images/img_refresh.svg"
                      className="h-[93px] w-[93px]"
                      alt="refresh"
                    />
                    <Text
                      className="mt-[21px] not-italic text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Signin as user
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[44px] items-start justify-start mt-[40px] md:w-[100%] w-[68%]">
                    <Img
                      src="images/img_grid.svg"
                      className="h-[94px] w-[94px]"
                      alt="grid"
                    />
                    <Text
                      className="sm:mt-[0] mt-[21px] not-italic text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Go to vote option on dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[47px] items-start justify-start md:ml-[0] ml-[3px] mt-[41px] md:w-[100%] w-[46%]">
                    <Img
                      src="images/img_key.png"
                      className="h-[88px] md:h-[auto] object-cover w-[88px]"
                      alt="key"
                    />
                    <Text
                      className="mt-[18px] not-italic text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Give security key
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-start md:w-[100%] w-[69%]">
                  <Img
                    src="images/img_fasolidvoteyea.svg"
                    className="h-[93px] w-[auto]"
                    alt="fasolidvoteyea"
                  />
                  <Text
                    className="sm:mt-[0] mt-[21px] not-italic text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Vote your candidate and submit
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_900 flex items-center justify-end p-[45px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex items-center justify-start max-w-[1153px] mt-[3px] mx-[auto] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <Text
                className="font-dmserifdisplay font-normal md:mt-[0] mt-[29px] not-italic text-left text-white_A700"
                variant="body4"
              ></Text>
              <Line className="bg-blue_200 md:h-[1px] h-[310px] mb-[22px] md:ml-[0] ml-[36px] md:w-[100%] w-[1px]" />
              <Text
                className="font-normal font-oswald md:ml-[0] ml-[68px] md:mt-[0] mt-[29px] not-italic text-justify text-white_A700"
                variant="body4"
              >
                <>
                  GetIn
                  <br />
                  Register
                  <br />
                  Login
                </>
              </Text>
              <div className="flex md:flex-1 flex-col font-oswald justify-start md:ml-[0] ml-[68px] md:mt-[0] mt-[29px] md:w-[100%] w-[17%]">
                <Text
                  className="font-normal md:ml-[0] ml-[36px] not-italic text-justify text-white_A700"
                  variant="body4"
                >
                  <>
                    Know more
                    <br />
                    Features
                    <br />
                    About
                    <br />
                    Steps
                  </>
                </Text>
                <div className="flex flex-row gap-[23px] items-center justify-between mt-[74px] w-[100%]">
                  <Img
                    src="images/img_twitter.svg"
                    className="common-pointer h-[49px] w-[49px]"
                    onClick={handleNavigate}
                    alt="twitter"
                  />
                  <Img
                    src="images/img_facebook.svg"
                    className="common-pointer h-[48px] w-[48px]"
                    onClick={handleNavigate1}
                    alt="facebook"
                  />
                  <Img
                    src="images/img_instagram.svg"
                    className="h-[48px] w-[48px]"
                    alt="instagram"
                  />
                </div>
                <div className="font-pacifico h-[32px] md:h-[72px] md:ml-[0] ml-[35px] mt-[40px] relative w-[63%]">
                  <Img
                    src="images/img_clock.svg"
                    className="absolute h-[26px] left-[0] top-[0] w-[26px]"
                    alt="clock"
                  />
                  <Text
                    className="absolute font-normal h-[100%] inset-y-[0] my-[auto] not-italic right-[0] text-left text-white_A700 w-[auto]"
                    variant="body4"
                  >
                    shank.design
                  </Text>
                </div>
              </div>
              <a
                className="font-normal font-oswald md:ml-[0] ml-[23px] md:mt-[0] mt-[33px] not-italic text-[18px] text-justify text-white_A700 underline"
                href="javascript:"
              >
                <>
                  Follow Us
                  <br />
                  Facebook
                  <br />
                  Instagram
                  <br />
                  Twitter
                </>
              </a>
              <Line className="bg-blue_200 md:h-[1px] h-[310px] mb-[22px] md:ml-[0] ml-[70px] md:w-[100%] w-[1px]" />
              <div className="flex md:flex-1 flex-col font-oswald gap-[5px] items-start justify-start md:ml-[0] ml-[38px] md:mt-[0] mt-[28px] md:w-[100%] w-[25%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body4"
                >
                  Quick Feedback:
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex h-[222px] items-end justify-end w-[100%]"
                  style={{ backgroundImage: "url('images/img_group8.svg')" }}
                >
                  <div className="flex flex-row gap-[7px] items-center justify-end mr-[14px] mt-[188px] md:w-[100%] w-[26%]">
                    <Img
                      src="images/img_location.svg"
                      className="h-[32px] w-[32px]"
                      alt="location"
                    />
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      Send
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

export default FrameTwelvePage;
