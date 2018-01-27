import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { PROFILE_PAGE } from '../pages.constants';

@IonicPage({
  segment: 'tabs-page' // importante, si no no recargará a la home
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'AboutPage';
  tab3Root = 'ContactPage';
  tab4Root = PROFILE_PAGE;

  constructor() {

  }
}
