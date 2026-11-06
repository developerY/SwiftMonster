import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FleetState } from '../services/fleet';

@Component({
  selector: 'app-quiver',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="w-full bg-surface pb-20">
      <!-- Page Header -->
      <section class="w-full py-12 lg:py-16 bg-gradient-to-b from-sky-50/80 via-teal-50/40 to-transparent border-b border-teal-100/60">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-4">
          <div class="flex items-center gap-2 text-xs font-mono text-teal-700">
            <a routerLink="/" class="hover:underline">Home</a>
            <span>/</span>
            <span class="text-text-headline font-bold">Quiver Customizer</span>
          </div>

          <div class="flex flex-col gap-2 max-w-2xl">
            <span class="font-label-sm text-xs uppercase tracking-widest text-teal-600 font-bold">
              Hydrodynamic Tuning Lab
            </span>
            <h1 class="font-headline-xl text-3xl sm:text-5xl text-text-headline font-bold tracking-tight">
              Fleet Customizer &amp; Quiver Builder
            </h1>
            <p class="font-body-md text-text-muted leading-relaxed text-sm sm:text-base">
              Calculate your exact front wing surface area (cm²), mast length (cm), and foil geometry tailored to your body weight, local wind velocity, and riding discipline.
            </p>
          </div>
        </div>
      </section>

      <!-- Main Interactive Tuner Box -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div class="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-14 items-center border border-teal-100">
          
          <!-- Left: Sliders & Controls -->
          <div class="flex-1 w-full flex flex-col gap-6">
            
            <!-- Discipline Buttons -->
            <div class="flex flex-col gap-2">
              <span class="font-headline-sm text-sm text-text-headline font-bold">1. Select Riding Discipline</span>
              <div class="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  (click)="fleet.selectedDiscipline.set('parawing')"
                  class="py-3 px-3 rounded-xl font-label-sm text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1"
                  [class.border-teal-500]="fleet.selectedDiscipline() === 'parawing'"
                  [class.bg-teal-500]="fleet.selectedDiscipline() === 'parawing'"
                  [class.text-white]="fleet.selectedDiscipline() === 'parawing'"
                  [class.shadow-sm]="fleet.selectedDiscipline() === 'parawing'"
                  [class.border-sky-100]="fleet.selectedDiscipline() !== 'parawing'"
                  [class.bg-sky-50]="fleet.selectedDiscipline() !== 'parawing'"
                  [class.text-text-body]="fleet.selectedDiscipline() !== 'parawing'">
                  <span class="material-symbols-outlined text-[20px]">kitesurfing</span>
                  <span>Parawing</span>
                </button>

                <button
                  type="button"
                  (click)="fleet.selectedDiscipline.set('wingfoil')"
                  class="py-3 px-3 rounded-xl font-label-sm text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1"
                  [class.border-teal-500]="fleet.selectedDiscipline() === 'wingfoil'"
                  [class.bg-teal-500]="fleet.selectedDiscipline() === 'wingfoil'"
                  [class.text-white]="fleet.selectedDiscipline() === 'wingfoil'"
                  [class.shadow-sm]="fleet.selectedDiscipline() === 'wingfoil'"
                  [class.border-sky-100]="fleet.selectedDiscipline() !== 'wingfoil'"
                  [class.bg-sky-50]="fleet.selectedDiscipline() !== 'wingfoil'"
                  [class.text-text-body]="fleet.selectedDiscipline() !== 'wingfoil'">
                  <span class="material-symbols-outlined text-[20px]">surfing</span>
                  <span>Wing Foil</span>
                </button>

                <button
                  type="button"
                  (click)="fleet.selectedDiscipline.set('kitefoil')"
                  class="py-3 px-3 rounded-xl font-label-sm text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1"
                  [class.border-teal-500]="fleet.selectedDiscipline() === 'kitefoil'"
                  [class.bg-teal-500]="fleet.selectedDiscipline() === 'kitefoil'"
                  [class.text-white]="fleet.selectedDiscipline() === 'kitefoil'"
                  [class.shadow-sm]="fleet.selectedDiscipline() === 'kitefoil'"
                  [class.border-sky-100]="fleet.selectedDiscipline() !== 'kitefoil'"
                  [class.bg-sky-50]="fleet.selectedDiscipline() !== 'kitefoil'"
                  [class.text-text-body]="fleet.selectedDiscipline() !== 'kitefoil'">
                  <span class="material-symbols-outlined text-[20px]">speed</span>
                  <span>Kite Foil</span>
                </button>
              </div>
            </div>

            <!-- Rider Weight Slider -->
            <div class="flex flex-col gap-2 pt-2">
              <div class="flex justify-between items-center">
                <span class="font-headline-sm text-sm text-text-headline font-bold">2. Rider Dry Body Weight</span>
                <span class="font-label-lg text-sm text-teal-700 font-bold font-mono bg-teal-50 px-2.5 py-0.5 rounded-lg border border-teal-100">
                  {{ fleet.quiverRecommendation().weightKg }} kg ({{ fleet.quiverRecommendation().weightLbs }} lbs)
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="115"
                [value]="fleet.riderWeightKg()"
                (input)="onWeightInput($event)"
                class="w-full accent-teal-500 cursor-pointer h-2 bg-sky-100 rounded-lg appearance-none" />
              <div class="flex justify-between text-xs text-text-muted font-label-sm font-mono">
                <span>50 kg (110 lbs)</span>
                <span>80 kg (176 lbs)</span>
                <span>115 kg (253 lbs)</span>
              </div>
            </div>

            <!-- Wind / Swell Condition Slider -->
            <div class="flex flex-col gap-2 pt-2">
              <div class="flex justify-between items-center">
                <span class="font-headline-sm text-sm text-text-headline font-bold">3. Prevailing Wind &amp; Swell Velocity</span>
                <span class="font-label-lg text-sm text-indigo-600 font-bold font-mono bg-indigo-50 px-2.5 py-0.5 rounded-lg border border-indigo-100">
                  {{ fleet.quiverRecommendation().windKts }} kts ({{ fleet.quiverRecommendation().windCondition }})
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="40"
                [value]="fleet.windSpeedKts()"
                (input)="onWindInput($event)"
                class="w-full accent-indigo-500 cursor-pointer h-2 bg-indigo-100 rounded-lg appearance-none" />
              <div class="flex justify-between text-xs text-text-muted font-label-sm font-mono">
                <span>8 kts (Light Glass)</span>
                <span>20 kts (Medium Swell)</span>
                <span>40 kts (Heavy Gale)</span>
              </div>
            </div>

            <!-- Included Hardware Info -->
            <div class="bg-teal-50/50 border border-teal-100/70 p-3.5 rounded-xl flex items-center justify-between text-xs text-text-muted">
              <span class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px] text-teal-600">check_circle</span>
                <span>Includes Toray T1100 Pre-preg Carbon Mast &amp; Titanium Fuselage</span>
              </span>
              <span class="font-bold text-text-headline font-mono">Titanium T30 Fasteners</span>
            </div>

          </div>

          <!-- Right: Recommended Setup Card -->
          <div class="w-full lg:w-96 bg-gradient-to-b from-sky-50 via-teal-50/40 to-indigo-50/40 border border-teal-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-5 shadow-sm">
            <span class="font-label-sm text-xs uppercase tracking-wider text-teal-800 font-bold">
              Recommended Hydrofoil Setup
            </span>

            <div class="flex flex-col items-center">
              <span class="font-display-hero text-5xl sm:text-6xl text-text-headline leading-none font-bold">
                {{ fleet.quiverRecommendation().frontWingArea }} cm²
              </span>
              <span class="font-label-md text-sm text-teal-700 font-bold mt-2 font-mono">
                {{ fleet.quiverRecommendation().modelName }} • {{ fleet.quiverRecommendation().mastLength }}
              </span>
            </div>

            <div class="w-full bg-white p-3 rounded-xl border border-teal-100 flex justify-between items-center text-xs font-mono shadow-inner">
              <span class="text-text-muted">Projected Glide:</span>
              <span class="text-teal-700 font-bold text-sm">{{ fleet.quiverRecommendation().glideRating }}</span>
            </div>

            <p class="font-body-sm text-xs text-text-muted leading-relaxed">
              {{ fleet.quiverRecommendation().description }}
            </p>

            <button
              type="button"
              (click)="orderConfiguredBuild()"
              class="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 text-white font-label-md text-xs uppercase tracking-wide text-center font-bold shadow-md hover:shadow-[0_4px_16px_rgba(20,184,166,0.35)] transition-all cursor-pointer">
              Pre-Order This Build ($ {{ fleet.quiverRecommendation().estimatedPrice }} USD)
            </button>
          </div>

        </div>
      </section>

      <!-- Educational Sizing FAQ -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-2xl border border-teal-50 shadow-sm flex flex-col gap-2">
            <h4 class="font-bold text-text-headline text-base">Why Front Wing Area Matters</h4>
            <p class="text-xs text-text-muted leading-relaxed">
              Larger surface areas (950-1250cm²) provide early takeoff in low wind and effortless pumping momentum. Smaller areas (600-800cm²) unlock extreme carving agility and top speeds past 35 knots.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-teal-50 shadow-sm flex flex-col gap-2">
            <h4 class="font-bold text-text-headline text-base">Choosing Your Mast Length</h4>
            <p class="text-xs text-text-muted leading-relaxed">
              80cm to 85cm is ideal for rolling ocean swells and downwind parawings. 92cm to 102cm provides maximum lean angle for aggressive race turns and chop clearance in gale conditions.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-teal-50 shadow-sm flex flex-col gap-2">
            <h4 class="font-bold text-text-headline text-base">Monocoque Carbon Rigidity</h4>
            <p class="text-xs text-text-muted leading-relaxed">
              Toray T1100 fibers ensure virtually zero torsional deflection. When you carve through a bottom turn, 100% of your energy transfers directly to the foil with zero lag.
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class Quiver {
  readonly fleet = inject(FleetState);

  onWeightInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.fleet.riderWeightKg.set(parseInt(input.value, 10));
    }
  }

  onWindInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.fleet.windSpeedKts.set(parseInt(input.value, 10));
    }
  }

  orderConfiguredBuild(): void {
    const rec = this.fleet.quiverRecommendation();
    this.fleet.openPreOrder({
      product: rec.modelName,
      tier: 'CUSTOM QUIVER CONFIG',
      price: rec.estimatedPrice,
      mast: rec.mastLength,
      frontWing: `${rec.frontWingArea} cm²`,
    });
  }
}
