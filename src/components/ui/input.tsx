import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';

import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  variant?: 'default' | 'search';
}

const inputVariants = {
  default:
    'h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
  search:
    'h-9 w-full rounded-full border border-white/10 bg-white/6 pl-5 pr-11 text-sm text-white shadow-none ring-0 placeholder:text-white/35 focus-visible:border-amber-300/60 focus-visible:bg-white/9 focus-visible:ring-0 focus-visible:ring-offset-0',
};

function Input({
  className,
  type,
  variant = 'default',
  ...props
}: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants[variant], className)}
      {...props}
    />
  );
}

export { Input };
