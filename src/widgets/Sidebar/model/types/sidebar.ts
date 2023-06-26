import { type FC } from 'react'
import type React from 'react'

export interface SidebarItemType {
  path: string
  text: string
  Icon: FC<React.SVGAttributes<SVGAElement>>
  authOnly?: boolean
}
