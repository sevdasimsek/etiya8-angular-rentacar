import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModelsApiService } from '../../services/models-api.service';
import { ModelListItemDto } from '../../models/model-list-item-dto';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit, OnChanges {
  @Input() brandId: number | null = null;
  public models!: ModelListItemDto[];

  constructor(private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) { }


  //angular tarafında bir filtreleme
  // get filteredList(): ModelListItemDto[]{
  //   return this.models.filter((item) => item.brandId === this.brandId)
  // }


  ngOnInit(): void {
    //Component ilk yerleştirildiğinde tetiklenir.
    this.getList();
  }

  getList() {
    this.modelsApiService.getList(this.brandId).subscribe((response) => {
      this.models = response;
      this.change.markForCheck();
    });
  }
  //Her state değiştiğinde tetiklenir.
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['brandId'] && changes['brandId'].currentValue != changes['brandId'].previousValue){
      this.getList();
    }
  }


  // constructor() {
  //   let a: number = 1;
  //   a = 2;
  //   const b: number = 2;
  //   // b = 3;
  //   for (let item of this.list) {
  //     console.log(item);
  //   }
  // }
}
