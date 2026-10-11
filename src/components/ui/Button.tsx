import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

// Convert normal button props to motion.button props
type MotionButtonProps = HTMLMotionProps<"button"> & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-primary-500 text-dark-950 font-semibold hover:bg-primary-400 border border-primary-500 hover:border-primary-400',
      secondary: 'bg-dark-900 text-white hover:bg-dark-800 border border-dark-900',
      outline: 'bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-dark-950',
      ghost: 'bg-transparent text-dark-800 hover:bg-gray-100',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg uppercase tracking-wider',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!loading && children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
