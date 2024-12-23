import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Modal } from '@/components/ui/modal'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

interface CreateFinancialAccountProps {
    isOpen: boolean
    onClose: () => void
}

export function CreateFinancialAccount({
    isOpen,
    onClose,
}: CreateFinancialAccountProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col w-full gap-4'>
                <div className='grid grid-cols-4 items-center justify-start gap-4'>
                    <Label className='text-sm font-semibold font-sans'>
                        Número:
                    </Label>
                    <Input className='col-span-3' placeholder='1234567-89' />
                </div>
                <div className='grid grid-cols-4 items-center justify-start gap-4'>
                    <Label className='text-sm font-semibold font-sans'>
                        Chave PIX:
                    </Label>
                    <Input
                        className='col-span-3'
                        placeholder='CPF, email, chave aleatória...'
                    />
                </div>
                <Separator />
                <div className='flex flex-col w-full gap-4'>
                    <div className='grid grid-cols-4 items-center justify-start gap-4'>
                        <Label className='text-sm font-semibold font-sans'>
                            Nome:
                        </Label>
                        <Input
                            className='col-span-3'
                            placeholder='Nome do responsável'
                        />
                    </div>
                    <div className='grid grid-cols-4 items-center justify-start gap-4'>
                        <Label className='text-sm font-semibold font-sans'>
                            Documento:
                        </Label>
                        <Input className='col-span-3' placeholder='CPF/CNPJ' />
                    </div>
                    <div className='grid grid-cols-4 items-center justify-start gap-4'>
                        <Label className='text-sm font-semibold font-sans'>
                            Nascimento:
                        </Label>
                        <Input
                            className='col-span-3'
                            placeholder='DD/MM/AAAA'
                        />
                    </div>
                </div>
                <Separator />
                <div className='flex flex-col w-full gap-4'>
                    <Textarea
                        className='max-h-[100px] h-[100px] resize-none'
                        placeholder='Obvervações...'
                    />
                </div>
                <div className='grid grid-cols-2 w-full gap-2'>
                    <Button variant='secondary'>Salvar rascunho</Button>
                    <Button>Criar</Button>
                </div>
            </div>
        </Modal>
    )
}
