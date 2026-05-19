'use client';

import React, { createContext, useContext, useState } from 'react';

export type ClearanceLevel = 'GUEST' | 'MEMBER' | 'DIVINE';

interface ClearanceContextType {
  clearance: ClearanceLevel;
  setClearance: (level: ClearanceLevel) => void;
}

const ClearanceContext = createContext<ClearanceContextType | undefined>(undefined);

export function ClearanceProvider({ children }: { children: React.ReactNode }) {
  const [clearance, setClearance] = useState<ClearanceLevel>('GUEST');

  return (
    <ClearanceContext.Provider value={{ clearance, setClearance }}>
      {children}
    </ClearanceContext.Provider>
  );
}

export function useClearance() {
  const context = useContext(ClearanceContext);
  if (!context) {
    throw new Error('useClearance must be used within ClearanceProvider');
  }
  return context;
}
