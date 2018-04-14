import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { ExtensionService } from '../extension.service';
import { ExtensionForm, Extension } from '../model/model.class';
import { AppComponentClass } from '../../shared/service/AppComponent.class';
import { Router } from '@angular/router';

import { Option } from '../../shared/model/model.class';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { MatSelect, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-addextension',
  templateUrl: './addextension.component.html',
  styleUrls: ['./addextension.component.css']
})
export class AddextensionComponent extends AppComponentClass<Extension, ExtensionForm> {

  constructor(protected data: ExtensionService, protected router: Router, protected fb: FormBuilder, protected msg: MatSnackBar) {
    super(data,router, fb, msg);
    //this.nav='/main/extension/listextension';
    this.nav='/main/extension/';
    //this.cdata=new ExtensionForm(null);
  }
  ngOnInit() {
    super.ngOnInit();
    this.data.solution.subscribe(res=>{
        this.cdata=new ExtensionForm(res);
    });
  }
}