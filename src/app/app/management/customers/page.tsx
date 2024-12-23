'use client'

import { DataTable } from '@/components/ui/data-table'
import { TableHeader } from '@/components/ui/table-header'
import { CreateCustomer } from './components/create-customer'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMERS } from '@/api/queries/get-customers'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Customer } from '@/graphql/graphql'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { RenderCustomerStatus } from '@/components/ui/render-customer-status'
import { ChangeCustomerStatus } from './components/change-customer-status'

export default function Customers() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const { data: customer, refetch } = useQuery(GET_CUSTOMERS)

    const containsCreateParams = searchParams.get('p') === 'create'
    const containsCustomerId = searchParams.get('id') ? true : false

    const columnHelper = createColumnHelper<Customer>()

    const columns: ColumnDef<Customer, string>[] = [
        columnHelper.accessor((row) => row.id, {
            id: 'id',
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label='Select row'
                />
            ),
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && 'indeterminate')
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label='Select all'
                />
            ),
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.name, {
            id: 'name',
            cell: (info) => info.getValue(),
            header: 'Nome',
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.email, {
            id: 'email',
            cell: (info) => info.getValue(),
            header: 'Email',
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.phone, {
            id: 'phone',
            cell: (info) => info.getValue(),
            header: 'Telefone',
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.status.toString(), {
            id: 'status',
            cell: (info) => <RenderCustomerStatus status={info.getValue()} />,
            header: 'Status',
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.id, {
            id: 'button',
            cell: (info) => (
                <Button
                    variant='outline'
                    onClick={() =>
                        router.push(`/app/customers?id=${info.getValue()}`)
                    }
                    size='sm'
                >
                    Alterar
                </Button>
            ),
            header: '',
            enableColumnFilter: false,
        }),
    ]

    return (
        <div className='flex flex-col w-full gap-2'>
            <TableHeader
                handlePlusFunction={() =>
                    router.push('/app/management/customers?p=create&step=1')
                }
            />
            <DataTable columns={columns} data={customer?.getCustomers || []} />
            <CreateCustomer
                step={searchParams.get('step') || '1'}
                isOpen={containsCreateParams}
                onClose={() => router.push('/app/management/customers')}
            />
            <ChangeCustomerStatus
                isOpen={containsCustomerId}
                onClose={() => router.push('/app/management/customers')}
                refetch={refetch}
            />
        </div>
    )
}
