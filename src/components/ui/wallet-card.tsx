'use client'

import { useQuery } from '@apollo/client'
import { Card, CardContent, CardHeader } from './card'
import { Label } from './label'
import { GET_USER_WALLET } from '@/api/queries/get-user-wallet'
import { Button } from './button'

interface WalletCardProps {
    type: 'wallet' | 'avalible'
}

export function WalletCard({ type }: WalletCardProps) {
    const { data: wallet } = useQuery(GET_USER_WALLET)

    return (
        <Card>
            <CardHeader>
                <div className='flex flex-row w-full items-center justify-between -mb-4 h-[20px]'>
                    <Label className='font-semibold'>
                        {type === 'avalible'
                            ? 'Total disponivel para saque'
                            : 'Saldo total'}
                    </Label>
                    {type === 'avalible' && (
                        <Button variant='outline' size='sm'>
                            Sacar
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col w-full'>
                    {type === 'avalible' ? (
                        <span className='text-2xl font-sans font-bold'>
                            {wallet?.getUserWallet.availableWallet.toLocaleString(
                                'pt-BR',
                                {
                                    currency: 'BRL',
                                    style: 'currency',
                                }
                            )}
                        </span>
                    ) : (
                        <span className='text-2xl font-sans font-bold'>
                            {wallet?.getUserWallet.wallet.toLocaleString(
                                'pt-BR',
                                {
                                    currency: 'BRL',
                                    style: 'currency',
                                }
                            )}
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
