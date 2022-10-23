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
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
   });
   }

  ngOnInit(): void {
    // console.log(this.data)

    this.formValueSet()
  }
 
  formHandler = () => {
  
  } 

  formValueSet = () => {
    this.registerForm.patchValue({"subject": this.data});
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
     alert('Submitted successfully')
     this.dialogRef.close()
      
  }

  closeDialogModal = () => {
    this.dialogRef.close({ data: 'close' });
  }


}
