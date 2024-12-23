'use client'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/use-auth'
import { Label } from '@radix-ui/react-label'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

type SignInSchema = {
    email: string
    normalizedPassword: string
}

export default function Page() {
    const { signIn, isLoggingIn } = useAuth()
    const router = useRouter()

    const { register, handleSubmit } = useForm<SignInSchema>()

    const handleSignIn = async (data: SignInSchema) => {
        await signIn({
            email: data.email,
            normalizedPassword: data.normalizedPassword,
        })
        router.push('/app/categories')
    }

    return (
        <div className='flex h-screen w-full items-center justify-center px-4'>
            <Card className='mx-auto max-w-sm'>
                <CardHeader>
                    <CardTitle className='text-2xl'>Login</CardTitle>
                    <CardDescription>
                        Entre com o seu email para acessar o sistema.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='seu@email.com'
                                required
                                {...register('email')}
                            />
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex items-center'>
                                <Label htmlFor='password'>Senha</Label>
                                <Link
                                    href='#'
                                    className='ml-auto inline-block text-sm underline'
                                >
                                    Esqueceu sua senha?
                                </Link>
                            </div>
                            <Input
                                id='password'
                                type='password'
                                placeholder='************'
                                required
                                {...register('normalizedPassword')}
                            />
                        </div>
                        {isLoggingIn ? (
                            <Button disabled>
                                <Loader2 className='animate-spin' />
                                Aguarde
                            </Button>
                        ) : (
                            <Button
                                type='button'
                                onClick={handleSubmit(handleSignIn)}
                                className='w-full'
                            >
                                Login
                            </Button>
                        )}
                    </div>
                    <div className='mt-4 text-center text-sm'>
                        Não possuí uma conta?{' '}
                        <Link href='#' className='underline'>
                            Inscreva-se
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
