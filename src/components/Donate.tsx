
import { HeartIcon } from '@phosphor-icons/react';


export default function FloatingDonateButton() {
    return (
        <div className="fixed left-0 top-1/2 z-50 -translate-y-1/2">
            <button
                onClick={() => window.open('https://my.cison.org.ng/donate', '_blank')}
                className="group flex h-12 max-w-12 items-center overflow-hidden rounded-r-full bg-primary px-3 text-primary-foreground shadow-lg transition-all duration-300 ease-in-out hover:max-w-50 hover:pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Donate to Cison"
            >
                {/* Icon container */}
                <div className="flex shrink-0 items-center justify-center">
                    <HeartIcon className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Expanding text */}
                <span className="ml-2 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Donate to cison
                </span>
            </button>
        </div>

    )
}