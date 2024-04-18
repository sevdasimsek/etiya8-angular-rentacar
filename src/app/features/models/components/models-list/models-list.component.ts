import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class ModelsListComponent implements OnInit {
  public models!: ModelListItemDto[];


  constructor(private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    //Called after the constructor initialzing input peoperties
    this.modelsApiService.getList().subscribe((response) => {
      this.models = response;
      this.change.markForCheck(); //ChangeDetectionStrategy.OnPush // Asekronik olarak çalıştığı için bu satırı ekledik. 
    });
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
