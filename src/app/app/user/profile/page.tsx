'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Account from './components/account'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Profile() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const getProfileParams = searchParams.get('p')

    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='flex flex-col w-full gap-2'>
                <Label className='text-2xl font-bold font-sans'>
                    Configurações de conta
                </Label>
                <Label className='font-light font-sans'>
                    Acesse suas informações pessoais e configure-as da maneira
                    que preferir
                </Label>
            </div>
            <Separator className='mt-2' />
            <div className='grid grid-cols-4 gap-2 w-full'>
                <div className='flex flex-col items-start w-full col-span-1'>
                    <Button
                        variant='ghost'
                        className='w-full justify-start items-start'
                        onClick={() =>
                            router.push('/app/user/profile?p=account')
                        }
                    >
                        Conta
                    </Button>
                    <Button
                        variant='ghost'
                        className='w-full justify-start items-start'
                        onClick={() =>
                            router.push('/app/user/profile?p=finance')
                        }
                    >
                        Financeiro
                    </Button>
                    <Button
                        variant='ghost'
                        className='w-full justify-start items-start'
                        onClick={() =>
                            router.push('/app/user/profile?p=advanced')
                        }
                    >
                        Avençado
                    </Button>
                </div>
                {getProfileParams === 'account' && <Account />}
            </div>
        </div>
    )
}
