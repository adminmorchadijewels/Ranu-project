import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

interface BrochureModalContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const BrochureModalContext = createContext<BrochureModalContextValue | null>(null)

/** Wraps the app so any "Download Brochure" trigger (top bar, hero, sticky mobile bar) can open the same lead-capture dialog. */
export function BrochureModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const value = useMemo(
    () => ({ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }),
    [isOpen],
  )

  return <BrochureModalContext.Provider value={value}>{children}</BrochureModalContext.Provider>
}

export function useBrochureModal(): BrochureModalContextValue {
  const ctx = useContext(BrochureModalContext)
  if (!ctx) {
    throw new Error('useBrochureModal must be used within a BrochureModalProvider')
  }
  return ctx
}
