'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'
import CheckCustomIcon from './custom-icons/check'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Button from './components/button'
import { testimonials } from '../data'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './components/emblaCarouselDotButton'
import QoutesCustomIcon from './custom-icons/qoutes'
export default function Testimonials({
  className = '',
}: {
  className?: string
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      breakpoints: {
        '(min-width: 768px)': { loop: true },
      },
    },
    [Autoplay()],
  )
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi) // my own hook goddamn it

  return (
    <div className={className}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="grid grid-flow-col auto-cols-[100%] max-w-screen-sm md:max-w-full md:auto-cols-[65%] items-center">
          {testimonials.map((testimonial, index) => (
            <div key={`contentKey:${testimonial.name}:${index}`} className="">
              <h2>{testimonial.name}</h2>
              <QoutesCustomIcon />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3 mt-16 md:hidden">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={`trigger-button-${index}`}
            className={clsx(
              'w-3 h-3 rounded-full',
              selectedIndex === index ? 'bg-primaryA' : 'bg-primaryB',
            )}
            onClick={() => onDotButtonClick(index)}
          ></DotButton>
        ))}
      </div>
    </div>
  )
}
