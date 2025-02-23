export type Device = {
  id: string;
  name: string;
  icon: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
};

export type Model = {
  id: string;
  brandId: string;
  name: string;
  image: string;
};

export type RepairService = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type RepairFormData = {
  device: Device | null;
  brand: Brand | null;
  model: Model | null;
  services: RepairService[];
  customerName: string;
  customerEmail: string;
};
