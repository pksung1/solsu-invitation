import styled from "@emotion/styled";
import AccountBox from "../comp/AccountBox";
import usePhone from "../hooks/phone";
import { AccountTitle, AccountWrapper, Grid, GridTitle, Icon } from "./styled";

const AccountBrideModal = () => {

  return (
    <AccountWrapper className="p(44px/20px/24px) bg(--color-gray-300) w(100%) border-radius(12px)">
      <AccountTitle primary>신부 측에게 마음 전하기</AccountTitle>
      
      <AccountBox name="김00" bank="카카오뱅크 0000000000" primary/>
      <AccountBox name="부 | 김00" bank="농협 0000000000" primary/>
      <AccountBox name="모 | 안00" bank="농협 0000000000" primary/>
    </AccountWrapper>
  )
}

export default AccountBrideModal;