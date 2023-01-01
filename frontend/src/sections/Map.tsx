import { useEffect } from "react";


const BON_CONTENT = {
  title: '보타닉파크웨딩',
  location: '서울 강서구 마곡동 282-2<br />보타닉푸르지오시티 B2',
  tel: '0507-1412-8301',
  pos: [37.56755203026521, 126.82754515519096],
  kakaoMapId: '1089036510',
  naverMapId: '37648800'
}

const PIRO_CONTENT = {
  title: '숲 속의 컨벤션',
  location: '제주 서귀포시 일주서로 88 숲속의컨벤션',
  tel: '064-739-5555',
  pos: [33.25079683757662, 126.49880746884706],
  kakaoMapId: '7975840',
  naverMapId: '12991522'
}

const Map = ({menu}: {menu: 'BON' | 'PIRO'}) => {
  const CONTENT = menu === 'BON' ? BON_CONTENT : PIRO_CONTENT;

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(CONTENT.location.replace('<br />', ' ')).then(() => {
      window.alert('복사되었습니다!')
    });
  }


  useEffect(() => {
    var mapOptions = {
      // @ts-ignore
      center: new naver.maps.LatLng(...CONTENT.pos),
      zoom: 14,
      draggable: false, 

    };
    // @ts-ignore
    var map = new naver.maps.Map('naver-map', mapOptions);
    // @ts-ignore
    var marker = new naver.maps.Marker({
      // @ts-ignore
      position: new naver.maps.LatLng(...CONTENT.pos),
      map: map
    });
  }, [CONTENT])
  return (
    <div className="bg(--color-gray-300)">
      <div className='bg(--color-gray-300) p(20px/21px) hbox space-between'>
        <div>
          <p className='font(16px) font-family(--font-SpoqaHanSans) font-weight(700) mb(12px)'>{CONTENT.title}</p>
          <p className='font(14px) font-family(--font-SpoqaHanSans) line-height(21px) mb(12px)' dangerouslySetInnerHTML={ {__html: CONTENT.location} } onClick={handleCopyClipboard}></p>
          <p className='font(14px) font-family(--font-SpoqaHanSans) line-height(21px) color(var(--color-gray))'>Tel. {CONTENT.tel}</p>
        </div>
        <a role="button" href={`tel:${CONTENT.tel}`}>
          <img src="/phone.png"/>
        </a>
      </div>
      <div>
        <div id="naver-map" className='w(100%) h(400px)'></div>
      </div>
      <div className="padding(30px/20px)">
        <div className="padding(12px/34px/16px) bg(--color-white) border-radius(36px)">
          <p className="font(14px) font-family(--font-SpoqaHanSans) text-center">길 안내</p>
          <div className="hbox(center) gap(20px) ">
            {/* 지도 이미지 및 링크 */}
            <a href={`nmap://place?id=${CONTENT.naverMapId}&zoom=14&appname=solsu-invitation`}>
              <img src="/naverMap.png"/>
            </a>
            <a href={`kakaomap://place?id=${CONTENT.kakaoMapId}`}>
              <img src="/kakaoMap.png"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map;