import { DollarSign, Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface MonthReceiptCardProps {
    title: string
    monthReceipt: []
    isLoadingMonthReceipt: boolean
}

export function MonthReceiptCard({
    title,
    monthReceipt,
    isLoadingMonthReceipt,
}: MonthReceiptCardProps) {
    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-base font-semibold'>
                    {title}
                </CardTitle>
                {isLoadingMonthReceipt ? (
                    <Loader2 className='h-4 w-4 animate-spin text-muted-foreground' />
                ) : (
                    <DollarSign className='h-4 w-4 text-muted-foreground' />
                )}
            </CardHeader>
            <CardContent className='space-y-1'>
                {monthReceipt ? (
                    <>
                        <span className='text-2xl font-bold'>
                            {/* {monthReceipt.receipt.toLocaleString('pt-BR', {
                                currency: 'BRL',
                                style: 'currency',
                            })} */}
                        </span>
                        <p className='text-xs text-muted-foreground'>
                            <span
                                className={
                                    monthReceipt.length > 0
                                        ? 'text-emerald-500'
                                        : 'text-red-500'
                                }
                            >
                                {/* {monthReceipt.diffFromLastMonth > 0
                                    ? `+${monthReceipt.diffFromLastMonth}`
                                    : monthReceipt.diffFromLastMonth} */}
                                %
                            </span>{' '}
                            em relação ao mês passado
                        </p>
                    </>
                ) : (
                    <></>
                )}
            </CardContent>
        </Card>
    )
}
