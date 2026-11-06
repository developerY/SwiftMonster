import React from 'react';
import { Link } from 'react-router-dom';

interface TestCenter {
  location: string;
  region: string;
  conditions: string;
  fleetAvailable: string;
  leadAviator: string;
}

const testCenters: TestCenter[] = [
  {
    location: 'Maui North Shore',
    region: 'HAWAII PACIFIC',
    conditions: '2.5m - 4.5m Maliko Gulch swells',
    fleetAvailable: 'Parawing Gen-4, Apex 850 / 1050',
    leadAviator: 'Kai Callahan',
  },
  {
    location: 'The Gorge Hatchery',
    region: 'OREGON / COLUMBIA',
    conditions: '28-35kt Viento river rollers',
    fleetAvailable: 'Complete 2025 Fleet Lineup',
    leadAviator: 'Erik Sörensen',
  },
  {
    location: 'Bloubergstrand Big Bay',
    region: 'CAPE TOWN SOUTH AFRICA',
    conditions: 'Cape Doctor 35kt ocean wind',
    fleetAvailable: 'Kite Foil GT Race, T1100 Masts',
    leadAviator: 'Tariq Vance',
  },
];

export const Community: React.FC = () => {
  return (
    <div className="w-full bg-surface pb-20">
      <section className="w-full py-12 lg:py-16 bg-gradient-to-b from-sky-50/80 via-teal-50/40 to-transparent border-b border-teal-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-text-headline font-bold">Community &amp; Aviators</span>
          </div>

          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-teal-600 font-bold">
              Heavy Water Ocean Network
            </span>
            <h1 className="font-headline-xl text-3xl sm:text-5xl text-text-headline font-bold tracking-tight">
              Ocean Aviators &amp; Test Centers
            </h1>
            <p className="font-body-md text-text-muted leading-relaxed text-sm sm:text-base">
              From the Molokai channel to the Cape Town roaring forties, discover our global test network, world-record ocean downwinders, and dedicated watermen community.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div className="text-center flex flex-col gap-1 max-w-xl mx-auto mb-10">
          <span className="font-label-sm text-xs uppercase tracking-widest text-text-muted font-bold">
            Tested in Heavy Water
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl text-text-headline font-bold">
            Endorsed by World-Class Ocean Aviators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-teal-100/70 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <p className="font-body-md text-text-body italic leading-relaxed text-sm sm:text-base">
              “The Parawing changes downwind paddling forever. I linked 22 kilometers of Maui swells without dropping off foil once. You stash the wing into your waist pouch in 3 seconds.”
            </p>
            <div className="flex items-center gap-3.5 pt-1">
              <img
                className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-teal-200"
                alt="Portrait of Kai Callahan"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8TYkLRJYg0oT6r1R40BDErLiU8rCWFABCDJD6Coh6wgx4q9ihbefDAwHEEP_B0eDIhs11d-2i45k7u0M_ZSb88RA4we0F02KiYhURHXnCmM4H9qLSNT653g4geB_sKUwkz1qgAMrkQ0-sO-Gk0A7V0_bgMPhBv-fP8bGvF1A7yVSoPukZdqsy9YHlBNpJR_K4iAODNJwUvuZZpdkTj9-wVWzr42_dWvzCMY436SE4" />
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-text-headline font-bold">Kai Callahan</span>
                <span className="font-label-sm text-xs text-text-muted">M2O Channel Downwind Specialist</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-indigo-100/70 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <p className="font-body-md text-text-body italic leading-relaxed text-sm sm:text-base">
              “The torsional stiffness of the 92cm HM carbon mast provides razor-sharp control during 30-knot bottom turns. No mast twist, no cavitation hum, just pure acoustic quiet.”
            </p>
            <div className="flex items-center gap-3.5 pt-1">
              <img
                className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-indigo-200"
                alt="Portrait of Dr. Maya Lindqvist"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASkuOxMilpN1U2nLbucIoH_aFXFaT5xt2Z7DP68N8bdQAmz3qSVIYIAWyhMDGNFbJj7M6hgU-3FlUZWuNPCjCjPOFuD6p5MsjU-DyL7c7nSv_CCWkxBg00ibX45siKRyIVGQ1V1DQ_H4uZN-1VfuA-79M3MVoPim0CpVHjalmLvzHguy2gX8-nyoGy2jgtA1SMJ0fItiuGqbQVwENMcLt5w2Kqlqmpwm2ZnNOm2ufR" />
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-text-headline font-bold">Dr. Maya Lindqvist</span>
                <span className="font-label-sm text-xs text-text-muted">Aerodynamics Pilot &amp; Wing Foil Competitor</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-sky-100/70 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <p className="font-body-md text-text-body italic leading-relaxed text-sm sm:text-base">
              “In 38-knot kite racing, standard foils breach or cavitate. SwiftMonster’s titanium nose cone keeps flow attached even when clipping chop at terminal velocity.”
            </p>
            <div className="flex items-center gap-3.5 pt-1">
              <img
                className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-sky-200"
                alt="Portrait of Tariq Vance"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAsUiip56xASlHiJOUxt-kx3ebfzMRN4jBpu6n0w_z88cnDRWha7PCUAfAl3Pv8iS7xWAOgPAxHFHcJ7I-x7J1bm6aRXxYRDsdCE7aa7TRRYNiJ5Lnm13rXp3C34oiGqprfUKTGrPehNRzeLDu2gTrwPENqWHFO6G8xYPTULFHzewDBadcmrLF-iDBQgBzQzsCvi-T-j6yRsUHQzsHg6kjGWgHCfGutuzv2x-IQBN7" />
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-text-headline font-bold">Tariq Vance</span>
                <span className="font-label-sm text-xs text-text-muted">Speed Foil World Cup Contender</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Test Center Network */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-teal-100 flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-teal-600 font-bold">Global Outposts</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-headline">Worldwide Demo &amp; Tuning Centers</h3>
            <p className="text-sm text-text-muted">Test demo wings and consult master shapers at premier oceanic swell corridors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testCenters.map((center) => (
              <div key={center.location} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal-700 bg-teal-100/70 px-2 py-0.5 rounded">
                      {center.region}
                    </span>
                    <span className="material-symbols-outlined text-teal-600 text-[18px]">location_on</span>
                  </div>
                  <h4 className="font-bold text-lg text-text-headline">{center.location}</h4>
                  <p className="text-xs text-text-body font-mono">Conditions: {center.conditions}</p>
                  <p className="text-xs text-text-muted">Test Fleet: {center.fleetAvailable}</p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Lead Aviator:</span>
                  <span className="font-bold text-text-headline">{center.leadAviator}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Ticker */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 py-10 opacity-75">
          <div className="font-label-md text-text-muted text-sm sm:text-base uppercase tracking-wider font-semibold">MOLOKAI 2 OAHU</div>
          <div className="font-label-md text-text-muted text-sm sm:text-base uppercase tracking-wider font-semibold">GORGE DOWNWIND</div>
          <div className="font-label-md text-text-muted text-sm sm:text-base uppercase tracking-wider font-semibold">DEFI DU VENT</div>
          <div className="font-label-md text-text-muted text-sm sm:text-base uppercase tracking-wider font-semibold">HYDROFOIL PRO TOUR</div>
          <div className="font-label-md text-text-muted text-sm sm:text-base uppercase tracking-wider font-semibold">PACIFIC OCEAN LABS</div>
        </div>
      </section>
    </div>
  );
};
