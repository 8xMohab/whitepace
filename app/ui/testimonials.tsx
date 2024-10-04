"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { testimonials } from "../data";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./components/emblaCarouselDotButton";
import QoutesCustomIcon from "./custom-icons/qoutes";
export default function Testimonials({
  className = "",
}: {
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      breakpoints: {
        "(min-width: 768px)": { loop: true },
      },
    },
    [Autoplay()],
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi); // my own hook goddamn it

  return (
    <div className={className}>
      <div ref={emblaRef} className="">
        <div className="grid grid-flow-col auto-cols-[100%] max-w-screen-sm md:max-w-full md:auto-cols-[55%] items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={`contentKey:${testimonial.name}:${index}`}
              className={clsx(
                "mx-4 space-y-10 p-5 shadow-custom-shadow rounded-xl",
                index === selectedIndex
                  ? "bg-white text-black"
                  : "bg-primaryB text-white",
              )}
            >
              <div className="border-b border-b-black space-y-8 pb-10">
                <div
                  className={clsx(
                    index === selectedIndex ? "text-primaryA" : "",
                  )}
                >
                  <QoutesCustomIcon />
                </div>
                <p className="p2-regular">{testimonial.text}</p>
              </div>
              <div className="space-y-6 md:flex md:space-x-6 md:space-y-0">
                <div className="w-16 h-16 shrink-0 relative">
                  <Image
                    src={testimonial.avatar}
                    fill
                    alt="a place holder image"
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="space-y-4">
                  <div
                    className={clsx(
                      index === selectedIndex ? "" : "text-primaryA",
                    )}
                  >
                    <p className="p2-bold">{testimonial.name}</p>
                  </div>
                  <p className="p2-regular">{testimonial.jobTitle}</p>
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
              "w-3 h-3 rounded-full",
              selectedIndex === index ? "bg-primaryA" : "bg-primaryB",
            )}
            onClick={() => onDotButtonClick(index)}
          ></DotButton>
        ))}
      </div>
    </div>
  );
}
