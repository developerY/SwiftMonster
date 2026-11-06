import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFleet } from '../context/FleetContext';

interface TelemetryProfile {
  id: 'hawk' | 'apex' | 'speedgt';
  name: string;
  status: string;
  aspectRatio: string;
  takeoff: string;
  glide: string;
  carbonLayup: string;
  dynamics: string;
  dragMin: string;
  cd: string;
  optimalPercentage: number;
}

const telemetryProfiles: Record<'hawk' | 'apex' | 'speedgt', TelemetryProfile> = {
  hawk: {
    id: 'hawk',
    name: 'PROTOTYPE: HAWK-X 850cm²',
    status: 'STATUS: HIGH-EFFICIENCY GLIDE',
    aspectRatio: '9.8 High-AR',
    takeoff: '7.2 kts early lift',
    glide: '14.2 : 1 Downwind',
    carbonLayup: 'P1 Autoclave Pre-preg',
    dynamics: 'Self-Stabilizing Dihedral',
    dragMin: 'Drag Minimization 98.4%',
    cd: '0.0168 Cd',
    optimalPercentage: 92,
  },
  apex: {
    id: 'apex',
    name: 'PROTOTYPE: APEX-PRO 1050cm²',
    status: 'STATUS: SURF CARVE & POP',
    aspectRatio: '8.9 Mid-High AR',
    takeoff: '6.4 kts early lift',
    glide: '13.8 : 1 Waves',
    carbonLayup: 'Toray M40J Monocoque',
    dynamics: 'Snappy Wingtip Reflex',
    dragMin: 'Drag Minimization 96.8%',
    cd: '0.0185 Cd',
    optimalPercentage: 88,
  },
  speedgt: {
    id: 'speedgt',
    name: 'PROTOTYPE: HYDROSPEED GT 620cm²',
    status: 'STATUS: TERMINAL VELOCITY SPRINT',
    aspectRatio: '10.5 Ultra High-AR',
    takeoff: '8.8 kts speed lift',
    glide: '12.8 : 1 Speed Run',
    carbonLayup: 'T1100 + Grade 5 Titanium',
    dynamics: 'Locked Anhedral Tracking',
    dragMin: 'Drag Minimization 99.2%',
    cd: '0.0138 Cd',
    optimalPercentage: 96,
  },
};

