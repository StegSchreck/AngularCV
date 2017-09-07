import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdCardModule, MdChipsModule, MdListModule, MdProgressBarModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdCardModule, MdChipsModule, MdListModule, MdProgressBarModule],
  exports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdCardModule, MdChipsModule, MdListModule, MdProgressBarModule],
  declarations: []
})
export class MaterialModule { }
