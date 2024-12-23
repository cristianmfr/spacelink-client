'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function CardsPaymentMethod() {
    return (
        <div className='flex flex-col w-full gap-4'>
            <RadioGroup defaultValue='card' className='grid grid-cols-2 gap-4'>
                <div>
                    <RadioGroupItem
                        value='card'
                        id='card'
                        className='peer sr-only'
                        aria-label='Card'
                    />
                    <Label
                        htmlFor='card'
                        className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
                    >
                        Crédito
                    </Label>
                </div>
                <div>
                    <RadioGroupItem
                        value='paypal'
                        id='paypal'
                        className='peer sr-only'
                        aria-label='Paypal'
                    />
                    <Label
                        htmlFor='pix'
                        className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
                    >
                        PIX
                    </Label>
                </div>
            </RadioGroup>
            <div className='grid gap-2'>
                <Label htmlFor='name'>Nome completo</Label>
                <Input id='name' placeholder='Nome completo do cartão' />
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='city'>CPF</Label>
                <Input id='city' placeholder='' />
            </div>
            <div className='grid gap-2'>
                <Label htmlFor='number'>Número do cartão</Label>
                <Input id='number' placeholder='' />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='grid gap-2'>
                    <Label htmlFor='month'>Validade</Label>
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='year'>Ano</Label>
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='cvc'>CVC</Label>
                    <Input id='cvc' placeholder='CVC' />
                </div>
            </div>
        </div>
    )
}