export const Home: React.FC = () => {
  const fleet = useFleet();
  const [selectedProto, setSelectedProto] = useState<'hawk' | 'apex' | 'speedgt'>('hawk');
  const [telemetryRunning, setTelemetryRunning] = useState<boolean>(true);

  const activeTelemetry = telemetryProfiles[selectedProto];

  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-sky-50/70 via-teal-50/40 to-transparent">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-teal-200/25 via-sky-200/25 to-pink-200/20 blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 justify-between">
            {/* Left Copy */}
            <div className="flex flex-col max-w-2xl gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-teal-200/70 shadow-sm backdrop-blur-sm w-fit">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping"></span>
                <span className="font-label-sm text-[11px] tracking-wider uppercase text-teal-800 font-semibold bg-gradient-to-r from-teal-700 via-sky-700 to-indigo-700 bg-clip-text text-transparent">
                  ⚡ NEXT-GEN HYDROFOIL AERODYNAMICS — 2025 FLEET REVEAL
                </span>
              </div>

              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-[58px] text-text-headline tracking-tight leading-tight lg:leading-[1.1] font-bold">
                Unleash <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">Monstrous Glide</span> Across Every Swell
              </h1>

              <p className="font-body-lg text-base sm:text-lg text-text-body max-w-xl font-normal leading-relaxed">
                Engineered for extreme hydrodynamic efficiency, effortless lift, and perpetual momentum. SwiftMonster researches and builds world-class foil equipment born from open-ocean swell.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 text-white font-label-lg text-xs uppercase tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(20,184,166,0.35)] shadow-md inline-flex items-center gap-2 font-bold">
                  <span>Explore Gear Fleet</span>
                  <span className="material-symbols-outlined text-[19px]">surfing</span>
                </Link>

                <Link
                  to="/hydrodynamics"
                  className="px-6 py-3.5 rounded-xl bg-white/85 border border-teal-200/80 text-teal-900 font-label-lg text-xs uppercase tracking-wide transition-all duration-200 hover:bg-white hover:border-teal-300 hover:shadow-sm inline-flex items-center gap-2 font-semibold backdrop-blur-sm">
                  <span>Hydrodynamic Benchmarks / Lift Data</span>
                  <span className="material-symbols-outlined text-[19px] text-teal-600">query_stats</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-2 text-text-muted font-label-sm text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-teal-500 text-[18px]">verified</span>
                  <span className="text-teal-900/85 font-medium">Toray T1100 HM High-Modulus Carbon</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-cyan-500 text-[18px]">air</span>
                  <span className="text-teal-900/85 font-medium">Tested in 35kt Pacific Gale Swell</span>
                </div>
              </div>
            </div>

            {/* Right: Console Preview */}
            <div className="w-full lg:max-w-xl flex flex-col">
              <div className="rounded-2xl bg-[#09182b] border border-cyan-900/60 shadow-[0_12px_40px_rgba(8,32,50,0.25)] p-5 sm:p-6 flex flex-col gap-4 text-sky-100">
                <div className="flex items-center justify-between pb-3 border-b border-cyan-900/50">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400/90 inline-block shadow-[0_0_8px_rgba(251,113,133,0.6)]"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-300/90 inline-block shadow-[0_0_8px_rgba(252,211,77,0.6)]"></span>
                    <span className="w-3 h-3 rounded-full bg-teal-400 inline-block shadow-[0_0_8px_rgba(45,212,191,0.7)]"></span>
                    <span className="font-label-sm text-xs text-cyan-200/90 ml-1.5 tracking-wider font-mono">
                      SWIFTMONSTER LABS // FLIGHT AERO-TELEMETRY
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTelemetryRunning(!telemetryRunning)}
                    className="font-label-sm px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 font-mono text-[10px] hover:bg-teal-900 transition-colors flex items-center gap-1 cursor-pointer">
                    <span className={`w-1.5 h-1.5 rounded-full ${telemetryRunning ? 'bg-teal-400 animate-pulse' : 'bg-slate-500'}`}></span>
                    <span>{telemetryRunning ? 'ACTIVE SENSOR' : 'PAUSED'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-1 p-1 bg-cyan-950/60 rounded-xl border border-cyan-800/40">
                  {(['hawk', 'apex', 'speedgt'] as const).map((proto) => (
                    <button
                      key={proto}
                      type="button"
                      onClick={() => setSelectedProto(proto)}
                      className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                        selectedProto === proto
                          ? 'bg-teal-500 text-white shadow-sm'
                          : 'text-cyan-300 hover:text-white'
                      }`}>
                      {proto === 'hawk' ? 'Hawk-X 850' : proto === 'apex' ? 'Apex 1050' : 'SpeedGT 620'}
                    </button>
                  ))}
                </div>

                <div className="font-label-md space-y-2.5">
                  <div className="flex items-center justify-between text-sky-200/90 bg-cyan-950/40 border border-cyan-800/30 p-2.5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-300 font-mono font-bold">&gt;&gt;</span>
                      <span className="text-white font-mono text-xs sm:text-sm tracking-wide font-semibold">{activeTelemetry.name}</span>
                    </div>
                    <span className="text-[11px] text-cyan-300 font-mono bg-cyan-900/60 px-2 py-0.5 rounded border border-cyan-700/40">
                      {activeTelemetry.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="bg-cyan-950/30 border border-cyan-900/40 p-2.5 rounded-xl flex flex-col gap-0.5">
                      <span className="text-slate-400 text-[11px]">Aspect Ratio (AR)</span>
                      <span className="text-teal-300 font-bold text-base">{activeTelemetry.aspectRatio}</span>
                    </div>
                    <div className="bg-cyan-950/30 border border-cyan-900/40 p-2.5 rounded-xl flex flex-col gap-0.5">
                      <span className="text-slate-400 text-[11px]">Takeoff Threshold</span>
                      <span className="text-sky-200 font-bold text-base">{activeTelemetry.takeoff}</span>
                    </div>
                    <div className="bg-cyan-950/30 border border-cyan-900/40 p-2.5 rounded-xl flex flex-col gap-0.5">
                      <span className="text-slate-400 text-[11px]">Glide Ratio (L/D)</span>
                      <span className="text-indigo-300 font-bold text-base">{activeTelemetry.glide}</span>
                    </div>
                    <div className="bg-cyan-950/30 border border-cyan-900/40 p-2.5 rounded-xl flex flex-col gap-0.5">
                      <span className="text-slate-400 text-[11px]">Carbon Layup</span>
                      <span className="text-pink-200 font-bold text-base">{activeTelemetry.carbonLayup}</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-cyan-950/30 border border-cyan-900/40 p-3 text-sky-100 flex flex-col gap-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Yaw / Roll Dynamics:</span>
                      <span className="text-teal-300 font-mono font-semibold">{activeTelemetry.dynamics}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Live Buoy Swell Telemetry:</span>
                      <span className="text-cyan-200 font-mono font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                        <span>{fleet.swellHeightMeters}m @ {fleet.swellPeriodSec}s Period (Open Ocean)</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                          style={{ width: `${activeTelemetry.optimalPercentage}%` }}></div>
                      </div>
                      <span className="text-teal-300 font-semibold font-mono text-[11px]">OPTIMAL</span>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-950/40 border border-teal-500/20 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-bounce"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    </div>
                    <span className="font-label-sm text-xs text-teal-300 font-medium">
                      Sea Dragon Hydro-Sensor Matrix: {activeTelemetry.dragMin}
                    </span>
                  </div>
                  <span className="text-xs text-sky-300/80 font-mono font-bold">{activeTelemetry.cd}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 STATS STRIP */}
      <section className="w-full bg-gradient-to-r from-teal-50/50 via-sky-50/40 to-indigo-50/50 py-8 border-y border-teal-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm border-t-2 border-teal-400 flex flex-col gap-1 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs uppercase text-text-muted font-bold tracking-wider">Takeoff Threshold</span>
                <span className="material-symbols-outlined text-teal-600 text-[20px]">flight_takeoff</span>
              </div>
              <span className="font-headline-lg text-2xl sm:text-3xl text-teal-700 tracking-tight font-bold">6.8 kts</span>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                <span>Sub-planing early lift profile</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border-t-2 border-indigo-400 flex flex-col gap-1 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs uppercase text-text-muted font-bold tracking-wider">Glide Ratio</span>
                <span className="material-symbols-outlined text-indigo-500 text-[20px]">air</span>
              </div>
              <span className="font-headline-lg text-2xl sm:text-3xl text-indigo-600 tracking-tight font-bold">14.8 : 1</span>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                <span>Uncompromised downwind pump</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border-t-2 border-rose-400 flex flex-col gap-1 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs uppercase text-text-muted font-bold tracking-wider">Pre-preg HM Carbon</span>
                <span className="material-symbols-outlined text-rose-500 text-[20px]">layers</span>
              </div>
              <span className="font-headline-lg text-2xl sm:text-3xl text-text-headline tracking-tight font-bold">T1100</span>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span>Aero-grade torsional stiffness</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border-t-2 border-cyan-400 flex flex-col gap-1 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs uppercase text-text-muted font-bold tracking-wider">Speed Record</span>
                <span className="material-symbols-outlined text-cyan-600 text-[20px]">speed</span>
              </div>
              <span className="font-headline-lg text-2xl sm:text-3xl text-cyan-700 tracking-tight font-bold">38.4 kts</span>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>GPS audited open-ocean run</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET TEASER */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1 max-w-xl">
              <span className="font-label-sm text-xs uppercase tracking-widest text-teal-600 font-bold">2025 Fleet Architecture</span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-text-headline font-bold">The Three Disciplines</h2>
              <p className="font-body-md text-text-muted">Engineered for pure flow across open oceans, reef passes, and high-velocity channels.</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 font-label-md text-xs uppercase font-bold text-teal-700 hover:text-teal-900 group">
              <span>Explore Complete Fleet Specs</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-teal-400 border-x border-b border-teal-50 flex flex-col justify-between gap-5 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <span className="font-label-sm text-xs font-bold text-teal-900 bg-teal-100/80 px-2 py-0.5 rounded w-fit">TIER 01</span>
                <h3 className="font-headline-md text-xl text-text-headline font-bold">Parawing</h3>
                <p className="font-body-sm text-sm text-text-muted">Boomless, waist-packable downwind propulsion for effortless ocean swell linkage.</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-teal-50">
                <span className="font-mono text-xs text-teal-700 font-bold">$1,299 USD</span>
                <button
                  type="button"
                  onClick={() => fleet.openPreOrder({ product: 'Parawing Gen-4 Complete', tier: 'FLEET TIER 01', price: 1299 })}
                  className="text-xs uppercase font-bold text-teal-600 hover:underline cursor-pointer">
                  Configure &rarr;
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-indigo-400 border-x border-b border-indigo-50 flex flex-col justify-between gap-5 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <span className="font-label-sm text-xs font-bold text-indigo-900 bg-indigo-100/80 px-2 py-0.5 rounded w-fit">TIER 02</span>
                <h3 className="font-headline-md text-xl text-text-headline font-bold">Wing Foil</h3>
                <p className="font-body-sm text-sm text-text-muted">High-aspect dihedral wings with ultra-stiff Toray M40J monocoque carbon masts.</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-indigo-50">
                <span className="font-mono text-xs text-indigo-700 font-bold">$2,450 Full Foil</span>
                <button
                  type="button"
                  onClick={() => fleet.openPreOrder({ product: 'Wing Foil Pro Complete', tier: 'FLEET TIER 02', price: 2450 })}
                  className="text-xs uppercase font-bold text-indigo-600 hover:underline cursor-pointer">
                  Configure &rarr;
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-sky-400 border-x border-b border-sky-50 flex flex-col justify-between gap-5 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <span className="font-label-sm text-xs font-bold text-sky-900 bg-sky-100/80 px-2 py-0.5 rounded w-fit">TIER 03</span>
                <h3 className="font-headline-md text-xl text-text-headline font-bold">Kite Foil</h3>
                <p className="font-body-sm text-sm text-text-muted">Race-winning titanium micro-sleeve fuselages reaching 38.4 kts with zero cavitation.</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-sky-50">
                <span className="font-mono text-xs text-sky-800 font-bold">$2,890 USD</span>
                <button
                  type="button"
                  onClick={() => fleet.openPreOrder({ product: 'Kite Foil GT Race Set', tier: 'FLEET TIER 03', price: 2890 })}
                  className="text-xs uppercase font-bold text-sky-600 hover:underline cursor-pointer">
                  Configure &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREED TEASER */}
      <section className="w-full py-16 bg-gradient-to-b from-sky-50/60 via-teal-50/30 to-violet-50/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col items-center text-center gap-6">
          <span className="font-label-sm text-xs uppercase tracking-widest text-teal-800 font-bold px-3 py-1 bg-white rounded-full border border-teal-200">
            Our Heritage &amp; Ethos
          </span>
          <h2 className="font-display-hero text-3xl sm:text-5xl text-text-headline font-bold">We Are Sea Dragons</h2>

          <div className="py-3 flex flex-col gap-2 font-headline-sm text-lg sm:text-xl text-text-headline max-w-2xl border-y border-teal-100/80 w-full">
            <p className="italic text-amber-600 font-semibold">“We live in the ocean, under the sun.”</p>
            <p className="italic text-teal-600 font-semibold">“We play in the ocean, under the kelp forest.”</p>
            <p className="italic text-indigo-600 font-semibold">“We sleep in the ocean, under the stars and the moon.”</p>
          </div>

          <p className="font-body-md text-text-body max-w-2xl leading-relaxed text-sm sm:text-base">
            We honor the marine ecosystems that sustain our flight. Through 1% for Kelp Restoration and biomimetic hydrodynamic design, every ride champions ocean preservation.
          </p>

          <Link
            to="/creed"
            className="px-6 py-3 rounded-xl bg-white border border-teal-200 text-teal-900 font-label-md text-xs uppercase font-bold hover:bg-teal-50 transition-colors shadow-sm inline-flex items-center gap-2">
            <span>Read the Full Creed &amp; Conservation Pledge</span>
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="bg-gradient-to-tr from-[#0a192f] via-[#0f2444] to-[#122e54] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-cyan-800/40 relative overflow-hidden">
            <div className="flex flex-col gap-3 max-w-2xl relative z-10">
              <span className="text-xs uppercase tracking-wider text-teal-300 font-mono font-bold">Precision Foil Engineering</span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-white font-bold">Ready to Calculate Your Exact Foil Wing?</h2>
              <p className="text-sky-100/80 text-sm sm:text-base leading-relaxed">
                Use the Quiver Tool to compute your optimal wing surface area, mast stiffness, and takeoff threshold based on your exact body weight and local swell conditions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0 relative z-10">
              <Link
                to="/quiver"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 text-slate-900 font-label-lg text-xs uppercase font-bold text-center shadow-lg hover:shadow-xl transition-all">
                Launch Quiver Calculator
              </Link>
              <Link
                to="/hydrodynamics"
                className="px-8 py-3.5 rounded-xl bg-white/10 border border-cyan-300/30 text-white font-label-lg text-xs uppercase font-semibold text-center hover:bg-white/20 transition-all backdrop-blur-sm">
                View Hydrodynamics Lab
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
