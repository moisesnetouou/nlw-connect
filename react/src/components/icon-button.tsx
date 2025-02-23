import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer hover:bg-blue hover:text-gray-500 transition-colors duration-300',
        className
      )}
      {...props}
    />
  )
}
