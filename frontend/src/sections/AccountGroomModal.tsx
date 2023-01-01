import styled from "@emotion/styled";
import AccountBox from "../comp/AccountBox";
import usePhone from "../hooks/phone";
import { AccountTitle, AccountWrapper, Grid, GridTitle, Icon } from "./styled";

const AccountGroomModal = () => {

  return (
    <AccountWrapper className="p(44px/20px/24px) bg(--color-gray-300) w(100%) border-radius(12px)">
      <AccountTitle>신랑 측에게 마음 전하기</AccountTitle>
      
      <AccountBox name="김00 " bank="00은행 0000000000"/>
      <AccountBox name="모 | 이00" bank="00은행 0000000000"/>
    </AccountWrapper>
  )
}

export default AccountGroomModal;