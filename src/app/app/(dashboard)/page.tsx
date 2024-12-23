'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { MonthReceiptCard } from '@/components/ui/month-receipt-card'

export default function Dashboard() {
    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='grid grid-cols-4 w-full gap-4'>
                <MonthReceiptCard
                    title='Receita total (mês)'
                    monthReceipt={[]}
                    isLoadingMonthReceipt={false}
                />
                <MonthReceiptCard
                    title='Total a receber'
                    monthReceipt={[]}
                    isLoadingMonthReceipt={false}
                />
                <MonthReceiptCard
                    title='Total pendências'
                    monthReceipt={[]}
                    isLoadingMonthReceipt={false}
                />
                <MonthReceiptCard
                    title='Total de vencidas'
                    monthReceipt={[]}
                    isLoadingMonthReceipt={false}
                />
            </div>
            <div className='flex flex-col w-full gap-4'>
                <Card>
                    <CardHeader>
                        <Label className='text-md font-semibold font-sans'>
                            Evolução mensal
                        </Label>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col w-full items-center justify-center gap-2'>
                            <Label>Nenhum resultado para ser exibido.</Label>
                            <Button variant='link'>Atualizar gráficos</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
