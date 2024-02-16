import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'datatreeafrica';

  isloading$=new BehaviorSubject<boolean>(false);

  showMobileMenu: boolean = false;

  constructor(private meta: Meta, private activatedRoute: ActivatedRoute) {};

 ngOnInit() {
    initFlowbite(); 

    this.activatedRoute.fragment.subscribe((route) => {
      console.log(route);
      this.jumpTo(route);
    })

    this.meta.addTags([ 
      { name: 'description', content: 'Data Tree Africa' }, 
      { name: 'keywords', content: 'Data Center Nairobi Kenya, Data Tree Africa, African Data Analysis, Big Data Africa, Cloud Computing Africa, Data Analytics East Africa, AI Africa, Machine Learning Africa, African Market Research, Data Security Africa, African Data Privacy, Colocation Nairobi, Disaster Recovery Nairobi, Cloud Services Africa, High Performance Computing Africa, Internet Exchange Point Kenya, Data Governance Africa, African Data Insights, Business Intelligence Africa, Sustainable Data Center Africa, Fintech Data Africa' } 
    ]);

    this.isloading$.next(true);
    setTimeout(() => {
      this.isloading$.next(false);
    }, 2000);
    
  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
