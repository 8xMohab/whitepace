import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import Button from "./ui/components/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { pricingPlans } from "./data";
import CheckCustomIcon from "./ui/custom-icons/check";
import clsx from "clsx";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-20 md:pt-36 pb-20 container lg:flex-row lg:items-start xl:items-center">
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
      </div>
      jk
      {/* work management section */}
      <div className="bg-white relative">
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
        <div className="flex flex-col items-center justify-center pt-24 pb-20 md:pb-24 lg:pb-36 container lg:flex-row lg:items-center">
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
        </div>
      </div>
      {/* Extersion Section */}
      <div className="py-20 md:py-24 lg:py-36">
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
      </div>
      {/* Customize Section */}
      <div className="py-24 md:py-36 lg:py-36 bg-white">
        <div className="flex flex-col items-center justify-center container lg:flex-row lg:items-center">
          <div className="w-full">
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
      </div>
      {/* Pricing Section */}
      <div className="bg-white py-20">
        <div className="flex flex-col items-center justify-center container lg:flex-row lg:items-center">
          <div className="flex flex-col items-center justify-center lg:items-start space-y-16">
            <div className="text-center space-y-6 lg:text-left text-black relative">
              <h2 className="h4 md:h3 lg:h2 xl:h1 relative z-10">
                Choose Your Plan
              </h2>
              <p className="p2-regular">
                Whether you want to get organized, keep your personal life on
                track, or boost workplace productivity, Evernote has the right
                plan for you.
              </p>
            </div>

            {/* Pricing Tabs */}
            <Tabs.Root
              className="text-black flex flex-col items-center"
              defaultValue="Personal"
            >
              {pricingPlans.map((plan) => (
                <Tabs.Content
                  key={`contentKey:${plan.title}`}
                  value={plan.title}
                >
                  {/* <div className="bg-primaryA rounded-[10px] text-white w-full space-y-6 p-5 flex flex-col items-start my-6"> */}
                  <div
                    className={clsx(
                      "rounded-[10px] w-full space-y-6 p-5 flex flex-col items-start my-6",
                      plan.title === "Personal"
                        ? "bg-primaryA text-white"
                        : "border border-secondaryA text-black",
                    )}
                  >
                    <div className="space-y-6">
                      <h3 className="p1-semi">{plan.title}</h3>
                      <p className="h4">
                        {plan.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
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
                            {plan.title === "Personal" ? (
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
                        variant={
                          plan.title === "Personal" ? "primary" : "ghost"
                        }
                        className="py-5 px-10 p2-regular lg:p2-medium rounded-md border-secondaryA text-black"
                      >
                        Get Started
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Tabs.Content>
              ))}
              <Tabs.List className="mt-16 space-x-3">
                {pricingPlans.map((plan) => (
                  <Tabs.Trigger
                    value={plan.title}
                    key={plan.title}
                    className="w-3 h-3 rounded-full bg-primaryB data-[state=active]:bg-primaryA focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primaryA"
                    aria-label={`Select pricing plan ${plan.title}`}
                  ></Tabs.Trigger>
                ))}
              </Tabs.List>
            </Tabs.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
