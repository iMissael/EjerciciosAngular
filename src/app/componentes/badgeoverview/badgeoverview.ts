import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
@Component({
  selector: 'app-badgeoverview',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './badgeoverview.html',
  styleUrl: './badgeoverview.css'
})
export class Badgeoverview {
hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
