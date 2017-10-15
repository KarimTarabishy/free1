import {
  ChangeDetectionStrategy, Component, HostBinding,
  OnInit, Output, EventEmitter, Input
} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {User} from "../../models/user";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent implements OnInit {
  @HostBinding("attr.class") HOST_CLASS = "ui top fixed borderless menu";
  @HostBinding("attr.style") host_style;
  @Output() logout: EventEmitter<any> = new EventEmitter();
  @Input() user: User;
  @Input() content: TopBarContent;
  constructor(private sanitizer: DomSanitizer) {
    this.host_style = this.sanitizer.bypassSecurityTrustStyle(`
      height: 65px;
    `);
  }

  onLogoutClicked() {
    this.logout.emit(null);
  }
  ngOnInit() {
  }

}
