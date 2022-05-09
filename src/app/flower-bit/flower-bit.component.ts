import { Component, OnInit } from '@angular/core';
import { FLOWERS } from '../mock-flower';

@Component({
  selector: 'app-flower-bit',
  templateUrl: './flower-bit.component.html',
  styleUrls: ['./flower-bit.component.css']
})
export class FlowerBitComponent implements OnInit {
  constructor() {}
  flowers=FLOWERS;

  ngOnInit(): void {
  }
}