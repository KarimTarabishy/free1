import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {NavigationContent} from "../../models/navigation-content";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Input() content: Array<NavigationContent>;
  @HostBinding("attr.class") HOST_CLASS = "ui left fixed vertical borderless menu";
  @HostBinding("attr.style") host_style;
  constructor(private sanitizer: DomSanitizer) {
    this.host_style = this.sanitizer.bypassSecurityTrustStyle(`
      top: 65px;
      width: 200px;
      background-color: #639fff;
    `);

  }

  ngOnInit() {
  }

}
