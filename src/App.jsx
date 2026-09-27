import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import MembershipSection from './components/MembershipSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MembershipSection />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
}
