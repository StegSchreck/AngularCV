import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule],
  exports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule, MdToolbarModule],
  declarations: []
})
export class MaterialModule { }
