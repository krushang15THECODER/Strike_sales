import React, { useState, useEffect } from 'react';
import { membershipData } from '../../data/membershipData';
import SaleReveal from './SaleReveal';
import CouponCode from './CouponCode';
import CountdownTimer from './CountdownTimer';
import ExpiredOffer from './ExpiredOffer';
import SalePlanCard from './SalePlanCard';
import { useSaleLogic } from '../../hooks/useSaleLogic';
import { X } from 'lucide-react';
import { saleData } from '../../data/saleData';

export default function PrivateDrop() {
  const { status, revealSale, dismissSale } = useSaleLogic();
  const [isRevealing, setIsRevealing] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);

  const plusPlan = membershipData.plans.find((p) => p.id === 'plus');
  const ultraPlan = membershipData.plans.find((p) => p.id === 'ultra');

  const handleCouponCopy = () => {
    setCouponApplied(true);
    setTimeout(() => setCouponApplied(false), 2000); // 2 second flash
  };

  useEffect(() => {
    const handleTriggerReveal = () => {
      // Smooth scroll to membership section first
      document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
      
      // Play reveal animation every time
      setIsRevealing(true);
    };

    window.addEventListener('strike_sale_trigger_reveal', handleTriggerReveal);
    return () => window.removeEventListener('strike_sale_trigger_reveal', handleTriggerReveal);
  }, []);

  const handleRevealComplete = () => {
    setIsRevealing(false);
    revealSale();
  };

  // Helper to force expiration for demo purposes
  const handleResetTest = () => {
    localStorage.setItem('strike_sale_end', (Date.now() - 1000).toString());
    window.location.reload();
  };

  // Helper to fully reset the demo
  const handleFullReset = () => {
    localStorage.removeItem('strike_sale_status');
    localStorage.removeItem('strike_sale_end');
    window.location.reload();
  };

  if (status === 'loading') return null;

  if (isRevealing) {
    return <SaleReveal onComplete={handleRevealComplete} />;
  }

  const isSaleActive = status === 'active';

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center animate-in fade-in duration-500">

      {/* Sale Active Banner Area */}
      {status === 'active' && (
        <div className="w-full mb-10 relative flex flex-col md:flex-row items-stretch justify-center gap-4 bg-yellow-900/10 border border-yellow-600/30 p-4 rounded-3xl shadow-[0_0_30px_rgba(202,138,4,0.05)]">
           <div className="flex-1 flex w-full md:w-auto items-stretch">
             <CountdownTimer 
               durationSeconds={900} 
               onExpire={() => {}} // useSaleLogic handles status update
               onResetTest={handleResetTest}
             />
           </div>
           
           <div className="flex-1 flex w-full md:w-auto items-stretch">
             <CouponCode code={saleData.couponCode} isExpired={false} onCopy={handleCouponCopy} />
           </div>

           <button 
             onClick={dismissSale} 
             className="absolute -top-3 -right-3 md:-top-4 md:-right-4 p-1.5 md:p-2 text-gray-400 hover:text-white bg-[#0a0a0a] hover:bg-black rounded-full border-2 border-gray-700/80 hover:border-white/50 transition-colors z-20 shadow-xl shadow-black"
             title="Dismiss Offer"
           >
             <X className="w-4 h-4 md:w-5 md:h-5" />
           </button>
        </div>
      )}

      {/* Expired Banner Area */}
      {status === 'expired' && (
        <div className="w-full mb-10 max-w-2xl mx-auto">
          <ExpiredOffer onResetDemo={handleFullReset} />
        </div>
      )}

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full relative z-10">
        <SalePlanCard 
          plan={plusPlan}
          image="/strike-plus.jpg"
          theme="dark"
          isSaleActive={isSaleActive}
          couponApplied={couponApplied}
        />
        <SalePlanCard 
          plan={ultraPlan}
          image="/strike-ultra.jpg"
          theme="gold"
          isSaleActive={isSaleActive}
          couponApplied={couponApplied}
        />
      </div>
      
    </div>
  );
}
