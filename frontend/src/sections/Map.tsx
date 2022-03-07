

const BON_CONTENT = {
  title: '보타닉파크웨딩',
  location: '서울 강서구 마곡동 282-2<br />보타닉푸르지오시티 B2',
  tel: '0507-1412-8301'
}

const PIRO_CONTENT = {
  title: '숲 속의 컨벤션',
  location: '제주 서귀포시 일주서로 88 숲속의컨벤션',
  tel: '064-739-5555'
}

const Map = ({menu}: {menu: 'BON' | 'PIRO'}) => {
  const CONTENT = menu === 'BON' ? BON_CONTENT : PIRO_CONTENT;
  return (
    <div className="bg(--color-gray-300)">
      <div className='bg(--color-gray-300) p(20px/21px) hbox space-between'>
        <div>
          <p className='font(16px) font-family(--font-SpoqaHanSans) font-weight(700) mb(12px)'>{CONTENT.title}</p>
          <p className='font(14px) font-family(--font-SpoqaHanSans) line-height(21px) mb(12px)' dangerouslySetInnerHTML={ {__html: CONTENT.location} }></p>
          <p className='font(14px) font-family(--font-SpoqaHanSans) line-height(21px) color(var(--color-gray))'>Tel. {CONTENT.tel}</p>
        </div>
        <button>
          <img src="/phone.png"/>
        </button>
      </div>
      <div>
        <div id="map" className='w(100%) h(400px)'></div>
      </div>
      <div className="padding(30px/20px)">
        <div className="padding(12px/34px/16px) bg(--color-white) border-radius(36px)">
          <p className="font(14px) font-family(--font-SpoqaHanSans) text-center">길 안내</p>
          <div className="hbox(center) gap(20px) ">
            {/* 지도 이미지 및 링크 */}
            <img src="/naverMap.png"/>
            <img src="/kakaoMap.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map;