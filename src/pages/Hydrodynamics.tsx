import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useFleet } from '../context/FleetContext';

export const Hydrodynamics: React.FC = () => {
  const fleet = useFleet();
  const [dragSpeed, setDragSpeed] = useState<15 | 20 | 28 | 35>(20);

  const dragChartData = useMemo(() => {
    switch (dragSpeed) {
      case 15:
        return {
          speedLabel: '15 kts (Low Drag Lift Test)',
          swiftMonsterCd: 0.0152,
          swiftMonsterWidth: 12,
          gen2Cd: 0.0215,
          gen2Width: 32,
          firstGenCd: 0.0342,
          firstGenWidth: 56,
          aluminumCd: 0.0512,
          aluminumWidth: 84,
          dragAdvantage: '70% lower drag than aluminum',
        };
      case 28:
        return {
          speedLabel: '28 kts (High Speed Carve Test)',
          swiftMonsterCd: 0.0189,
          swiftMonsterWidth: 16,
          gen2Cd: 0.0284,
          gen2Width: 44,
          firstGenCd: 0.0438,
          firstGenWidth: 70,
          aluminumCd: 0.0685,
          aluminumWidth: 96,
          dragAdvantage: '72% lower drag than aluminum',
        };
      case 35:
        return {
          speedLabel: '35 kts (Terminal Velocity Gale Test)',
          swiftMonsterCd: 0.0218,
          swiftMonsterWidth: 19,
          gen2Cd: 0.0335,
          gen2Width: 52,
          firstGenCd: 0.0521,
          firstGenWidth: 79,
          aluminumCd: 0.0815,
          aluminumWidth: 100,
          dragAdvantage: '73% lower drag than aluminum',
        };
      case 20:
      default:
        return {
          speedLabel: '20 kts (Standard Hydrofoil Cruise Benchmark)',
          swiftMonsterCd: 0.0168,
          swiftMonsterWidth: 14,
          gen2Cd: 0.0242,
          gen2Width: 38,
          firstGenCd: 0.0385,
          firstGenWidth: 62,
          aluminumCd: 0.0590,
          aluminumWidth: 92,
          dragAdvantage: '68% lower drag than aluminum',
        };
    }
  }, [dragSpeed]);

  return (
    <div className="w-full bg-surface pb-20">
      <section className="w-full py-12 lg:py-16 bg-gradient-to-b from-sky-50/80 via-teal-50/40 to-transparent border-b border-teal-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-text-headline font-bold">Hydrodynamics Lab</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-sm text-xs uppercase tracking-widest text-teal-600 font-bold">
                Flow Dynamics &amp; Flume Testing
              </span>
              <h1 className="font-headline-xl text-3xl sm:text-5xl text-text-headline font-bold tracking-tight">
                Hydrodynamic Benchmarks
              </h1>
              <p className="font-body-md text-text-muted leading-relaxed text-sm sm:text-base">
                Computational Fluid Dynamics (CFD) and calibrated 45-meter towing tank flume test data demonstrating zero-compromise lift-to-drag ratios across speeds from 5 to 40 knots.
              </p>
            </div>

            <button
              type="button"
              onClick={fleet.downloadDataset}
              className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-label-md text-xs uppercase font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer self-start md:self-auto">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Raw Towing Dataset (CSV)</span>
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-sky-100 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-50">
              <div>
                <h3 className="font-headline-sm text-xl text-text-headline font-bold">Relative Foil Drag Coefficient (Cd)</h3>
                <span className="font-label-sm text-xs text-text-muted uppercase">Lower Drag = Faster Glide &amp; Perpetual Momentum</span>
              </div>

              <div className="flex items-center gap-1 bg-sky-50 p-1 rounded-xl border border-sky-100">
                <span className="text-[10px] text-text-muted font-mono px-1 font-bold">FLUME VELOCITY:</span>
                {([15, 20, 28, 35] as const).map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    onClick={() => setDragSpeed(spd)}
                    className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                      dragSpeed === spd ? 'bg-teal-500 text-white' : 'text-text-muted hover:text-text-headline'
                    }`}>
                    {spd}kt
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs font-mono text-teal-800 bg-teal-50/70 px-3.5 py-2 rounded-xl border border-teal-100 flex items-center justify-between">
              <span>Test Condition: {dragChartData.speedLabel}</span>
              <span className="font-bold text-teal-700">Flume Water: 20°C Saline Density</span>
            </div>

            <div className="space-y-5 pt-1">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="flex items-center gap-2 text-text-headline font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                    SwiftMonster T1100 Ultra-Slick Profile
                  </span>
                  <span className="font-label-md text-xs font-mono font-bold text-teal-700">
                    Cd {dragChartData.swiftMonsterCd.toFixed(4)} (Benchmark)
                  </span>
                </div>
                <div className="w-full h-8 bg-sky-50 rounded-xl overflow-hidden p-0.5 border border-sky-100/50">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 rounded-lg flex items-center justify-end pr-2 transition-all duration-500 shadow-sm"
                    style={{ width: `${dragChartData.swiftMonsterWidth}%` }}>
                    <span className="text-[10px] font-bold text-white tracking-wide">OPTIMAL</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">Gen-2 High-Modulus Carbon Foils</span>
                  <span className="font-label-md text-xs font-mono text-text-body">
                    Cd {dragChartData.gen2Cd.toFixed(4)} (+44% drag)
                  </span>
                </div>
                <div className="w-full h-8 bg-sky-50 rounded-xl overflow-hidden p-0.5 border border-sky-100/50">
                  <div
                    className="h-full bg-sky-200 rounded-lg transition-all duration-500"
                    style={{ width: `${dragChartData.gen2Width}%` }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">First-Gen Carbon Foils</span>
                  <span className="font-label-md text-xs font-mono text-text-body">
                    Cd {dragChartData.firstGenCd.toFixed(4)} (+129% drag)
                  </span>
                </div>
                <div className="w-full h-8 bg-sky-50 rounded-xl overflow-hidden p-0.5 border border-sky-100/50">
                  <div
                    class="h-full bg-slate-200 rounded-lg transition-all duration-500"
                    style={{ width: `${dragChartData.firstGenWidth}%` }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">Traditional Extruded Aluminum Foils</span>
                  <span className="font-label-md text-xs font-mono text-rose-500 font-semibold">
                    Cd {dragChartData.aluminumCd.toFixed(4)} (+251% drag)
                  </span>
                </div>
                <div className="w-full h-8 bg-sky-50 rounded-xl overflow-hidden p-0.5 border border-sky-100/50">
                  <div
                    className="h-full bg-rose-200 rounded-lg transition-all duration-500"
                    style={{ width: `${dragChartData.aluminumWidth}%` }}></div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-text-muted flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-sky-50">
              <span>Measured in calibrated hydro-flume channel at 20°C saline water.</span>
              <span className="text-teal-700 font-semibold font-mono">SwiftMonster produces {dragChartData.dragAdvantage}</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-sky-100 flex flex-col gap-6">
            <h3 className="font-headline-sm text-xl text-text-headline font-bold">Hydrodynamic Comparison Matrix</h3>

            <div className="flex flex-col gap-3.5 divide-y divide-sky-100">
              <div className="pt-2 flex items-center justify-between">
                <span className="font-body-sm text-sm text-text-body font-medium">Stall Speed (Lift Cutoff)</span>
                <div className="flex items-center gap-3 font-label-sm text-xs">
                  <span className="font-bold text-teal-700 font-mono">6.2 kts</span>
                  <span className="text-text-muted font-mono">vs 11.8 kts alloy</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-body-sm text-sm text-text-body font-medium">Torsional Mast Rigidity</span>
                <div className="flex items-center gap-3 font-label-sm text-xs">
                  <span className="font-bold text-teal-700 font-mono">1.2° / 100Nm</span>
                  <span className="text-text-muted font-mono">vs 4.8° / 100Nm</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-body-sm text-sm text-text-body font-medium">Glide Persistence (Pump)</span>
                <div className="flex items-center gap-3 font-label-sm text-xs">
                  <span className="font-bold text-teal-700 font-mono">48 sec pump loop</span>
                  <span className="text-text-muted font-mono">vs 14 sec avg</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-body-sm text-sm text-text-body font-medium">Anti-Ventilation Coating</span>
                <div className="flex items-center gap-3 font-label-sm text-xs">
                  <span className="font-bold text-teal-700">Hydro-Silica Matte</span>
                  <span className="text-text-muted font-mono">Raw Gelcoat</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-body-sm text-sm text-text-body font-medium">Fuselage Weight</span>
                <div className="flex items-center gap-3 font-label-sm text-xs">
                  <span className="font-bold text-teal-700 font-mono">290g Titanium</span>
                  <span className="text-text-muted font-mono">780g Aluminum</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50/70 to-indigo-50/70 border border-teal-100 rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-teal-800">
                <span className="material-symbols-outlined text-[20px]">description</span>
                <span className="text-xs font-bold uppercase tracking-wider">Research Whitepaper</span>
              </div>
              <p className="font-body-sm text-xs text-text-body">
                "Sub-Cavitation Boundary Layer Control and Dihedral Wing Optimization in High-Aspect Ocean Hydrofoils"
              </p>
              <button
                type="button"
                onClick={() => fleet.openInfo('whitepaper')}
                className="text-xs text-teal-700 font-bold hover:underline text-left cursor-pointer inline-flex items-center gap-1">
                <span>View Full Abstract &amp; Citations</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-teal-600">01 // TOWING FLUME</span>
            <h4 className="text-lg font-bold text-text-headline">45m Hydrodynamic Channel</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Equipped with computer-synchronized towing gantry capable of steady sweeps from 0.5 to 22.0 m/s with micro-strain telemetry.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-indigo-600">02 // PARTICLE VELOCIMETRY</span>
            <h4 className="text-lg font-bold text-text-headline">Stereoscopic PIV Imaging</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Laser sheet illumination captures vortex shed trajectories along the foil tips to maximize aerodynamic recovery and eliminate tip drag.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-rose-600">03 // FIELD VALIDATION</span>
            <h4 className="text-lg font-bold text-text-headline">Open Pacific Gale Runs</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Real-world channel trials in the Molokai Kaiwi Channel and Columbia River Gorge subjected to 35-knot sustained winds and rolling tidal chop.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
