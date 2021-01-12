import {Component, OnInit, NgZone, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import {ScrollDispatcher, CdkScrollable} from '@angular/cdk/scrolling';
import {MatToolbar} from '@angular/material/toolbar';
import {IAppState} from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import {selectConfig} from 'src/app/store/selector/config.selector';
import {selectIsoCodes} from 'src/app/store/selector/isoCode.selector';
import * as ConfigAction from 'src/app/store/action/conf.actions';
import * as IsoCodeAction from 'src/app/store/action/isoCode.actions';
import {Observable} from 'rxjs';
import {IsoCode} from 'src/app/model/iso-code';
import {IConfig} from '../../model/config';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {

  config$: Observable<IConfig>;
  isoCode$: Observable<IsoCode[]>;
  @ViewChild('home', {read: ElementRef, static: false}) elHomeView: ElementRef;
  @ViewChild('toolBara', {read: MatToolbar, static: true}) elementReftoolbar: MatToolbar;
  isOnTop = true;
  homeHeight: number;
  headerHeight: number;

  constructor(private store: Store<IAppState>,
              private scrollDispatcher: ScrollDispatcher,
              private zone: NgZone,
              private scrollToService: ScrollToService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon(
        'close',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_x.svg'));
    this.config$ = this.store.pipe(select(selectConfig));
    this.isoCode$ = this.store.pipe(select(selectIsoCodes));
  }

  ngOnInit(): void {
    console.log(location);
    this.store.dispatch(ConfigAction.getConfig());
    this.store.dispatch(IsoCodeAction.getIsoCodes());
    this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {
      const scroll = event.measureScrollOffset('top');
      let newOpacity = this.isOnTop;

      if (scroll > this.homeHeight) {
        newOpacity = false;
      } else {
        newOpacity = true;
      }

      if (newOpacity !== this.isOnTop) {
        this.zone.run(() => {
          this.isOnTop = newOpacity;
        });
      }
    });
  }

  ngAfterViewInit() {
    this.headerHeight = this.elementReftoolbar._elementRef.nativeElement.offsetHeight;
    this.homeHeight = this.elHomeView.nativeElement.offsetHeight - this.headerHeight;
  }

  onChangeLanguage(newLocal: string) {
    this.store.dispatch(ConfigAction.changeConfigLocal({local: newLocal}));
  }

  onScrollToSection(elementId: string): void {
    console.log(elementId);
    const options: ScrollToConfigOptions = {
      target: elementId,
      offset: 1 - this.headerHeight
    };

    this.scrollToService.scrollTo(options);
  }
}
