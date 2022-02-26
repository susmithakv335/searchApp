import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:any={
    1000:{uname:"Arya",password:"1000"},
    1001:{uname:"Amal",password:"1001"},
    1002:{uname:"Nithin",password:"1002"}
  }

  constructor() { }
  login(uname:any,password:any){
    let database=this.users
    if(uname in database){
  if(password == database[uname]["password"]){
    return true
  }
  else{
    alert("Incorrect password")
    return false

  }
    }
    else{
      alert("Invalid username")
      return false
    }
  }

}
