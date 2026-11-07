import React from 'react';
import { Link } from 'react-router-dom';
import { useFleet } from '../context/FleetContext';

export const Creed: React.FC = () => {
  const fleet = useFleet();

  return (
    <div className="w-full bg-surface pb-20">
      <section className="w-full py-12 lg:py-16 bg-gradient-to-b from-sky-50/80 via-teal-50/40 to-transparent border-b border-teal-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-text-headline font-bold">Sea Dragons Creed</span>
          </div>

          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-widest w-fit shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-teal-500">water</span>
              <span>Our Ethos &amp; Heritage</span>
            </div>
            <h1 className="font-display-hero text-4xl sm:text-6xl text-text-headline font-bold tracking-tight">
              We Are Sea Dragons
            </h1>
            <p className="font-body-md text-text-muted leading-relaxed text-base sm:text-lg">
              We are not mere visitors to the sea; we are organisms tuned to its rhythmic frequencies. Hydrofoils grant us hydrodynamic flight across unbroken swells, honoring marine habitats and advancing pristine zero-emission locomotion.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-teal-100/80 flex flex-col items-center text-center gap-6 mb-12">
          {/* Bird of Prey Emblem */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-sky-50 via-teal-50 to-indigo-50 border border-teal-100 p-3 shadow-md flex items-center justify-center">
            <img
              src="/assets/aistudio/Swift_Monster_Icon_b2946b8d.png"
              alt="Bird of Prey ✝ made of Omega and two Mountains (fire / ice)"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-teal-600">The Sacred Emblem &amp; Rhythm</span>
            <span className="text-xs text-text-muted font-mono">Bird of Prey ✝ • Omega • Twin Mountains (Fire &amp; Ice)</span>
          </div>

          <div className="py-4 flex flex-col gap-3 font-headline-sm text-xl sm:text-3xl text-text-headline max-w-2xl border-y border-teal-100/80 w-full">
            <p className="italic text-amber-600 font-semibold drop-shadow-sm">“We live in the ocean, under the sun.”</p>
            <p className="italic text-teal-600 font-semibold drop-shadow-sm">“We play in the ocean, under the kelp forest.”</p>
            <p className="italic text-indigo-600 font-semibold drop-shadow-sm">“We sleep in the ocean, under the stars and the moon.”</p>
          </div>

          <p className="text-text-body text-sm sm:text-base max-w-2xl leading-relaxed">
            The ocean is not a stadium or an obstacle to conquer. It is an immense, breathing fluid continuum. The twin mountain peaks symbolize the dual forces that forge world-class swells: thermal fire and glacial ocean winds. At the epicenter, the Omega-born Bird of Prey dives through the water surface into perpetual hydrodynamic flight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Movement 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 border-t-4 border-amber-400 border-x border-b border-amber-100/40 hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-100 to-orange-100 flex items-center justify-center text-amber-600 shadow-inner">
                <span className="material-symbols-outlined text-[32px]">wb_sunny</span>
              </div>
              <span className="font-label-sm text-xs uppercase tracking-wider text-amber-700 font-bold">
                01. Dawn Patrol &amp; Thermal Energy
              </span>
              <h3 className="font-headline-sm text-2xl text-text-headline font-bold">Live Under the Sun</h3>
              <p className="font-body-sm text-sm text-text-muted leading-relaxed">
                Harnessing radiant thermal winds and morning offshore glass. We test foils when the solar heat engine kickstarts ocean currents, converting solar velocity into frictionless hydrodynamic lift.
              </p>
              <div className="space-y-2 pt-2 text-xs font-mono">
                <div className="flex justify-between border-b border-amber-50 pb-1">
                  <span className="text-slate-400">Solar Thermal Window:</span>
                  <span className="font-bold text-text-headline">06:00 - 10:30 Local</span>
                </div>
                <div className="flex justify-between border-b border-amber-50 pb-1">
                  <span className="text-slate-400">Wind Mechanism:</span>
                  <span className="font-bold text-text-headline">Katabatic / Valley Flow</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Average Thermal Velocity:</span>
                  <span className="font-bold text-amber-700">18 - 24 knots</span>
                </div>
              </div>
            </div>
            <div className="bg-amber-50/60 border border-amber-100/70 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
              <span className="text-text-muted">Solar Index</span>
              <span className="text-amber-700 font-bold">Thermal Ridge Peak</span>
            </div>
          </div>

          {/* Movement 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 border-t-4 border-teal-400 border-x border-b border-teal-100/40 hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-100 to-emerald-100 flex items-center justify-center text-teal-600 shadow-inner">
                <span className="material-symbols-outlined text-[32px]">forest</span>
              </div>
              <span className="font-label-sm text-xs uppercase tracking-wider text-teal-700 font-bold">
                02. Biomimicry &amp; Kelp Flow
              </span>
              <h3 className="font-headline-sm text-2xl text-text-headline font-bold">Play in the Kelp Forest</h3>
              <p className="font-body-sm text-sm text-text-muted leading-relaxed">
                Gliding silently above deep sea kelp canopies. Our leading edges feature tubercle ridges inspired by humpback flippers to carve cleanly through aquatic flora with zero weed snagging and minimal wake disruption.
              </p>
              <div className="space-y-2 pt-2 text-xs font-mono">
                <div className="flex justify-between border-b border-teal-50 pb-1">
                  <span className="text-slate-400">Canopy Biomass Depth:</span>
                  <span className="font-bold text-text-headline">8m - 25m Subsurface</span>
                </div>
                <div className="flex justify-between border-b border-teal-50 pb-1">
                  <span className="text-slate-400">Foil Hydrofoil Wake:</span>
                  <span className="font-bold text-text-headline">&lt; 0.2% Dissipation</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Carbon Sequestration:</span>
                  <span className="font-bold text-teal-700">20x Terrestrial Forest</span>
                </div>
              </div>
            </div>
            <div className="bg-teal-50/60 border border-teal-100/70 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
              <span className="text-text-muted">Guardianship</span>
              <button
                type="button"
                onClick={() => fleet.openInfo('kelp')}
                className="text-teal-700 font-bold hover:underline cursor-pointer flex items-center gap-1">
                <span>1% For Kelp Restoration</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Movement 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 border-t-4 border-indigo-400 border-x border-b border-indigo-100/40 hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 shadow-inner">
                <span className="material-symbols-outlined text-[32px]">bedtime</span>
              </div>
              <span className="font-label-sm text-xs uppercase tracking-wider text-indigo-700 font-bold">
                03. Nocturnal Swell &amp; Tidal Rhythm
              </span>
              <h3 className="font-headline-sm text-2xl text-text-headline font-bold">Sleep Under Stars &amp; Moon</h3>
              <p className="font-body-sm text-sm text-text-muted leading-relaxed">
                Resting on anchorage under celestial navigation after downwind crossings. The moon controls the tidal surges that generate the longest swell lines on earth—nourishing our craft and our spirits.
              </p>
              <div className="space-y-2 pt-2 text-xs font-mono">
                <div className="flex justify-between border-b border-indigo-50 pb-1">
                  <span className="text-slate-400">Gravitational Pull:</span>
                  <span className="font-bold text-text-headline">Lunar Spring Surge</span>
                </div>
                <div className="flex justify-between border-b border-indigo-50 pb-1">
                  <span className="text-slate-400">Navigation Standard:</span>
                  <span className="font-bold text-text-headline">Polynesian Wayfinding</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Swell Grounding:</span>
                  <span className="font-bold text-indigo-700">14-18s Groundswell</span>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50/60 border border-indigo-100/70 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
              <span className="text-text-muted">Tidal Resonance</span>
              <span className="text-indigo-700 font-bold">Full Moon High Tide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-6">
        <div className="bg-gradient-to-r from-teal-900 via-cyan-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/60 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider w-fit">
              <span>Marine Conservation Mandate</span>
            </div>
            <h3 className="font-headline-xl text-3xl sm:text-4xl font-bold">1% For Giant Kelp Forest Rewilding</h3>
            <p className="text-sky-100/80 text-sm sm:text-base leading-relaxed">
              Every SwiftMonster foil sold directly funds the cultivation of kelp spores and the removal of destructive purple urchin barrens across Monterey Bay, the Oregon Coast, and Tasmania. Over 45,000 square meters of underwater forests have been replanted to date.
            </p>
          </div>
          <button
            type="button"
            onClick={() => fleet.openInfo('kelp')}
            className="px-8 py-3.5 rounded-xl bg-teal-400 text-slate-900 font-label-md text-xs uppercase font-bold hover:bg-teal-300 transition-colors shadow-lg whitespace-nowrap cursor-pointer">
            Explore Conservation Report
          </button>
        </div>
      </section>
    </div>
  );
};
