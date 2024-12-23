import { z } from 'zod'

export const CustomerSchema = z.object({
    name: z.string().nonempty('Digite um nome válido'),
    email: z.string().email('Digite um email válido').optional(),
    phone: z.string().min(10, 'Digite um telefone válido'),
})

export type CustomerType = z.infer<typeof CustomerSchema>
