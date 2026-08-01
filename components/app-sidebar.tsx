"use client"

import * as React from "react"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import { NAV_BY_ROLE } from "@/app/(private)/dashboard/_config/nav-config"
import { DEFAULT_NAV } from './../app/(private)/dashboard/_config/nav-config';

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  role?: string
}

export function AppSidebar({ role, ...props }: AppSidebarProps) {
  // console.log(role);
  const items = (role && NAV_BY_ROLE[role]) || DEFAULT_NAV
  return (
    <Sidebar className="pt-18" collapsible="offcanvas" {...props}>
      <SidebarContent>
        <NavMain items={items} />
      </SidebarContent>
    </Sidebar>
  )
}
