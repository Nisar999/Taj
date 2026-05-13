import React from 'react';
import CommitteeMember from '@/components/CommitteeMember';
import { members } from '@/lib/data';

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 p-4 md:p-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-4 tracking-tight">Power Structure</h1>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-medium">
            The Digital Directory of the United Club
          </p>
          <div className="mt-8 h-px w-24 bg-zinc-800 mx-auto" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
          {members.map((member) => (
            <CommitteeMember key={member.id} member={member} />
          ))}
        </div>

        <footer className="mt-24 text-center text-zinc-600 text-xs font-serif italic">
          Access restricted to High-Tasting authorities.
        </footer>
      </div>
    </div>
  );
}
