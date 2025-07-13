"use client"

import type { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { cn } from "@/utils/cn"

type Props = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ children, className, ...props }) => {
  // TODO: ICON, VARIANT, SIZE
  return (
    <button
      type="button"
      className={cn(
        "w-fit bg-primary text-white text-center text-base rounded-lg px-4 py-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
