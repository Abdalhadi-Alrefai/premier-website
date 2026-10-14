'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  Sun,
  Moon,
  Info,
  Layers,
  ArrowRight,
  Search,
} from 'lucide-react';

export default function BrandPreviewPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const isLight = theme === 'light';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 py-10 px-4 sm:px-6 lg:px-8 ${
        isLight ? 'bg-[#F8FAFB] text-[#07212B]' : 'bg-[#02161E] text-[#F0F6F8]'
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Dev Environment Notice Banner */}
        <div
          className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            isLight
              ? 'bg-[#EBF3F5] border-[#DCE7EA] text-[#023140]'
              : 'bg-[#042330] border-[#0B3A4C] text-[#F0F6F8]'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#023140] text-white">
              Internal Dev Preview
            </span>
            <span className="text-xs sm:text-sm font-medium">
              Official Premier Brand Identity System Evaluation (Phase 01)
            </span>
          </div>

          {/* Theme Switcher Toggle */}
          <div className="flex items-center gap-2 bg-black/10 dark:bg-white/10 p-1 rounded-lg shrink-0">
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                isLight ? 'bg-white text-[#023140] shadow-sm' : 'text-[#8CA6B0] hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Light Mode (Dashboard Default)</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                !isLight
                  ? 'bg-[#22A6BF] text-[#02161E] shadow-sm font-bold'
                  : 'text-[#4B6873] hover:text-[#023140]'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Dark Mode (Website Default)</span>
            </button>
          </div>
        </div>

        {/* Header & Logo Inspection Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-current/10">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Premier Dental Lab — Color System
            </h1>
            <p
              className={`text-sm max-w-2xl leading-relaxed ${
                isLight ? 'text-[#4B6873]' : 'text-[#8CA6B0]'
              }`}
            >
              The authoritative brand foundation anchored strictly in the official Premier logo.
              Calculated for WCAG AAA accessibility, medical precision, and luxury CAD/CAM
              technology.
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border flex items-center gap-4 ${
              isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
            }`}
          >
            <div className="w-16 h-16 rounded-xl bg-white p-2 border border-slate-200 flex items-center justify-center shrink-0 shadow-inner">
              <Image
                src="/images/logos/premier-logo.png"
                alt="Official Premier Dental Lab Logo"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                Authoritative Master Logo
              </span>
              <span className="text-sm font-bold block">#023140 (Deep Petrol)</span>
              <span className="text-xs text-muted-foreground block">
                Dominant Pixel Match: 81.5%
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 1: COLOR SWATCHES */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#22A6BF]" />
            <h2 className="text-lg font-bold tracking-tight uppercase text-xs tracking-widest opacity-80">
              1. Extracted & Semantic Color Hierarchy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Primary Swatch */}
            <div
              className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
              }`}
            >
              <div
                className="h-20 rounded-lg flex items-end p-3 text-white font-mono text-xs font-bold shadow-inner"
                style={{ backgroundColor: '#023140' }}
              >
                #023140
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">Official Primary</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                    WCAG 13.8:1 AAA
                  </span>
                </div>
                <p className="text-xs opacity-75 mt-0.5">
                  Extracted dominant logo color (Deep Petrol). Used for primary branding and Light
                  Mode buttons.
                </p>
                <div className="text-[11px] font-mono opacity-60 mt-1">
                  RGB: 2, 49, 64 • HSL: 195°, 94%, 13%
                </div>
              </div>
            </div>

            {/* Secondary Swatch */}
            <div
              className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
              }`}
            >
              <div
                className={`h-20 rounded-lg flex items-end p-3 font-mono text-xs font-bold shadow-inner ${
                  isLight
                    ? 'bg-[#EBF3F5] text-[#023140] border border-[#DCE7EA]'
                    : 'bg-[#083547] text-[#E0EEF2]'
                }`}
              >
                {isLight ? '#EBF3F5' : '#083547'}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">Secondary Surface</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                    Supporting
                  </span>
                </div>
                <p className="text-xs opacity-75 mt-0.5">
                  {isLight
                    ? 'Ice-petrol subtle neutral for clinical medical tech backdrops.'
                    : 'Elevated petrol container surface for dark mode contrast.'}
                </p>
                <div className="text-[11px] font-mono opacity-60 mt-1">
                  {isLight ? 'HSL: 192°, 33%, 94%' : 'HSL: 197°, 80%, 15%'}
                </div>
              </div>
            </div>

            {/* Accent Swatch */}
            <div
              className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
              }`}
            >
              <div
                className={`h-20 rounded-lg flex items-end p-3 font-mono text-xs font-bold text-white shadow-inner ${
                  isLight ? 'bg-[#0E6782]' : 'bg-[#22A6BF] text-[#02161E]'
                }`}
              >
                {isLight ? '#0E6782' : '#22A6BF'}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">Interactive Accent</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-bold">
                    {isLight ? 'Mid Petrol' : 'Luminous Cyan'}
                  </span>
                </div>
                <p className="text-xs opacity-75 mt-0.5">
                  {isLight
                    ? 'Subtle interactive hover, focus rings, and secondary buttons.'
                    : 'Luminous dental-tech highlight for dark canvas and 3D crown illumination.'}
                </p>
                <div className="text-[11px] font-mono opacity-60 mt-1">
                  {isLight ? 'HSL: 193°, 81%, 28%' : 'HSL: 189°, 70%, 44%'}
                </div>
              </div>
            </div>

            {/* Canvas Background Swatch */}
            <div
              className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
              }`}
            >
              <div
                className={`h-20 rounded-lg flex items-end p-3 font-mono text-xs font-bold shadow-inner ${
                  isLight
                    ? 'bg-[#F8FAFB] text-[#07212B] border border-[#DCE7EA]'
                    : 'bg-[#02161E] text-[#F0F6F8] border border-[#0B3A4C]'
                }`}
              >
                {isLight ? '#F8FAFB' : '#02161E'}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">Canvas Background</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                    WCAG 16.1:1 AAA
                  </span>
                </div>
                <p className="text-xs opacity-75 mt-0.5">
                  {isLight
                    ? 'Surgical medical tech off-white canvas.'
                    : 'Midnight marine petrol canvas for public digital website.'}
                </p>
                <div className="text-[11px] font-mono opacity-60 mt-1">
                  {isLight ? 'HSL: 200°, 20%, 98%' : 'HSL: 196°, 87%, 6%'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: BUTTON VARIANTS */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight uppercase text-xs tracking-widest opacity-80">
            2. Button Variants & Interaction States
          </h2>

          <div
            className={`p-6 rounded-2xl border flex flex-wrap items-center gap-4 ${
              isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
            }`}
          >
            {/* Primary Button */}
            <button
              type="button"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                isLight
                  ? 'bg-[#023140] text-white hover:bg-[#0E6782]'
                  : 'bg-[#22A6BF] text-[#02161E] hover:bg-[#34BCD4]'
              }`}
            >
              Primary Action
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                isLight
                  ? 'bg-[#EBF3F5] text-[#023140] hover:bg-[#DCE7EA]'
                  : 'bg-[#083547] text-[#E0EEF2] hover:bg-[#0E4B61]'
              }`}
            >
              Secondary Action
            </button>

            {/* Outline Button */}
            <button
              type="button"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all ${
                isLight
                  ? 'border-[#DCE7EA] text-[#023140] hover:bg-[#F8FAFB]'
                  : 'border-[#0B3A4C] text-[#F0F6F8] hover:bg-[#072C3B]'
              }`}
            >
              Outline Button
            </button>

            {/* Destructive Button */}
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-red-600 hover:bg-red-700 text-white transition-all shadow-sm"
            >
              Destructive Action
            </button>

            {/* Ghost Button */}
            <button
              type="button"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                isLight
                  ? 'text-[#4B6873] hover:text-[#023140] hover:bg-[#EBF3F5]'
                  : 'text-[#8CA6B0] hover:text-[#F0F6F8] hover:bg-[#072C3B]'
              }`}
            >
              Ghost Button
            </button>
          </div>
        </div>

        {/* SECTION 3: FORM INPUTS & INTERACTIVE ELEMENTS */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight uppercase text-xs tracking-widest opacity-80">
            3. Form Inputs, Selects & Focus Rings
          </h2>

          <div
            className={`p-6 rounded-2xl border grid grid-cols-1 md:grid-cols-3 gap-6 ${
              isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
            }`}
          >
            {/* Input with Icon */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold block">Case Number Search</label>
              <div className="relative">
                <Search
                  className={`w-4 h-4 absolute start-3 top-3 ${
                    isLight ? 'text-[#4B6873]' : 'text-[#8CA6B0]'
                  }`}
                />
                <input
                  type="text"
                  placeholder="e.g. CAS-2026-0042"
                  className={`w-full ps-9 pe-3 py-2 rounded-lg text-sm border transition-all focus:outline-none focus:ring-2 ${
                    isLight
                      ? 'bg-[#F8FAFB] border-[#DCE7EA] text-[#07212B] focus:ring-[#023140]'
                      : 'bg-[#02161E] border-[#0B3A4C] text-[#F0F6F8] focus:ring-[#22A6BF]'
                  }`}
                  defaultValue="CAS-2026-0042"
                />
              </div>
            </div>

            {/* Select Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold block">Restoration Material</label>
              <select
                className={`w-full px-3 py-2 rounded-lg text-sm border transition-all focus:outline-none focus:ring-2 ${
                  isLight
                    ? 'bg-[#F8FAFB] border-[#DCE7EA] text-[#07212B] focus:ring-[#023140]'
                    : 'bg-[#02161E] border-[#0B3A4C] text-[#F0F6F8] focus:ring-[#22A6BF]'
                }`}
                defaultValue="zirconia"
              >
                <option value="zirconia">Ultra-Translucent Zirconia (CAD/CAM)</option>
                <option value="emax">Lithium Disilicate (E.max)</option>
                <option value="implant">Custom Titanium Abutment</option>
              </select>
            </div>

            {/* Checkbox & Switch */}
            <div className="space-y-3 pt-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className={`w-4 h-4 rounded border ${
                    isLight ? 'accent-[#023140]' : 'accent-[#22A6BF]'
                  }`}
                />
                <span className="text-xs font-medium">Automatic CAD validation notification</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className={`w-4 h-4 rounded border ${
                    isLight ? 'accent-[#023140]' : 'accent-[#22A6BF]'
                  }`}
                />
                <span className="text-xs font-medium">Intraoral scan QC check approved</span>
              </label>
            </div>
          </div>
        </div>

        {/* SECTION 4: STATUS BADGES & ALERTS */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight uppercase text-xs tracking-widest opacity-80">
            4. Status Badges & Semantic Feedback
          </h2>

          <div
            className={`p-6 rounded-2xl border flex flex-wrap items-center gap-4 ${
              isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
            }`}
          >
            {/* Brand Active Badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                isLight
                  ? 'bg-[#EBF3F5] text-[#023140] border border-[#DCE7EA]'
                  : 'bg-[#083547] text-[#22A6BF] border border-[#0B3A4C]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Brand Active</span>
            </div>

            {/* Success Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>QC Inspection Passed</span>
            </div>

            {/* Warning Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Margin Line Review Required</span>
            </div>

            {/* Destructive Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
              <XCircle className="w-3.5 h-3.5" />
              <span>Scan File Incomplete</span>
            </div>
          </div>
        </div>

        {/* SECTION 5: CARD ELEVATION & CLINICAL PANELS */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight uppercase text-xs tracking-widest opacity-80">
            5. Clinical Panels & Cards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-6 rounded-2xl border space-y-4 ${
                isLight ? 'bg-white border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono opacity-60">CAD/CAM Production Unit</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    isLight ? 'bg-[#EBF3F5] text-[#023140]' : 'bg-[#083547] text-[#22A6BF]'
                  }`}
                >
                  Milling Active
                </span>
              </div>
              <h3 className="text-lg font-bold">5-Axis Robotic Dental Milling</h3>
              <p
                className={`text-xs leading-relaxed ${
                  isLight ? 'text-[#4B6873]' : 'text-[#8CA6B0]'
                }`}
              >
                High-precision restoration batching operating on precision CAD/CAM milling
                tolerances. Utilizing the official Premier color tokens for all real-time operator
                diagnostics.
              </p>
              <div
                className={`pt-3 border-t flex items-center justify-between text-xs font-medium ${
                  isLight ? 'border-[#DCE7EA]' : 'border-[#0B3A4C]'
                }`}
              >
                <span>Estimated completion</span>
                <span className="font-bold">42 mins</span>
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl border space-y-4 ${
                isLight ? 'bg-[#white] border-[#DCE7EA] shadow-sm' : 'bg-[#042330] border-[#0B3A4C]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono opacity-60">Clinical Delivery Logistics</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Ready for Dispatch
                </span>
              </div>
              <h3 className="text-lg font-bold">Courier & Scanner Handover</h3>
              <p
                className={`text-xs leading-relaxed ${
                  isLight ? 'text-[#4B6873]' : 'text-[#8CA6B0]'
                }`}
              >
                Direct intraoral scanner delivery and case pickup for dental surgery practices
                across Erbil, Iraq.
              </p>
              <div
                className={`pt-3 border-t flex items-center justify-between text-xs font-medium ${
                  isLight ? 'border-[#DCE7EA]' : 'border-[#0B3A4C]'
                }`}
              >
                <span>Destination clinic</span>
                <span className="font-bold">Erbil Dental Care Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
