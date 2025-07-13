import type { FC, ReactNode } from "react"
import { cn } from "@/utils/cn"

type Props = {
  children: ReactNode
  className?: string
}

const HStack: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-row gap-4", className)}> {children} </div>
  )
}

export default HStack
