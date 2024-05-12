import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category} from '../model/category';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Partial<Category> = {
    categoryName: '',
    imageUrl: ''
  };


  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    // Fetch all categories when the component initializes
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoriesService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createCategory(): void {
    this.categoriesService.createCategory(this.newCategory).subscribe(
      (newlyCreatedCategory: Category) => {
        this.categories.push(newlyCreatedCategory);
        this.newCategory = {
          categoryName: '',
          imageUrl: ''
        };        
      }
    );
  }

  updateCategory(categoryId: Number, updatedCategory: Category): void {
    this.categoriesService.updateCategory(categoryId, updatedCategory).subscribe(
        (updatedCategoryResponse: Category) => {
            // Update the category in the list
            const index = this.categories.findIndex(c => c.categoryId === categoryId);
            if (index !== -1) {
                this.categories[index] = updatedCategoryResponse;
            }
            
            // Reset the form or perform any additional actions
            // Optionally, you can provide user feedback here (e.g., a success message)
        }
    );
}

deleteCategory(categoryId: Number): void {
  // Show a confirmation dialog
  const confirmDelete = confirm('Are you sure you want to delete this category?');
  if (confirmDelete) {

      this.categoriesService.deleteCategory(categoryId).subscribe(() => {
          this.categories = this.categories.filter((category) => category.categoryId !== categoryId);
      });
  }

}

/*
  createCategory(): void {
    if (this.newCategory.categoryName && this.newCategory.imageUrl) {
      this.categoriesService.createCategory(this.newCategory).subscribe(data => {
        this.categories.push(data); // Add the new category to the list
        this.resetNewCategory();
      }, (error: unknown) => {
        console.error('Error creating category:', error);
      });
    }
  }

  updateCategory(): void {
    if (this.selectedCategory) {
      this.categoriesService.updateCategory(this.selectedCategory.categoryId, this.selectedCategory).subscribe((data: Category) => {
        // Update the category in the list
        const index = this.categories.findIndex(c => c.categoryId === data.categoryId);
        if (index !== -1) {
          this.categories[index] = data;
        }
        this.selectedCategory = null; // Clear the selected category
      }, (error: unknown) => {
        console.error('Error updating category:', error);
      });
    }
  }

  deleteCategory(categoryId: Number): void {
    this.categoriesService.deleteCategory(categoryId).subscribe(() => {
      // Remove the deleted category from the list
      this.categories = this.categories.filter(c => c.categoryId !== categoryId);
    }, (error: unknown) => {
      console.error('Error deleting category:', error);
    });
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category; // Select the category to update
  }
  */

  resetNewCategory(): void {
    this.newCategory = {
      categoryId: 0,
      categoryName: '',
      imageUrl: ''
    }; // Reset the new category form
  }
  
}