export interface Subcategory {
  slug: string;
  name: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}

export interface GetCategoriesPayload {
  success: boolean;
  message: string;
  categories?: Category[];
}
