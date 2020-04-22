import { ClimaService } from './../clima/clima.service';
import { Component, OnInit } from '@angular/core';
import { IClimaAtual } from '../interfaces';
@Component({
  selector: 'app-clima-atual',
  templateUrl: './clima-atual.component.html',
  styleUrls: ['./clima-atual.component.css']
})
export class ClimaAtualComponent implements OnInit {
  current: IClimaAtual;

  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {
    this.climaService.getCurrent('Bethesda', 'US').subscribe(data => this.current = data);
  }

}
