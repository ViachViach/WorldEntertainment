import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
    .addSvgIcon(
      'watch_later',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_wat.svg'))
    .addSvgIcon(
      'insights',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_ins.svg'))
      .addSvgIcon(
        'business',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_bus.svg'));
  }

  ngOnInit(): void {
  }

}
