/** biome-ignore-all lint/style/useImportType: <Needs to be added as runtime import> */
import { Component, type OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  async ngOnInit() {
    await this.auth.login();
    this.router.navigate(['/profile'])
  }
}
