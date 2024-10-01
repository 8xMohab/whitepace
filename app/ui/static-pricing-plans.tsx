import clsx from 'clsx'
import { pricingPlans } from '../data'
import CheckCustomIcon from './custom-icons/check'
import Button from './components/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
type Props = {
  className?: string
}

const StaticPricingPlans: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`${className} container flex items-center justify-center space-x-8`}
    >
      {pricingPlans.map((plan) => (
        <div key={`contentKey:${plan.title}`} className="">
          <div
            className={clsx(
              'rounded-[10px] space-y-6 p-5 md:px-11 flex flex-col items-start my-6 ',
              plan.title === 'Personal'
                ? 'bg-primaryA text-white md:py-20'
                : 'border border-secondaryA text-black md:py-10',
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
  )
}

export default StaticPricingPlans
