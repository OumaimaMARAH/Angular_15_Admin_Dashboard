import { Component, OnInit } from '@angular/core';
import { Subcategory } from '../model/subcategory';
import { SubcategoriesService } from '../services/subcategories.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})

export class SubcategoriesComponent implements OnInit{
  subcategories: Subcategory[] = [];



constructor(private subcateoryService: SubcategoriesService){
}
 ngOnInit(): void{
  this.getAllSubCategories();
 }

 getAllSubCategories(): void {
  this.subcateoryService.getAllSubCategories().subscribe(data =>{
    this.subcategories = data;
  })
 }
}
