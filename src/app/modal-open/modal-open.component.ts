import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-open',
  templateUrl: './modal-open.component.html',
  styleUrls: ['./modal-open.component.scss']
})
export class ModalOpenComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean;
  gateList: any[] = [];
  
  constructor(
    public dialogRef: MatDialogRef<ModalOpenComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) 
  {
    this.submitted = false
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
   });
   }

  ngOnInit(): void {
    console.log(this.data)

    this.formValueSet()
  }
 
  formHandler = () => {
  
  } 
//set value for product id and gate Id
  formValueSet = () => {
    this.registerForm.patchValue({"message": this.data?.gateNumber, 'subject': this.data?.gateNumber});
  }

  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

     let gates = {
         id: this.registerForm.value.message,
         name: this.registerForm.value.name,
         product_id: parseInt(this.registerForm.value.subject),
         left: this.data.leftPosition,
         top: this.data.topPosition
     }
     this.getAllGates()
     this.gateList.push(gates)

     localStorage.setItem('gates', JSON.stringify(this.gateList))

     this.dialogRef.close({data:'ok'})
      
  }

  getAllGates = () => {
    this.gateList = []
    const gates = localStorage.getItem('gates')
    if(!!gates) {
      this.gateList = JSON.parse(gates)
      return  this.gateList
    }
    return this.gateList
  }

  closeDialogModal = () => {
    this.dialogRef.close({ data: 'close' });
  }


}
