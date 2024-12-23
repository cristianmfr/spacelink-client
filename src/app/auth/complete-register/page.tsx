import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { CardsPaymentMethod } from './components/payment-card'
import { Button } from '@/components/ui/button'

export default function CompleteRegistration() {
    return (
        <div className='flex flex-col w-full h-screen items-center justify-center'>
            <Card className='w-[400px]'>
                <CardHeader>
                    <Label className='text-xl font-bold'>Olá Stephano!</Label>
                    <Label>
                        Para completar seu cadastro realize o pagamento abaixo.
                        Fique a vontade para escolher como irá pagar.
                    </Label>
                </CardHeader>
                <CardContent>
                    <CardsPaymentMethod />
                    <Button className='mt-4 w-full'>Realizar pagamento</Button>
                </CardContent>
            </Card>
        </div>
    )
}
