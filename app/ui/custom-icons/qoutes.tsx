import React from 'react'

type BaseSvgProps = React.ComponentPropsWithoutRef<'svg'>

const BaseSvg: React.FC<BaseSvgProps> = (props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 41"
      fill="currentColor" // fill color set to currentColor for tailwind customization
      xmlns="http://www.w3.org/2000/svg"
      className={props.className || ''}
      {...props} // spread any other passed props
    >
      <path d="M24.0002 8.7782L22.2037 0.517578C9.26813 1.11015 0.30127 6.49222 0.30127 22.3198V40.5382H22.9002V17.6404H14.3414C14.3415 12.5618 17.528 9.57482 24.0002 8.7782Z" />
    </svg>
  )
}

const QoutesCustomIcon: React.FC = () => {
  return (
    <div className="flex">
      <BaseSvg className="w-6 text-primaryA" />
      <BaseSvg className="w-6 text-primaryA" />
    </div>
  )
}

export default QoutesCustomIcon
