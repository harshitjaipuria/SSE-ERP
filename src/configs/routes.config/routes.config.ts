import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'
import { ADMIN, USER } from '@/constants/roles.constant'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },

    // Fleet Management Routes
    {
        key: 'fleet.management.owner',
        path: '/fleet/owner',
        component: lazy(() => import('@/views/fleet/owner/page')),
        authority: [ADMIN, USER],
    },
    {
        key: 'fleet.management.owner.create',
        path: '/fleet/owner/customer-create',
        component: lazy(() => import('@/views/fleet/owner/customer-create/page')),
        authority: [ADMIN, USER],
    },
    {
        key: 'fleet.management.driver',
        path: '/fleet/driver',
        component: lazy(() => import('@/views/fleet/driver/page')),
        authority: [ADMIN, USER],
    },
    {
        key: 'fleet.management.lorry',
        path: '/fleet/lorry',
        component: lazy(() => import('@/views/fleet/lorry/page')),
        authority: [ADMIN, USER],
    },
    {
        key: 'fleet.management.broker',
        path: '/fleet/broker',
        component: lazy(() => import('@/views/fleet/broker/page')),
        authority: [ADMIN, USER],
    },
    ...othersRoute,
]
