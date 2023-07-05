import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Electrodomestico } from './interfaces/Electrodomestico.model';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  private key = '5ccd2439-c2c5-4519-a9e4-42a487547a60';
  private url = 'https://electrics.azurewebsites.net/Electrodomestico';

  constructor(private _http: HttpClient) { }

  getProduct() {}

  getProducts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    const request = this._http.get<any>(
      `https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos?dataOwner=${this.key}`,
      httpOptions
    );
    return new Promise<void>((resolve, reject) => {
      request.subscribe(
        (response) => (response ? resolve(response) : reject(response)),
        (error) => reject(error)
      );
    });
  }

  createProduct( data: Electrodomestico) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    const request = this._http.post<any>(
      `${this.url}/ListarElectrodomesticos?dataOwner=${this.key}`,
      JSON.stringify(data),
      httpOptions
    );
    return new Promise<void>((resolve, reject) => {
      request.subscribe(
        (response) => (response ? resolve(response) : reject(response)),
        (error) => reject(error)
      );
    });
  }


}
