import { Component, type OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from 'src/app/shared/components/theme-toggle/theme-toggle.component';
// biome-ignore lint/style/useImportType: <Needs to be added as runtime import>
import { AuthService } from '../users/auth/auth.service';

@Component({
  selector: 'navbar',
  imports: [
    MatToolbarModule,
    MatIconModule,
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

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
