'use client'

import { ReceiptChart } from '@/components/ui/currency-chart'
import { WalletCard } from '@/components/ui/wallet-card'

export default function Wallet() {
    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='grid grid-cols-2 w-full gap-4'>
                <WalletCard type='avalible' />
                <WalletCard type='wallet' />
            </div>
            <ReceiptChart />
        </div>
    )
}
