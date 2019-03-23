import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithCustomElementComponent } from '../element-registry';
import { ObservableDynamicUpdateComponent } from './observable-dynamic-update.component';
import { NgxMultiselectModule } from '@ngx-lib/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    CommonModule,
    NgxMultiselectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ ObservableDynamicUpdateComponent ],
  entryComponents: [ ObservableDynamicUpdateComponent ]
})
export class CurrentLocationModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = ObservableDynamicUpdateComponent;
}
