import type { FC, ReactNode } from "react"
import { cn } from "@/utils/cn"

type Props = { children: ReactNode; className?: string }

const Text: FC<Props> = ({ children, className }) => {
  return <h3 className={cn("text-black text-base", className)}> {children} </h3>
}

export default Text
