import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FleetState } from '../services/fleet';

@Component({
  selector: 'app-creed',
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
            <span class="text-text-headline font-bold">Sea Dragons Creed</span>
          </div>

          <div class="flex flex-col gap-3 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-widest w-fit shadow-sm">
              <span class="material-symbols-outlined text-[16px] text-teal-500">water</span>
              <span>Our Ethos &amp; Heritage</span>
            </div>
            <h1 class="font-display-hero text-4xl sm:text-6xl text-text-headline font-bold tracking-tight">
              We Are Sea Dragons
            </h1>
            <p class="font-body-md text-text-muted leading-relaxed text-base sm:text-lg">
              We are not mere visitors to the sea; we are organisms tuned to its rhythmic frequencies. Hydrofoils grant us hydrodynamic flight across unbroken swells, honoring marine habitats and advancing pristine zero-emission locomotion.
            </p>
          </div>
        </div>
      </section>

      <!-- Poetic Subtitle & The Three Movements -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div class="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-teal-100/80 flex flex-col items-center text-center gap-6 mb-12">
          <span class="text-xs uppercase tracking-widest font-mono font-bold text-teal-600">The Sacred Rhythm</span>
          
          <div class="py-4 flex flex-col gap-3 font-headline-sm text-xl sm:text-3xl text-text-headline max-w-2xl border-y border-teal-100/80 w-full">
            <p class="italic text-amber-600 font-semibold drop-shadow-sm">“We live in the ocean, under the sun.”</p>
            <p class="italic text-teal-600 font-semibold drop-shadow-sm">“We play in the ocean, under the kelp forest.”</p>
            <p class="italic text-indigo-600 font-semibold drop-shadow-sm">“We sleep in the ocean, under the stars and the moon.”</p>
          </div>

          <p class="text-text-body text-sm sm:text-base max-w-2xl leading-relaxed">
            The ocean is not a stadium or an obstacle to conquer. It is an immense, breathing fluid continuum. When our foils lift above water drag into frictionless flight, we enter a covenant of pure harmony with waves born thousands of miles offshore.
          </p>
        </div>

        <!-- 3 Movement Deep-Dive Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <!-- Movement 1: Under the Sun -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 border-t-4 border-amber-400 border-x border-b border-amber-100/40 hover:-translate-y-1 transition-all">
            <div class="flex flex-col gap-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-100 to-orange-100 flex items-center justify-center text-amber-600 shadow-inner">
                <span class="material-symbols-outlined text-[32px]">wb_sunny</span>
              </div>
              <span class="font-label-sm text-xs uppercase tracking-wider text-amber-700 font-bold">
                01. Dawn Patrol &amp; Thermal Energy
              </span>
              <h3 class="font-headline-sm text-2xl text-text-headline font-bold">Live Under the Sun</h3>
              <p class="font-body-sm text-sm text-text-muted leading-relaxed">
                Harnessing radiant thermal winds and morning offshore glass. We test foils when the solar heat engine kickstarts ocean currents, converting solar velocity into frictionless hydrodynamic lift.
              </p>
              <div class="space-y-2 pt-2 text-xs font-mono">
                <div class="flex justify-between border-b border-amber-50 pb-1">
                  <span class="text-slate-400">Solar Thermal Window:</span>
                  <span class="font-bold text-text-headline">06:00 - 10:30 Local</span>
                </div>
                <div class="flex justify-between border-b border-amber-50 pb-1">
                  <span class="text-slate-400">Wind Mechanism:</span>
                  <span class="font-bold text-text-headline">Katabatic / Valley Flow</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Average Thermal Velocity:</span>
                  <span class="font-bold text-amber-700">18 - 24 knots</span>
                </div>
              </div>
            </div>
            <div class="bg-amber-50/60 border border-amber-100/70 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
              <span class="text-text-muted">Solar Index</span>
              <span class="text-amber-700 font-bold">Thermal Ridge Peak</span>
            </div>
          </div>

          <!-- Movement 2: Under the Kelp Forest -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 border-t-4 border-teal-400 border-x border-b border-teal-100/40 hover:-translate-y-1 transition-all">
            <div class="flex flex-col gap-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-100 to-emerald-100 flex items-center justify-center text-teal-600 shadow-inner">
                <span class="material-symbols-outlined text-[32px]">forest</span>
              </div>
              <span class="font-label-sm text-xs uppercase tracking-wider text-teal-700 font-bold">
                02. Biomimicry &amp; Kelp Flow
              </span>
              <h3 class="font-headline-sm text-2xl text-text-headline font-bold">Play in the Kelp Forest</h3>
              <p class="font-body-sm text-sm text-text-muted leading-relaxed">
                Gliding silently above deep sea kelp canopies. Our leading edges feature tubercle ridges inspired by humpback flippers to carve cleanly through aquatic flora with zero weed snagging and minimal wake disruption.
              </p>
              <div class="space-y-2 pt-2 text-xs font-mono">
                <div class="flex justify-between border-b border-teal-50 pb-1">
                  <span class="text-slate-400">Canopy Biomass Depth:</span>
                  <span class="font-bold text-text-headline">8m - 25m Subsurface</span>
                </div>
                <div class="flex justify-between border-b border-teal-50 pb-1">
                  <span class="text-slate-400">Foil Hydrofoil Wake:</span>
                  <span class="font-bold text-text-headline">&lt; 0.2% Dissipation</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Carbon Sequestration:</span>
                  <span class="font-bold text-teal-700">20x Terrestrial Forest</span>
                </div>
              </div>
            </div>
            <div class="bg-teal-50/60 border border-teal-100/70 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
              <span class="text-text-muted">Guardianship</span>
              <button
                type="button"
                (click)="fleet.openInfo('kelp')"
                class="text-teal-700 font-bold hover:underline cursor-pointer flex items-center gap-1">
                <span>1% For Kelp Restoration</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- Movement 3: Under the Stars & Moon -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 border-t-4 border-indigo-400 border-x border-b border-indigo-100/40 hover:-translate-y-1 transition-all">
            <div class="flex flex-col gap-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 shadow-inner">
                <span class="material-symbols-outlined text-[32px]">bedtime</span>
              </div>
              <span class="font-label-sm text-xs uppercase tracking-wider text-indigo-700 font-bold">
                03. Nocturnal Swell &amp; Tidal Rhythm
              </span>
              <h3 class="font-headline-sm text-2xl text-text-headline font-bold">Sleep Under Stars &amp; Moon</h3>
              <p class="font-body-sm text-sm text-text-muted leading-relaxed">
                Resting on anchorage under celestial navigation after downwind crossings. The moon controls the tidal surges that generate the longest swell lines on earth—nourishing our craft and our spirits.
              </p>
              <div class="space-y-2 pt-2 text-xs font-mono">
                <div class="flex justify-between border-b border-indigo-50 pb-1">
                  <span class="text-slate-400">Gravitational Pull:</span>
                  <span class="font-bold text-text-headline">Lunar Spring Surge</span>
                </div>
                <div class="flex justify-between border-b border-indigo-50 pb-1">
                  <span class="text-slate-400">Navigation Standard:</span>
                  <span class="font-bold text-text-headline">Polynesian Wayfinding</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Swell Grounding:</span>
                  <span class="font-bold text-indigo-700">14-18s Groundswell</span>
                </div>
              </div>
            </div>
            <div class="bg-indigo-50/60 border border-indigo-100/70 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
              <span class="text-text-muted">Tidal Resonance</span>
              <span class="text-indigo-700 font-bold">Full Moon High Tide</span>
            </div>
          </div>

        </div>
      </section>

      <!-- 1% For Kelp Restoration Pledge Detail Section -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-6">
        <div class="bg-gradient-to-r from-teal-900 via-cyan-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="flex flex-col gap-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/60 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider w-fit">
              <span>Marine Conservation Mandate</span>
            </div>
            <h3 class="font-headline-xl text-3xl sm:text-4xl font-bold">1% For Giant Kelp Forest Rewilding</h3>
            <p class="text-sky-100/80 text-sm sm:text-base leading-relaxed">
              Every SwiftMonster foil sold directly funds the cultivation of kelp spores and the removal of destructive purple urchin barrens across Monterey Bay, the Oregon Coast, and Tasmania. Over 45,000 square meters of underwater forests have been replanted to date.
            </p>
          </div>
          <button
            type="button"
            (click)="fleet.openInfo('kelp')"
            class="px-8 py-3.5 rounded-xl bg-teal-400 text-slate-900 font-label-md text-xs uppercase font-bold hover:bg-teal-300 transition-colors shadow-lg whitespace-nowrap cursor-pointer">
            Explore Conservation Report
          </button>
        </div>
      </section>
    </div>
  `,
})
export class Creed {
  readonly fleet = inject(FleetState);
}
