import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { testimonials } from "../data";
import QoutesCustomIcon from "./custom-icons/qoutes";
export default function StaticTestimonials({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`${className} container flex items-center justify-center space-x-8`}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={`contentKey:${testimonial.name}:${index}`}
          className={clsx(
            "mx-4 lg:mx-0 space-y-10 p-5 lg:px-6 lg:py-16 shadow-custom-shadow rounded-xl",
            index === 0 ? "bg-white text-black" : "bg-primaryB text-white",
          )}
        >
          <div className="border-b border-b-black space-y-8 pb-10">
            <div className={clsx(index === 0 ? "text-primaryA" : "")}>
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
              <div className={clsx(index === 0 ? "" : "text-primaryA")}>
                <p className="p2-bold">{testimonial.name}</p>
              </div>
              <p className="p2-regular">{testimonial.jobTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
