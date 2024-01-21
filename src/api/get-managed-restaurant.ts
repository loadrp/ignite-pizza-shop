import { api } from "@/lib/axios"

export interface getManagedRestaurantResponse{
    id: string
    name: string
    email: string
    phone: string
    description: string | null
    role: 'manager' | 'customer'
    createdAt: Date | null 
    updatedAt: Date | null
}

export async function getManagedRestaurant() {
    const response = await api.get<getManagedRestaurantResponse>('/managed-restaurant')
    return response.data
}