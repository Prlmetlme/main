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
  const [animations, setAnimations] = useState(400)
  const [transitions, setTransitions] = useState(true)
  const techs: string[] = [ "HTML5", "CSS", "Javascript (ES6)", "SCSS", "Bootstrap", "Tailwind",  
                            "React.js", "Next.js", "Typescript", "Django", "Git", "REST", "Python", 
                            "MySQL", 'Heroku'
                          ]
  const contactInfoColor: string = 'amber-400';
  const transitionsList: string[] = ['slide-in1', 'slide-in2', 'slide-in3', 'slide-in4']

  const random = (list: string[]) => {
    return list[Math.floor(Math.random() * list.length)];
  }

// Configures the slider
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: looped,
      vertical: true,
      mode: 'free-snap',
      initial: 2,
      defaultAnimation: {duration: animations},

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
        const slidesHTML: any = document.querySelectorAll('.slide-main')

// Destroy the scroll icon after the first slide
        if (scrollIcon) {
          scrollIcon.style.transition = ".5s"
          scrollIcon.style.cursor = 'default'
          scrollIcon.style.opacity = '0'
          setTimeout(() => scrollIcon.remove(), 500);
        }
// Tansition anmation if transition is enabled
        setCurrentSlide(slideOn)
        if (transitions) {
        slidesHTML[slideOn].classList.add(random(transitionsList))
        }
      },
    },
    []
  )

// Adds scrolling to the arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        slider.current?.next()
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        slider.current?.prev()
      }
      if (e.key === 'J') {
        console.log('J was pressed')
        setAnimations(0)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
    }
  }
  , [])

// Allows scrolling via mouse wheel if the slider is not animating
  const mouseWheelScrolling = (e: any) => {
    if (e.deltaY > 0 && !(slider.current?.animator.active)) { slider.current?.next()}
    else if(!(slider.current?.animator.active)) { slider.current?.prev() }
  }

// Disable all Animations
  const disableAnimations = (e: any) => {
    const toggle = e.target as HTMLInputElement;
    const toggleTag = document.querySelector('#animations-label')

    toggleTag?.classList.remove('animate-pulse')
    if (!toggle.checked) {
      setAnimations(0);
      setTransitions(false);
    }
    else {
      setAnimations(400);
      setTransitions(true);
    }
  }

  const resetAnimation = (e: any) => {
    const lastClass: string = [...e.target.classList].pop()
    console.log(lastClass)
    e.target.classList.remove(lastClass)
    
  }

