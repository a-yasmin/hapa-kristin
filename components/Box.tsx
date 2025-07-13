import type { FC, ReactNode } from "react"
import { cn } from "@/utils/cn"

type Props = {
  children: ReactNode
  className?: string
}

const Box: FC<Props> = ({ children, className }) => {
  return <div className={cn("w-fit", className)}> {children} </div>
}

export default Box
