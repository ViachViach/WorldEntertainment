import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import * as ConfigAction from '../../store/action/conf.actions';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {IsoCode} from '../../model/iso-code';
import {IConfig} from '../../model/config';
import {NgLocaleLocalization} from '@angular/common';

@Component({
  selector: 'app-lang-menu',
  templateUrl: './lang-menu.component.html',
  styleUrls: ['./lang-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LangMenuComponent implements OnInit {
  @Input() config: IConfig;
  @Output() changeLanguage = new EventEmitter();
  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon(
        'En',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/l_e.svg'))
      .addSvgIcon(
        'Ru',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/l_r.svg'));
  }

  ngOnInit(): void {
  }

  onChangeLanguage(value: string) {
      this.changeLanguage.emit(value);
  }
}
