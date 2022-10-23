import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalServiceService } from 'src/app/global-service.service';
import { ModalOpenComponent } from 'src/app/modal-open/modal-open.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedProductValue:any;
  selectedGateValue:any;
  xPosition: any;
  yPosition: any;
  gateList: any[] = [];
  selectedProductObj: any;
  selectedGateObj: any;

  constructor( 
    public dialog: MatDialog,
    public globalService: GlobalServiceService
    ) { }

  ngOnInit(): void {
  this.getAllGates()
  }

  //Add gate dialog form gate
  handleOpenDialog = (e: any) => {
    const clickedId:any = document.querySelector('#main-img-container')
    this.getCursorPosition(clickedId, e)
    //get all gates from local storage
    this.getAllGates()

    const dialogRef = this.dialog.open(ModalOpenComponent, {
      disableClose: true,
      width: '50%',
      height: '85%',
      maxWidth: '90vw',
      data: {
        gateNumber: this.gateList?.length + 1,
        leftPosition: this.xPosition,
        topPosition: this.yPosition
      },
    });

    // After closed is fired when dialog component send data 
    dialogRef.afterClosed().subscribe((result) => {
      if (result.data == 'ok') {
        this.getAllGates()
      } 
    });
  }

  getAllGates = () => {
    this.gateList = []
    const gates = localStorage.getItem('gates')
    if(!!gates) {
      this.gateList = JSON.parse(gates)
      console.log(this.gateList)
      return  this.gateList
    }
    return this.gateList
  }


  //Change product
  onChangeProduct = (e: any) => {
    console.log(e)
    this.selectedProductObj = e 
  }

  //Change gate
  onChangeGate = (e: any) => {
    console.log(e)
    this.selectedGateObj = e 
   
  }



  handleScan = () => {
    if(this.selectedProductObj.id === this.selectedGateObj.product_id ) {
     const gateId: any =  document.getElementById(this.selectedGateObj.id) as HTMLElement
      gateId.style.display = 'block'
    }
  }

  getCursorPosition(clickId:any, event:any) {
    const rect = clickId.getBoundingClientRect()
    this.xPosition = event.clientX - rect.left
    this.yPosition = event.clientY - rect.top
    console.log("x: " + this.xPosition + " y: " + this.yPosition)
}

clearStorage = () => {
  localStorage.clear()
  this.getAllGates()
}

closePopupMessage = (e: any) => {
  e.target.parentNode.style.display = 'none'
}

}
