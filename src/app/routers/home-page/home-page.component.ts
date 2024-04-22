import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';
import { BrandsListComponent } from '../../features/brands/components/brands-list/brands-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MainLayoutComponent, 
    BrandsListComponent,
    ModelsListComponent,
   ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  selectedBrandId: number | null = null;

  onBrandSelect(brandId: number | null) {
    this.selectedBrandId = brandId;
  }

}
