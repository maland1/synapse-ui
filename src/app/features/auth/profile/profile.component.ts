import { Component, computed, inject } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  auth = inject(AuthService);

  userInfo = computed(() => this.auth.getUser());
}
