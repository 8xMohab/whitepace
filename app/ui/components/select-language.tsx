import React from 'react'
import * as Select from '@radix-ui/react-select'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import clsx from 'clsx'
import GlobeCustomIcon from '../custom-icons/globe'

const SelectLanguage = () => (
  <Select.Root defaultValue="en">
    <Select.Trigger
      className="flex items-center justify-center space-x-[6px]"
      aria-label="Languages"
    >
      <div className="w-5 flex items-center justify-center">
        <GlobeCustomIcon />
      </div>
      <Select.Value placeholder="Select a language…" />
      <Select.Icon className="">
        <ChevronDownIcon width="20px" height="20px" />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="bg-white text-black">
        <Select.ScrollUpButton className="">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="">
          <Select.Group>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof Select.Item> {
  className?: string
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={clsx('', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  },
)
SelectItem.displayName = 'SelectItem'

export default SelectLanguage
