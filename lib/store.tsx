'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Clearance = 'GUEST' | 'MEMBER' | 'DIVINE';

interface ClearanceContextType {
  clearance: Clearance;
  setClearance: (level: Clearance) => void;
}

const ClearanceContext = createContext<ClearanceContextType | undefined>(undefined);

export function ClearanceProvider({ children }: { children: ReactNode }) {
  const [clearance, setClearance] = useState<Clearance>('GUEST');

  return (
    <ClearanceContext.Provider value={{ clearance, setClearance }}>
      {children}
    </ClearanceContext.Provider>
  );
}

export function useClearance() {
  const context = useContext(ClearanceContext);
  if (context === undefined) {
    throw new Error('useClearance must be used within a ClearanceProvider');
  }
  return context;
}
