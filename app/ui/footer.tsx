import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './components/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import SelectLanguage from './components/select-language'
export default function Footer() {
  return (
    <footer className="mt-36 mb-8 container flex items-center justify-center text-center flex-col md:text-left md:items-start">
      <div className="w-full space-y-20 md:space-y-24 lg:space-y-0">
        <div className="lg:flex justify-between items-start w-full space-y-20 md:space-y-24 lg:space-y-0">
          <div className="space-y-6 flex flex-col items-center justify-center md:items-start lg:w-60">
            <div className="w-48 h-[34px] md:w-[191px] relative">
              <Image src="/logo-white.svg" alt="" fill />
            </div>
            <p className="tracking-normal p2-regular">
              whitepace was created for the new ways we live and work.
              <br className="hidden md:block lg:hidden" /> We make beautyfully
              designed around the world
            </p>
          </div>
          <nav className="space-y-20 lg:flex lg:space-y-0 lg:space-x-11">
            <div>
              <h3 className="p2-bold mb-4">Products</h3>
              <ul className="space-y-4">
                <li className="p2-regular">
                  <Link href="#">Overview</Link>
                </li>
                <li className="p2-regular">
                  <Link href="#">Pricing</Link>
                </li>
                <li className="p2-regular">
                  <Link href="#">Customer stories</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="p2-bold mb-4">Resources</h3>
              <ul className="space-y-4">
                <li className="p2-regular">
                  <Link href="#">Blog</Link>
                </li>
                <li className="p2-regular">
                  <Link href="#">Guides & tutorials</Link>
                </li>
                <li className="p2-regular">
                  <Link href="#">Help center</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="p2-bold mb-4">Company</h3>
              <ul className="space-y-4">
                <li className="p2-regular">
                  <Link href="#">About us</Link>
                </li>
                <li className="p2-regular">
                  <Link href="#">Careers</Link>
                </li>
                <li className="p2-regular">
                  <Link href="#">Media kit</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="space-y-6  flex flex-col items-center justify-center lg:items-start md:items-start">
            <div className="text-center space-y-6 md:text-left text-white relative">
              <h2 className="h4 md:h3 lg:h5 relative z-10">Try It Today</h2>
              <p className="p2-regular lg:w-64 lg:p3-regular">
                Get started for free. <br className="lg:hidden" />
                Add your whole team as your needs grow.
              </p>
            </div>
            <Button
              href="#"
              variant="primary"
              className="py-5 px-10 p2-regular lg:p2-medium rounded-md"
            >
              Start today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        <div>
          <div className="w-full border-b border-b-border-custom-color hidden lg:block mt-16 mb-8"></div>
        </div>
        <div className="space-y-5 lg:flex lg:justify-between lg:space-y-0 lg:items-center">
          <nav className="border-b border-b-border-custom-color pb-5 lg:border-0 lg:pb-0">
            <ul className="space-y-5 md:flex items-center justify-between md:space-y-0 lg:justify-start lg:items-start lg:space-x-16">
              <li className="p2-regular flex items-center justify-center md:justify-start">
                <SelectLanguage />
              </li>
              <li className="p2-regular">
                <Link href="#">Terms & privacy</Link>
              </li>
              <li className="p2-regular">
                <Link href="#">Security</Link>
              </li>
              <li className="p2-regular">
                <Link href="#">Status</Link>
              </li>
              <li className="p2-regular">
                <Link href="#">©2021 Whitepace LLC.</Link>
              </li>
            </ul>
          </nav>
          <div>
            <nav>
              <ul className="flex space-x-8 items-center justify-center md:justify-start">
                <li>
                  <Link href="#">
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.0058 10.1144C2.94316 10.1144 1.56497 10.1144 0.938515 10.1144C0.604408 10.1144 0.5 9.98912 0.5 9.6759C0.5 8.84063 0.5 7.98448 0.5 7.14921C0.5 6.81511 0.62529 6.7107 0.938515 6.7107H3.0058C3.0058 6.64805 3.0058 5.43692 3.0058 4.87311C3.0058 4.03784 3.15197 3.24434 3.56961 2.51348C4.00812 1.76174 4.63457 1.26058 5.42807 0.968239C5.95012 0.780304 6.47216 0.696777 7.03596 0.696777H9.08237C9.37471 0.696777 9.5 0.822067 9.5 1.11441V3.49492C9.5 3.78726 9.37471 3.91255 9.08237 3.91255C8.51856 3.91255 7.95476 3.91255 7.39095 3.93344C6.82715 3.93344 6.5348 4.2049 6.5348 4.78959C6.51392 5.41604 6.5348 6.0216 6.5348 6.66894H8.95708C9.29118 6.66894 9.41647 6.79423 9.41647 7.12833V9.65501C9.41647 9.98912 9.31207 10.0935 8.95708 10.0935C8.20534 10.0935 6.59745 10.0935 6.5348 10.0935V16.901C6.5348 17.2559 6.43039 17.3812 6.05452 17.3812C5.17749 17.3812 4.32135 17.3812 3.44432 17.3812C3.13109 17.3812 3.0058 17.2559 3.0058 16.9427C3.0058 14.7501 3.0058 10.1771 3.0058 10.1144Z"
                        fill="#F7F7EE"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4962 15.5387V15.5381H15.4999V10.0196C15.4999 7.31987 14.9246 5.24023 11.8002 5.24023C10.2983 5.24023 9.29033 6.07284 8.87884 6.86219H8.8354V5.49227H5.87305V15.5381H8.95767V10.5638C8.95767 9.25406 9.20344 7.98759 10.8091 7.98759C12.3911 7.98759 12.4147 9.48227 12.4147 10.6478V15.5387H15.4962Z"
                        fill="#F7F7EE"
                      />
                      <path
                        d="M0.723633 5.46484H3.85796V15.3156H0.723633V5.46484Z"
                        fill="#F7F7EE"
                      />
                      <path
                        d="M2.29104 0.539062C1.3023 0.539062 0.5 1.33763 0.5 2.32176C0.5 3.30589 1.3023 4.12115 2.29104 4.12115C3.27979 4.12115 4.08209 3.30589 4.08209 2.32176C4.08147 1.33763 3.27916 0.539063 2.29104 0.539063V0.539062Z"
                        fill="#F7F7EE"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 1.768C16.8678 2.04531 16.1942 2.22913 15.4919 2.31837C16.2144 1.887 16.7658 1.20912 17.0251 0.392062C16.3514 0.793687 15.6077 1.07738 14.8151 1.23569C14.1754 0.554625 13.2638 0.132812 12.2693 0.132812C10.3398 0.132812 8.78644 1.69894 8.78644 3.61888C8.78644 3.89513 8.80981 4.16075 8.86719 4.41362C5.96975 4.27231 3.40594 2.88363 1.68362 0.768188C1.38294 1.28988 1.20656 1.887 1.20656 2.52981C1.20656 3.73681 1.82812 4.80675 2.75463 5.42619C2.19469 5.41556 1.64538 5.253 1.18 4.99694C1.18 5.00756 1.18 5.02137 1.18 5.03519C1.18 6.72881 2.38806 8.13556 3.97225 8.45963C3.68856 8.53719 3.37937 8.57438 3.0585 8.57438C2.83538 8.57438 2.61012 8.56162 2.39869 8.51488C2.85025 9.89506 4.13163 10.9097 5.65525 10.9427C4.4695 11.8702 2.96394 12.4291 1.33406 12.4291C1.04825 12.4291 0.774125 12.4164 0.5 12.3813C2.04381 13.3769 3.87344 13.9453 5.8465 13.9453C12.2597 13.9453 15.766 8.63281 15.766 4.02794C15.766 3.87387 15.7607 3.72513 15.7533 3.57744C16.4449 3.08656 17.0261 2.4735 17.5 1.768Z"
                        fill="#F7F7EE"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
