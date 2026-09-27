import React, { useState } from 'react';
import { Star, Check } from 'lucide-react';
import { saleData } from '../../data/saleData';
import { membershipData } from '../../data/membershipData';

export default function SalePlanCard({ plan, image, theme, isSaleActive = false, couponApplied = false }) {
  const [duration, setDuration] = useState('4yr');

  const isUltra = theme === 'gold';
  const salePriceData = isUltra ? saleData.promotions.ultra[duration] : saleData.promotions.plus[duration];
  const ctaUrl = `https://strikes.in/checkout?plan=${plan.id}&duration=${duration}`;

  // If sale is not active, display original price as the main price and hide discount elements
  const currentDisplayPrice = isSaleActive ? salePriceData.sale : salePriceData.original;
  const strikethroughPrice = isSaleActive ? salePriceData.original : null;
  const discountLabel = isSaleActive ? salePriceData.discount : null;
  
  // Format the plan name to match the mockup (e.g. Strike Plus)
  const planNameParts = plan.name.split(' ');
  const firstName = planNameParts[0];
  const secondName = planNameParts.slice(1).join(' ');

  // Get current duration label
  const durationLabel = membershipData.durations.find(d => d.key === duration)?.label || duration;

  let baseStyles = isUltra
    ? 'bg-[#0a0a0a] border-[1.5px] border-yellow-600/50 shadow-[0_0_40px_rgba(202,138,4,0.15)] hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(202,138,4,0.3)] hover:border-yellow-500'
    : 'bg-[#0a0a0a] border-[1.5px] border-gray-700 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] hover:border-gray-500';

  if (couponApplied) {
    baseStyles = 'bg-[#0a0a0a] border-[1.5px] border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.4)] scale-[1.01]';
  }

  return (
    <div
      className={`relative rounded-3xl flex flex-col transition-all duration-300 overflow-hidden ${baseStyles}`}
    >
      {/* Ultra Best Value Badge */}
      {isUltra && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded bg-yellow-900/40 border border-yellow-600/50 text-yellow-500 font-bold text-[10px] tracking-widest uppercase flex items-center gap-1.5 backdrop-blur-sm shadow-xl">
          <Star className="w-3.5 h-3.5 fill-yellow-500" />
          BEST VALUE
        </div>
      )}

      {/* Editorial Image Header */}
      {image && (
        <div className="relative w-full h-64 sm:h-80 shrink-0 bg-black animate-in fade-in duration-700">
          <img 
            src={image} 
            alt={`Instructors for ${plan.name}`} 
            className="w-full h-full object-cover object-top opacity-90 mix-blend-lighten"
          />
          {/* Gradient to blend image smoothly into the card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>
      )}

      <div className="p-8 pt-4 relative z-10 flex flex-col h-full -mt-12">
        {/* MEMBERSHIP PLAN Subtitle */}
        <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${isUltra ? 'text-yellow-600' : 'text-gray-500'}`}>
          Membership Plan
        </p>

        {/* Plan Header Typography */}
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none drop-shadow-md font-display mb-4">
          {firstName} <span className={isUltra ? "text-gray-300" : "text-gray-400"}>{secondName}</span>
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed font-medium mb-8">
          {plan.tagline}
        </p>

        {/* Duration Selector */}
        <div className="mb-8">
          <p className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase mb-3">
            Select Duration
          </p>
          <div className={`inline-flex items-center p-1 rounded-xl border ${isUltra ? 'bg-yellow-900/10 border-yellow-900/30' : 'bg-gray-900/50 border-gray-800'}`}>
            {membershipData.durations.filter(d => d.key !== '1yr').map((dur) => {
              const isActive = duration === dur.key;
              return (
                <button
                  key={dur.key}
                  onClick={() => setDuration(dur.key)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? (isUltra ? 'bg-yellow-500 text-black shadow-md' : 'bg-white text-black shadow-md')
                      : (isUltra ? 'text-yellow-600/70 hover:text-yellow-500' : 'text-gray-400 hover:text-white')
                  }`}
                >
                  {dur.label}
                  {dur.badge && (
                    <span className={`text-[9px] ${isActive ? (isUltra ? 'text-black/70' : 'text-gray-500') : (isUltra ? 'text-yellow-700' : 'text-gray-500')}`}>
                      {dur.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Box */}
        <div className="mt-auto">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            {/* Price */}
            <div className="flex items-baseline">
              <span className={`text-2xl font-bold mr-1 ${isUltra ? 'text-yellow-500' : 'text-gray-400'}`}>₹</span>
              <span className="text-5xl font-extrabold text-white tracking-tighter font-display">
                {currentDisplayPrice.replace('₹', '')}
              </span>
            </div>
            
            {/* Original Price */}
            {strikethroughPrice && (
              <span className="text-sm text-gray-500 line-through font-medium ml-2">
                {strikethroughPrice}
              </span>
            )}
            
            {/* Discount Badge */}
            {discountLabel && (
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${
                isUltra 
                  ? 'bg-yellow-900/40 text-yellow-500 border-yellow-700/50' 
                  : 'bg-gray-800 text-gray-300 border-gray-700'
              }`}>
                {discountLabel} OFF
              </span>
            )}

            {/* Popular Badge (only on 4yr) */}
            {duration === '4yr' && (
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                isUltra 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-white text-black'
              }`}>
                Popular
              </span>
            )}
          </div>

          <p className="text-xs text-gray-500 font-medium">
            {durationLabel} · one-time · no renewals
          </p>
        </div>

        {/* Features List */}
        <div className="mt-8 pt-6 border-t border-gray-800/60 space-y-3.5">
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${isUltra ? 'text-yellow-600/80' : 'text-gray-500'}`}>
            What's included
          </p>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${isUltra ? 'bg-yellow-900/40 text-yellow-500' : 'bg-gray-800/80 text-gray-300'}`}>
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className={`text-sm leading-snug ${isUltra ? 'text-gray-300' : 'text-gray-400'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href={ctaUrl}
            className={`w-full flex justify-center py-4 px-6 rounded-xl font-bold text-sm transition-all font-display tracking-wider ${
              isUltra
                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 shadow-[0_0_20px_rgba(202,138,4,0.3)]'
                : 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
            }`}
          >
            {plan.ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
