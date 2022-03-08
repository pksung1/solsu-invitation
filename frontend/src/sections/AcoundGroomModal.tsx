import styled from "@emotion/styled";
import AccountBox from "../comp/AccountBox";
import usePhone from "../hooks/phone";
import { AccountTitle, AccountWrapper, Grid, GridTitle, Icon } from "./styled";

const AcoundGroomModal = () => {

  return (
    <AccountWrapper className="p(44px/20px/24px) bg(--color-gray-300) w(100%) border-radius(12px)">
      <AccountTitle>신랑 측에게 마음 전하기</AccountTitle>
      
      <AccountBox name="김상호 " bank="기업은행 01094615110"/>
      <AccountBox name="모 | 이영단" bank="농협 25012085071"/>
    </AccountWrapper>
  )
}

export default AcoundGroomModal;