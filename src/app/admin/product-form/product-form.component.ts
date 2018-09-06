import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private categoryService:CategoryService,
    private productServic:ProductService) {
    this.categories$ = categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productServic.get(this.id).take(1).subscribe(p => this.product = p);
   }

   save(product) {
     //console.log("hello")
     //console.log(product)
     if(this.id) this.productServic.update(this.id,product);
     else this.productServic.create(product);

     this.router.navigate(['/admin/products']); 
   }

   delete(){
     if(!confirm('Are you sure you want to delete this product')) return;
     
       this.productServic.delete(this.id);
       this.router.navigate(['/admin/products']); 
    }
 
  ngOnInit() {
  }

}
