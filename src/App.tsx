import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import { FleetProvider, useFleet } from './context/FleetContext';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Hydrodynamics } from './pages/Hydrodynamics';
import { Creed } from './pages/Creed';
import { Quiver } from './pages/Quiver';
import { Community } from './pages/Community';

const AppLayout: React.FC = () => {
  const fleet = useFleet();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState<boolean>(false);

  // Pre-Order Modal Form State
  const [customerName, setCustomerName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [shippingCountry, setShippingCountry] = useState<string>('United States');
  const [notes, setNotes] = useState<string>('');
  const [preOrderSubmitted, setPreOrderSubmitted] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});

  // Dispatch Newsletter State
  const [dispatchEmail, setDispatchEmail] = useState<string>('');
  const [dispatchSubmitted, setDispatchSubmitted] = useState<boolean>(false);
  const [dispatchError, setDispatchError] = useState<string>('');

  const handlePreOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; email?: string } = {};
    if (!customerName.trim() || customerName.trim().length < 2) {
      errors.name = 'Please enter your name.';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setPreOrderSubmitted(true);
  };

  const handleDispatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatchEmail.trim() || !/\S+@\S+\.\S+/.test(dispatchEmail)) {
      setDispatchError('Please enter a valid email address.');
      return;
    }
    setDispatchError('');
    setDispatchSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-text-body font-sans">
      {/* FIXED NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-teal-100/70 shadow-[0_4px_25px_rgba(35,116,140,0.06)]">
        <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between gap-6">
          
          {/* Brand */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-teal-300 to-indigo-300 p-[1.5px] shadow-sm transition-transform group-hover:scale-105">
              <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-teal-600 font-black text-xl shadow-inner">
                ⚡
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg uppercase text-text-headline tracking-tight font-extrabold bg-gradient-to-r from-teal-700 via-cyan-700 to-indigo-700 bg-clip-text text-transparent">
                SWIFTMONSTER
              </span>
              <span className="font-label-sm text-[10px] text-teal-600 uppercase tracking-widest font-semibold hidden sm:inline">
                Oceanic Soft Pastel Lab
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all font-label-md ${
                  isActive ? 'bg-teal-50/80 text-teal-800 font-bold' : 'text-text-headline hover:text-teal-700 hover:bg-sky-50'
                }`
              }>
              Overview
            </NavLink>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold text-text-headline hover:text-teal-700 hover:bg-sky-50 transition-all font-label-md flex items-center gap-1 focus:outline-none cursor-pointer ${
                  productsDropdownOpen ? 'bg-teal-50' : ''
                }`}
                aria-haspopup="true"
                aria-expanded={productsDropdownOpen}>
                <span>Fleet Lineup</span>
                <span className={`material-symbols-outlined text-[16px] text-teal-500 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-sky-100 flex flex-col gap-1 z-50">
                  <Link
                    to="/products"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="px-3.5 py-2 rounded-xl hover:bg-teal-50 font-label-md text-text-headline flex items-center justify-between transition-colors border-b border-teal-50 pb-2 mb-1">
                    <span className="font-bold text-teal-800">All Fleet Overview</span>
                    <span className="text-xs text-teal-600 font-mono">&rarr;</span>
                  </Link>
                  <Link
                    to="/products"
                    onClick={() => {
                      setProductsDropdownOpen(false);
                      fleet.setSelectedDiscipline('parawing');
                    }}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-indigo-50 font-label-md text-text-headline flex items-center justify-between transition-colors">
                    <span className="font-medium">Parawing</span>
                    <span className="text-[11px] text-teal-700 font-mono bg-teal-100/70 px-2 py-0.5 rounded-full font-bold">GEN-4</span>
                  </Link>
                  <Link
                    to="/products"
                    onClick={() => {
                      setProductsDropdownOpen(false);
                      fleet.setSelectedDiscipline('wingfoil');
                    }}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-indigo-50 font-label-md text-text-headline flex items-center justify-between transition-colors">
                    <span className="font-medium">Wing Foil</span>
                    <span className="text-[11px] text-indigo-700 font-mono bg-indigo-100/70 px-2 py-0.5 rounded-full font-bold">HM CARBON</span>
                  </Link>
                  <Link
                    to="/products"
                    onClick={() => {
                      setProductsDropdownOpen(false);
                      fleet.setSelectedDiscipline('kitefoil');
                    }}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-indigo-50 font-label-md text-text-headline flex items-center justify-between transition-colors">
                    <span className="font-medium">Kite Foil</span>
                    <span className="text-[11px] text-rose-700 font-mono bg-rose-100/70 px-2 py-0.5 rounded-full font-bold">38+ KTS</span>
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/hydrodynamics"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all font-label-md ${
                  isActive ? 'bg-teal-50/80 text-teal-800 font-bold' : 'text-text-headline hover:text-teal-700 hover:bg-sky-50'
                }`
              }>
              Hydrodynamics Lab
            </NavLink>

            <NavLink
              to="/creed"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all font-label-md ${
                  isActive ? 'bg-teal-50/80 text-teal-800 font-bold' : 'text-text-headline hover:text-teal-700 hover:bg-sky-50'
                }`
              }>
              Sea Dragons Creed
            </NavLink>

            <NavLink
              to="/quiver"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all font-label-md ${
                  isActive ? 'bg-teal-50/80 text-teal-800 font-bold' : 'text-text-headline hover:text-teal-700 hover:bg-sky-50'
                }`
              }>
              Quiver Calculator
            </NavLink>

            <NavLink
              to="/community"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all font-label-md ${
                  isActive ? 'bg-teal-50/80 text-teal-800 font-bold' : 'text-text-headline hover:text-teal-700 hover:bg-sky-50'
                }`
              }>
              Community &amp; Test Centers
            </NavLink>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/quiver"
              className="hidden sm:inline-flex items-center justify-center font-label-md text-xs uppercase px-3.5 py-2 rounded-xl text-teal-900 bg-sky-50 border border-teal-200/80 hover:bg-white hover:border-teal-300 hover:shadow-sm transition-all font-semibold">
              Quiver Tool
            </Link>

            <button
              type="button"
              onClick={() => fleet.openPreOrder()}
              className="inline-flex items-center justify-center font-label-md text-xs uppercase px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 text-white font-bold transition-all duration-300 hover:shadow-[0_4px_16px_rgba(20,184,166,0.35)] hover:-translate-y-0.5 cursor-pointer">
              Order Gear
            </button>

            <div
              title={`Live Buoy Telemetry: ${fleet.swellHeightMeters}m @ ${fleet.swellPeriodSec}s`}
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-100 to-sky-100 border border-teal-200/60 flex items-center justify-center text-teal-700 shadow-sm cursor-help">
              <span className="material-symbols-outlined text-[19px]">waves</span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-text-headline hover:bg-sky-50 border border-teal-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu">
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Flyout */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-teal-100 px-6 py-5 flex flex-col gap-4 shadow-xl">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-[10px] text-teal-700 uppercase tracking-widest font-bold">Navigation</span>
              <div className="flex flex-col gap-1.5 text-sm font-semibold">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-sky-50 text-text-headline">
                  Overview / Home
                </Link>
                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-sky-50 text-text-headline">
                  Fleet Lineup (Parawing, Wing Foil, Kite Foil)
                </Link>
                <Link
                  to="/hydrodynamics"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-sky-50 text-text-headline">
                  Hydrodynamics Lab &amp; Flume Benchmarks
                </Link>
                <Link
                  to="/creed"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-sky-50 text-text-headline">
                  Sea Dragons Creed &amp; Conservation
                </Link>
                <Link
                  to="/quiver"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-sky-50 text-text-headline">
                  Quiver Tuner &amp; Calculator
                </Link>
                <Link
                  to="/community"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-sky-50 text-text-headline">
                  Community &amp; Test Centers
                </Link>
              </div>
            </div>

            <div className="pt-2 border-t border-teal-50 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  fleet.openPreOrder();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-label-md text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer">
                Order 2025 Fleet Gear
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN VIEWPORT */}
      <main className="w-full pt-20 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/hydrodynamics" element={<Hydrodynamics />} />
          <Route path="/creed" element={<Creed />} />
          <Route path="/quiver" element={<Quiver />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* UNIVERSAL FOOTER */}
      <footer className="w-full bg-gradient-to-b from-sky-50/50 to-teal-50/70 border-t border-teal-100/70">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-teal-300 to-indigo-300 p-[1.5px] shadow-sm">
                  <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-teal-600 font-black text-xl shadow-inner">
                    ⚡
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-lg uppercase text-text-headline tracking-tight font-extrabold bg-gradient-to-r from-teal-700 to-indigo-700 bg-clip-text text-transparent">
                    SWIFTMONSTER
                  </span>
                  <span className="font-label-sm text-[10px] text-teal-600 uppercase tracking-widest font-semibold">
                    Sea Dragons Marine Labs
                  </span>
                </div>
              </div>

              <p className="font-body-sm text-sm text-text-muted max-w-sm leading-relaxed">
                High-performance hydrofoil engineering, downwind parawings, and aerospace composite hardware born from deep Pacific ocean swells.
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200 text-teal-800 w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span className="font-label-sm text-xs uppercase tracking-wider font-semibold">
                  Ocean Test Lab: Swell Active ({fleet.swellHeightMeters}m @ {fleet.swellPeriodSec}s)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-label-md text-xs uppercase text-text-headline tracking-wider font-bold">Hydrofoil Fleet</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="/products" onClick={() => fleet.setSelectedDiscipline('parawing')} className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Parawing Gen-4
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={() => fleet.setSelectedDiscipline('wingfoil')} className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Wing Foil Pro Complete
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={() => fleet.setSelectedDiscipline('kitefoil')} className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Kite Foil GT Race
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Toray T1100 Carbon Masts
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Titanium Fuselages
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-label-md text-xs uppercase text-text-headline tracking-wider font-bold">Pages &amp; R&amp;D</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="/creed" className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Sea Dragons Creed
                  </Link>
                </li>
                <li>
                  <Link to="/hydrodynamics" className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Hydrodynamics Lab &amp; Flume
                  </Link>
                </li>
                <li>
                  <Link to="/quiver" className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Quiver Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors">
                    Global Test Center Network
                  </Link>
                </li>
                <li>
                  <button type="button" onClick={() => fleet.openInfo('kelp')} className="font-body-sm text-sm text-text-muted hover:text-teal-700 transition-colors text-left cursor-pointer">
                    Marine Conservation Pledge
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-label-md text-xs uppercase text-text-headline tracking-wider font-bold">Swell Dispatch</h4>
              <p className="font-body-sm text-sm text-text-muted">
                Receive live swell telemetry, equipment drops, and hydrodynamic research memos.
              </p>

              {!dispatchSubmitted ? (
                <form onSubmit={handleDispatchSubmit} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={dispatchEmail}
                    onChange={(e) => setDispatchEmail(e.target.value)}
                    placeholder="waterman@ocean.org"
                    className="w-full px-4 py-2.5 rounded-xl bg-white text-text-headline font-body-sm text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 border border-teal-100 shadow-sm" />
                  {dispatchError && (
                    <span className="text-xs text-rose-500 font-medium">{dispatchError}</span>
                  )}
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-label-md text-xs uppercase hover:shadow-[0_4px_16px_rgba(20,184,166,0.35)] transition-all font-bold cursor-pointer">
                    Join Sea Dragons
                  </button>
                </form>
              ) : (
                <div className="bg-teal-50 border border-teal-200 p-3 rounded-xl flex flex-col gap-1 text-teal-900">
                  <span className="text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-teal-600">verified</span>
                    Welcome to the Swell Matrix!
                  </span>
                  <p className="text-xs text-teal-700">Check your inbox for the latest Pacific telemetry memo.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setDispatchSubmitted(false);
                      setDispatchEmail('');
                    }}
                    className="text-[11px] text-teal-800 underline text-left mt-1 cursor-pointer">
                    Add another email
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-xs text-text-muted border-t border-teal-100/70">
            <p>© 2025 SwiftMonster Hydrofoils. Sea Dragons Marine Labs Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button type="button" onClick={() => fleet.openInfo('warranty')} className="hover:text-teal-700 transition-colors cursor-pointer">
                Gear Warranty
              </button>
              <button type="button" onClick={() => fleet.openInfo('safety')} className="hover:text-teal-700 transition-colors cursor-pointer">
                Safety Protocol
              </button>
              <button type="button" onClick={() => fleet.openInfo('kelp')} className="hover:text-teal-700 transition-colors cursor-pointer">
                Kelp Conservation Fund
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* UNIVERSAL PRE-ORDER MODAL */}
      {fleet.isPreOrderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-teal-100 flex flex-col gap-5 relative">
            <button
              type="button"
              onClick={() => {
                fleet.closePreOrder();
                setPreOrderSubmitted(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>

            <div className="flex flex-col gap-1 pr-8">
              <span className="font-label-sm text-xs font-bold text-teal-700 tracking-wider uppercase">
                {fleet.preOrderConfig.tier}
              </span>
              <h3 className="font-headline-md text-2xl text-text-headline font-bold">
                Configure {fleet.preOrderConfig.product}
              </h3>
              <p className="font-body-sm text-xs text-text-muted">
                Lock in your 2025 factory build slot with expedited sea freight delivery.
              </p>
            </div>

            {!preOrderSubmitted ? (
              <>
                <div className="bg-gradient-to-r from-teal-50/70 to-indigo-50/70 p-3.5 rounded-xl border border-teal-100 flex flex-col gap-1.5 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Setup:</span>
                    <span className="font-bold text-text-headline">{fleet.preOrderConfig.product}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Front Wing:</span>
                    <span className="font-bold text-teal-700">{fleet.preOrderConfig.frontWing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Mast &amp; Hardware:</span>
                    <span className="font-bold text-indigo-700">{fleet.preOrderConfig.mast}</span>
                  </div>
                  <div className="flex justify-between border-t border-teal-100/80 pt-1.5 mt-0.5">
                    <span className="text-text-headline font-bold">Total Estimated:</span>
                    <span className="text-base font-bold text-teal-800">${fleet.preOrderConfig.price} USD</span>
                  </div>
                </div>

                <form onSubmit={handlePreOrderSubmit} className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="customerName" className="font-label-sm text-xs text-text-headline font-bold">Full Name</label>
                    <input
                      id="customerName"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Kai Callahan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400" />
                    {formErrors.name && (
                      <span className="text-[11px] text-rose-500 font-medium">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="customerEmail" className="font-label-sm text-xs text-text-headline font-bold">Email Address</label>
                    <input
                      id="customerEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="waterman@ocean.org"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400" />
                    {formErrors.email && (
                      <span className="text-[11px] text-rose-500 font-medium">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="shippingCountry" className="font-label-sm text-xs text-text-headline font-bold">Destination Country</label>
                    <select
                      id="shippingCountry"
                      value={shippingCountry}
                      onChange={(e) => setShippingCountry(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
                      <option value="United States">United States</option>
                      <option value="Hawaii">Hawaii (Island Delivery)</option>
                      <option value="France">France</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Japan">Japan</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="notes" className="font-label-sm text-xs text-text-headline font-bold">Special Requests / Rider Notes (Optional)</label>
                    <textarea
                      id="notes"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Prefer 85cm mast with foil case"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 text-white font-label-md text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all cursor-pointer mt-1">
                    Submit Pre-Order Request
                  </button>
                </form>
              </>
            ) : (
              <div className="py-6 flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-2">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h4 className="font-headline-sm text-xl text-text-headline font-bold">Factory Slot Reserved!</h4>
                <p className="font-body-sm text-sm text-text-muted max-w-sm">
                  Thank you, {customerName}. Your build specifications for the{' '}
                  <strong className="text-teal-700">{fleet.preOrderConfig.product}</strong> have been logged. A SwiftMonster master shaper will email your build invoice and shipping estimate shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    fleet.closePreOrder();
                    setPreOrderSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-teal-600 text-white font-label-md text-xs uppercase font-bold mt-2 hover:bg-teal-700 transition-colors cursor-pointer">
                  Return to Fleet
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* UNIVERSAL INFO MODALS */}
      {fleet.activeInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-teal-100 flex flex-col gap-4 relative">
            <button
              type="button"
              onClick={fleet.closeInfo}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close dialog">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>

            {fleet.activeInfoModal === 'warranty' && (
              <>
                <div className="flex items-center gap-2 text-teal-600">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  <h3 className="font-headline-sm text-xl text-text-headline font-bold">3-Year Ocean Swell Warranty</h3>
                </div>
                <p className="font-body-sm text-sm text-text-body leading-relaxed">
                  Every Toray T1100 carbon mast and titanium fuselage crafted by SwiftMonster is backed by our full 3-year unconditional ocean structural warranty. If structural delamination occurs under normal hydrofoiling or downwind conditions, we will repair or replace your module free of charge.
                </p>
              </>
            )}

            {fleet.activeInfoModal === 'safety' && (
              <>
                <div className="flex items-center gap-2 text-rose-600">
                  <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
                  <h3 className="font-headline-sm text-xl text-text-headline font-bold">Ocean Aviator Safety Protocol</h3>
                </div>
                <p className="font-body-sm text-sm text-text-body leading-relaxed">
                  Downwind hydrofoiling and kite racing are extreme offshore disciplines. Always carry:
                </p>
                <ul className="text-xs text-text-body space-y-1.5 list-disc pl-5 font-mono">
                  <li>Type III coast guard-approved impact flotation vest</li>
                  <li>Carbon-certified hydrodynamic watersports helmet</li>
                  <li>Emergency waterproof VHF radio / Personal Locator Beacon (PLB)</li>
                  <li>High-visibility distress strobe &amp; titanium line cutter</li>
                </ul>
              </>
            )}

            {fleet.activeInfoModal === 'kelp' && (
              <>
                <div className="flex items-center gap-2 text-emerald-600">
                  <span className="material-symbols-outlined text-[24px]">forest</span>
                  <h3 className="font-headline-sm text-xl text-text-headline font-bold">1% For Kelp Restoration Pledge</h3>
                </div>
                <p className="font-body-sm text-sm text-text-body leading-relaxed">
                  As Sea Dragons, we dedicate 1% of all gross equipment sales directly to Giant Kelp (Macrocystis pyrifera) and Bull Kelp replanting projects along the Pacific coastline. Kelp forests sequester up to 20 times more carbon per acre than terrestrial forests while providing shelter for thousands of marine species.
                </p>
              </>
            )}

            {fleet.activeInfoModal === 'whitepaper' && (
              <>
                <div className="flex items-center gap-2 text-indigo-600">
                  <span className="material-symbols-outlined text-[24px]">description</span>
                  <h3 className="font-headline-sm text-xl text-text-headline font-bold">Hydrodynamic Whitepaper 2025</h3>
                </div>
                <p className="font-body-sm text-sm text-text-body leading-relaxed">
                  Title: <em>"Sub-Cavitation Boundary Layer Control and Dihedral Wing Optimization in High-Aspect Ocean Hydrofoils"</em> by SwiftMonster Hydrodynamics Research Group.
                </p>
                <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 text-xs font-mono text-indigo-900">
                  Published in Journal of Oceanic Flow Mechanics (Vol. 44). You can also download the raw towing tank flume test dataset via the Benchmarks section.
                </div>
              </>
            )}

            <button
              type="button"
              onClick={fleet.closeInfo}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-text-headline font-label-md text-xs font-bold transition-colors cursor-pointer mt-2">
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <FleetProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </FleetProvider>
  );
};
