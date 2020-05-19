import { Component, OnInit } from '@angular/core';
import { FetchListService } from '../Services/fetch-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Object;

  constructor(private _fetch: FetchListService) { }

  ngOnInit(): void {
    this._fetch.fetchBrewries().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    });
  }

}