// Copies contact info to clipboard (Honestly, this is self-explanatory)
  const copyToClipboard = (e: any) => {
    const element = e.target as HTMLElement;
    const valueToCopy: any = element.dataset['value']

    navigator.clipboard.writeText(valueToCopy)
    element.innerHTML = 'Copied to clipboard: ' + element.dataset['value']
    element.style.backgroundColor = '#fbbd23'
    element.style.color = '#000'
    window.location.href = 'mailto:BrandonClarke2020@Gmail.com'
  }

  return (
<div onWheel={mouseWheelScrolling} className="navigation-wrapper h-screen">
  <div ref={sliderRef} className='keen-slider h-screen'>


{/* First slide */}
    <div className='keen-slider__slide bg-zinc-900 h-screen text-slate-300 flex flex-col'>
      <div className="h-full w-full slide-main" onAnimationEnd={resetAnimation}>
        <div className='w-full h-fit text-black flex pt-6 pb-2 px-4 items-center top-bar'>
          <p className='cursive'>Clarke</p>
          <a title='View GitHub page 👨‍💻' className='flex justify-center items-center justify-items-center content-center ml-auto growing' target='_blank' rel="noreferrer" href="https://github.com/Prlmetlme">
            <Image className='bg-white rounded-full' src='/github.svg' height={30} width={30}></Image>
          </a>
        
          <div className="resume growing">
            <a target='_blank' rel="noreferrer" href="https://github.com/Prlmetlme">
              <div className='px-2 bg-white border-black opacity-90 rounded-full p-1 ml-3 font-semibold wrapper'>
                <div title='View Resume'>
                  Resumé
                </div>
              </div>
            </a>
          </div>
            <label className="switch ml-4 mr-1">
              <input onChange={disableAnimations} id='animations' type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
            <label id='animations-label' className='text-white animate-pulse portrait:hidden' htmlFor="animations">Animations</label>
        </div>
        <div className='flex h-5/6 px-5 justify-center'>
            <h1 className='absolute left-0 right-0 mx-auto max-w-max text-4xl text-yellow-300 pop-in-secondary'>Full stack developer</h1>
          <img className='pop-in' src="/Fresh Folk - Home Office.svg" alt="Vector graphic of a web developer" />
        </div>
      </div>
    </div>


{/* Second slide */}
    <div className='keen-slider__slide bg-violet-700 h-screen '>
      <div className="h-full w-full flex items-center text-xl portrait:flex-col portrait:px-2 portrait:py-20 slide-main" onAnimationEnd={resetAnimation}>
        <h1 className='font-black text-4xl inline-block mx-auto max-w-fit min-w-min leading-normal text-center p-2 portrait:mx-auto portrait:mt-auto'>Experience <br /> with various technologies</h1>
        <div className='bg-black w-px h-2/3 mx-auto portrait:w-2/3 portrait:h-px portrait:my-6'></div>
        {loaded && slider.current && (
          <div className="flex flex-wrap h-fit w-64 justify-items-center justify-center text-center mx-auto p-4 portrait:mb-auto portrait:w-fit">
            {[...techs,].map((i) => {
              return <div className={"pill"} key={i}>
                <span className={'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'}>{i}</span>
                    </div>
              })
            }
          </div>
          )} 
        </div>
      </div>


{/* Third slide */}
    <div className='keen-slider__slide bg-red-500 h-screen'>      
      <div className="h-full w-full flex justify-center text-xl p-10 slide-main" onAnimationEnd={resetAnimation}>
        Previous Work
        <div>

        </div>
      </div>
    </div>

{/* Fourth slide */}
    <div className='keen-slider__slide  h-screen flex justify-center items-center text-xl bg-amber-400 '>
      <div className='slide-main flex flex-col items-center' onAnimationEnd={resetAnimation}>
        <div id='email' data-value='BrandonClarke2020@Gmail.com' onClick={copyToClipboard} className='relative z-10 text-amber-400 border-2 border-amber-400 rounded-md px-4 py-2 text-center w-fit my-3'>
          Email
        </div>
        {/* <div className='relative z-10 text-amber-400 border-2 border-amber-400 rounded-md px-4 py-2 text-center w-fit my-3'>
          Website - feature to be added
        </div> */}
        {/* @ts-ignore */}
        <div onClick={(e: any) => {document.querySelector('#screen-fill').classList.toggle('pulse'); document.querySelector('#email')?.classList.toggle('cursor-pointer')}} 
          className='fill-button flex text-center flex-col'>
          Contact informtaion
        </div>
        <div id='screen-fill' className='self-center'></div>
      </div>
    </div>
  </div>
    {loaded && slider.current && (
      <div className='fixed flex text-white bottom-5 left-0 right-0 ml-auto mr-auto w-fit bg-opacity-20 bg-white px-1 py-2 rounded-lg'>
        {[...Array(slider.current?.track.details.slides.length).keys(),].map((i) => {
          return <button key={i}
            onClick={(e) => {slider.current?.moveToIdx(i)}}
            className={'mx-4 w-4 h-4 portrait:w-5 portrait:h-5  rounded-full border-2' + (currentSlide === i ? ' active' : "")}>
                </button>
          })
        }
      </div>
    )}
  <div id='scroll' className='fixed bottom-14 left-0 right-0 animate-bounce ml-auto mr-auto w-fit cursor-pointer' onClick={(e) => {slider.current?.next()}}>
    <Image src='/Scroll.svg' height={40} width={40}></Image>
  </div>
</div>
  )
}

export default Keen 