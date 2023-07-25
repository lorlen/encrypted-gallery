import { Component, OnInit } from '@angular/core';

import { TauriService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly tauriService: TauriService) {}

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  helloWorld() {
    this.tauriService.callHelloWorld();
  }
}
