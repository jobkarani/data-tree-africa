import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isloading$=new BehaviorSubject<boolean>(false);


 ngOnInit(): void {
    this.isloading$.next(true);
    setTimeout(() => {
      this.isloading$.next(false);
    }, 2000);
  }

}


