import { Component, type OnInit } from '@angular/core';
// biome-ignore lint/style/useImportType: <Required as runtime import>
import { AuthService } from '../auth/auth.service';
import type { IUserData } from '../auth/models/IUserData.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user!: IUserData[];

  constructor(private readonly auth: AuthService) {}

  async ngOnInit() {
    this.user = await this.auth.getUser();
  }
}
