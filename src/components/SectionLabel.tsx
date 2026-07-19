interface SectionLabelProps {
  children: string
  className?: string
  /** Use 'light' on light-section backgrounds so the bronze text keeps AA contrast. */
  tone?: 'dark' | 'light'
}

/** Small uppercase bronze label wrapped in parentheses, e.g. "(THE RESIDENCES)". */
export default function SectionLabel({ children, className = '', tone = 'dark' }: SectionLabelProps) {
  const toneClass = tone === 'light' ? 'section-label-on-light' : 'section-label'
  return (
    <p className={`${toneClass} text-xs sm:text-sm ${className}`}>
      {children}
    </p>
  )
}
