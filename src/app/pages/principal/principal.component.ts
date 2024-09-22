import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from '../../components/menubar/menubar.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, MenubarComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
