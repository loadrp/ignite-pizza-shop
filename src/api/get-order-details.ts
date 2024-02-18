import { api } from "@/lib/axios";

export interface GetOrderDetailsParams {
  orderId: string;
}

export interface GetOrderDetailsResponse {
  id: string;
  total: number;
  status: "pending" | "processing" | "delivering" | "delivered" | "canceled";
  createdAt: string;
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: {
      name: string;
    };
  }[];
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`);
  return response.data;
}
