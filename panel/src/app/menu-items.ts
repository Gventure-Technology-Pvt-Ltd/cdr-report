import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];    
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'Home',
    type: 'link',
    icon: 'home'
  },
  { 
  state: '',
  name: 'OutBound',
  type: 'saperator',
  icon: 'av_timer'  
  },
  {
    state: 'extension',
    name: 'Extension',
    type: 'link',
    icon: 'phone',
  },
  {
    state: 'reports',
    name: 'Reports',
    type: 'link',
    icon: 'border_all',
  }    
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
