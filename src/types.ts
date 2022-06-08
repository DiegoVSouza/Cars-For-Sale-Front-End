export interface Cars{
  id: number;
  name: string;
  collection: string;
  year: number;
  image: string;
  price: number;
  category: string;
}

export interface Stock {
  id: number;
  amount: number;
}

export interface Account{
  id: number;
  name: string;
  email: string;
  password: string;
}
