import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isloading$=new BehaviorSubject<boolean>(false);

  constructor(private meta: Meta) {};

 ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'Data Tree Africa' }, 
      { name: 'keywords', content: 'Data Center Nairobi Kenya, Data Tree Africa, African Data Analysis, Big Data Africa, Cloud Computing Africa, Data Analytics East Africa, AI Africa, Machine Learning Africa, African Market Research, Data Security Africa, African Data Privacy, Colocation Nairobi, Disaster Recovery Nairobi, Cloud Services Africa, High Performance Computing Africa, Internet Exchange Point Kenya, Data Governance Africa, African Data Insights, Business Intelligence Africa, Sustainable Data Center Africa, Fintech Data Africa' } 
    ]);

    this.isloading$.next(true);
    setTimeout(() => {
      this.isloading$.next(false);
    }, 2000);
  }

}


