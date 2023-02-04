import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
 
  constructor(private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService
    ){
     
    }


  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    });
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value);
      console.log("ürün ekleme çağırıldı.");
      this.productService.add(productModel).subscribe({
        next:(value) =>{
          console.log("ürün ekleme sonuc dondu.");
          this.toastrService.success(value.message,"Başarılı");
        },
        error:(responseError)=> {
          if(responseError.error.Errors.length>2){
            console.log(responseError.error.Errors)
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              const element = responseError.error.Errors[i];
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
            }
            
          }
        },
        complete:()=> {
          this.toastrService
        },
      });
      
      this.toastrService
     
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat");
    }
   
   
  }

}
