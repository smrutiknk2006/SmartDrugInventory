import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Mail, User, Building2, 
  ArrowRight, CheckCircle2, Eye, EyeOff 
} from 'lucide-react';
import bgLab from './assets/pharmatrace_background-1.png';

export default function Account() {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'signup' | 'enterprise'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    organization: '',
    role: 'Manufacturer'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted ${activeTab} data:`, formData);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f7fb] text-[#1e293b] font-sans relative overflow-x-hidden flex flex-col justify-between">
      
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

      {/* HEADER */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-10 w-10 rounded-xl bg-[#0F2942] flex items-center justify-center text-emerald-400 shadow-md">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <span className="text-2xl font-black tracking-wider text-[#0F2942]">
            PHARMATRACE
          </span>
        </div>
        <a href="/" className="text-xs font-bold text-[#0F2942] hover:text-blue-600 transition-colors">
          ← BACK TO TRACE
        </a>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-md w-full mx-auto px-4 py-8">
        
        {/* CARD WRAPPER */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 relative">
          
          {/* TAB SWITCHER */}
          <div className="flex rounded-xl bg-slate-100 p-1 mb-8">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2.5 text-xs font-extrabold rounded-lg transition-all ${
                activeTab === 'login'
                  ? 'bg-[#0F2942] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0F2942]'
              }`}
            >
              LOG IN
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2.5 text-xs font-extrabold rounded-lg transition-all ${
                activeTab === 'signup'
                  ? 'bg-[#0F2942] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0F2942]'
              }`}
            >
              SIGN UP
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`flex-1 py-2.5 text-xs font-extrabold rounded-lg transition-all ${
                activeTab === 'enterprise'
                  ? 'bg-[#0F2942] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0F2942]'
              }`}
            >
              CREATE ORG
            </button>
          </div>

          {/* FORM TITLE */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-black text-[#0F2942] tracking-tight">
              {activeTab === 'login' && 'Welcome Back'}
              {activeTab === 'signup' && 'Create Your Account'}
              {activeTab === 'enterprise' && 'Register Enterprise Node'}
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              {activeTab === 'login' && 'Access secured batch reports and blockchain ledger logs.'}
              {activeTab === 'signup' && 'Join PharmaTrace for instant supply chain verification.'}
              {activeTab === 'enterprise' && 'Onboard your pharma entity, factory, or distribution center.'}
            </p>
          </div>

          {/* FORM FIELDS */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name (Sign up & Enterprise only) */}
            {activeTab !== 'login' && (
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Dr. Alexander Wright"
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2942] text-slate-800"
                  />
                </div>
              </div>
            )}

            {/* Email Address (All tabs) */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@pharmaceutical.com"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2942] text-slate-800 font-mono"
                />
              </div>
            </div>

            {/* Organization Name (Enterprise Tab Only) */}
            {activeTab === 'enterprise' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Organization / Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="BioPharma Global Ltd."
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2942] text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Supply Chain Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2942] text-slate-800 bg-white"
                  >
                    <option value="Manufacturer">Manufacturer</option>
                    <option value="Distributor">Distributor / Wholesaler</option>
                    <option value="Pharmacy">Pharmacy / Retailer</option>
                    <option value="Regulator">Regulatory Body</option>
                  </select>
                </div>
              </>
            )}

            {/* Password Field (All tabs) */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-slate-600">
                  Password
                </label>
                {activeTab === 'login' && (
                  <a href="#" className="text-[11px] font-bold text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-10 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2942] text-slate-800 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-lg bg-[#0F2942] hover:bg-slate-800 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>
                {activeTab === 'login' && 'SIGN IN TO DASHBOARD'}
                {activeTab === 'signup' && 'CREATE FREE ACCOUNT'}
                {activeTab === 'enterprise' && 'REGISTER ORGANIZATION'}
              </span>
              <ArrowRight className="h-4 w-4 text-emerald-400" />
            </button>
          </form>

          {/* SECURITY BADGE */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-500 text-[11px] font-medium">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>256-Bit Encrypted & DSCSA Compliant Node</span>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-6 text-xs text-slate-500 font-medium">
        © {new Date().getFullYear()} PharmaTrace Ledger Network. All Rights Reserved.
      </footer>

    </div>
  );
}