import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "@adorable.css"
import Tickets from './sections/Ticket'
import styled from '@emotion/styled'
import Gallery from './sections/Gallary'
import Map from './sections/Map'
import RenderIf from './comp/RenderIf'

const MainImage = styled.img`
  width: 100%;
`
const NameSpan = styled.span<{primary?: boolean}>`
  font-family: var(--font-SpoqaHanSans);
  font-size: 16px;
  font-weight: 700;
  color: var(${({primary}) => primary ? '--color-primary-1' : '--color-secondary'});
  line-height: 28px;
`

const Text = styled.p<{primary?: boolean, fontFamily?: string}>`
  font-family: ${({fontFamily}) => fontFamily ? fontFamily  : 'var(--font-SpoqaHanSans)'};
  font-size: 16px;
  font-weight: 700;
  color: var(${({primary}) => primary ? '--color-primary-1' : '--color-secondary'});
  line-height: 28px;
`

const MapMenu = styled.button<{active?: boolean}>`
  background: ${({active}) => active ? 'var(--color-gray-300)' : 'var(--color-white)'};
  flex: 1;
  padding: 14px 0 18px;
  font-family: var(--font-SpoqaHanSans);
  font-weight: 700;
`

function App() {
  const [isTicketFinish, setIsTicketFinish] = useState(false)
  const [menuActive, setMenuActive] = useState<'BON' | 'PIRO'>('PIRO')

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

  useEffect(() => {

    if (isTicketFinish) {
      var mapOptions = {
        // @ts-ignore
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
      };
      // @ts-ignore
      var map = new naver.maps.Map('map', mapOptions);
    }
  }, [isTicketFinish])

  return (
    <div className="App">
      <RenderIf isRender={!isTicketFinish} >
        <Tickets onAnimationEnd={() => setIsTicketFinish(true)} />
      </RenderIf>
      <RenderIf isRender={isTicketFinish} >
        <div className={`max-width(375px) vbox(fill) margin(0/auto) pb(100px) ${isTicketFinish && 'animation(0.3s/ease/forwards/mainOpacity)'}`}>
          <p className='mb(20px) font-family(--font-IBM) font(12)'>NO.220423</p>
          {/* 풀이미지 */}
          <div className='width(100%) relative'>
            {/* 백그라운드 이미지 추가 */}
            <MainImage src="/main.png" />
            <div className='absolute  top(60px) left(50%) transform(translate(-50%,0)) vbox(center) gap(12px)'>
              <p className='font-family(--font-NanumMyeongjo) font(16) font-weight(700)'>김상호</p>
              <div className='width(12px) height(1px) bg(--color-black)'></div>
              <p className='font-family(--font-NanumMyeongjo) font(16) font-weight(700)'>김솔수</p>
            </div>
          </div>
          {/* 장소 누군지 보여주는곳 */}
          <div className='mt(80px) mb(80px)'>
            <p className='font-family(--font-NanumMyeongjo) font-size(16px) text-center line-height(28px) mb(40px)'>2022년 4월 23일 토요일 오후 4시 40분<br />보타닉파크웨딩 카라홀 </p>
            <div className='vbox(center)'>
              <div className='vbox(right) gap(12px)'>
                <p className='font-family(--font-SpoqaHanSans) color(--color-black-300) font(14px)'>
                  <NameSpan>故 김택선 | 이영단</NameSpan>의 장남 <NameSpan>상호</NameSpan>
                </p>
                <p className='font-family(--font-SpoqaHanSans) color(--color-black-300) font(14px)'>
                  <NameSpan primary>김재석 | 안승임</NameSpan>의 막내 <NameSpan primary>솔수</NameSpan>
                </p>
              </div>
            </div>
            {/* 박스 그림 그리기 */}
            <div className='' />
          </div>
          {/* 인사의 말 */}
          <div className='font-family(--font-SpoqaHanSans) font(16px)'>
            <Text primary className='text-align(center) mb(20px)'>인사의 말</Text>
            <p className='text-align(center) font-family(--font-SpoqaHanSans) font(16px) font-weight(400)'>
              <Text primary>우리 드 디 어 결 혼 한 다!</Text>
              2015년부터 지금까지 먼 길을 돌아 이제야 <br />
              그 종착점을 찾았습니다! <br />
              저희의 또 다른 새로운 시작을 함께 해주세요!
            </p>
          </div>

          {/* 연락하기 */}
          <div className='padding(120px/0) vbox gap(18px)'>
            <button className='hbox(center) gap(23px)'>
              <p><NameSpan>신랑 측</NameSpan>에게 연락하기</p>
              <img src="man.png" />
            </button>
            <button className='hbox(center) gap(23px)'>
              <p><NameSpan primary>신부 측</NameSpan>에게 연락하기</p>
              <img src="woman.png" />
            </button>
          </div>

          {/* 달력 */}
          <div>
            <img src="calendar.png" />
          </div>

          {/* 슬라이드 갤러리; */}
          <div className='vbox(center) mt(120px)'>
            <Text primary fontFamily='var(--font-NanumMyeongjo)' className="mb(20px)">서로, 함께, 평생.</Text>
            <Text primary className='mb(15px)'>Gallary</Text>
            <div className='border-bottom(1px/solid/var(--color-primary)) w(12px) mb(20px)' />

            <Gallery />
            
          </div>

          {/* 맵 */}
          <Text primary className='text-align(center) mb(20px) mt(77px)' fontFamily='var(--font-NanumMyeongjo)'>오셔서 자리를 빛내주세요.</Text>
          <Text primary className='mb(15px) text-center'>MAP</Text>
          <div className='border-bottom(1px/solid/var(--color-primary)) w(12px) margin(0/auto/20px)' />

          <div>
            <div className='display(flex) '>
              <MapMenu active={menuActive === 'BON'} onClick={() => setMenuActive('BON')}>본식</MapMenu>
              <MapMenu active={menuActive === 'PIRO'} onClick={() => setMenuActive('PIRO')}>피로연</MapMenu>
            </div>
            <Map menu={menuActive}/>
          </div>


          {/* 계좌번호 */}
          <div className='mt(120px)'>
            <Text primary className='text-align(center) mb(20px)' fontFamily='var(--font-NanumMyeongjo)'>신랑 신부에게 축하의 마음을 전해보세요.</Text>
            <div className='border-bottom(1px/solid/var(--color-primary)) w(12px) margin(0/auto/20px)' />
            
            <div className='vbox gap(18px)'>
              <button className='hbox(center) gap(37px)'>
                <p><NameSpan>신랑 측</NameSpan> 계좌번호</p>
                <img src="man.png" />
              </button>
              <button className='hbox(center) gap(37px)'>
                <p><NameSpan primary>신부 측</NameSpan> 계좌번호</p>
                <img src="woman.png" />
              </button>
            </div>

          </div>
          
          {/* 방명록 */}


        </div>
      </RenderIf>
    </div>
  )
}

export default App
