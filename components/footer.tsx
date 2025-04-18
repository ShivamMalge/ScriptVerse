import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-white font-bold text-2xl inline-block mb-4 font-mono">
              <span className="text-primary">SCRIPT</span>VERSE
            </Link>
            <p className="text-gray-400 max-w-md font-mono text-sm">
              We build digital experiences from the future. Our team specializes in web development, game-based UIs, and
              custom applicant tracking systems.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "Team", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors font-mono text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-400 font-mono text-sm">scriptverse8@gmail.com</span>
              </li>
              <li className="text-gray-400 font-mono text-sm">
                Hebbal, Bengaluru
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} ScriptVerse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors font-mono">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors font-mono">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
