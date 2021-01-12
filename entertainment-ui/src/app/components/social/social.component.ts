import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon(
        'facebook',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_f.svg'))
      .addSvgIcon(
        'instagram',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_i.svg'))
      .addSvgIcon(
        'telegram',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_t.svg'))
      .addSvgIcon(
        'youtube',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_yt.svg'))
      .addSvgIcon(
        'vk',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vk.svg'))
      .addSvgIcon(
        'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_l.svg'));
  }

  ngOnInit(): void {
  }

}
