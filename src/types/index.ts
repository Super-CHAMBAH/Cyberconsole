export interface RepairService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  consoleType: string;
}

export interface SparePart {
  id: string;
  name: string;
  description: string;
  price: number;
  compatibility: string[];
  stock: number;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  type: 'repair' | 'part';
  quantity: number;
  price: number;
  name: string;
}