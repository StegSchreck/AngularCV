import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule],
  exports: [MdButtonModule, MdCheckboxModule, MdTabsModule, MdSidenavModule, MdIconModule],
  declarations: []
})
export class MaterialModule { }
