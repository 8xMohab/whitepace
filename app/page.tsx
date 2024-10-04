import Image from 'next/image'
import Button from './ui/components/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import PricingPlans from './ui/pricing-plans'
import StaticPricingPlans from './ui/static-pricing-plans'
import { sponsors } from './data'
import clsx from 'clsx'
import Testimonials from './ui/testimonials'
import StaticTestimonials from './ui/static-testimonials'
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 md:pt-36 pb-20 container lg:flex-row lg:items-start xl:items-center">
        <div className="space-y-16  flex flex-col items-center justify-center lg:items-start">
          <div className="text-center space-y-6 lg:text-left">
            <h1 className="h4 md:h3 lg:h2">Get More Done with whitepace</h1>
            <p className="p2-regular">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          <Button
            href="#"
            variant="primary"
            className="py-5 px-10 p2-regular lg:p2-medium lg:p-5"
          >
            Try TasKey Free
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <div className="pt-24 lg:pt-0">
          <div className="relative w-72 h-48 md:w-[551px] md:h-[367px] lg:w-[526px] lg:h-[350px] xl:w-[685px] xl:h-[456px] 2xl:w-[824px] 2xl:h-[549px]">
            <Image
              src="/images/placeholder-image.jpg"
              fill
              alt="a place holder image"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* work management section */}
      <section className="bg-white relative">
        {/* background illustrations */}
        <div className="absolute bg-ripple-waves-small bg-contain bg-center top-[40px] -left-[68px] w-[169px] h-[210px] md:hidden"></div>
        <div className="absolute bg-ripple-waves-medium bg-contain bg-no-repeat bg-center top-[32px] -left-[164px] w-[356px] h-[270px] hidden md:block lg:hidden"></div>
        <div className="absolute bg-ripple-waves-large bg-contain bg-no-repeat bg-center top-[62px] -left-[100px] w-[245px] h-[270px] hidden lg:block xl:hidden"></div>
        <div className="absolute bg-ripple-waves-xl bg-contain bg-no-repeat bg-center top-0 -left-[351px] w-[569px] h-[440px] hidden xl:block 2xl:hidden"></div>

        {/* Project Management */}
        <div className="flex flex-col items-center justify-center pt-20 md:pt-28 lg:pt-36 container lg:flex-row lg:items-center">
          <div className="space-y-16  flex flex-col items-center justify-center lg:items-start">
            <div className="text-center space-y-6 lg:text-left text-black relative">
              {/* Title marker illustrations */}
              <div className="absolute bg-title-marker-one bg-contain bg-no-repeat bg-center top-[94px] right-0 w-[254px] h-[40px] md:hidden"></div>
              <div className="absolute bg-title-marker-one-medium bg-contain bg-no-repeat bg-center top-[44px] right-[75px] w-[345px] h-[32px] hidden md:block lg:hidden"></div>
              <div className="absolute bg-title-marker-two-large bg-contain bg-no-repeat bg-center top-[120px] right-[150px] w-[234px] h-[38px] hidden lg:block xl:hidden"></div>
              <div className="absolute bg-title-marker-one-xl bg-contain bg-no-repeat bg-center top-[150px] -left-[20px] w-[515px] h-[36px] hidden xl:block"></div>
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
                Project Management
              </h2>
              <p className="p2-regular lg:w-4/5 xl:w-full">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            <Button
              href="#"
              variant="primary"
              className="py-5 px-10 p2-regular lg:p2-medium lg:py-5 lg:px-10 rounded-md"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="pt-16 lg:pt-0">
            <div className="relative w-72 h-44 md:w-[561px] md:h-[349px] lg:w-[527px] lg:h-[328px] xl:w-[719px] xl:h-[448px] 2xl:w-[778px] 2xl:h-[547px]">
              <Image
                src="/images/placeholder-image.jpg"
                fill
                alt="a place holder image"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Work Together */}
        <section className="flex flex-col items-center justify-center pt-24 pb-20 md:pb-24 lg:pb-36 container lg:flex-row lg:items-center">
          <div className="space-y-16  flex flex-col items-center justify-center lg:items-start lg:order-2 lg:pl-8 xl:pl-40 2xl:pl-24">
            <div className="text-center space-y-6 lg:text-left text-black relative">
              <div className="absolute bg-title-marker-two bg-contain bg-no-repeat bg-center top-[45px] right-[-6px] w-[169px] h-[25px] md:hidden"></div>
              <div className="absolute bg-title-marker-two bg-contain bg-no-repeat bg-center top-[49px] right-1/4 w-[223px] h-[32px] hidden md:block xl:hidden"></div>
              <div className="absolute bg-title-marker-two-xl bg-contain bg-no-repeat bg-center top-[70px] right-7 w-[334px] h-[25px] hidden xl:block 2xl:right-[100px]"></div>
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
                Work together
              </h2>
              <p className="p2-regular">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>
            <Button
              href="#"
              variant="primary"
              className="py-5 px-10 p2-regular lg:p2-medium lg:p-5"
            >
              Try it now
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="pt-16 md:pt-24 lg:pt-0 w-full flex md:items-center md:justify-center lg:block ">
            <div className="relative w-full md:w-[454px] lg:w-[528px] h-64 md:h-[422px] lg:h-[492px] xl:w-[582px] xl:h-[542px] 2xl:w-[710px] 2xl:h-[662px]">
              <Image
                src="/illustrations/work-together.svg"
                fill
                alt="a place holder image"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </section>
      {/* Extersion Section */}
      <section className="py-20 md:py-24 lg:py-36">
        <div className="flex flex-col items-center justify-center container lg:flex-row lg:items-center">
          <div className="space-y-16  flex flex-col items-center justify-center lg:items-start">
            <div className="text-center space-y-6 lg:text-left text-white relative">
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
                Use as Extension
              </h2>
              <p className="p2-regular">
                Use the web clipper extension, available on Chrome and Firefox,
                to save web pages or take screenshots as notes.
              </p>
            </div>
            <Button
              href="#"
              variant="primary"
              className="py-5 px-10 p2-regular lg:p2-medium rounded-md"
            >
              Let&apos;s Go
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="pt-16 lg:pt-0">
            <div className="relative w-72 h-52 md:w-[557px] md:h-[388px] lg:w-[459px] lg:h-[320px] lg:ml-[98px] xl:w-[686px] xl:h-[479px]">
              <Image
                src="/images/placeholder-image.jpg"
                fill
                alt="a place holder image"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Customize Section */}
      <section className="py-24 md:py-36 lg:py-36 bg-white">
        <div className="flex flex-col items-center justify-center container lg:flex-row lg:items-center">
          <div className="w-full flex items-center justify-center lg:block">
            <div className="relative w-72 h-56 md:w-[534px] md:h-[397px] xl:w-[670px] xl:h-[500px] 2xl:w-[714px] 2xl:h-[532px] mb-16 lg:m-0 lg:mr-[60px] 2xl:mr-[98px]">
              <Image
                src="/images/placeholder-image.jpg"
                fill
                alt="a place holder image"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-16  flex flex-col items-center justify-center lg:items-start">
            <div className="text-center space-y-6 lg:text-left text-black relative">
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
                Customise it to your needs
              </h2>
              <p className="p2-regular">
                Customise the app with plugins, custom themes and multiple text
                editors (Rich Text or Markdown). Or create your own scripts and
                plugins using the Extension API.
              </p>
            </div>
            <Button
              href="#"
              variant="primary"
              className="py-5 px-10 p2-regular lg:p2-medium rounded-md"
            >
              Let&apos;s Go
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="bg-white py-20">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center">
          <div className="flex flex-col items-center justify-center lg:items-start space-y-16">
            <div className="text-center space-y-6 text-black relative container flex flex-col items-center justify-center">
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
                Choose Your Plan
              </h2>
              <p className="p2-regular lg:w-[979px]">
                Whether you want to get organized, keep your personal life on
                track, or boost workplace productivity, Evernote has the right
                plan for you.
              </p>
            </div>
            {/* Pricing Plans */}
            <PricingPlans className="lg:hidden" />
            <StaticPricingPlans className="hidden lg:flex" />
          </div>
        </div>
      </section>
      {/* Accessability section */}
      <section className="py-24 md:py-36 lg:py-36">
        <div className="flex flex-col container lg:flex-row">
          <div className="space-y-16 md:w-[604px] lg:w-[650px] xl:w-full flex flex-col items-start justify-start xl:items-center xl:justify-center">
            <div className="text-left xl:text-center space-y-6 lg:text-left text-white relative">
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
                Your work, everywhere you are
              </h2>
              <p className="p2-regular">
                Access your notes from your computer, phone or tablet by
                synchronising with various services, including whitepace,
                Dropbox and OneDrive. The app is available on Windows, macOS,
                Linux, Android and iOS. A terminal app is also available!
              </p>
            </div>
            <Button
              href="#"
              variant="primary"
              className="py-5 px-10 p2-regular lg:p2-medium rounded-md"
            >
              Try Taskey
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* About data section */}
      <div className="bg-white text-black">
        <section className="flex flex-col items-center justify-center container lg:flex-row lg:items-center py-20 md:py-36">
          <div className="space-y-16 order-2 flex flex-col items-center justify-center lg:items-start lg:order-2">
            <div className="text-center space-y-6 lg:text-left text-black relative">
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
                100% your data
              </h2>
              <p className="p2-regular">
                The app is open source and your notes are saved to an open
                format, so you&apos;ll always have access to them. Uses
                End-To-End Encryption (E2EE) to secure your notes and ensure
                no-one but yourself can access them.
              </p>
            </div>
            <Button
              href="#"
              variant="primary"
              className="py-5 px-10 p2-regular lg:p2-medium lg:p-5"
            >
              Read more
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="w-full flex items-center justify-center order-1 lg:order-3 mb-24 lg:mb-0">
            <div className="relative w-[290px] h-[162px] md:hidden">
              <Image
                src="/illustrations/data-small.svg"
                fill
                alt="a place holder image"
                className="object-cover"
              />
            </div>
            <div className="relative w-[513px] h-[287px] hidden md:block lg:hidden">
              <Image
                src="/illustrations/data-medium.svg"
                fill
                alt="a place holder image"
                className="object-cover"
              />
            </div>
            <div className="relative w-[562px] h-[314px] hidden lg:block xl:hidden">
              <Image
                src="/illustrations/data-large.svg"
                fill
                alt="a place holder image"
                className="object-cover"
              />
            </div>
            <div className="relative w-[681px] h-[381px] hidden xl:block">
              <Image
                src="/illustrations/data-xl.svg"
                fill
                alt="a place holder image"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Sponsors Section */}
      <div className="bg-white text-black">
        <section className="flex flex-col items-center justify-center container py-20 md:py-36">
          <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10 mb-24">
            Our sponsors
          </h2>
          <ul className="w-full flex flex-col items-center justify-center space-y-24 lg:space-y-8 lg:flex-row lg:justify-between">
            {sponsors.map((sponsor) => (
              <li
                key={`sponsor:${sponsor}`}
                className={clsx(
                  sponsor.name === 'Apple' ? 'w-20' : 'w-52 md:w-72',
                )}
              >
                {<sponsor.Icon width="100%" height="100%" />}
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/* Favorite apps section  */}
      <section className="flex flex-col items-center justify-center container lg:flex-row lg:items-center py-20 md:py-36">
        <div className="space-y-16 order-2 flex flex-col items-center justify-center lg:items-start lg:order-2">
          <div className="text-center space-y-6 lg:text-left relative">
            <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
              Work with Your Favorite Apps Using whitepace
            </h2>
            <p className="p2-regular">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </p>
          </div>
          <Button
            href="#"
            variant="primary"
            className="py-5 px-10 p2-regular lg:p2-medium lg:p-5"
          >
            Read more
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <div className="w-full flex items-center justify-center order-1 lg:order-1 mb-24 lg:mb-0 lg:mr-24">
          <div className="relative w-[286px] h-[231px] md:hidden">
            <Image
              src="/illustrations/apps-small.svg"
              fill
              alt="a place holder image"
              className="object-cover"
            />
          </div>
          <div className="relative w-[485px] h-[392px] hidden md:block lg:hidden">
            <Image
              src="/illustrations/apps-medium.svg"
              fill
              alt="a place holder image"
              className="object-cover"
            />
          </div>
          <div className="relative w-[528px] h-[427px] hidden lg:block xl:hidden">
            <Image
              src="/illustrations/apps-large.svg"
              fill
              alt="a place holder image"
              className="object-cover"
            />
          </div>
          <div className="relative w-[582px] h-[470px] hidden xl:block">
            <Image
              src="/illustrations/apps-xl.svg"
              fill
              alt="a place holder image"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-36 bg-white text-black">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center">
          <div className="flex flex-col items-center justify-center lg:items-start space-y-16">
            <div className="text-center text-black relative container flex flex-col items-center justify-center">
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10 leading-10">
                What Our
                <br className="md:hidden" />
                Clients Say
              </h2>
            </div>
            {/* Testimonials Cards */}
            <Testimonials className="lg:hidden" />
            <StaticTestimonials className="hidden lg:flex" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-24 pb-8 md:pt-36 flex items-start justify-start flex-col space-y-10 container lg:items-center lg:justify-center text-left lg:text-center">
        <div className="space-y-6 relative">
          <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
            Try Whitepace today
          </h2>
          <p className="p2-regular">
            Get started for free. <br /> Add your whole team as your needs grow.
          </p>
        </div>
        <Button
          href="#"
          variant="primary"
          className="py-5 px-10 p2-regular lg:p2-medium lg:p-5"
        >
          Try Taskey free
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Button>
        <p className="p2-regular">On a big team? Contact sales</p>
        <div className="flex space-x-10">
          <div className="w-9 h-9 md:w-16 md:h-16">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_23713)">
                <path
                  d="M4.99623 12.2002C4.37595 12.2002 3.84967 12.4165 3.41705 12.8491C2.98444 13.2817 2.76807 13.8009 2.76807 14.4067V23.7096C2.76807 24.3306 2.98437 24.8565 3.41705 25.2891C3.84967 25.7217 4.37595 25.9381 4.99623 25.9381C5.61605 25.9381 6.13914 25.7218 6.56505 25.2891C6.99012 24.8565 7.20323 24.3306 7.20323 23.7096V14.4067C7.20323 13.8008 6.98693 13.2817 6.55425 12.8491C6.12157 12.4165 5.60212 12.2002 4.99623 12.2002Z"
                  fill="white"
                />
                <path
                  d="M22.9088 3.84887L24.4449 1.01521C24.5457 0.827609 24.5099 0.683752 24.337 0.582596C24.1493 0.49537 24.0051 0.539569 23.9044 0.712067L22.3468 3.56838C20.9763 2.96243 19.5267 2.65889 17.9981 2.65889C16.4692 2.65889 15.0195 2.96249 13.6494 3.56838L12.0918 0.712067C11.9906 0.539569 11.8464 0.495761 11.6592 0.582596C11.4859 0.684207 11.45 0.827609 11.5513 1.01521L13.0874 3.84887C11.5298 4.64321 10.2892 5.74948 9.36619 7.17009C8.44316 8.59148 7.98145 10.1447 7.98145 11.8326H27.993C27.993 10.1451 27.5312 8.5918 26.6082 7.17009C25.6851 5.74948 24.4517 4.64321 22.9088 3.84887ZM14.0279 7.97048C13.8618 8.13699 13.6634 8.21986 13.4327 8.21986C13.2016 8.21986 13.0073 8.13699 12.8487 7.97048C12.6901 7.80475 12.6109 7.60713 12.6109 7.37572C12.6109 7.14509 12.6901 6.94708 12.8487 6.78096C13.0073 6.61523 13.2021 6.53237 13.4327 6.53237C13.6634 6.53237 13.8618 6.61523 14.0279 6.78096C14.1936 6.94747 14.2769 7.14509 14.2769 7.37572C14.2764 7.60674 14.1932 7.80475 14.0279 7.97048ZM23.1466 7.97048C22.9877 8.13699 22.7929 8.21986 22.5627 8.21986C22.3315 8.21986 22.1332 8.13699 21.9674 7.97048C21.8013 7.80475 21.7185 7.60713 21.7185 7.37572C21.7185 7.14509 21.8013 6.94708 21.9674 6.78096C22.1332 6.61523 22.3315 6.53237 22.5627 6.53237C22.7933 6.53237 22.9877 6.61523 23.1466 6.78096C23.3053 6.94747 23.3845 7.14509 23.3845 7.37572C23.3845 7.60674 23.3052 7.80475 23.1466 7.97048Z"
                  fill="white"
                />
                <path
                  d="M8.06738 27.0191C8.06738 27.6832 8.29801 28.2453 8.75933 28.7067C9.22104 29.168 9.78319 29.3986 10.4468 29.3986H12.0479L12.0698 34.3102C12.0698 34.9304 12.2861 35.4571 12.7187 35.8898C13.1513 36.3224 13.6709 36.5387 14.2764 36.5387C14.8962 36.5387 15.4229 36.3224 15.8555 35.8898C16.2882 35.4571 16.5045 34.9305 16.5045 34.3102V29.3991H19.49V34.3102C19.49 34.9304 19.7062 35.4571 20.1389 35.8898C20.5716 36.3224 21.0977 36.5387 21.7181 36.5387C22.338 36.5387 22.8646 36.3224 23.2972 35.8898C23.7299 35.4571 23.9462 34.9305 23.9462 34.3102V29.3991H25.5688C26.2177 29.3991 26.7727 29.1684 27.2348 28.7071C27.6961 28.2457 27.9269 27.6836 27.9269 27.0196V12.6104H8.06738V27.0191Z"
                  fill="white"
                />
                <path
                  d="M31.0006 12.2002C30.3946 12.2002 29.8755 12.4133 29.4429 12.8384C29.0103 13.2642 28.7939 13.7873 28.7939 14.4067V23.7096C28.7939 24.3306 29.0102 24.8565 29.4429 25.2891C29.8755 25.7218 30.395 25.9381 31.0006 25.9381C31.6204 25.9381 32.1471 25.7218 32.5797 25.2891C33.0124 24.8565 33.2287 24.3306 33.2287 23.7096V14.4067C33.2287 13.7872 33.0124 13.2642 32.5797 12.8384C32.1471 12.4133 31.6204 12.2002 31.0006 12.2002Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_23713">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="translate(0 0.539062)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-9 h-9 md:w-16 md:h-16">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_23701)">
                <path
                  d="M27.8643 20.7178C26.874 15.734 31.6045 12.8111 31.6045 12.8111C31.6045 12.8111 29.7614 10.1446 26.6639 9.45865C23.568 8.77118 22.0185 9.63011 20.472 10.2743C18.924 10.9201 18.1516 10.9201 18.1516 10.9201C15.9177 10.9201 14.2847 8.55489 10.0286 9.63169C7.09645 10.3717 4.00972 13.7565 3.45202 17.7964C2.89432 21.8379 4.09781 26.9947 6.41821 30.9913C8.73861 34.991 11.1023 36.4942 12.78 36.5375C14.4578 36.5791 16.1325 35.3355 18.1516 35.0327C20.1724 34.733 21.416 35.765 23.398 36.3227C25.3724 36.8789 26.0645 36.3629 28.3386 34.4287C30.6188 32.4945 32.6828 26.9468 32.6828 26.9468C32.6828 26.9468 28.8546 25.7047 27.8643 20.7178Z"
                  fill="white"
                />
                <path
                  d="M23.4804 6.23503C25.6741 3.99964 24.9311 0.539062 24.9311 0.539062C24.9311 0.539062 21.8506 1.07979 19.7866 3.22715C17.7241 5.37609 18.0656 8.77021 18.0656 8.77021C18.0656 8.77021 21.2866 8.46898 23.4804 6.23503Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_23701">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="translate(0 0.539062)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-9 h-9 md:w-16 md:h-16">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_23706)">
                <path
                  d="M0 20.2754V30.7614L14.9704 32.9111V20.2754H0Z"
                  fill="white"
                />
                <path
                  d="M14.9704 4.16895L0 6.31865V16.8047H14.9704V4.16895Z"
                  fill="white"
                />
                <path
                  d="M36.0009 16.8045V0.97168L18.4458 3.49133V16.8045H36.0009Z"
                  fill="white"
                />
                <path
                  d="M18.4458 33.5895L36.0009 36.1067V20.2764H18.4458V33.5895Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_23706">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="translate(0 0.539062)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </main>
  )
}
