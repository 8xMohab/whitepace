'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import clsx from 'clsx'
import CheckCustomIcon from './custom-icons/check'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Button from './components/button'
import { pricingPlans } from '../data'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './components/emblaCarouselDotButton'
export default function PricingPlans({
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
          {pricingPlans.map((plan, index) => (
            <div key={`contentKey:${plan.title}`} className="mx-4">
              <div
                className={clsx(
                  'rounded-[10px] space-y-6 p-5 md:px-11 flex flex-col items-start my-6 ',
                  plan.title === 'Personal'
                    ? 'bg-primaryA text-white'
                    : 'border border-secondaryA text-black',
                  selectedIndex === index ? 'md:py-20' : 'md:py-10',
                )}
              >
                <div className="space-y-6">
                  <h3 className="p1-semi">{plan.title}</h3>
                  <p
                    className={`h4 ${plan.title === 'Personal' ? 'text-secondaryA' : ''}`}
                  >
                    {plan.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <p className="p3-regular min-h-10">{plan.description}</p>
                </div>
                <div>
                  <ul className="space-y-7">
                    {plan.features.map((feature) => (
                      <li
                        key={`${plan.title}:${feature}`}
                        className="p3-regular flex items-center"
                      >
                        {plan.title === 'Personal' ? (
                          <div className="w-5 h-5 mr-5 shrink-0">
                            <CheckCustomIcon
                              className="text-secondaryA"
                              strokeWidth="8"
                            />
                          </div>
                        ) : (
                          <div className="w-5 h-5 mr-[18px] shrink-0">
                            <CheckCustomIcon
                              className="text-black"
                              strokeWidth="8"
                            />
                          </div>
                        )}
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button
                    href="#"
                    variant={plan.title === 'Personal' ? 'primary' : 'ghost'}
                    className="py-5 px-10 p2-regular lg:p2-medium rounded-md border-secondaryA text-black"
                  >
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
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
