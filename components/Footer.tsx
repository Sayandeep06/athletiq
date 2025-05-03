import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo & Name */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Athletiq
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Athletiq — All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-2 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="/help" className="hover:text-primary transition-colors">Support</Link>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-md bg-background/50 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
