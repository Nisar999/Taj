import React from 'react';
import { members } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function MemberDossier({ params }: { params: { id: string } }) {
  const member = members.find(m => m.id === params.id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 p-8 md:p-24 font-serif">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/committee"
          className="inline-block mb-12 text-zinc-500 hover:text-zinc-300 transition-colors text-sm uppercase tracking-widest"
        >
          ← Return to Directory
        </Link>

        <div className="relative bg-zinc-900 border border-zinc-800 p-8 md:p-16 shadow-2xl rounded-sm">
          {/* Dossier Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-zinc-800 pb-12">
            <div className="relative">
              <img
                src={member.imageUrl}
                alt={member.name}
                className={`w-32 h-32 rounded-sm object-cover border-2 ${
                  member.role === 'The Divine' ? 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.4)]' : 'border-zinc-700'
                }`}
              />
              {member.role === 'The Divine' && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-black text-[10px] font-bold shadow-lg">
                  DIV
                </div>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-2">{member.name}</h1>
              <p className="text-yellow-600 uppercase tracking-widest text-sm font-bold mb-4">
                {member.role}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 uppercase text-xs tracking-tighter">Food Persona:</span>
                <span className="text-zinc-300 italic">{member.foodPersona}</span>
              </div>
            </div>
          </div>

          {/* Dossier Content */}
          <div className="space-y-12">
            <section>
              <h2 className="text-zinc-500 uppercase text-xs tracking-widest mb-4 border-l-2 border-yellow-600 pl-4">Biography</h2>
              <p className="text-lg leading-relaxed text-zinc-400 italic">
                {member.bio}
              </p>
            </section>

            <section className="bg-black p-6 border-l-4 border-zinc-700 italic">
              <h2 className="text-zinc-500 uppercase text-xs tracking-widest mb-4">Classified Note</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {member.secretNote || "No additional intelligence available."}
              </p>
            </section>
          </div>

          {/* Stamp Effect */}
          <div className={`
            absolute top-12 right-12 transform -rotate-12 opacity-30 select-none pointer-events-none
            border-4 border-red-800 text-red-800 font-bold p-2 uppercase tracking-tighter
            ${member.role === 'Shadow Member' ? 'blur-sm' : ''}
          `}>
            TOP SECRET
          </div>
        </div>
      </div>
    </div>
  );
}
