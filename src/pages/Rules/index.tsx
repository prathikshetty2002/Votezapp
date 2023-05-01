import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const RulesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-tienne items-center justify-start mx-[auto] p-[147px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[24px] items-end justify-start max-w-[983px] mb-[27px] mx-[auto] w-[100%]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                variant="body1"
              >
                This election is being conducted by the election commission of
                India.{" "}
              </Text>
              <div className="border-[3px] border-blue_800 border-solid flex items-center justify-start md:ml-[0] ml-[4px] mt-[9px] pb-[5px] px-[5px] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal mb-[12px] not-italic text-black_900 text-left"
                  variant="body1"
                >
                  <>
                    You, as being a member of the constituency under the
                    constituencies of Uttar Pradesh
                    <br />
                    State Election, are allowed to vote. Please take the
                    following steps in order to cast a <br />
                    valid vote. You are requested to cast vote on your own
                    decision and not by being <br />
                    presserurized or terroized by someone. If someone threatens
                    you for making a voting
                    <br />
                    decsion please contact the given helpline numbers.
                    <br />
                    Steps - <br />
                    Stay in the frame of your camera alone and with suuficient
                    lighting for the entire <br />
                    duration.
                    <br />
                    Have Security Keys with you as you would require it to
                    proceed.
                    <br />
                    You are allowed to make only one vote per election.
                    <br />
                    You are allowed to choose only one candidate per election.
                    <br />
                    Candidates information are available on the page.
                    <br />
                    Make sure that you are selecting your wanted candidate by
                    confirming the name
                    <br />
                    and symbol on the screen.
                    <br />
                    After selecting the candidates make sure to submit the vote.
                    <br />
                    Result will be announced after 5 days of election being
                    completed.
                    <br />
                    You can verify your vote after the election results are
                    announced.
                  </>
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-dmserifdisplay gap-[15px] items-start justify-start md:ml-[0] ml-[10px] mt-[11px] md:w-[100%] w-[43%]">
                <div className="bg-gray_400 h-[21px] mb-[5px] sm:mt-[0] mt-[2px] w-[6%]"></div>
                <Text
                  className="not-italic text-black_900 text-left w-[auto]"
                  variant="body2"
                >
                  I understand and will follow above steps.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[26px] items-center justify-end ml-[auto] md:w-[100%] w-[33%]">
            <Button
              className="common-pointer bg-blue_800 cursor-pointer font-normal leading-[normal] min-w-[148px] not-italic py-[5px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/electionpage")}
            >
              Cancel
            </Button>
            <Button
              className="common-pointer bg-blue_800 cursor-pointer font-normal leading-[normal] min-w-[148px] not-italic py-[5px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/votingpanel")}
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RulesPage;
