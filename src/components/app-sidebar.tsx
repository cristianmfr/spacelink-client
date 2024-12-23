'use client'

import * as React from 'react'
import {
    GalleryVerticalEnd,
    SquareTerminal,
    UserRoundSearch,
    Wallet,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar'
import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '@/api/queries/get-current-user'

const data = {
    teams: [
        {
            name: 'Spacelink',
            logo: GalleryVerticalEnd,
            plan: 'Members Club',
        },
    ],
    navMain: [
        {
            title: 'Visão geral',
            url: '/app',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: 'Dashboard',
                    url: '/app',
                },
            ],
        },
        {
            title: 'Gerenciamento',
            url: '/app/management',
            icon: UserRoundSearch,
            items: [
                {
                    title: 'Usuários',
                    url: '/app/management/customers',
                },
            ],
        },
        {
            title: 'Financeiro',
            url: '/app/finance',
            icon: Wallet,
            items: [
                {
                    title: 'Carteira',
                    url: '/app/finance/wallet',
                },
                {
                    title: 'Saque',
                    url: '/app/finance/withdraw',
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { data: me } = useQuery(GET_CURRENT_USER)

    const userNav = {
        name: me?.getCurrentUser.name || '',
        email: me?.getCurrentUser.email || '',
        avatar: '',
    }

    return (
        <Sidebar collapsible='icon' {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={userNav} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
