import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import {PhoneNumber} from 'src/app/model/phone-number.model';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {IsoCodeService} from 'src/app/service/iso-code.service';
import {IsoCode} from 'src/app/model/iso-code';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnChanges{

  isHeading = true;
  isSubheading = true;
  isHeadingBtn = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl();
  lastName = new FormControl();
  country = new FormControl();
  tel = new FormControl(new PhoneNumber('', '', ''));
  text = new FormControl();
  contactForm: FormGroup;
  @Input() countryList: IsoCode[];
  filteredOptions: Observable<IsoCode[]>;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private isoCodeService: IsoCodeService) {
    iconRegistry
      .addSvgIcon(
        'location',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_loc.svg'))
      .addSvgIcon(
        'send',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_snd.svg'))
      .addSvgIcon(
        'phone',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_ph.svg'))
      .addSvgIcon(
        'email',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_em.svg'));
  }

  ngOnInit(): void {
    this.filteredOptions = this.country.valueChanges.pipe(
      startWith(''),
      map(value => {
        return value ? this.countryFilter(value) : this.countryList.slice();
      })
    );

    this.contactForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      country: this.country,
      tel: this.tel,
      text: this.text,
    });
  }

  private countryFilter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.countryList.filter(state =>
      state.dial_code.toLowerCase().includes(filterValue) ||
      state.code.toLowerCase().includes(filterValue));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.countryList) {
      this.filteredOptions = this.country.valueChanges.pipe(
        startWith(''),
        map(value => value ? this.countryFilter(value) : this.countryList.slice())
      );
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    console.log(this.contactForm);
  }
}
