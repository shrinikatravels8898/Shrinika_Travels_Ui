import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
  leftIcon?: React.ReactNode;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, label, leftIcon, id, options, ...props }, ref) => {
    const selectId = id || props.name;
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-dark-700 mb-1.5 pl-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400 z-10 pointer-events-none">
              {leftIcon}
            </div>
          )}
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "flex h-12 w-full appearance-none rounded-none border border-gray-200 bg-white px-4 py-2 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
              leftIcon && "pl-11",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            {...props}
          >
            <option value="" disabled>Select an option</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-500 pl-1">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';
