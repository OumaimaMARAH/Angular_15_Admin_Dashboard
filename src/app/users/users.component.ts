import { Component, OnInit } from '@angular/core';
import { USERService } from './serviceUser/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  deletedUsers: any = [];
  editedUser: any = {}; // Object to hold the user being edited

  constructor(private userService: USERService) {} // Inject UserService in the constructor

  ngOnInit(): void {
    this.getAllUsers(); // Fetch users when the component initializes
  }

 
  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: any) => {
        console.log(res);
        this.users = res;
    });
}
//editUser(userId: number): void {
  //this.userService.editUser(userId).subscribe({
   // next: (updatedUser) => {
     // console.log('User edited successfully:', updatedUser);
      // Optionally, update the user in the UI
    //},
    //error: (error) => {
      //console.error('Error editing user:', error);
      // Handle error
    //}
 // });
//}
confirmDelete(user: any) {
  const isConfirmed = confirm(`Are you sure you want to delete ${user.firstname}?`);
  if (isConfirmed) {
    this.userService.deleteUser(user.userId).subscribe(
      () => {
        console.log('User deleted successfully');
        // Remove the deleted user from the users array
        this.users = this.users.filter((u: any) => u.userId !== user.userId);
        // Optionally, add the deleted user to the deletedUsers array
        this.deletedUsers.push(user);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}

/*deleteUser(id : number){
  this.userService.deleteUser(id).subscribe((res)=>{
    console.log(res);
    this.getAllUsers();
  } )
}*/

deleteUser(id : number): void {
  // Show a confirmation dialog
  const confirmDelete = confirm('Are you sure you want to delete this user?');

  // If the user confirms the deletion
  if (confirmDelete) {
    // Call the service's deleteCategory() method
    this.userService.deleteUser(id).subscribe(() => {
      // Remove the deleted category from the list
      this.users = this.users.filter((user: { id: number; }) => user.id !== id);
      this.getAllUsers();

    });

     }
}
   
}
