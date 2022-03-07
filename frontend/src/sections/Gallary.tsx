import styled from "@emotion/styled";
import { useMemo, useState } from "react";

const IMAGES = [
  "/slider/IMG_2054.JPG",
  "/slider/IMG_2056.JPG",
  "/slider/IMG_2058.JPG",
  "/slider/IMG_3959.JPG",
  "/slider/IMG_3965.JPG",
  "/slider/IMG_3969.JPG",
  "/slider/IMG_3972.JPG",
  "/slider/IMG_3992.JPG",
  "/slider/IMG_4001.JPG",
  "/slider/IMG_4004.JPG",
  "/slider/IMG_4005.JPG",
  "/slider/IMG_4007.JPG",
]

const ImageView = styled.img`
  flex: 1;
  aspect-ratio: 1 / 1;
  border: 1px solid #aaa;
  object-fit: cover;
  overflow: hidden;
`

const EmptyImage = styled.div`
  flex: 1;
`

const DISPLAY_MAX = 4

const Gallery = () => {

  const [displayImageIndex, setDisplayImageIndex] = useState(0)
  const [displayBottomIndex, setDisplayBottomIndex] = useState(0);

  const images = useMemo(() => {
    return IMAGES.map(url => {
      const image = new Image();
      image.src = url;
      return {
        img: image,
        url,
      }
    })
  }, [])



  const onClickNext = () => {
    if (displayBottomIndex * DISPLAY_MAX + DISPLAY_MAX < images.length) {
      setDisplayBottomIndex(displayBottomIndex + 1)
    }
  }
  const onClickPrev = () => {
    if (displayBottomIndex > 0) {
      setDisplayBottomIndex(displayBottomIndex - 1)
    }
  }
  const displayImages = images.slice(displayBottomIndex * DISPLAY_MAX, displayBottomIndex * DISPLAY_MAX + DISPLAY_MAX)
  const emptyImages = useMemo(() => {
    const emptyCount = DISPLAY_MAX - displayImages.length
    const result = []

    for (let i = 0 ; i < emptyCount; i ++) {
      result.push(i)
    }
    return result;
  }, [displayImages])
  return (    
    <div className='w(100%)'>
      <div className='w(100%) h(270px) bg(--color-gray-300) mb(24px) hbox(center)'>
        <img src={images[displayImageIndex].img.src} className="object-fit(cover) h(100%)" />
      </div>
      <div className='w(100%) h(76px) bg(--color-gray-300) p(8px/21px) flex-direction(row) display(flex) gap(8px)'>
        <img src="arrowLeft.png" onClick={onClickPrev}/>
        <div className="flex(1) display(flex) space-between hbox overflow(hidden) gap(8px)">
          {displayImages.map((item, index) => <ImageView src={item.img.src} key={item.url} onClick={() => setDisplayImageIndex(displayBottomIndex * DISPLAY_MAX + index)} />)}
          {emptyImages.map((item) => <EmptyImage key={item} />)}
        </div>
        <img src="arrowRight.png" onClick={onClickNext}/>
      </div>
    </div>
  )
}

export default Gallery;