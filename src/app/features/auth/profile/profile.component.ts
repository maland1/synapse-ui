import { Component, type OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user!: string[];

  constructor(private readonly auth: AuthService) {}

  async ngOnInit() {
    this.user = await this.auth.getUser();
  }
}
