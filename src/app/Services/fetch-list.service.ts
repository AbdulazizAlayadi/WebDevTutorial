import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchListService {

  constructor(private http: HttpClient) { }

fetchBrewries(){
  return this.http.get("https://api.openbrewerydb.org/breweries");
}

}
