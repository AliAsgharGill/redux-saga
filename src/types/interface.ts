interface IProductRating {
  rate: number;
  count: number;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: IProductRating;
  stock: number;
  isFeatured: boolean;
  isBestseller: boolean;
  isSale: boolean;
}
