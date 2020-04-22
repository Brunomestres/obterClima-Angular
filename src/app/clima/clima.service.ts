import { IClimaAtual } from './../interfaces';
import { ClimaData } from './../clima-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }


  getCurrent(city: string, country: string): Observable<IClimaAtual>
  {
    return this.http.get<ClimaData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
    `q=${city},${country}&appid=${environment.appId}`
    ).pipe(
      map(data => this.transformToICurrentWeather(data))
    );
  }



  private transformToICurrentWeather(data: ClimaData): IClimaAtual
  {
    return {
      cidade: data.name,
      pais: data.sys.country,
      data: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperatura: this.convertToFahrenheit(data.main.temp),
      descricao: data.weather[0].description
    };
  }

  private convertToFahrenheit(kelvin: number): number
  {
    return kelvin * 9 / 5 - 459.67;
  }

}
