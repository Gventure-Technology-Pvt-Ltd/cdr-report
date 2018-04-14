import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuItems } from '../menu-items';
import { DemoMaterialModule } from '../demo-material-module';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { BreadCrumbsComponent } from './breadcrumb/breadcrumbs.component';
import { TitleNavigationService } from './title-nav/title-navigation.service';
import { ButtonComponent } from './button/button.component';
import { StatusComponent } from './status/status.component';
import { WidgetGroupComponent } from './widget-group/widget-group.component';
import { DataTableComponent } from './data-table/data-table.component';
import { KeysPipe } from './data-table/keypipe/keypipe';
import { SearchPipe } from './data-table/keypipe/searchpipe';
import { FormdetailComponent } from './formdetail/formdetail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    FormsModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    BreadCrumbsComponent,
    ButtonComponent,
    StatusComponent,
    WidgetGroupComponent,
    DataTableComponent, 
    KeysPipe,
    SearchPipe,
    FormdetailComponent,
    FileUploadComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    BreadCrumbsComponent,
    ButtonComponent,
    StatusComponent,
    WidgetGroupComponent,
    DataTableComponent,
    FormdetailComponent,
    FileUploadComponent
   ],
  providers: [ MenuItems, TitleNavigationService ]
})

export class SharedModule { }
