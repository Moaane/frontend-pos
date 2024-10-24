export interface Category {
  id: string;
  name: string;
  _count?: {
    products?: number | null;
  };
}
