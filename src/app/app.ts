import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FleetState } from './services/fleet';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly fleet = inject(FleetState);

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly productsDropdownOpen = signal<boolean>(false);

  // Pre-Order Form
  readonly preOrderSubmitted = signal<boolean>(false);
  readonly preOrderForm = new FormGroup({
    customerName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    shippingCountry: new FormControl('United States', [Validators.required]),
    notes: new FormControl(''),
  });

  // Swell Dispatch Newsletter Form
  readonly dispatchForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  readonly dispatchSubmitted = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleProductsDropdown(): void {
    this.productsDropdownOpen.update((v) => !v);
  }

  closeProductsDropdown(): void {
    this.productsDropdownOpen.set(false);
  }

  submitPreOrder(): void {
    if (this.preOrderForm.valid) {
      this.preOrderSubmitted.set(true);
    } else {
      this.preOrderForm.markAllAsTouched();
    }
  }

  closePreOrderModal(): void {
    this.fleet.closePreOrder();
    this.preOrderSubmitted.set(false);
  }

  submitDispatch(): void {
    if (this.dispatchForm.valid) {
      this.dispatchSubmitted.set(true);
    } else {
      this.dispatchForm.markAllAsTouched();
    }
  }

  resetDispatch(): void {
    this.dispatchSubmitted.set(false);
    this.dispatchForm.reset();
  }
}
