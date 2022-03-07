import styled from "@emotion/styled";
import usePhone from "../hooks/phone";
import { Grid, GridTitle, Icon } from "./styled";

const GroomModal = () => {

  const {phone: phone1, msg: msg1} = usePhone('010-9461-5110')
  const {phone: phone2, msg: msg2} = usePhone('010-8980-4581')

  return (
    <Grid className="p(44px/20px/24px) bg(--color-gray-300) w(100%)">
      <GridTitle maxRow={3}>신랑 측</GridTitle>
      <p className="font-family(--font-SpoqaHanSans) color(--color-black-300)">김상호 </p>
      <div className="hbox(right) gap(10px)">
        <a href={msg1}>
          <Icon src="/message2.png"/>
        </a>
        <a href={phone1}>
          <Icon src="/phone2.png"/>
        </a>
      </div>

      <p className="font-family(--font-SpoqaHanSans) color(--color-black-300)">모 | 이영단 </p>
      <div className="hbox(right) gap(10px)">
      <a href={msg2}>
          <Icon src="/message2.png"/>
        </a>
        <a href={phone2}>
          <Icon src="/phone2.png"/>
        </a>
      </div>
    </Grid>
  )
}

export default GroomModal;