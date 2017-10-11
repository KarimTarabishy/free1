import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent implements OnInit {
  @HostBinding("attr.class") HOST_CLASS = "ui top fixed borderless menu";
  constructor() { }

  ngOnInit() {
  }

}
