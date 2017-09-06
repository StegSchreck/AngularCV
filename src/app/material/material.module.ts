import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdCardModule, MdChipsModule, MdListModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdCardModule, MdChipsModule, MdListModule],
  exports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdCardModule, MdChipsModule, MdListModule],
  declarations: []
})
export class MaterialModule { }
