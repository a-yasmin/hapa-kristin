import type { FC, ReactNode } from "react"
import { cn } from "@/utils/cn"

type Props = {
  children: ReactNode
  className?: string
}

const VStack: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}> {children} </div>
  )
}

export default VStack
