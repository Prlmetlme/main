import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react'
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

          slideChanged(e) {
            const slideOn: any = slider.current?.track.details.rel
            const scrollIcon: any = document.querySelector('#scroll')

            if (!looped) { setLooped(true) }

            if (scrollIcon) {
              scrollIcon.style.transition = ".5s"
              scrollIcon.style.cursor = 'default'
              scrollIcon.style.opacity = '0'
              setTimeout(() => scrollIcon.remove(), 500);
            }
            setCurrentSlide(slideOn)
          },
      },
      []
  )

  // allows scrolling via mouse wheel
  const eventWheel = (e: any) => {

    if (e.deltaY > 0) { slider.current?.next()}
    else {slider.current?.prev()}

  }


  return (
    <div onWheel={eventWheel} className="navigation-wrapper h-screen">
      <div ref={sliderRef} className='keen-slider h-screen'>
          <div className='keen-slider__slide bg-zinc-900 h-screen justify-center items-center text-slate-300 grid grid-rows-5 grid-cols-5 text-center'>
            <div className='col-span-5 self-start h-fit text-black flex py-2 px-4 items-center'>
              <p className='cursive'>Clarke</p>
                  <a title='View GitHub page 👨‍💻' className='flex justify-center items-center justify-items-center content-center ml-auto' target='_blank'href="https://github.com/Prlmetlme">
                    <Image className='bg-white rounded-full' src='/github.svg' height={30} width={30}></Image>
                  </a>

                <div className='bg-green-400 border-2 border-black rounded-full p-1 ml-3'>
                  <a title='View GitHub page 👨‍💻' className='flex justify-center items-center justify-items-center content-center' target='_blank'href="https://github.com/Prlmetlme">
                    <Image className='bg-white rounded-full' src='/github.svg' height={30} width={30}></Image>
                     <h2 className='ml-2 mr-1 font-black'>GitHub</h2>
                  </a>
                </div>
            </div>

            <div className='col-start-3 row-start-3 p-1 rounded truncate bg-amber-400 text-black'>Full stack developer</div>
          </div>

          <div className='keen-slider__slide bg-violet-700 h-screen flex justify-center items-center text-xl'>

            <div className="flex">
              <div className='mx-4'>
                <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-slate-100 text-center pt-9'>
                  <img className='mx-auto rounded-2xl px-3' src="http://www.gamasutra.com/db_area/images/news/2021/Feb/377981/supermario64thumb1.jpg" alt="placeholder"/>
                  <div className='px-6 py-2'>
                    <div className='font-bold text-xl mb-2'>Drownzei</div>
                    <p className='text-gray-700 text-base'>Art</p>
                  </div>
                  <div className='px-6 pt-2 pb-2' >
                    <div className='pill'>
                      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>React</span>
                    </div>
                    <div className='pill'>
                      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>SCSS</span>
                    </div>
                    <div className="pill">
                      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Django</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='mx-4'>
                <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-slate-100 text-center pt-9'>
                  <a href="http://www.dhair.xyz" target="_blank" rel="noopener noreferrer">
                    <img className='mx-auto rounded-2xl' src="http://www.gamasutra.com/db_area/images/news/2021/Feb/377981/supermario64thumb1.jpg" alt="placeholder"/>
                  </a>
                  <div className='px-6 py-2'>
                    <div className='font-bold text-xl mb-2'>Dhair</div>
                    <p className='text-gray-700 text-base'>Hair</p>
                  </div>
                  <div className='px-6 pt-2 pb-2' >
                    <div className='pill'>
                      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Plain Javascript</span>
                    </div>
                    <div className='pill'>
                      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>CSS</span>
                    </div>
                    <div className="pill">
                      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Django</span>
                    </div>
                    <div className="pill">
                      <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Bootstrap</span>
                    </div>
                    
                  </div>
                </div>
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

      { loaded && slider.current && (
      <div className='fixed flex text-white bottom-5 left-0 right-0 ml-auto mr-auto w-fit bg-opacity-20 bg-white px-1 py-2 rounded-lg'>

        {/* @ts-ignore */}
        {[ ...Array(slider.current?.track.details.slides.length).keys(),].map((i) => {
          return <button key={i}
            onClick={
            (e) => {
              slider.current?.moveToIdx(i)
              // e.target.classList.toggle('active')
            }}

            className={'mx-4 w-4 h-4 portrait:w-5 portrait:h-5  rounded-full border-2' + (currentSlide === i ? ' active': "") }>    
            </button> 
            }) 
          }
          
      </div>
      )}
      <div id='scroll' className='fixed bottom-14 left-0 right-0 animate-bounce ml-auto mr-auto w-fit cursor-pointer' onClick={(e) => 
        {
        slider.current?.next()
        }
      }>
        <Image src='/Scroll.svg' height={40} width={40}></Image>
      </div>
    </div>
  )
}


export default Keen 