import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FleetState } from '../services/fleet';

interface ProductItem {
  id: string;
  category: 'parawing' | 'wingfoil' | 'kitefoil' | 'hardware';
  tierBadge: string;
  badgeStyle: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  specs: { label: string; value: string; highlight?: boolean }[];
  windWindow: string;
  price: string;
  numericPrice: number;
  gradientClass: string;
  borderClass: string;
}

@Component({
  selector: 'app-products',
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
            <span class="text-text-headline font-bold">Fleet Lineup</span>
          </div>

          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="flex flex-col gap-2 max-w-2xl">
              <span class="font-label-sm text-xs uppercase tracking-widest text-teal-600 font-bold">
                Aerospace Hydrofoil Engineering
              </span>
              <h1 class="font-headline-xl text-3xl sm:text-5xl text-text-headline font-bold tracking-tight">
                2025 Hydrofoil Fleet
              </h1>
              <p class="font-body-md text-text-muted leading-relaxed text-sm sm:text-base">
                Explore our world-class lineup of ultralight packable downwind parawings, high-aspect dihedral wing foils, and race-winning kite foils built with Toray T1100 HM carbon.
              </p>
            </div>

            <!-- Fleet Filter Tabs -->
            <div class="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-teal-100 shadow-sm">
              <button
                type="button"
                (click)="activeCategory.set('all')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                [class.bg-teal-500]="activeCategory() === 'all'"
                [class.text-white]="activeCategory() === 'all'"
                [class.text-text-muted]="activeCategory() !== 'all'">
                All Fleet
              </button>
              <button
                type="button"
                (click)="activeCategory.set('parawing')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                [class.bg-teal-500]="activeCategory() === 'parawing'"
                [class.text-white]="activeCategory() === 'parawing'"
                [class.text-text-muted]="activeCategory() !== 'parawing'">
                Parawing
              </button>
              <button
                type="button"
                (click)="activeCategory.set('wingfoil')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                [class.bg-teal-500]="activeCategory() === 'wingfoil'"
                [class.text-white]="activeCategory() === 'wingfoil'"
                [class.text-text-muted]="activeCategory() !== 'wingfoil'">
                Wing Foil
              </button>
              <button
                type="button"
                (click)="activeCategory.set('kitefoil')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                [class.bg-teal-500]="activeCategory() === 'kitefoil'"
                [class.text-white]="activeCategory() === 'kitefoil'"
                [class.text-text-muted]="activeCategory() !== 'kitefoil'">
                Kite Foil
              </button>
              <button
                type="button"
                (click)="activeCategory.set('hardware')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                [class.bg-teal-500]="activeCategory() === 'hardware'"
                [class.text-white]="activeCategory() === 'hardware'"
                [class.text-text-muted]="activeCategory() !== 'hardware'">
                Masts &amp; Titanium
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Products Grid (Strict order maintained) -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          @for (item of filteredProducts(); track item.id) {
            <div
              class="bg-white rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between gap-6 transition-all hover:-translate-y-1.5 hover:shadow-xl border-t-4 border-x border-b"
              [class]="item.borderClass">
              
              <div class="flex flex-col gap-4">
                <div class="flex items-center justify-between">
                  <span
                    class="font-label-sm text-xs font-bold px-2.5 py-1 rounded-md tracking-wider"
                    [class]="item.badgeStyle">
                    {{ item.tierBadge }}
                  </span>
                  <span class="font-label-sm text-xs text-text-muted font-bold">{{ item.tagline }}</span>
                </div>

                <div class="w-12 h-12 rounded-xl flex items-center justify-center mt-1" [class]="item.gradientClass">
                  <span class="material-symbols-outlined text-[28px]">{{ item.icon }}</span>
                </div>

                <h3 class="font-headline-md text-2xl text-text-headline font-bold">{{ item.title }}</h3>
                <p class="font-body-sm text-sm text-text-muted leading-relaxed">
                  {{ item.description }}
                </p>

                <!-- Technical Specs Breakdown -->
                <div class="space-y-2 pt-2 text-xs font-mono">
                  @for (spec of item.specs; track spec.label) {
                    <div class="flex justify-between text-text-body border-b border-slate-100 pb-1.5">
                      <span class="text-slate-500">{{ spec.label }}</span>
                      <span [class.text-teal-600]="spec.highlight" [class.font-bold]="spec.highlight" class="font-bold text-text-headline">
                        {{ spec.value }}
                      </span>
                    </div>
                  }
                </div>
              </div>

              <!-- Price & CTA -->
              <div class="pt-2 flex flex-col gap-2.5">
                <div class="bg-slate-50 border border-slate-200/60 p-3 rounded-xl flex items-center justify-between font-label-sm text-xs">
                  <span class="text-text-muted">{{ item.windWindow }}</span>
                  <span class="text-teal-800 font-bold text-sm">{{ item.price }}</span>
                </div>

                <button
                  type="button"
                  (click)="fleet.openPreOrder({ product: item.title, tier: item.tierBadge, price: item.numericPrice })"
                  class="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 text-white font-label-md text-xs uppercase tracking-wider text-center font-bold hover:shadow-[0_4px_16px_rgba(20,184,166,0.35)] transition-all cursor-pointer">
                  Configure &amp; Pre-Order
                </button>
              </div>

            </div>
          }
        </div>
      </section>

      <!-- Marine Materials Science Architecture Banner -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-6">
        <div class="w-full bg-gradient-to-r from-white via-sky-50/40 to-teal-50/40 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 justify-between border border-teal-100/80">
          <div class="flex flex-col gap-1.5 max-w-lg">
            <span class="font-label-sm text-xs text-teal-600 font-bold uppercase tracking-wider">
              Marine Materials Science
            </span>
            <h4 class="font-headline-md text-xl sm:text-2xl text-text-headline font-bold">
              Toray T1100 Aero Pre-Preg &amp; Grade 5 Titanium
            </h4>
            <p class="font-body-sm text-sm text-text-muted">
              Direct autoclave curing at 7 bars creates void-free solid composite layers immune to salt crystallization, torsional flex, and high-load fatigue.
            </p>
          </div>

          <div class="w-full md:w-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div class="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-cyan-100 min-w-[120px]">
              <span class="font-label-sm text-[11px] text-text-muted font-bold">HAWAII PACIFIC</span>
              <span class="font-headline-sm text-lg text-cyan-600 font-bold">3.4m Swell</span>
            </div>
            <div class="hidden sm:block w-6 h-0.5 bg-gradient-to-r from-cyan-200 to-teal-200"></div>
            <div class="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-teal-100 min-w-[120px]">
              <span class="font-label-sm text-[11px] text-text-muted font-bold">HOOD RIVER</span>
              <span class="font-headline-sm text-lg text-teal-600 font-bold">32kt Thermal</span>
            </div>
            <div class="hidden sm:block w-6 h-0.5 bg-gradient-to-r from-teal-200 to-indigo-200"></div>
            <div class="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-indigo-100 min-w-[120px]">
              <span class="font-label-sm text-[11px] text-text-muted font-bold">CAPE TOWN</span>
              <span class="font-headline-sm text-lg text-indigo-600 font-bold">38kt Gusts</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Quiver Tuner Banner Link -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-8">
        <div class="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div class="flex flex-col gap-1 text-center md:text-left">
            <span class="text-xs font-mono uppercase tracking-wider font-bold text-teal-100">Need Custom Sizing?</span>
            <h3 class="text-2xl font-bold font-headline-md">Not sure which wing size fits your body weight?</h3>
            <p class="text-teal-50 text-sm max-w-xl">Use our hydrodynamic calculator to match your exact weight with optimal front wing area.</p>
          </div>
          <a routerLink="/quiver" class="px-6 py-3 rounded-xl bg-white text-teal-900 font-label-md text-xs uppercase font-bold whitespace-nowrap shadow hover:bg-teal-50 transition-colors">
            Launch Quiver Tuner
          </a>
        </div>
      </section>
    </div>
  `,
})
export class Products {
  readonly fleet = inject(FleetState);
  readonly activeCategory = signal<'all' | 'parawing' | 'wingfoil' | 'kitefoil' | 'hardware'>('all');

  readonly allProducts: ProductItem[] = [
    {
      id: 'parawing',
      category: 'parawing',
      tierBadge: 'FLEET TIER 01',
      badgeStyle: 'text-teal-900 bg-teal-100/80',
      title: 'Parawing Gen-4',
      tagline: 'DOWNWIND FREEDOM',
      description: 'Ultralight, boomless packable downwind propulsion. Zero flutter canopy geometry, instant one-handed depower, and pocket-sized ocean freedom that stows in your waist harness while linking endless rolling swells.',
      icon: 'kitesurfing',
      specs: [
        { label: 'Pack Size', value: '1.4 Liters (Belt pack)' },
        { label: 'Canopy Matrix', value: 'Teijin 28g Ripstop Pro' },
        { label: 'Bridle Line', value: 'Dyneema SK99 Pure' },
        { label: 'Depower Flagging', value: '100% Zero-Drag Spill', highlight: true },
      ],
      windWindow: 'Wind Window: 10 - 35 kts',
      price: '$1,299 USD',
      numericPrice: 1299,
      gradientClass: 'bg-teal-50 border border-teal-100 text-teal-600',
      borderClass: 'border-teal-400 border-teal-50',
    },
    {
      id: 'wingfoil',
      category: 'wingfoil',
      tierBadge: 'FLEET TIER 02',
      badgeStyle: 'text-indigo-900 bg-indigo-100/80',
      title: 'Wing Foil Pro Complete',
      tagline: 'ALL-WATER PRECISION',
      description: 'High-modulus carbon masts, ultra-stiff ergonomic carbon handles, and high-aspect dihedral wing geometries engineered for explosive wave carving, high pump cadence, and freestyle aerial recovery.',
      icon: 'surfing',
      specs: [
        { label: 'Mast Construction', value: '85cm / 92cm HM M40J' },
        { label: 'Boom/Handle', value: 'Ultra-Rigid Monocoque Carbon' },
        { label: 'Front Wing Area', value: '650cm² – 1150cm²' },
        { label: 'Pump Efficiency', value: 'Class-Leading High AR', highlight: true },
      ],
      windWindow: 'Wing Sizes: 3.5m – 6.0m',
      price: '$2,450 Full Foil',
      numericPrice: 2450,
      gradientClass: 'bg-indigo-50 border border-indigo-100 text-indigo-600',
      borderClass: 'border-indigo-400 border-indigo-50',
    },
    {
      id: 'kitefoil',
      category: 'kitefoil',
      tierBadge: 'FLEET TIER 03',
      badgeStyle: 'text-sky-900 bg-sky-100/80',
      title: 'Kite Foil GT Race',
      tagline: 'RACE & SPEED RUN',
      description: 'Race-winning mast-fuselage hydrodynamics, razor-sharp front wings, and ultra-thin low-drag stabilizers engineered for locked-in high-speed tracking, razor upwind angles, and ventilation immunity at 35+ knots.',
      icon: 'speed',
      specs: [
        { label: 'Speed Ceiling', value: '38.4 kts Top GPS' },
        { label: 'Fuselage Drag', value: 'Titanium Micro-Sleeve (0.014 Cd)' },
        { label: 'Mast Profile', value: '102cm Thin Taper Race' },
        { label: 'Cavitation Margin', value: '+45% Safe Margin', highlight: true },
      ],
      windWindow: 'Hydrofoil Pro Set',
      price: '$2,890 USD',
      numericPrice: 2890,
      gradientClass: 'bg-sky-50 border border-sky-100 text-sky-600',
      borderClass: 'border-sky-400 border-sky-50',
    },
    {
      id: 'carbon-mast',
      category: 'hardware',
      tierBadge: 'COMPOSITE HARDWARE',
      badgeStyle: 'text-slate-900 bg-slate-100',
      title: 'Toray T1100 HM Carbon Mast',
      tagline: 'TORSIONAL STIFFNESS',
      description: 'Zero-flex monocoque carbon masts cured under 7 bars autoclave pressure. Provides immediate pitch sensitivity and acoustic silence even at 35+ knots.',
      icon: 'layers',
      specs: [
        { label: 'Heights Available', value: '80cm / 85cm / 92cm / 102cm' },
        { label: 'Fiber Mix', value: 'Toray T1100 + M40J' },
        { label: 'Torsional Flex', value: '1.2° / 100Nm' },
        { label: 'Surface Finish', value: 'Silica Hydro-Matte', highlight: true },
      ],
      windWindow: 'Universal Deep Tuttle / Plate',
      price: '$1,150 USD',
      numericPrice: 1150,
      gradientClass: 'bg-slate-50 border border-slate-200 text-slate-700',
      borderClass: 'border-slate-400 border-slate-100',
    },
    {
      id: 'titanium-fuselage',
      category: 'hardware',
      tierBadge: 'TITANIUM HARDWARE',
      badgeStyle: 'text-cyan-900 bg-cyan-100/80',
      title: 'Grade 5 Titanium Fuselage',
      tagline: 'CORROSION-IMMUNE',
      description: 'Precision CNC-milled Grade 5 aerospace titanium. Eliminates galvanic corrosion between carbon and aluminum, offering a featherweight 290g profile with 0.014 Cd micro-sleeve.',
      icon: 'hardware',
      specs: [
        { label: 'Dry Weight', value: '290 grams' },
        { label: 'Lengths Available', value: '68cm / 74cm / 80cm' },
        { label: 'Fasteners', value: 'Torx T30 Titanium Grade 5' },
        { label: 'Salt Resistance', value: '100% Lifetime Immunity', highlight: true },
      ],
      windWindow: 'Compatible with all SM Wings',
      price: '$680 USD',
      numericPrice: 680,
      gradientClass: 'bg-cyan-50 border border-cyan-100 text-cyan-700',
      borderClass: 'border-cyan-400 border-cyan-100',
    },
  ];

  filteredProducts(): ProductItem[] {
    const cat = this.activeCategory();
    if (cat === 'all') {
      return this.allProducts;
    }
    return this.allProducts.filter((p) => p.category === cat);
  }
}
