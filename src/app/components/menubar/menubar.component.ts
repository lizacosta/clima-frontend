import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon"
import {MatMenuModule} from "@angular/material/menu"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import { RouterOutlet } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from "@angular/material/button"



@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  standalone:true,
  imports :[ MatToolbarModule, MatIconModule,
    MatMenuModule,
    MatSidenavModule, MatListModule, RouterOutlet, MatBadgeModule, MatButtonModule ]
})
export class MenubarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
