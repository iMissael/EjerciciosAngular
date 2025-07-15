import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-buttonoverview',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './buttonoverview.html',
  styleUrl: './buttonoverview.css'
})
export class Buttonoverview {

}
