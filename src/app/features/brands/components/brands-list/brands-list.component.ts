import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrandsApiService } from '../../services/brands-api.service';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { CommonModule } from '@angular/common';
import { ModelsApiService } from '../../../models/services/models-api.service';
import { ModelListItemDto } from '../../../models/models/model-list-item-dto';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit {
  //JS Doc
  /**
   * @returns brand id
   */
  @Output() selectBrand = new EventEmitter<number>();
  //Event oluşturabilmek için EventEmitter kullanıyoruz.
  //Angular'ın bu eventi tanımlayabilmesi için Output dekoratörünü kullanıyoruz.
  public brands!: BrandListItemDto[];
  public models!: ModelListItemDto[];


  constructor(private brandsApiService: BrandsApiService,
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.brands = response;
      this.change.markForCheck();
    })
  }

  getModels(brandId: number) {
    this.modelsApiService.getList().subscribe((response => {
      this.models = response.filter(x => x.brandId == brandId);
      this.change.markForCheck();
    }))
  }

  onBrandClick(brandId: number) {
    this.selectBrand.emit(brandId)
  }
}
