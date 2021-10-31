import { DataSet } from './dataset.model';
export class Product {
  constructor(
    public productName: string,
    public productsN: string,
    public datasets: DataSet[]
  ) {}
}
