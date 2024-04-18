import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandsListComponent } from '../../../features/brands/components/brands-list/brands-list.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
