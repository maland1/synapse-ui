import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit, type TemplateRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from 'src/app/shared/components/theme-toggle/theme-toggle.component';
import type { AuthService } from '../users/auth/auth.service';

@Component({
  selector: 'navbar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatListModule,
    RouterModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ThemeToggleComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @Input()
  mainContent!: TemplateRef<unknown>;

  isExpanded: boolean = false;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
