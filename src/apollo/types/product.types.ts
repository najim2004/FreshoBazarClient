export enum UnitType {
  kg = "kg",
  g = "g",
  l = "l",
  ml = "ml",
  piece = "piece",
}

export interface Location {
  subDistrict?: string;
  district?: string;
}

export interface Image {
  id?: string;
  url?: string;
}

export interface Product {
  _id: string;
  isAvailable: boolean;
  title: string;
  slug: string;
  description?: string;
  images: Image[];
  thumbnail?: Image;
  categoryId: string;
  categoryName: string;
  subCategories?: string[];
  unitType: UnitType;
  unitSize: number;
  stockSize: number;
  price: number;
  isDiscountable?: boolean;
  discountValue?: number;
  averageRating?: number;
  ratingsCount?: number;
}

export interface ProductPayload {
  success: boolean;
  product?: Product;
  error?: boolean;
  errorMessage?: string;
}

export interface ProductDeletePayload {
  success: boolean;
  error?: boolean;
  error_message?: string;
}

export interface ProductsPayload {
  success: boolean;
  products?: Product[];
  error?: boolean;
  error_message?: string;
}

export interface CreateProductInput {
  isAvailable: boolean;
  title: string;
  slug?: string;
  description?: string;
  images: File[];
  thumbnail?: File;
  categoryId: string;
  categoryName: string;
  subCategories?: string[];
  unitType: UnitType;
  unitSize: number;
  stockSize: number;
  price: number;
  currency?: string;
  isDiscountable?: boolean;
  discountValue?: number;
  tags: string[];
  location?: Location;
}

export interface GetProductResponse {
  success: boolean;
  error: boolean;
  error_message: string | null;
  product?: Product;
}
