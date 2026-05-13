import React from 'react';
import Image from 'next/image';
import { FoodSpot } from '@/lib/data';

interface IntelReportProps {
  spot: FoodSpot;
}

export const IntelReport: React.FC<IntelReportProps> = ({ spot }) => {
  return (
    <div className="relative bg-[#f4f1ea] border-2 border-[#d1ccc0] p-6 shadow-lg font-mono text-slate-800 max-w-md mx-auto overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* TOP SECRET STAMP */}
      <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none select-none transform -rotate-12">
        <span className="text-red-600 text-3xl font-black border-4 border-red-600 px-2 py-1 uppercase tracking-tighter italic">
          Top Secret
        </span>
      </div>

      {/* HEADER */}
      <div className="mb-6 border-b-2 border-slate-300 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">
              Case File: {spot.name}
            </h3>
            <p className="text-xs text-slate-500 uppercase mt-1 font-semibold">
              Operational Area: {spot.location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-slate-400">FILE ID: {spot.id.toUpperCase()}</p>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-full h-48 mb-6 overflow-hidden border-2 border-slate-300">
        <Image
          src={spot.imageUrl}
          alt={spot.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
        {/* Corner fold effect */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-[#d1ccc0] shadow-sm" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
      </div>

      {/* DETAILS */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-slate-500 uppercase">Primary Objective:</span>
          <span className="text-sm font-bold text-slate-800">{spot.speciality}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-slate-500 uppercase">Intelligence Rating:</span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-slate-800">{spot.rating}</span>
            <span className="text-[10px] text-slate-400 uppercase">/ 5.0</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t-2 border-dashed border-slate-300">
          <p className="text-xs font-bold text-slate-500 uppercase mb-2">Strategic Notes:</p>
          <p className="text-sm leading-relaxed italic text-slate-700 bg-slate-100/50 p-2 border-l-4 border-slate-400">
            "{spot.strategicNote}"
          </p>
        </div>
      </div>
    </div>
  );
};
