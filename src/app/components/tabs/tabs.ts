import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackButton } from '../back-button/back-button';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, BackButton],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  selectedTab = 1;

  switchTab(value: number) {
    this.selectedTab = value
  }
}
