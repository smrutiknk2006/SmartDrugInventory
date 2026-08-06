import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ShieldCheck, CheckCircle2, FileText, Shield, 
  Settings, BarChart3, Route
} from 'lucide-react';
import bgLab from './assets/pharmatrace_background-1.png';
import Account from './Account'; // Account component import karein

export default function App() {
  // State to switch pages: 'trace' ya 'account'
  const [currentPage, setCurrentPage] = useState('trace');

  const [batchInput, setBatchInput] = useState('BT-XYZ789-2023');
  const [isVerified, setIsVerified] = useState(true);

  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const reportRef = useRef(null);

  useEffect(() => {
    if (currentPage === 'trace') {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
      tl.fromTo(heroRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(cardRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.4')
        .fromTo(reportRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.4');
    }
  }, [currentPage]);

  const handleVerify = (e) => {
    if (e) e.preventDefault();
    setIsVerified(true);
    if (reportRef.current) {
      gsap.fromTo(
        reportRef.current,
        { scale: 0.98, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' }
      );
    }
  };

  // Agar user 'account' page par hai toh Account component dikhao
  if (currentPage === 'account') {
    return (
      <div>
        {/* Back Button to return to Trace Page */}
        <Account />
        <button 
          onClick={() => setCurrentPage('trace')}
          className="fixed top-6 right-8 z-50 px-4 py-2 bg-[#0F2942] text-white text-xs font-bold rounded-lg shadow-md hover:bg-slate-800 transition-colors"
        >
          ← BACK TO TRACE
        </button>
      </div>
    );
  }

  // Otherwise Main Trace Page dikhao
  return (
    <div className="min-h-screen w-full bg-[#f4f7fb] text-[#1e293b] font-sans relative overflow-x-hidden">
      
      {/* FADED BACKGROUND IMAGE & OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(244, 247, 251, 0.45) 0%, rgba(244, 247, 251, 0.88) 100%), url(${bgLab})`,
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.95
        }}
      />

      {/* NAVBAR */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-[#0F2942] flex items-center justify-center text-emerald-400 shadow-md">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <span className="text-2xl font-black tracking-wider text-[#0F2942]">
            PHARMATRACE
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wider text-[#0F2942]">
          <a href="#" className="hover:text-blue-600 transition-colors">VERIFY BATCH</a>
          <a href="#" className="hover:text-blue-600 transition-colors">HOW IT WORKS</a>
          <a href="#" className="hover:text-blue-600 transition-colors">SECURITY</a>
          <a href="#" className="hover:text-blue-600 transition-colors">SOLUTIONS</a>
          
          {/* LOGIN CLICKABLE BUTTON */}
          <button 
            onClick={() => setCurrentPage('account')}
            className="hover:text-blue-600 transition-colors font-bold uppercase cursor-pointer"
          >
            LOGIN
          </button>

          <button 
            onClick={() => setCurrentPage('account')}
            className="px-6 py-2.5 rounded-lg bg-[#0F2942] text-white hover:bg-slate-800 transition-colors shadow-sm font-bold"
          >
            REQUEST DEMO
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-6 pb-20 text-center">
        
        <div ref={heroRef}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F2942] tracking-tight mb-4">
            Secure Your Pharmaceutical Supply Chain.
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto font-normal mb-10">
            Verify batch authenticity, trace integrity, and ensure compliance with PharmaTrace's real-time ledger.
          </p>
        </div>

        {/* TRACE INPUT CARD */}
        <div 
          ref={cardRef}
          className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 max-w-3xl mx-auto text-left relative z-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
            <h2 className="text-2xl font-extrabold text-[#0F2942]">
              Trace Your Product Batch
            </h2>
            <div className="text-xs font-medium text-slate-600">
              Check a known batch: {' '}
              <button 
                type="button"
                onClick={() => setBatchInput('BT-XYZ789-2023')}
                className="font-mono bg-slate-100 hover:bg-slate-200 text-[#0F2942] px-2 py-1 rounded font-semibold transition-colors"
              >
                BT-XYZ789-2023
              </button>
            </div>
          </div>

          <form onSubmit={handleVerify} className="space-y-2">
            <label className="block text-xs font-semibold text-slate-600">
              Enter Batch/LOT Number
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text"
                value={batchInput}
                onChange={(e) => setBatchInput(e.target.value)}
                placeholder="BT-XYZ789-2023"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2942] font-mono text-slate-800"
              />
              <button 
                type="submit"
                className="px-8 py-3 rounded-lg bg-[#0F2942] hover:bg-slate-800 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-md shrink-0"
              >
                VERIFY & TRACE
              </button>
            </div>
          </form>
        </div>

        {/* VERIFICATION REPORT MODAL / DASHBOARD BOARD */}
        {isVerified && (
          <div 
            ref={reportRef}
            className="mt-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex text-left relative"
          >
            {/* Dark Sidebar Icon Bar */}
            <div className="w-14 bg-[#0F2942] flex flex-col items-center py-6 gap-6 text-slate-400 shrink-0">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <BarChart3 className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <FileText className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <Route className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <Settings className="h-5 w-5 hover:text-white cursor-pointer transition-colors mt-auto" />
            </div>

            {/* Main Report Content */}
            <div className="flex-1 p-6 md:p-8">
              
              <h3 className="text-xl font-bold text-[#0F2942] mb-4">
                Verification Report
              </h3>

              {/* Status Banner */}
              <div className="bg-[#10B981] text-white font-bold px-4 py-2.5 rounded-lg text-sm tracking-wider flex items-center justify-between mb-6 shadow-sm">
                <span>AUTHENTIC</span>
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left 2 Columns: Details, Scan Integrity & Route Map */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Grid 2-col: Batch Details & Scan Integrity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    
                    {/* Batch Details */}
                    <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                      <div className="font-bold text-[#0F2942] flex items-center gap-1.5 mb-2 text-sm">
                        <FileText className="h-4 w-4 text-slate-500" />
                        Batch Details
                      </div>
                      <div className="space-y-1 text-slate-600 font-medium">
                        <div className="flex justify-between">
                          <span>Number</span>
                          <span className="font-mono text-slate-900">{batchInput}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Manufacturing Date</span>
                          <span className="text-slate-900">24-February 2023</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Expiry Date</span>
                          <span className="text-slate-900">21/17/2023</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Location</span>
                          <span className="text-slate-900">Location</span>
                        </div>
                      </div>
                    </div>

                    {/* Scan Integrity */}
                    <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                      <div className="font-bold text-[#0F2942] flex items-center gap-1.5 mb-2 text-sm">
                        <Shield className="h-4 w-4 text-slate-500" />
                        Scan Integrity
                      </div>
                      <div className="space-y-2 text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          <span>Scanned 5 Times</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          <span>100% Matching Records</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Route Map */}
                  <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 text-xs">
                    <div className="font-bold text-[#0F2942] flex items-center gap-1.5 mb-4 text-sm">
                      <Route className="h-4 w-4 text-slate-500" />
                      Route Map
                    </div>

                    <div className="flex items-center justify-between px-2 relative py-2">
                      <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-300 -translate-y-1/2 z-0" />
                      
                      <div className="relative z-10 bg-white p-2 rounded-full border border-slate-200 shadow-sm text-center">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 bg-white rounded-full" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-semibold text-slate-700 text-[10px]">Factory</span>
                      </div>

                      <div className="relative z-10 bg-white p-2 rounded-full border border-slate-200 shadow-sm text-center">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 bg-white rounded-full" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-semibold text-slate-700 text-[10px]">Warehouse</span>
                      </div>

                      <div className="relative z-10 bg-white p-2 rounded-full border border-slate-200 shadow-sm text-center">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 bg-white rounded-full" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-semibold text-slate-700 text-[10px]">Distributor</span>
                      </div>

                      <div className="relative z-10 bg-white p-2 rounded-full border border-slate-200 shadow-sm text-center">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 bg-white rounded-full" />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-semibold text-slate-700 text-[10px]">Pharmacy</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Events */}
                  <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 text-xs">
                    <div className="font-bold text-[#0F2942] mb-2 text-sm">Key Events</div>
                    <div className="grid grid-cols-3 gap-2 text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Batch Created</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Quality Check Passed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Shipped</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column: Verification Overview */}
                <div className="space-y-4 text-xs">
                  <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-[#0F2942] mb-3 text-sm">
                      Verification Overview
                    </div>
                    <div className="space-y-3 font-medium">
                      <div className="flex justify-between items-center">
                        <span>Status</span>
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Data Points</span>
                        <span className="font-bold text-slate-800">16</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Signatures</span>
                        <span className="font-bold text-slate-800">✍️</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-[#0F2942] mb-3 text-sm">
                      Key Events Log
                    </div>
                    <div className="space-y-2 text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Batch Created</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Quality Check Passed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Shipped</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </main>

    </div>
  );
}