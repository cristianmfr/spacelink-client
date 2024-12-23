import { Modal } from '@/components/ui/modal'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMER } from '@/api/queries/get-customer'
import { useSearchParams } from 'next/navigation'

interface ChangeCustomerStatusProps {
    isOpen: boolean
    onClose: () => void
    refetch: () => void
}

export function ChangeCustomerStatus({
    isOpen,
    onClose,
}: ChangeCustomerStatusProps) {
    const searchParams = useSearchParams()

    const { data: customer } = useQuery(GET_CUSTOMER, {
        variables: {
            getCustomerId: searchParams.get('id'),
        },
    })

    const resolveStatus =
        customer?.getCustomer.status === 'ACTIVE' ? 'Ativo' : 'Bloqueado'

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col w-full gap-4'>
                <div className='grid grid-cols-3 gap-2 items-center w-full'>
                    <div className='flex flex-col items-center justify-start col-span-1'>
                        <Label>Status do usuário:</Label>
                    </div>
                    <div className='flex flex-col items-center justify-start col-span-1'>
                        <Input
                            value={resolveStatus}
                            readOnly
                            className='cursor-default'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-start col-span-1'>
                        <Select>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Status' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    <SelectItem value='BLOCKED'>
                                        Bloqueado
                                    </SelectItem>
                                    <SelectItem value='ACTIVE'>
                                        Ativo
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full gap-2'>
                    <Button variant='outline'>Cancelar</Button>
                    <Button>Alterar</Button>
                </div>
            </div>
        </Modal>
    )
}
