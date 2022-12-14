import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item;

  constructor(private router: Router, private activeRoute : ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.item=this.router.getCurrentNavigation().extras.state.param1;
      }
    })
   }

  ngOnInit() {
  }
}
