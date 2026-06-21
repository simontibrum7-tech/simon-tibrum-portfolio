import Link from 'next/link'
import { Facebook, MessageCircle, Youtube } from 'lucide-react'

// Placeholder for TikTok icon as it's not standard in lucide-react yet
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
    <footer className="bg-cardDark py-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-serif font-bold text-gold tracking-wider mb-2">
            SIMON TIBRUM
          </h2>
          <p className="text-foreground/60 text-sm">
            Bringing emotions, passion, and authenticity to every role.
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="https://www.youtube.com/@Simontibrum" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-gold transition-colors p-2 hover:bg-white/5 rounded-full">
            <Youtube size={24} />
          </Link>
          <Link href="https://wa.me/233241530874" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-gold transition-colors p-2 hover:bg-white/5 rounded-full">
            <MessageCircle size={24} />
          </Link>
          <Link href="https://www.facebook.com/share/18r5ZGSeX8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-gold transition-colors p-2 hover:bg-white/5 rounded-full">
            <Facebook size={24} />
          </Link>
          <Link href="https://vt.tiktok.com/ZSQTCYWSH/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-gold transition-colors p-2 hover:bg-white/5 rounded-full">
            <TikTokIcon className="w-6 h-6" />
          </Link>
        </div>

      </div>
      
      <div className="container mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-white/5 text-center text-foreground/50 text-sm">
        <p>Copyright © {currentYear} Simon Tibrum. All rights reserved.</p>
      </div>
    </footer>
  )
}
