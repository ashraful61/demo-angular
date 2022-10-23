import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalOpenComponent } from 'src/app/modal-open/modal-open.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [
    { id: 1, name: 'Product 1', gate_no: '1' },
    { id: 2, name: 'Product 2', gate_no: '2' }
  ];
  gateOneProduct = {
    id: 1, 
    name: 'Product 1', 
    gate_no: '1'
  }
  gateTwoProduct = {
    id: 2, 
    name: 'Product 2', 
    gate_no: '2'
  }
  selectedValue:any
  productName: any;
  filterProduct: any
  pname: any;
  pName: any;
  constructor( public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  handleContactForm = (data: any) => {
    // cons
    const dialogRef = this.dialog.open(ModalOpenComponent, {
      disableClose: true,
      width: '50%',
      height: '85%',
      maxWidth: '90vw',
      data: data,
    });

    // After closed is fired when dialog component send data 
    dialogRef.afterClosed().subscribe((result) => {
      if (result.data == 'view-catalog') {
      } 
    });
  }

  changeProduct = (e: any) => {
  
    console.log(e.value)
    // this.pName = e.value
    this.productName = e.value
   
  }
  handleScan = () => {
    this.pName = this.productName
  
    const popupMessage:any = document.getElementsByClassName('popup-message')
    for (const pm of popupMessage) {
      pm.classList.add('d-none')
    }
   if(this.productName === this.gateOneProduct.name) {
      document.getElementById('gateOneId')?.classList.remove('d-none')
   }
   else if(this.productName === this.gateTwoProduct.name) {
    document.getElementById('gateTwoId')?.classList.remove('d-none')
   }
  }

}
