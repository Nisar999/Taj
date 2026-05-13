import React from 'react';
import Link from 'next/link';
import { Member, MemberRole } from '@/lib/data';

interface CommitteeMemberProps {
  member: Member;
}

export default function CommitteeMember({ member }: CommitteeMemberProps) {
  const roleStyles: Record<MemberRole, string> = {
    'The Divine': 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)] ring-2 ring-yellow-400',
    'Founding Member': 'border-slate-400',
    'COO': 'border-blue-400',
    'Impact Player': 'border-red-500',
    'Shadow Member': 'border-zinc-700 opacity-60 grayscale hover:grayscale-0 transition-all duration-500',
  };

  return (
    <Link
      href={`/committee/${member.id}`}
      className="group relative block h-64 w-40 md:w-48 cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className={`
        relative h-full w-full overflow-hidden rounded-sm border-2 bg-zinc-900 p-3 md:p-4
        transition-all duration-300
        group-hover:rotate-2 group-hover:translate-x-1 group-hover:-translate-y-1
        ${roleStyles[member.role]}
      `}>
        {/* Folder Tab appearance */}
        <div className="absolute -top-2 left-0 h-4 w-20 bg-zinc-800 border-x-2 border-t-2 border-zinc-700 rounded-t-sm" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="relative aspect-square w-20 overflow-hidden rounded-full border-2 border-zinc-700">
            <img
              src={member.imageUrl}
              alt={member.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${member.role === 'Shadow Member' ? 'opacity-40 group-hover:opacity-100' : ''}`}
            />
          </div>

          <div className="text-center">
            <h3 className="font-serif text-lg text-zinc-100 leading-tight">{member.name}</h3>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">{member.role}</p>
          </div>
        </div>

        {/* Decorative "Glitch" for Shadow Member */}
        {member.role === 'Shadow Member' && (
          <div className="absolute inset-0 pointer-events-none mix-blend-difference animate-pulse bg-gradient-to-br from-transparent via-zinc-800 to-transparent opacity-30" />
        )}

        {/* Decorative "Glow" for Divine */}
        {member.role === 'The Divine' && (
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1),transparent_70%)]" />
        )}
      </div>
    </Link>
  );
}
