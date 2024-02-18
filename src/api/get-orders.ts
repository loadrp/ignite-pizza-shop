import { api } from "@/lib/axios";

export interface GetOrdersQuery {
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
}
export interface GetOrdersResponse {
  orders: {
    orderId: string;
    total: number;
    status: "pending" | "processing" | "delivering" | "delivered" | "canceled";
    createdAt: string;
    customerName: string;
  }[];
  meta: {
    pageIndex: number;
    totalCount: number;
    perPage: number;
  };
}
export async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex,
      customerName,
      orderId,
      status,
    },
  });
  return response.data;
}
