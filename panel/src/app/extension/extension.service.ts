import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Extension } from './model/model.class';
import { AppService, APIURL } from '../shared/service/AppService.class';

@Injectable()
export class ExtensionService extends AppService<Extension> {
  constructor(protected http : HttpClient) {
    super(http);
    this.appmod="extension/";
   }
}