import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


    firstName: string | undefined;
    users: string[] = ["Paul"];
    isUpdate: number | undefined;

    user: User ={
      _id : "",
      email : "",
      firstName : "",
      lastName : "",
      password : ""
    };

    constructor(){

    }

    ngOnInit(): void {

    }

    addUser(){
      if(this.firstName){
        if(this.isUpdate){
          this.users[this.isUpdate - 1] = this.firstName;
          this.isUpdate = undefined;
        }else{
          this.users.push(this.firstName);
        }
      }
      this.firstName = "";
    }

    deleteUser(userToDelete: number){
      if(userToDelete >= 0){
        this.users.splice(userToDelete, 1);
       }
    }

    updateUser(userToUpdate: number){
      if(userToUpdate >= 0){
        this.firstName = this.users[userToUpdate];
        this.isUpdate = userToUpdate + 1;
      }
    }

    handleSubmit(){
      console.log("L'utilisateur est : ", this.user);
    }
}
