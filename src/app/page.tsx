'use client'

import { redirect } from 'next/navigation'
import Cookies from 'js-cookie'

export default function RootPage() {
    const redirectPath =
        Cookies.get('auth_user') && Cookies.get('auth_token')
            ? '/app'
            : '/auth/login'

    return redirect(redirectPath)
}
