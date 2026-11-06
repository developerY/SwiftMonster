import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFleet } from '../context/FleetContext';

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

const allProducts: ProductItem[] = [
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

export const Products: React.FC = () => {
  const fleet = useFleet();
  const [activeCategory, setActiveCategory] = useState<'all' | 'parawing' | 'wingfoil' | 'kitefoil' | 'hardware'>('all');

  const filtered = activeCategory === 'all'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-surface pb-20">
      <section className="w-full py-12 lg:py-16 bg-gradient-to-b from-sky-50/80 via-teal-50/40 to-transparent border-b border-teal-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-text-headline font-bold">Fleet Lineup</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-xs uppercase tracking-widest text-teal-600 font-bold">
                Aerospace Hydrofoil Engineering
              </span>
              <h1 className="font-headline-xl text-3xl sm:text-5xl text-text-headline font-bold tracking-tight">
                2025 Hydrofoil Fleet
              </h1>
              <p className="font-body-md text-text-muted leading-relaxed text-sm sm:text-base">
                Explore our world-class lineup of ultralight packable downwind parawings, high-aspect dihedral wing foils, and race-winning kite foils built with Toray T1100 HM carbon.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-teal-100 shadow-sm">
              {(['all', 'parawing', 'wingfoil', 'kitefoil', 'hardware'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat ? 'bg-teal-500 text-white' : 'text-text-muted hover:text-text-headline'
                  }`}>
                  {cat === 'all' ? 'All Fleet' : cat === 'parawing' ? 'Parawing' : cat === 'wingfoil' ? 'Wing Foil' : cat === 'kitefoil' ? 'Kite Foil' : 'Masts & Titanium'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between gap-6 transition-all hover:-translate-y-1.5 hover:shadow-xl border-t-4 border-x border-b ${item.borderClass}`}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className={`font-label-sm text-xs font-bold px-2.5 py-1 rounded-md tracking-wider ${item.badgeStyle}`}>
                    {{ ...item }.tierBadge}
                  </span>
                  <span className="font-label-sm text-xs text-text-muted font-bold">{item.tagline}</span>
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mt-1 ${item.gradientClass}`}>
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>

                <h3 className="font-headline-md text-2xl text-text-headline font-bold">{item.title}</h3>
                <p className="font-body-sm text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2 text-xs font-mono">
                  {item.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between text-text-body border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">{spec.label}</span>
                      <span className={`font-bold text-text-headline ${spec.highlight ? 'text-teal-600' : ''}`}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <div className="bg-slate-50 border border-slate-200/60 p-3 rounded-xl flex items-center justify-between font-label-sm text-xs">
                  <span className="text-text-muted">{item.windWindow}</span>
                  <span className="text-teal-800 font-bold text-sm">{item.price}</span>
                </div>

                <button
                  type="button"
                  onClick={() => fleet.openPreOrder({ product: item.title, tier: item.tierBadge, price: item.numericPrice })}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 text-white font-label-md text-xs uppercase tracking-wider text-center font-bold hover:shadow-[0_4px_16px_rgba(20,184,166,0.35)] transition-all cursor-pointer">
                  Configure &amp; Pre-Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-6">
        <div className="w-full bg-gradient-to-r from-white via-sky-50/40 to-teal-50/40 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 justify-between border border-teal-100/80">
          <div className="flex flex-col gap-1.5 max-w-lg">
            <span className="font-label-sm text-xs text-teal-600 font-bold uppercase tracking-wider">
              Marine Materials Science
            </span>
            <h4 className="font-headline-md text-xl sm:text-2xl text-text-headline font-bold">
              Toray T1100 Aero Pre-Preg &amp; Grade 5 Titanium
            </h4>
            <p className="font-body-sm text-sm text-text-muted">
              Direct autoclave curing at 7 bars creates void-free solid composite layers immune to salt crystallization, torsional flex, and high-load fatigue.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-cyan-100 min-w-[120px]">
              <span className="font-label-sm text-[11px] text-text-muted font-bold">HAWAII PACIFIC</span>
              <span className="font-headline-sm text-lg text-cyan-600 font-bold">3.4m Swell</span>
            </div>
            <div className="hidden sm:block w-6 h-0.5 bg-gradient-to-r from-cyan-200 to-teal-200"></div>
            <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-teal-100 min-w-[120px]">
              <span class="font-label-sm text-[11px] text-text-muted font-bold">HOOD RIVER</span>
              <span className="font-headline-sm text-lg text-teal-600 font-bold">32kt Thermal</span>
            </div>
            <div className="hidden sm:block w-6 h-0.5 bg-gradient-to-r from-teal-200 to-indigo-200"></div>
            <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-indigo-100 min-w-[120px]">
              <span className="font-label-sm text-[11px] text-text-muted font-bold">CAPE TOWN</span>
              <span className="font-headline-sm text-lg text-indigo-600 font-bold">38kt Gusts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
