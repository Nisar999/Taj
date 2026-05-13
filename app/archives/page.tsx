import React from 'react';
import { foodSpots } from '@/lib/data';
import { IntelReport } from '@/components/ui/IntelReport';

export default function ArchivesPage() {
  return (
    <div className="min-h-screen bg-[#e5e2d9] py-16 px-4 sm:px-8 font-mono text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-16 text-center relative">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 mb-4 relative z-10">
              Intel Report Archives
            </h1>
            <div className="absolute -inset-2 bg-slate-900/5 -z-10 transform rotate-1" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 mb-8">
            <div className="h-[1px] w-12 bg-slate-400" />
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
              Classification: Level 4 / Gastronomic Reconnaissance
            </p>
            <div className="h-[1px] w-12 bg-slate-400" />
          </div>

          <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed italic">
            "The following dossiers contain verified field reports on high-value non-veg targets.
            Only members with appropriate clearance are authorized to access these coordinates."
          </p>
        </header>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodSpots.map((spot) => (
            <IntelReport key={spot.id} spot={spot} />
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t border-slate-400 text-center">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Warning: Unauthorized distribution of this intel is punishable by permanent expulsion.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">
            © Taj United Club - Department of Culinary Intelligence
          </p>
        </footer>
      </div>
    </div>
  );
}
