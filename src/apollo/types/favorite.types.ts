export interface FavoriteProducts {
  product_id: string;
  addedAt?: string;
}

export interface Favorites {
  _id: string;
  user_id: string;
  products?: FavoriteProducts[];
}

export interface ToggleFavoritePayload {
  success: boolean;
  error?: boolean;
  product_id?: string;
  request?: string;
  message?: string;
}
