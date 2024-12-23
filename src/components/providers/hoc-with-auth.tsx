'use client'

import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function withAuth(Component: React.FC) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function AuthenticatedComponent(props: any) {
        const { user, isLoggingIn } = useAuth()
        const router = useRouter()

        useEffect(() => {
            if (!isLoggingIn && !user) {
                router.push('/login')
            }
        }, [user, isLoggingIn, router])

        if (isLoggingIn || !user) {
            return <p>Loading...</p>
        }

        return <Component {...props} />
    }
}
