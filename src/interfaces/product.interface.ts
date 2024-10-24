export interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string | null;
  category: {
    id: string;
    name: string;
  } | null;
  productType?: string | null;
  _count?: {
    orderItems: number;
  } | null;
}
