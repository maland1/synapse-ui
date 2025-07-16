import { CommonModule } from '@angular/common';
import { Component, Input, type TemplateRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'side-navbar',
  imports: [MatSidenavModule, MatIconModule, CommonModule, MatListModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss',
})
export class SideNavbarComponent {
  @Input()
  mainContent!: TemplateRef<unknown>;

  isExpanded: boolean = false;

}
