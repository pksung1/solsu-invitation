import styled from "@emotion/styled";
import usePhone from "../hooks/phone";
import { Grid, GridTitle, Icon } from "./styled";


const BrideModal = () => {

  const {phone: phone1, msg: msg1} = usePhone('010-6886-7379')
  const {phone: phone2, msg: msg2} = usePhone('010-8900-5956')
  const {phone: phone3, msg: msg3} = usePhone('010-7564-7379')

  return (
    <Grid className="p(44px/20px/24px) bg(--color-gray-300) w(100%)">
      <GridTitle primary maxRow={4}>신부 측</GridTitle>
      <p className="font-family(--font-SpoqaHanSans) color(--color-black-300)">김솔수</p>
      <div className="hbox(right) gap(10px)">
        <a href={msg1}>
          <Icon src="/message.png"/>
        </a>
        <a href={phone1}>
          <Icon src="/phone.png"/>
        </a>
      </div>

      <p className="font-family(--font-SpoqaHanSans) color(--color-black-300)">부 | 김재석</p>
      <div className="hbox(right) gap(10px)">
      <a href={msg2}>
          <Icon src="/message.png"/>
        </a>
        <a href={phone2}>
          <Icon src="/phone.png"/>
        </a>
      </div>

      <p className="font-family(--font-SpoqaHanSans) color(--color-black-300)">모 | 안승임</p>
      <div className="hbox(right) gap(10px)">
        <a href={msg3}>
          <Icon src="/message.png"/>
        </a>
        <a href={phone3}>
          <Icon src="/phone.png"/>
        </a>
      </div>
    </Grid>
  )
}

export default BrideModal;