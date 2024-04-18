import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandsApiService } from '../../services/brands-api.service';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit {
  public list! : BrandListItemDto[];


  constructor(private brandsApiService: BrandsApiService, 
    private change: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    })
  }

}
