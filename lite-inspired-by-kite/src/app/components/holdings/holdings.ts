import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.html',
  imports: [CommonModule, DecimalPipe],
  styleUrls: ['./holdings.css']
})
export class HoldingsComponent {
  
}
