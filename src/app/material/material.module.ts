import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdTabsModule,
  MdSidenavModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdChipsModule,
  MdListModule,
  MdProgressBarModule,
  MdTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdTabsModule,
    MdSidenavModule,
    MdIconModule,
    MdToolbarModule,
    MdCardModule,
    MdChipsModule,
    MdListModule,
    MdProgressBarModule,
    MdTooltipModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdTabsModule,
    MdSidenavModule,
    MdIconModule,
    MdToolbarModule,
    MdCardModule,
    MdChipsModule,
    MdListModule,
    MdProgressBarModule,
    MdTooltipModule,
  ],
  declarations: []
})
export class MaterialModule { }
