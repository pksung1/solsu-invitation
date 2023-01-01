import { useEffect, useRef, useState } from "react"
import Lottie from 'lottie-web';
import styled from "@emotion/styled";

const nameClass = "w(184px) font-family(--font-ticket-2) 700 font(24) c(--color-black) bg(--color-primary) p(9/0) text-align(center) border-radius(34.5px) line-height(29.04px) font-stretch(condensed) font-weight(bold)"

const title2 = "font-family(--font-ticket-1) 400 font(14) c(--color-gray)"
const text2 = "font-family(--font-ticket-2) 700 font(20)"


const ANIMATION_TIME = '3.5s'


const CursorLottie = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3; 
`

const Tickets = ({onAnimationEnd}: {onAnimationEnd: () => void}) => {

  const [isClicked, setIsClicked] = useState(false)
  const ticketRef = useRef<HTMLDivElement>(null)

  const onClickTicket = () => {
    setIsClicked(true)
  }

  const ticketAnimation = isClicked ? 'animation(3.5s/ease/forwards/ticketAnimation)' : '' 
  const airplaneAnimation = isClicked ? 'animation(3.5s/ease/forwards/airplaneAnimation)' : ''
  const bottomTicketAnimation = isClicked ? 'animation(3.5s/ease/forwards/bottomTicketDrop)' : "animation(2s/ease/infinite/alternate/bottomRotate)"
  // 모바일 반응형 처리 필요

  useEffect(() => {
    const timeout = setTimeout(() => {
      Lottie.loadAnimation({
        container: document.getElementById('lottie-id'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'cursor.json'
      })
    }, 3000)
      
    return () => {
      clearTimeout(timeout);
      document.getElementById('lottie-id').innerHTML = ''
    }
  }, [])

  return (
    <section className='absolute top(0) bottom(0) w(100vw) h(100vh) z-index(9999) bg(#fff) hbox pack overflow(hidden)' >
      <div className="@w(~475):transform(scale(0.8))" ref={ticketRef}>
        <div onClick={onClickTicket} className={`${ticketAnimation}`}>
        <CursorLottie>
          <div id="lottie-id" className="transform(scale(2))"></div>
        </CursorLottie>
          {/* <<< TOP TICKET <<< */}
          <div className='bg(--color-primary) p(10px) hbox(fill) mb(3) border-radius(20px/20px/0/0) box-shadow(3px/3px/10px/--color-gray)'>
            <p className="writing-mode(vertical-lr) transform(rotate(180deg)) font-family(--font-ticket-3)">FIRST CLASS</p>
            <div className="bg(--color-white) p(29px/28px)">
              <div className=" hbox(fill) gap(27px) mb(30)">
                <p className="font-family(--font-IBM)">WEDDING PASS<br />웨딩 탑승권</p>
                <div className="w(95px) h(95px) bg(--color-primary)">
                  <img src="qrcode.png"/>
                </div>
              </div>
              <div className="vbox(fill) pack vgap(8px)">
                <p className="font-family(--font-ticket-2) 700 font(14) c(--color-gray)">GROOM</p>
                <div className="vbox(fill) pack vgap(5px)">
                  <h3 className={nameClass}>KIM SANGHO</h3>
                  <p>X</p>
                  <h3 className={nameClass}>KIM SOLSU</h3>
                </div>
                <p className="font-family(--font-ticket-2) 700 font(14) c(--color-gray)">BRIDE</p>
              </div>
              <div className="hbox(fill) space-between mt(20)">
                <div>
                  <p className={title2}>DATE 날짜</p>
                  <p className={text2}>APRIL 23</p>
                </div>

                <div>
                  <p className={title2}>BOARDING 시간</p>
                  <p className={text2}>16 : 40</p>
                </div>
              </div>
              <div className="mt(20)">
                <p className={title2}>GATE 장소</p>
                <p className={text2}>BOTANIC PARK<br />WEDDING CALLA HALLS</p>
              </div>
            </div>
          </div>
          {/* >>> TOP TICKET >>> */}

          {/* <<< BOTTOM TICKET <<< */}
          <div className={`bg(--color-primary) p(10px) border-radius(0/0/20px/20px) box-shadow(3px/3px/10px/--color-gray) ${bottomTicketAnimation}`}>
            <div className="bg(--color-white)">
              <div className="hbox(fill)">
                <div className="vbox(fill) flex(1)">
                  <p className="flex(1) pack font-family(--font-ticket-3) font(14) c(--color-gray) bb(1/solid/--color-gray-200)">Save The Date</p>
                  <p className="font-family(--font-ticket-2) bold font(14) p(8px/0/8px/14px) bb(1/solid/--color-gray-200)">23.APR.2022</p>
                  <p className="font-family(--font-ticket-2) bold font(14) p(8px/0/8px/14px) font(14) bb(1/solid/--color-gray-200) color(--color-gray)">COME TO JOIN US</p>
                </div>
                <img src="ticket.png" className="w(173px) h(145px)"/>
              </div>
              <p className="p(8px/0/8px/14px) font-family(--font-ticket-1) font(14)">WEDDING RECEIPT</p>
            </div>
          </div>
          {/* >>> BOTTOM TICKET >>> */}
          <p className="text-align(center) mt(18) font(--font-ticket-3)">티켓을 눌러 청첩장을 확인해보세요.</p>
        </div>
      </div>
      <div className={`absolute transform(translateY(100vh)) top(0px) ${airplaneAnimation}`} onAnimationEnd={onAnimationEnd}>
        <img src="airplane.png" />
      </div>
      
    </section>
  )
}

export default Tickets