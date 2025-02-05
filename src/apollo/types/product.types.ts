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
  totalReviews?: number;
  isFavorite?: boolean;
  updatedAt?: Date;
}

export interface ProductPayload {
  success: boolean;
  product?: Product;
  error?: boolean;
  error_message?: string;
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

// get product
export interface GetProductResponse {
  success: boolean;
  error: boolean;
  error_message: string | null;
  product?: Product;
}

// get products

export interface Pagination {
  currentPage: number;
  hasNextPage: number;
  hasPrevPage: number;
  totalPages: number;
  totalItems: number;
}
export interface GetProductsResponse {
  success: boolean;
  error: boolean;
  error_message: string | null;
  products?: Product[];
  pagination?: Pagination;
}

export enum PriceForSort {
  highest_price = "highest_price",
  lowest_price = "lowest_price",
}
export enum DietaryOptions {
  none_organic = "none_organic",
  organic = "organic",
}
export enum UnitSizeForSort {
  bigger_first = "bigger_first",
  smallest_first = "smallest_first",
}
export enum DateForSort {
  oldest = "oldest",
  newest = "newest",
}

export interface GetProductsInput {
  categoryId?: string;
  search?: string;
  subcategories?: string[];
  dietaryOptions?: DietaryOptions;
  unitSize?: UnitSizeForSort;
  date?: DateForSort;
  price?: PriceForSort;
  otherOptions?: string[];
  priceRange?: number[];
  page?: number;
}
