import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-wide transition-all duration-300 ease-out active:scale-[0.97]'

const variants = {
  primary:
    'bg-bronze text-charcoal px-8 py-4 text-sm sm:text-base hover:bg-bronze-light shadow-lg shadow-black/30',
  outline:
    'border border-bronze/60 text-cream px-8 py-4 text-sm sm:text-base hover:bg-bronze/10',
  text: 'text-bronze px-0 py-0 text-sm sm:text-base underline-offset-4 hover:underline',
}

type Variant = keyof typeof variants

interface CommonProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type ButtonProps = ButtonAsAnchor | ButtonAsButton

/** Pill-shaped CTA button. Renders as an <a> or <button> via the `as` prop. */
export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '', as = 'button', ...rest } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if (as === 'a') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
