import clsx from 'clsx'

interface RenderCustomerStatusProps {
    status: string
}

export const RenderCustomerStatus = ({ status }: RenderCustomerStatusProps) => {
    const resolveStatus =
        status === 'PENDING_REGISTER'
            ? 'Registro Pendente'
            : status === 'ACTIVE'
              ? 'Ativo'
              : status === 'PENDING_PAYMENT'
                ? 'Pagamento atrasado'
                : 'Bloqueado'

    return (
        <div className='flex items-center gap-2'>
            <div
                className={clsx(
                    status === 'PENDING_REGISTER'
                        ? 'bg-orange-500'
                        : status === 'ACTIVE'
                          ? 'bg-green-500'
                          : status === 'PENDING_PAYMENT'
                            ? 'bg-red-500'
                            : 'bg-black',
                    'flex items-center justify-center w-[10px] h-[10px]  rounded-full'
                )}
            ></div>
            <span>{resolveStatus}</span>
        </div>
    )
}
