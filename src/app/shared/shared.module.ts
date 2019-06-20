import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomGridComponent } from './components/custom-grid/custom-grid.component';
import { AcoDatePipe } from './components/pipes/aco-date.pipe';
import { SafePipe } from './components/pipes/safe.pipe';
import { SearchPipe } from './components/pipes/search.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { AutoHeightDirective } from './directives/auto-height.directive';
import { ClickOutSideDirective } from './directives/click-out-side.directive';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FormsModule }   from '@angular/forms';

const importList:any[]=[
  CustomGridComponent,
  AcoDatePipe,
  SafePipe,
  SearchPipe,
  LoaderComponent,
  AutoHeightDirective,
  ClickOutSideDirective,
  PaginatorComponent,
];
@NgModule({
  declarations: importList,
  exports:[FormsModule, ...importList],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
