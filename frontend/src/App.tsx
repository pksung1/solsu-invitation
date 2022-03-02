import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "@adorable.css"
import Tickets from './sections/Ticket'
import styled from '@emotion/styled'

const MainImage = styled.img`
  width: 100%;
`

function App() {
  const [isTicketFinish, setIsTicketFinish] = useState(false)

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    console.log(vh)
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize()
    window.addEventListener('resize', () => setScreenSize());
    return () => {
      window.removeEventListener('resize', setScreenSize)
    }
  }, [])

  return (
    <div className="App">
      {!isTicketFinish && <Tickets onAnimationEnd={() => setIsTicketFinish(true)} />}
      <div className={`max-width(335px) vbox(fill) margin(0/auto) ${isTicketFinish && 'animation(0.3s/ease/forwards/mainOpacity)'}`}>
        <p className='mb(20px)'>NO.220423</p>
        {/* 풀이미지 */}
        <div className='width(100%) relative'>
          {/* 백그라운드 이미지 추가 */}
          <MainImage src="/main.png" />
          <div className='absolute  top(60px) left(50%) transform(translate(-50%,0)) vbox(center) gap(12px)'>
            <p>김상호</p>
            <div className='width(12px) height(1px) bg(--color-black)'></div>
            <p>김솔수</p>
          </div>
        </div>
        {/* 장소 누군지 보여주는곳 */}
        <div>
          <p>2022년 4월 23일 토요일 오후 4시 40분<br />보타닉파크웨딩 카라홀 </p>
          <p>
            <span>故 김택선 | 이영단</span>의 장남 <span>상호</span>
          </p>
          <p>
            <span>김재석 | 안승임</span>의 막내 <span>솔수</span>
          </p>
        </div>
        {/* 인사의 말 */}
        <div>
          <p>인사의 말</p>
          <p>
            <span>우리 드 디 어 결 혼 한 다!</span>
            2015년부터 지금까지 먼 길을 돌아 이제야 <br />
            그 종착점을 찾았습니다! <br />
            저희의 또 다른 새로운 시작을 함께 해주세요!
          </p>
        </div>

        {/* 연락하기 */}
        <div>
          <div>
            <p>신부 측에게 연락하기</p>
            <img />
          </div>
          <div>
            <p>신랑 측에게 연락하기</p>
            <img />
          </div>
        </div>

        {/* 달력 */}
        <div>

        </div>

        {/* 슬라이드 갤러리; */}
        <div>
          <p>서로, 함께, 평생.</p>
          <p>Gallary</p>
          <img />
          <div>
            <img />
            <img />
            <img />
          </div>
        </div>

        {/* 맵 */}
        <p>오셔서 자리를 빛내주세요.</p>
        <p>MAP</p>

        <div>
          <div>
            <button>본식</button>
            <button>피로연</button>
          </div>
          <div>
            {/* 지도 */}
          </div>
          <div>
            <p>길 안내</p>
            <div>
              {/* 지도 이미지 및 링크 */}
            </div>
          </div>
        </div>


        {/* 계좌번호 */}
        <div>
          <p>신랑 신부에게 축하의 마음을 전해보세요.</p>

          <div>
            <p>신부 측 계좌번호</p>
            <img />
          </div>
          <div>
            <p>신부 측 계좌번호</p>
            <img />
          </div>
        </div>
        
        {/* 방명록 */}


      </div>

    </div>
  )
}

export default App
