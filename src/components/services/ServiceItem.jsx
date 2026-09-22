import React, { forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * A single row in the sticky services nav.
 * Forwarded ref lets the parent measure offsetTop/offsetHeight
 * to position the moving progress indicator.
 */
const ServiceItem = forwardRef(({ service, isActive, onSelect }, ref) => {
  return (
    <li ref={ref}>
      <button
        type="button"
        onClick={onSelect}
        aria-current={isActive ? 'true' : undefined}
        className="group flex w-full items-center gap-3 rounded-sm py-1 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A38244] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F8F6]"
      >
        <span
          className={`text-[11px] font-medium uppercase tracking-widest transition-colors duration-300 ${
            isActive ? 'text-[#A38244]' : 'text-[#C4BFB2]'
          }`}
        >
          {service.number}
        </span>

        <span
          className={`text-sm uppercase tracking-wide transition-all duration-300 md:text-base ${
            isActive
              ? 'translate-x-1 font-medium text-[#1A1A1A]'
              : 'font-medium text-[#B7B2A6] group-hover:translate-x-1 group-hover:text-[#8A8A8A]'
          }`}
        >
          {service.title}
        </span>

        <ArrowRight
          aria-hidden="true"
          className={`h-3.5 w-3.5 shrink-0 text-[#A38244] transition-all duration-300 ${
            isActive
              ? 'translate-x-0 opacity-100'
              : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-40'
          }`}
        />
      </button>
    </li>
  );
});

ServiceItem.displayName = 'ServiceItem';

export default ServiceItem;