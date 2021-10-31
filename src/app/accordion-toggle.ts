import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'ngbd-accordion-toggle',
  templateUrl: './accordion-toggle.html',
})
export class NgbdAccordionToggle {
  products: Product[];

  constructor() {
    this.products = [
      {
        productName: 'Mutual Funds',
        productsN: 'ETF',
        datasets: [
          {
            datasetName: 'TEST DataSet 1',
            id: 1,
          },
        ],
      },
      {
        productName: 'Mutual Funds01',
        productsN: 'ETF1',
        datasets: [
          {
            datasetName: 'TEST DataSet 2',
            id: 2,
          },
          {
            datasetName: 'TEST DataSet 3',
            id: 3,
          },
        ],
      },
    ];
  }
}
