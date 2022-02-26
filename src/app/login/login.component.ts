import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your Perfect partner"
 
  uname=""
  pswd=""
    users:any={
      1000:{uname:"Arya",password:"1000"},
      1001:{uname:"Amal",password:"1001"},
      1002:{uname:"Nithin",password:"1002"}
    }
  
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  acnochange(event:any){
    this.uname=event.target.value
    console.log(this.uname);
    }
    
    pswdchange(event:any){
      this.pswd=event.target.value
      console.log(this.pswd);
      }
      
    
    login(){
      var uname=this.uname
      var password=this.pswd
      let result=this.ds.login(uname,password)
      if(result){
        alert("Login successfull")
        this.router.navigateByUrl('dashboard')  
      }
    }
   
    
}
