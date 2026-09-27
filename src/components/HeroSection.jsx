import React, { useState } from 'react';
import { Play, Terminal, Code, X } from 'lucide-react';
import { useSaleLogic } from '../hooks/useSaleLogic';

export default function HeroSection() {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('Output will be displayed here...');

  const sampleCode = `/*
 * Welcome to Strike CodeArena! 🚀
 * 
 * Your interactive environment for mastering DSA, 
 * System Design, and AI.
 *
 * How to use:
 * 1. Write or paste your solution here.
 * 2. Click "Run Code" in the top right to compile.
 * 3. View your test results in the terminal.
 * 4. Get instant AI feedback on time & space complexity.
 */

#include <iostream>
using namespace std;

void welcomeToStrike() {
    cout << "Initialization complete." << endl;
    cout << "Environment: Ready." << endl;
    cout << "AI Assistant: Online." << endl;
    cout << "Status: Awaiting your commands!" << endl;
}

int main() {
    welcomeToStrike();
    return 0;
}`;

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('Compiling and running environment checks...');
    setTimeout(() => {
      setIsRunning(false);
      setOutput('Initialization complete.\nEnvironment: Ready.\nAI Assistant: Online.\nStatus: Awaiting your commands!\n\nSystem Check: 100% Passed\nRuntime: 1ms');
    }, 600);
  };

  const { status, dismissSale } = useSaleLogic();

  return (
    <section id="home" className="relative pt-32 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      
      {/* Dev Helper: Quick Reset (Visible only if sale is hidden/dismissed/expired) */}
      {status !== 'active' && (
        <button 
          onClick={() => { localStorage.clear(); window.location.reload(); }}
          className="absolute top-4 right-4 text-[10px] text-gray-500 hover:text-white border border-gray-800 rounded px-2 py-1 z-50"
        >
          Reset Demo State
        </button>
      )}

      {/* Top Sale Notification Banner - Visible during both hidden and active states */}
      {(status === 'hidden' || status === 'active') && (
        <div className="relative z-20 max-w-4xl mx-auto mb-10 group/banner">
          <button 
            onClick={() => window.dispatchEvent(new Event('strike_sale_trigger_reveal'))}
            className="w-full group relative overflow-hidden rounded-2xl bg-yellow-900/20 border border-yellow-500/40 px-6 py-4 transition-all hover:bg-yellow-900/40 hover:border-yellow-400 hover:scale-[1.02] shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] cursor-pointer flex items-center justify-center gap-3 pr-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
            <span className="relative text-yellow-500 font-bold uppercase tracking-widest text-sm md:text-base animate-pulse">THE ULTIMATE BUNDLE: GET EVERY COURSE ON STRIKE FOR ONE LOW PRICE. SEE MEMBERSHIP PLANS &rarr;</span>
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              dismissSale();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-yellow-500/60 hover:text-yellow-400 hover:bg-yellow-500/20 rounded-full transition-all z-30 opacity-100 lg:opacity-0 lg:group-hover/banner:opacity-100"
            title="Dismiss Offer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Heading */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight font-display text-center">
          <span className="text-gray-400 text-3xl sm:text-5xl block mb-2">Take control of your</span>
          <span className="text-gray-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            Future With Strike
          </span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Master DSA, System Design & AI with interactive coding environments
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#membership"
            className="px-8 py-3.5 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 border border-gray-600/80 text-white font-bold tracking-wide font-display hover:from-gray-600 hover:to-gray-800 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Join Us
          </a>
          <a
            href="#courses"
            className="px-8 py-3.5 rounded-full bg-black text-gray-300 font-bold tracking-wide border border-gray-800 hover:border-gray-600 hover:text-white transition-all font-display"
          >
            Explore Courses
          </a>
        </div>
      </div>

      {/* Code Editor / Browser Mockup */}
      <div className="mt-16 relative max-w-[1100px] mx-auto rounded-xl border border-gray-800 bg-[#0c0c0c] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden text-left font-mono">
        
        {/* Window Bar */}
        <div className="bg-[#121212] px-4 py-2 border-b border-gray-800 flex items-center justify-between">
          
          <div className="flex items-center space-x-6">
            {/* Mac Traffic Lights */}
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            </div>
            
            {/* Tab */}
            <div className="flex items-center space-x-2 bg-[#1e1e1e] border border-gray-700/50 px-4 py-1.5 rounded-md shadow-inner">
              <span className="text-yellow-500 font-bold text-[10px] tracking-wider">&lt;/&gt;</span>
              <span className="text-xs text-gray-200 font-sans font-medium">strike.js</span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.8)] ml-2"></span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="px-2 py-0.5 rounded border border-green-500/30 text-green-400 text-[9px] font-bold tracking-widest uppercase bg-green-500/10">
              Ready
            </span>
            <button 
              onClick={handleRunCode}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-white hover:bg-gray-200 text-black text-xs font-sans font-bold transition-all disabled:opacity-70 disabled:cursor-wait active:scale-95 shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
          </div>
        </div>

        {/* Editor Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-gray-800 min-h-[500px]">
          
          {/* Left Column (Code + Terminal) */}
          <div className="flex flex-col bg-[#0c0c0c]">
            {/* Code Editor */}
            <div className="p-4 sm:p-6 text-[13px] leading-loose overflow-x-auto flex-grow relative font-mono">
              {/* Line Numbers */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#0c0c0c] border-r border-gray-800/40 flex flex-col items-center pt-6 text-gray-600 select-none text-[12px] opacity-70">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
              </div>
              
              <div className="pl-8 text-gray-300 whitespace-pre">
                <span className="text-gray-500 italic">{'// Strike Platform - Welcome Code'}</span><br/>
                <span className="text-blue-400 font-medium">const</span> <span className="text-yellow-200">welcome</span> <span className="text-gray-400">=</span> <span className="text-blue-400 font-medium">async</span> <span className="text-gray-400">() =&gt; {'{'}</span><br/>
                {'  '}<span className="text-blue-400 font-medium">const</span> <span className="text-blue-200">user</span> <span className="text-gray-400">=</span> <span className="text-blue-400 font-medium">await</span> <span className="text-yellow-200">getUser</span><span className="text-gray-400">();</span><br/>
                {'  '}<span className="text-blue-200">console</span><span className="text-gray-400">.</span><span className="text-yellow-200">log</span><span className="text-gray-400">(`</span><span className="text-green-400">Welcome </span><span className="text-blue-300">{'${'}user.name{'}'}</span><span className="text-green-400">!</span><span className="text-gray-400">`);</span><br/>
                {'  '}<span className="text-blue-200">console</span><span className="text-gray-400">.</span><span className="text-yellow-200">log</span><span className="text-gray-400">(`</span><span className="text-green-400">Level: </span><span className="text-blue-300">{'${'}user.level{'}'}</span><span className="text-gray-400">`);</span><br/>
                {'  '}<span className="text-blue-400 font-medium">return</span> <span className="text-gray-400">{'{'}</span> status<span className="text-gray-400">: </span><span className="text-orange-300">"success"</span> <span className="text-gray-400">{'}'};</span><br/>
                <span className="text-gray-400">{'}'};</span><br/>
                <br/>
                <span className="text-blue-400 font-medium">const</span> <span className="text-yellow-200">getUser</span> <span className="text-gray-400">=</span> <span className="text-blue-400 font-medium">async</span> <span className="text-gray-400">() =&gt; ({'{'}</span><br/>
                {'  '}name<span className="text-gray-400">: </span><span className="text-orange-300">"Guest User"</span><span className="text-gray-400">,</span><br/>
                {'  '}level<span className="text-gray-400">: </span><span className="text-orange-300">"Beginner"</span><br/>
                <span className="text-gray-400">{'}'});</span><br/>
                <br/>
                <span className="text-yellow-200">welcome</span><span className="text-gray-400">();</span><br/>
                <span className="inline-block w-2 h-4 bg-white/70 animate-pulse mt-1 ml-1"></span>
              </div>
            </div>

            {/* Terminal Panel */}
            <div className="h-44 bg-[#0a0a0a] border-t border-gray-800 p-4 font-mono text-[13px] flex flex-col relative shadow-inner">
              <div className="flex items-center text-gray-500 font-sans text-[10px] font-bold tracking-widest uppercase mb-3">
                <Terminal className="w-3.5 h-3.5 mr-2 text-green-500" />
                Terminal
              </div>
              <div className="text-cyan-400 mb-2">
                {isRunning ? 'Compiling and analyzing...' : 'Welcome to Strike Terminal! ✨'}
              </div>
              {isRunning && (
                <div className="text-gray-400 mt-2 whitespace-pre-wrap leading-relaxed animate-pulse">
                  System Check: In Progress...
                </div>
              )}
              {!isRunning && output && output !== 'Output will be displayed here...' && (
                <div className="text-gray-300 mt-2 whitespace-pre-wrap leading-relaxed border-l-2 border-green-500/50 pl-3">
                  {output}
                </div>
              )}
              <div className="mt-auto pt-2 flex items-center">
                <span className="text-green-500 mr-2">$</span>
                <span className="text-gray-500 animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Right Column (AI Assistant) */}
          <div className="bg-[#0f0f0f] flex flex-col h-full font-sans">
            
            {/* Assistant Tabs */}
            <div className="flex items-center justify-between border-b border-gray-800/80 px-2 py-1 bg-[#121212]">
              <div className="flex">
                <button className="px-4 py-2 text-xs font-semibold text-white bg-gray-800/50 rounded-md">
                  AI Assistant
                </button>
                <button className="px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-300 transition-colors">
                  Bug Shots
                </button>
              </div>
              <span className="text-[10px] text-gray-600 mr-2 font-medium">Static</span>
            </div>

            {/* Suggestions List */}
            <div className="p-5 flex-grow overflow-y-auto space-y-6">
              
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-3">
                  Quick Suggestions
                </p>
                <div className="space-y-2.5">
                  <div className="group p-3 rounded-lg border border-gray-800 bg-[#141414] hover:bg-gray-800 hover:border-gray-600 cursor-pointer transition-all">
                    <h4 className="text-[13px] text-gray-200 font-semibold group-hover:text-white mb-0.5">Refactor welcome()</h4>
                    <p className="text-[11px] text-gray-400 group-hover:text-gray-300">Extract user fetch and logging into separate utils for better testability.</p>
                  </div>
                  <div className="group p-3 rounded-lg border border-gray-800 bg-[#141414] hover:bg-gray-800 hover:border-gray-600 cursor-pointer transition-all">
                    <h4 className="text-[13px] text-gray-200 font-semibold group-hover:text-white mb-0.5">Add input validation</h4>
                    <p className="text-[11px] text-gray-400 group-hover:text-gray-300">Validate user.level against enum: Beginner | Advanced | Expert.</p>
                  </div>
                  <div className="group p-3 rounded-lg border border-gray-800 bg-[#141414] hover:bg-gray-800 hover:border-gray-600 cursor-pointer transition-all">
                    <h4 className="text-[13px] text-gray-200 font-semibold group-hover:text-white mb-0.5">Implement error handling</h4>
                    <p className="text-[11px] text-gray-400 group-hover:text-gray-300">Add try-catch blocks and custom error messages for async operations.</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-3">
                  Thoughts
                </p>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg border border-gray-800/60 bg-[#0c0c0c] flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Consider debouncing setDisplayedCode typing to save renders.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-gray-800/60 bg-[#0c0c0c] flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">•</span>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Memoize highlightCode with code length as key for performance.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
