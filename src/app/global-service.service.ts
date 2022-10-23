import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

 products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2'},
    { id: 3, name: 'Product 3'},
    { id: 5, name: 'Product 4'}
  ];

  // gateList: any[] = [];
  constructor() { }



}
