import React from 'react';
import { Link } from 'react-router-dom';
import { useFleet } from '../context/FleetContext';

export const Quiver: React.FC = () => {
  const fleet = useFleet();

  const handleOrderConfiguredBuild = () => {
    const rec = fleet.quiverRecommendation;
    fleet.openPreOrder({
      product: rec.modelName,
      tier: 'CUSTOM QUIVER CONFIG',
      price: rec.estimatedPrice,
      mast: rec.mastLength,
      frontWing: `${rec.frontWingArea} cm²`,
    });
  };

  return (
    <div className="w-full bg-surface pb-20">
      <section className="w-full py-12 lg:py-16 bg-gradient-to-b from-sky-50/80 via-teal-50/40 to-transparent border-b border-teal-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-text-headline font-bold">Quiver Customizer</span>
          </div>

          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-teal-600 font-bold">
              Hydrodynamic Tuning Lab
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-5xl text-text-headline font-bold tracking-tight">
              Fleet Customizer &amp; Quiver Builder
            </h1>
            <p className="font-body-md text-text-muted leading-relaxed text-sm sm:text-base">
              Calculate your exact front wing surface area (cm²), mast length (cm), and foil geometry tailored to your body weight, local wind velocity, and riding discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-14 items-center border border-teal-100">
          <div className="flex-1 w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-headline-sm text-sm text-text-headline font-bold">1. Select Riding Discipline</span>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => fleet.setSelectedDiscipline('parawing')}
                  className={`py-3 px-3 rounded-xl font-label-sm text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    fleet.selectedDiscipline === 'parawing'
                      ? 'border-teal-500 bg-teal-500 text-white shadow-sm'
                      : 'border-sky-100 bg-sky-50 text-text-body hover:bg-sky-100'
                  }`}>
                  <span className="material-symbols-outlined text-[20px]">kitesurfing</span>
                  <span>Parawing</span>
                </button>

                <button
                  type="button"
                  onClick={() => fleet.setSelectedDiscipline('wingfoil')}
                  className={`py-3 px-3 rounded-xl font-label-sm text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    fleet.selectedDiscipline === 'wingfoil'
                      ? 'border-teal-500 bg-teal-500 text-white shadow-sm'
                      : 'border-sky-100 bg-sky-50 text-text-body hover:bg-sky-100'
                  }`}>
                  <span className="material-symbols-outlined text-[20px]">surfing</span>
                  <span>Wing Foil</span>
                </button>

                <button
                  type="button"
                  onClick={() => fleet.setSelectedDiscipline('kitefoil')}
                  className={`py-3 px-3 rounded-xl font-label-sm text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    fleet.selectedDiscipline === 'kitefoil'
                      ? 'border-teal-500 bg-teal-500 text-white shadow-sm'
                      : 'border-sky-100 bg-sky-50 text-text-body hover:bg-sky-100'
                  }`}>
                  <span className="material-symbols-outlined text-[20px]">speed</span>
                  <span>Kite Foil</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex justify-between items-center">
                <span className="font-headline-sm text-sm text-text-headline font-bold">2. Rider Dry Body Weight</span>
                <span className="font-label-lg text-sm text-teal-700 font-bold font-mono bg-teal-50 px-2.5 py-0.5 rounded-lg border border-teal-100">
                  {fleet.quiverRecommendation.weightKg} kg ({fleet.quiverRecommendation.weightLbs} lbs)
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="115"
                value={fleet.riderWeightKg}
                onChange={(e) => fleet.setRiderWeightKg(parseInt(e.target.value, 10))}
                className="w-full accent-teal-500 cursor-pointer h-2 bg-sky-100 rounded-lg appearance-none" />
              <div className="flex justify-between text-xs text-text-muted font-label-sm font-mono">
                <span>50 kg (110 lbs)</span>
                <span>80 kg (176 lbs)</span>
                <span>115 kg (253 lbs)</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex justify-between items-center">
                <span className="font-headline-sm text-sm text-text-headline font-bold">3. Prevailing Wind &amp; Swell Velocity</span>
                <span className="font-label-lg text-sm text-indigo-600 font-bold font-mono bg-indigo-50 px-2.5 py-0.5 rounded-lg border border-indigo-100">
                  {fleet.quiverRecommendation.windKts} kts ({fleet.quiverRecommendation.windCondition})
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="40"
                value={fleet.windSpeedKts}
                onChange={(e) => fleet.setWindSpeedKts(parseInt(e.target.value, 10))}
                className="w-full accent-indigo-500 cursor-pointer h-2 bg-indigo-100 rounded-lg appearance-none" />
              <div className="flex justify-between text-xs text-text-muted font-label-sm font-mono">
                <span>8 kts (Light Glass)</span>
                <span>20 kts (Medium Swell)</span>
                <span>40 kts (Heavy Gale)</span>
              </div>
            </div>

            <div className="bg-teal-50/50 border border-teal-100/70 p-3.5 rounded-xl flex items-center justify-between text-xs text-text-muted">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-teal-600">check_circle</span>
                <span>Includes Toray T1100 Pre-preg Carbon Mast &amp; Titanium Fuselage</span>
              </span>
              <span className="font-bold text-text-headline font-mono">Titanium T30 Fasteners</span>
            </div>
          </div>

          <div className="w-full lg:w-96 bg-gradient-to-b from-sky-50 via-teal-50/40 to-indigo-50/40 border border-teal-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-5 shadow-sm">
            <span className="font-label-sm text-xs uppercase tracking-wider text-teal-800 font-bold">
              Recommended Hydrofoil Setup
            </span>

            <div className="flex flex-col items-center">
              <span className="font-display-hero text-5xl sm:text-6xl text-text-headline leading-none font-bold">
                {fleet.quiverRecommendation.frontWingArea} cm²
              </span>
              <span className="font-label-md text-sm text-teal-700 font-bold mt-2 font-mono">
                {fleet.quiverRecommendation.modelName} • {fleet.quiverRecommendation.mastLength}
              </span>
            </div>

            <div className="w-full bg-white p-3 rounded-xl border border-teal-100 flex justify-between items-center text-xs font-mono shadow-inner">
              <span className="text-text-muted">Projected Glide:</span>
              <span className="text-teal-700 font-bold text-sm">{fleet.quiverRecommendation.glideRating}</span>
            </div>

            <p className="font-body-sm text-xs text-text-muted leading-relaxed">
              {fleet.quiverRecommendation.description}
            </p>

            <button
              type="button"
              onClick={handleOrderConfiguredBuild}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 text-white font-label-md text-xs uppercase tracking-wide text-center font-bold shadow-md hover:shadow-[0_4px_16px_rgba(20,184,166,0.35)] transition-all cursor-pointer">
              Pre-Order This Build (${fleet.quiverRecommendation.estimatedPrice} USD)
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-teal-50 shadow-sm flex flex-col gap-2">
            <h4 className="font-bold text-text-headline text-base">Why Front Wing Area Matters</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Larger surface areas (950-1250cm²) provide early takeoff in low wind and effortless pumping momentum. Smaller areas (600-800cm²) unlock extreme carving agility and top speeds past 35 knots.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-teal-50 shadow-sm flex flex-col gap-2">
            <h4 className="font-bold text-text-headline text-base">Choosing Your Mast Length</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              80cm to 85cm is ideal for rolling ocean swells and downwind parawings. 92cm to 102cm provides maximum lean angle for aggressive race turns and chop clearance in gale conditions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-teal-50 shadow-sm flex flex-col gap-2">
            <h4 className="font-bold text-text-headline text-base">Monocoque Carbon Rigidity</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Toray T1100 fibers ensure virtually zero torsional deflection. When you carve through a bottom turn, 100% of your energy transfers directly to the foil with zero lag.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
