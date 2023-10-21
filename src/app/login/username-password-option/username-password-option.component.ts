import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username-password-option',
  templateUrl: './username-password-option.component.html',
  styleUrls: ['./username-password-option.component.css']
})
export class UsernamePasswordOptionComponent {
  userTypeValue = 'Buyer';
  showErrorMessage=false;
  constructor(private loginService: LoginServiceService, private router: Router){}

  getFormData(data:any){
    console.log(data);
    // this.loginService.checkUserAuth(data).subscribe((res:any)=>{
    //   console.log(res);
    // })  
    const res = this.loginService.checkUserAuth(data);
    if(res['status'] == true){
      console.log(res);
      if(res['userType'] == 'Buyer'){
        this.router.navigate(['buyerDashboard']);
      } else if(res['userType'] == 'Seller'){
        this.router.navigate(['sellerDashboard']);
      } else if(res['userType'] == 'Admin'){
        this.router.navigate(['adminDashboard']);
      }
    } else {
      //this.router.navigate(['login']);
      this.showErrorMessage = true;
    }
  }
}
