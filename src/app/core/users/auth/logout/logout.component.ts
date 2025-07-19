/** biome-ignore-all lint/style/useImportType: <Needs to be added as runtime import> */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  constructor(
    public readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  async ngOnInit() {
    await this.auth.logout();
    this.router.navigate(['/']);
  }
}
