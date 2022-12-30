export interface WishItemTypes {
  name?: string
  amount: number | null
  link?: string
  imageUrl?: string
  isFavorite: boolean
}

export interface InvestimentsTypes {
  title: string
  amount: number
  isEconomy: boolean
  id: string
  color: string
}