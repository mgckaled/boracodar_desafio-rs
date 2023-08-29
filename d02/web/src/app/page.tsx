'use client'
import Image from 'next/image'
import { useState } from 'react'

import animatedIcon from '../assets/360.svg'
import staticIcon from '../assets/close.svg'
import sofaGIF from '../assets/sofa.gif'
import sofaImg from '../assets/sofa.jpg'

export default function Home() {
  const [isAnimationActive, setAnimationActive] = useState(false)

  const handleClick = () => {
    setAnimationActive(!isAnimationActive)
  }

  return (
    <main className='flex align-center gap-16'>
      <div className='relative w-[449px] h-[222px] object-cover'>
        <button className=' absolute right-0 bg-transparent border-0' onClick={handleClick}>
          {isAnimationActive ? (
            <Image src={animatedIcon} alt='icone representando um girp de 360°' width={33} height={23} />
          ) : (
            <Image src={staticIcon} alt='icone de X, representando para algo' width={16} height={16} />
          )}
        </button>

        {isAnimationActive ? (
          <Image src={sofaImg} alt='imagem de um sofá' loading={'lazy'} />
        ) : (
          <Image src={sofaGIF} alt='imagem de um sofá girando' unoptimized loading={'lazy'} />
        )}
      </div>

      <div className='flex justify-center align-center flex-col'>
        <h4 className='font-light text-xs'>CÓDIGO: 42404</h4>
        <h1 className='font-semibold text-3xl mt-1'>Sofá Margot II - Rosé</h1>
        <p className='mt-2 opacity-70'>R$ 4.000</p>
        <button className='text-xs px-3 py-2 border-[1px] border-textColor rounded-full bg-transparent mt-4'>
          ADICIONAR À CESTA
        </button>
      </div>
    </main>
  )
}

