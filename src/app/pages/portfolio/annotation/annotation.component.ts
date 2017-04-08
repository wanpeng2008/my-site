import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})
export class AnnotationComponent implements OnInit, OnDestroy {

  constructor(private _activatedRoute:ActivatedRoute) { }
  private sub: Subscription;
  private projectName: String;

  ngOnInit() {
    console.log('AnnotationComponent init')
    this.sub = this._activatedRoute.params.subscribe(params =>{
      console.log(params)
      let id = params["id"]
      this.projectName = (id=='0')?'all':'project'+id;
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
