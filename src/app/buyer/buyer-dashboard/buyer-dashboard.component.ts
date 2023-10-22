import { Component } from '@angular/core';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent {
  cart:any = [];

  addBookToCart(id:any){
    if(this.cart.includes(id)){
      let element = document.getElementById(id);
      // element.style.backgroundColor = '#3498db';
    } else{
      this.cart.push(id);
      let element = document.getElementById(id);
      console.log(element);
      // element.style.backgroundColor = 'green';
      console.log(this.cart);
    }
  }
}
