import Link from 'next/link'
import { Facebook, MessageCircle, Youtube } from 'lucide-react'

// Custom TikTok icon (not in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cardDark border-t border-white/5">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between md:items-center">

          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-gold tracking-wider mb-1 sm:mb-2">
              SIMON TIBRUM
            </h2>
            <p className="text-foreground/60 text-xs sm:text-sm max-w-xs">
              Bringing emotions, passion, and authenticity to every role.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4">
            <Link
              href="https://www.youtube.com/@Simontibrum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-foreground/70 hover:text-gold transition-colors p-2.5 sm:p-3 hover:bg-white/5 rounded-full tap-target flex items-center justify-center"
            >
              <Youtube size={22} />
            </Link>
            <Link
              href="https://wa.me/233241530874"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-foreground/70 hover:text-gold transition-colors p-2.5 sm:p-3 hover:bg-white/5 rounded-full tap-target flex items-center justify-center"
            >
              <MessageCircle size={22} />
            </Link>
            <Link
              href="https://www.facebook.com/share/18r5ZGSeX8/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-foreground/70 hover:text-gold transition-colors p-2.5 sm:p-3 hover:bg-white/5 rounded-full tap-target flex items-center justify-center"
            >
              <Facebook size={22} />
            </Link>
            <Link
              href="https://vt.tiktok.com/ZSQTCYWSH/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-foreground/70 hover:text-gold transition-colors p-2.5 sm:p-3 hover:bg-white/5 rounded-full tap-target flex items-center justify-center"
            >
              <TikTokIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-foreground/40 text-xs sm:text-sm">
          <p>© {currentYear} Simon Tibrum. All rights reserved.</p>
          <p className="tracking-widest uppercase text-xs">Actor · Filmmaker · Ghana</p>
        </div>
      </div>
    </footer>
  )
}
