import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users=[
  {nick:"Mi Nick",subNick:"Mi Subnick",avatar:"avatar.jpg",status:"online",email:"mi@email.com",userId:1},
  {nick:"2Mi Nick",subNick:"2Mi Subnick",avatar:"2avatar.jpg",status:"online",email:"mi@email.com",userId:2},
  {nick:"3Mi Nick",subNick:"3Mi Subnick",avatar:"3avatar.jpg",status:"online",email:"mi@email.com",userId:3},
  {nick:"4Mi Nick",subNick:"4Mi Subnick",avatar:"4avatar.jpg",status:"online",email:"mi@email.com",userId:4}
];

  constructor() { }

  getUsers(){
    return this.users;
  }

  getUserById(userId){
    let user = {};
    user =this.users.filter((u)=>{
      return u.userId === userId;
    })[0];
    return user;
  }

}
