import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Withdraw() {
    return (
        <div className='flex flex-col w-full gap-4'>
            <div className='grid grid-cols-2 gap-4'>
                <Card>
                    <CardHeader>
                        <Label className='font-semibold text-md'>
                            Digite uma valor que deseja sacar
                        </Label>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <Label className='font-semibold text-sm'>
                                    Valor:
                                </Label>
                                <Input placeholder='R$ 00,00' />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <Label className='font-semibold text-md'>
                            Selecione a conta financeira
                        </Label>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <Label className='font-semibold text-sm'>
                                    Conta:
                                </Label>
                                <Input placeholder='...' />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='flex flex-row gap-2 w-full justify-end'>
                <Button variant='outline'>Agendar saque</Button>
                <Button>Sacar</Button>
            </div>
        </div>
    )
}
