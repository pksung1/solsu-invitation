import { useRef } from "react"

const LottieView = ({isVisible}: {isVisible: boolean}) => {

  const ref = useRef()

  useEffect(() => {
    if (isVisible) {
      
      Lottie.loadAnimation({
        container: document.getElementById('lottie-id'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'particle.json'
      })
    }

    return () => {
      document.getElementById('lottie-id').innerHTML = ''
    }
  }, [isVisible])

  return (
    <div></div>
  )
}