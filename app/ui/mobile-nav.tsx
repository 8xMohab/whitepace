'use client'
import React, { useState } from 'react'
import {
  ArrowRightIcon,
  Cross1Icon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons'
import Button from './components/button'
import * as Accordion from '@radix-ui/react-accordion'

export default function MobileNav() {
  const [list, setList] = useState(false)
  let listPosition
  if (list) {
    listPosition = 'translate-x-[0%]'
  } else {
    listPosition = 'translate-x-[100%]'
  }
  return (
    <div className="xl:hidden z-30">
      <HamburgerMenuIcon width={36} height={36} onClick={() => setList(true)} />
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white ${listPosition} text-black`}
      >
        <div className="relative w-full h-full container mt-4">
          <button
            type="button"
            onClick={() => setList(false)}
            className="absolute top-0 right-0 z-10"
          >
            <Cross1Icon width={42} height={26} />
          </button>
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Header>
                <Accordion.Trigger>Products</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>Product A</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Header>
                <Accordion.Trigger>Solutions</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>Product A</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3">
              <Accordion.Header>
                <Accordion.Trigger>Resources</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>Resource A</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-4">
              <Accordion.Header>
                <Accordion.Trigger>Pricing</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>Pricing A</Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
          <div className="flex flex-col">
            <Button href="#" className="bg-secondaryA text-primaryA py-4 px-10">
              Login
            </Button>
            <Button href="#" className="bg-primaryB text-white py-4 px-6 ">
              Try Whitepace free
              <span>
                <ArrowRightIcon className="w-3 h-3 ml-1" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
