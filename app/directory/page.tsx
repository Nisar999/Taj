import { committeeMembers } from '@/lib/data';
import { Dossier } from '@/components/Dossier';
import { ClearanceSelector } from '@/components/ClearanceSelector';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Committee Directory - The Taj United Club',
  description: 'Meet the distinguished committee members of The Taj United Club',
};

export default function DirectoryPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20 pb-12">
        {/* Header Section */}
        <div className="bg-charcoal border-b-4 border-chili-red py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-3">
            COMMITTEE DIRECTORY
          </h1>
          <p className="text-saffron font-serif italic max-w-2xl mx-auto">
            The distinguished leaders and visionaries guiding The Taj United Club
          </p>
          <div className="mt-4 h-1 w-24 bg-chili-red mx-auto" />
        </div>

        {/* Members Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, index) => (
              <Dossier
                key={member.id}
                {...member}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center py-8 text-cream-dark font-serif italic text-sm">
          <p>Note: Some profiles may be restricted based on your clearance level.</p>
        </div>
      </div>
      <ClearanceSelector />
    </>
  );
}
