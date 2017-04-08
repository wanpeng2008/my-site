import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  private sub: Subscription;
  private portfolioId:Number = 0;

  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log('PortfolioComponent init')
    this.sub = this._activatedRoute.params.subscribe(params =>{
      console.log(params)
      this.portfolioId = params["id"]
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
