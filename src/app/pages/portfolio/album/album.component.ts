import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {

  constructor(private _activatedRoute:ActivatedRoute) { }
  private sub: Subscription;
  private projectName: String;

  ngOnInit() {
    console.log('AlbumComponent init')
    this.sub = this._activatedRoute.params.subscribe(params =>{
      console.log(params)
      let id = params["id"]
      this.projectName = (id=='0')?'all':'project'+id;
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  notificationFunction($event){
    console.log('notificationFunction invoked')
  }

}
