import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import '/styles/slider.module.css'


const Keen: NextPage = () => {
  const [loaded, setLoaded] = useState(false)
  const [looped, setLooped] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Adds scrolling to the arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        slider.current?.next()
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        slider.current?.prev()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
    }
  }
    , [])


  // configures the slider
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: looped,
      vertical: true,
      mode: 'free-snap',

      created() {
        setLoaded(true)
      },

      animationEnded() {
        const slideOn: any = slider.current?.track.details.rel
        if (!looped && slideOn !== 0) { setLooped(true) }
      },


      slideChanged(e) {
        const slideOn: any = slider.current?.track.details.rel
        const scrollIcon: any = document.querySelector('#scroll')

        // Destroy the scroll icon after the first slide
        if (scrollIcon) {
          scrollIcon.style.transition = ".5s"
          scrollIcon.style.cursor = 'default'
          scrollIcon.style.opacity = '0'
          setTimeout(() => scrollIcon.remove(), 500);
        }
        setCurrentSlide(slideOn)
        console.log(slider.current)
        
      },
    },
    []
  )

  // allows scrolling via mouse wheel
  const eventWheel = (e: any) => {

    if (e.deltaY > 0) { slider.current?.next() }
    else { slider.current?.prev() }

  }

  return (
    <div onWheel={eventWheel} className="navigation-wrapper h-screen">
      <div ref={sliderRef} className='keen-slider h-screen'>
        <div className='keen-slider__slide bg-zinc-900 h-screen justify-center items-center text-slate-300 grid grid-rows-5 grid-cols-5 text-center'>

          <div className='col-span-5 self-start h-fit text-black flex pt-6 pb-2 px-4 items-center top-bar'>
            <p className='cursive'>Clarke</p>

            <a title='View GitHub page 👨‍💻' className='flex justify-center items-center justify-items-center content-center ml-auto growing' target='_blank' href="https://github.com/Prlmetlme">
              <Image className='bg-white rounded-full' src='/github.svg' height={30} width={30}></Image>
            </a>

            <div className="resume growing">
              <a target='_blank' href="https://github.com/Prlmetlme">
                <div className='px-2 bg-white border-black opacity-90 rounded-full p-1 ml-3 font-semibold wrapper'>
                  <div title='View Resume' className='' >
                    Resumé
                  </div>
                </div>
              </a>
            </div>

          </div>
          <div className='col-start-3 row-start-3 p-1 rounded bg-amber-400 text-black text-adapt pop-in'>Full stack developer</div>
        </div>

        <div className='keen-slider__slide bg-violet-700 h-screen flex items-center text-xl portrait:flex-col portrait:px-2 portrait:py-20'>

            <h1 className='font-black text-4xl inline-block mx-auto max-w-fit min-w-min leading-normal text-center p-2 portrait:mx-auto portrait:mt-auto'>Experience <br /> with various technologies</h1>

          
          <div className='bg-black w-px h-2/3 mx-auto portrait:w-2/3 portrait:h-px portrait:my-6'></div>

          <div className="flex flex-wrap h-fit w-64 justify-items-center justify-center text-center mx-auto p-2 portrait:mb-16 portrait:w-fit">
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Bootstrap</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>React.js</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Next.js</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Django</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Vanilla Javascript</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Python</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>MySQL</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Tailwind</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>HTML5</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>CSS</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>SCSS</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Git</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Node.js</span>
            </div>
            <div className="pill">
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>REST</span>
            </div>
          </div>
        </div>

        <div className='keen-slider__slide bg-red-500 h-screen flex justify-center items-center text-xl'>
          3
        </div>

        <div className='keen-slider__slide bg-teal-500 h-screen flex justify-center items-center text-xl'>
          4
        </div>

      </div>

      {loaded && slider.current && (
        <div className='fixed flex text-white bottom-5 left-0 right-0 ml-auto mr-auto w-fit bg-opacity-20 bg-white px-1 py-2 rounded-lg'>

          {/* @ts-ignore */}
          {[...Array(slider.current?.track.details.slides.length).keys(),].map((i) => {
            return <button key={i}
              onClick={
                (e) => {
                  slider.current?.moveToIdx(i)
                  // e.target.classList.toggle('active')
                }}

              className={'mx-4 w-4 h-4 portrait:w-5 portrait:h-5  rounded-full border-2' + (currentSlide === i ? ' active' : "")}>
            </button>
          })
          }

        </div>
      )}
      <div id='scroll' className='fixed bottom-14 left-0 right-0 animate-bounce ml-auto mr-auto w-fit cursor-pointer' onClick={(e) => {
        slider.current?.next()
      }
      }>
        <Image src='/Scroll.svg' height={40} width={40}></Image>
      </div>
    </div>
  )
}

export default Keen 