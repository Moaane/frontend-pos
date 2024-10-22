interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string | null;
  category?: string | null;
  productType?: string | null;
  _count?: {
    orderItems: number;
  } | null;
}

export type { Product };
