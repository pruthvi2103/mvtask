import React, { useState } from "react";
import styled from "styled-components";
import { CTAButton } from "./common/CTAButton";

import LinkVector from "../assets/link.svg";
import CopyIcon from "../assets/copy.svg";
import TickIcon from "../assets/tick.svg";
import CancelIcon from "../assets/cancel.svg";
import { Toast } from "./common/Toast";
import { CustomInput } from "../components/common/styledComponents";
const ContentWrapper = styled.div`
  padding: 100px;
`;
const BorderdWrapper = styled.div`
  border-radius: 8px;
  border: #e5e5e5 solid;
  padding: ${(props) => {
    return props.padding ? props.padding : "25px";
  }};
  margin: ${(props) => {
    return props.margin ? props.margin : "24px 24px 24px 0";
  }};
  width: 680px;
`;
const LinkInfoHolder = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr auto;
`;

const Heading = styled.span`
  font-weight: 500;
  font-size: 18px;
  padding: 5px 0;
  display: block;
  color: #545454;
  margin-bottom: 4px;
`;
const Subtitle = styled.span`
  font-weight: 400;
  padding: 5px 0;
  color: #545454;
`;
const CTAWrapper = styled.div`
  margin: auto;
`;

const LinkImage = styled.img``;
const InstallScriptWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
const StepTitleWrapper = styled.div``;
const StepAction = styled.div`
  font-size: 16px;
  color: #3498fd;
  cursor: pointer;
  float: right;
`;
const StepHeading = styled.h1`
  color: #2a2e43;
  font-size: 36px;
  font-weight: 500;
`;
const StepSubHeading = styled.p`
  line-height: 1.33;
  letter-spacing: normal;
  color: #78849e;
  font-size: 18px;
  max-width: 750px;
  margin: ${(props) => {
    return props.margin ? props.margin : null;
  }};
`;
const ContentActions = styled.div`
  position: absolute;
  bottom: 120px;
  right: 120px;
  display: flex;
`;
const StepStatus = styled.div`
  color: #78849e;
  padding: 12px 0;
  font-size: 16px;
`;

const BorderTextWrapper = styled.div`
  border-radius: 4px;
  border: solid 1px #e1e1e1;
`;

const StatusDot = styled.div`
  border-radius: 50%;
  box-sizing: border-box;
  border: ${(props) => {
    return props.done ? "solid 0.25px #665eff;" : "solid 0.25px #e0e0e0 ;";
  }};
  background-color: ${(props) => {
    return props.done ? "#665eff" : "#fff";
  }};
  width: 10px;
  height: 10px;
`;
const DotsWrapper = styled.div`
  padding: 16px 12px;
  display: flex;
  gap: 10px;
`;
const BoxLabel = styled.div`
  width: 62px;
  color: #545454;
  font-size: 14px;

  margin-top: -10px;
  margin-left: 15px;
  background: white;
`;

const HelperText = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #545454;
`;
const HelperLink = styled.span`
  color: #1f8efa;
  cursor: pointer;
`;
export const Content = () => {
  const installTarget = ["your hosts", "docker containers"];
  const stepComponents = [<HostInstallContent />, <ContainerInstallContent />];
  const [currentStep, changeSteps] = useState(1);
  const totalSteps = 2;
  const goBack = () => {
    if (currentStep > 1) {
      changeSteps(currentStep - 1);
    }
  };
  const goNext = () => {
    if (currentStep < totalSteps) {
      changeSteps(currentStep + 1);
    }
  };

  const RenderStatusDots = (currentStepCount) => {
    const Dots = [];
    for (var i = 0; i < totalSteps; i++) {
      i + 1 > currentStepCount
        ? Dots.push(<StatusDot />)
        : Dots.push(<StatusDot done={true} />);
    }
    return <DotsWrapper>{Dots}</DotsWrapper>;
  };
  return (
    <ContentWrapper>
      <StepTitleWrapper>
        INSTALL SOFTWARES
        <StepAction>I'll do this later</StepAction>
      </StepTitleWrapper>
      <StepHeading>
        Get Securizza installed on {installTarget[currentStep - 1]}
      </StepHeading>
      <StepSubHeading>
        Securizza uses an efficient and powerful agent to monitor users and
        services activity and alert in realtime when suspicous activity is
        happening. Follow the instructions below
      </StepSubHeading>
      {stepComponents[currentStep - 1]}
      <HelperText>
        Want to install manually? See the{" "}
        <HelperLink>installation guide pdf</HelperLink>
      </HelperText>
      <ContentActions>
        <StepStatus>
          {"Step "} {currentStep} {" of "} {totalSteps}{" "}
        </StepStatus>
        {RenderStatusDots(currentStep)}
        <CTAButton clickAction={goBack} secondary={true} message={"Go Back"} />
        <CTAButton clickAction={goNext} message={"Next"} />
      </ContentActions>
    </ContentWrapper>
  );
};

const HostInstallContent = () => {
  const link = `https://www.google.com/`;
  const [ShowToast, toggleToast] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(link);
    toggleToast(true);
    setTimeout(() => {
      toggleToast(false);
    }, 1500);
  };
  return (
    <BorderdWrapper>
      <LinkInfoHolder>
        <InstallScriptWrapper>
          <LinkImage src={LinkVector} />
          <div>
            <Heading>Installation Script</Heading>
            <Subtitle>
              Run this installation script on your device you wish to monitor
            </Subtitle>
          </div>
        </InstallScriptWrapper>
        <CTAWrapper>
          <CTAButton
            clickAction={copyLink}
            message={"Copy Link"}
            icon={CopyIcon}
          />
        </CTAWrapper>
        {ShowToast && <Toast />}
      </LinkInfoHolder>
    </BorderdWrapper>
  );
};

const InputWrapper = styled.div`
  margin: 22px 17px;
  display: flex;
  gap: 17px;
`;
const Icon = styled.img`
  margin: auto;
  height: 11px;
  width: 11px;
`;

const ContainerInstallContent = () => {
  return (
    <>
      <StepSubHeading margin={"45px 0px 0px 0"}>
        Fill in the details of the hosts you wish to setup the installer on
      </StepSubHeading>
      <BorderdWrapper
        padding={"55px 96px 39px 34px"}
        margin={"12px 24px 39px 0"}
      >
        <BorderTextWrapper>
          <BoxLabel>Add Host</BoxLabel>
          <InputWrapper>
            <CustomInput
              backgroundColor={"rgba(102, 94, 255, 0.05)"}
              width={"235px"}
              height={"46px"}
              placeholder={"Select Categoy"}
            />
            <CustomInput
              width={"309px"}
              placeholder={"Type host details"}
              disabled
            />
            <Icon src={CancelIcon} />
            <Icon src={TickIcon} />
          </InputWrapper>
        </BorderTextWrapper>
      </BorderdWrapper>
    </>
  );
};
