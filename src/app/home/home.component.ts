import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  message: string;

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent.ngOnDestroy()');
  }
}
