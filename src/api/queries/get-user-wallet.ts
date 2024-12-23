import { User } from '@/graphql/graphql'
import { TypedDocumentNode, gql } from '@apollo/client'

export const GET_USER_WALLET: TypedDocumentNode<{
    getUserWallet: User
}> = gql`
    query GET_USER_WALLET {
        getUserWallet {
            wallet
            availableWallet
        }
    }
`
