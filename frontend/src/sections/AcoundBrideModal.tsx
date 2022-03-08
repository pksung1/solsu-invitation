import styled from "@emotion/styled";
import AccountBox from "../comp/AccountBox";
import usePhone from "../hooks/phone";
import { AccountTitle, AccountWrapper, Grid, GridTitle, Icon } from "./styled";

const AcoundBrideModal = () => {

  return (
    <AccountWrapper className="p(44px/20px/24px) bg(--color-gray-300) w(100%) border-radius(12px)">
      <AccountTitle primary>신부 측에게 마음 전하기</AccountTitle>
      
      <AccountBox name="김솔수" bank="카카오뱅크 3333045626216" primary/>
      <AccountBox name="부 | 김재석" bank="농협 3521147569903" primary/>
      <AccountBox name="모 | 안승임" bank="농협 13003752000576" primary/>
    </AccountWrapper>
  )
}

export default AcoundBrideModal;