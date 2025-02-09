import React, { useState } from 'react'
import MyLogo from './Mylogo'
import { Menu } from 'lucide-react'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const menuTransformClass = isMenuOpen ? 'translate-x-0' : 'translate-x-full'

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <header className="flex items-center justify-between bg-paper px-4 py-2">
        <a className="flex items-center gap-2" href="/">
          <MyLogo className="h-8 w-8 text-coral" />
          <span className="text-lg font-bold">zen browser</span>
        </a>
        <div className="flex flex-row gap-2">
          <ThemeSwitch />
          <button
            id="burger-btn"
            className="p-2 text-dark"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Slide Menu (slides in from the right) */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-40 w-64 transform bg-paper shadow-lg transition-transform duration-300 ${menuTransformClass}`}
      >
        <div className="flex items-center justify-between border-b border-dark px-4 py-2">
          <div className="text-lg font-bold">Menu</div>
          <button
            id="close-btn"
            className="p-2 text-dark"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-4 py-2">
          <ul className="space-y-4">
            {/* Getting Started Links */}
            <li>
              <div className="mb-2 font-bold">Getting Started</div>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="/mods" className="block text-dark hover:text-coral">
                    Zen Mods
                  </a>
                </li>
                <li>
                  <a
                    href="/release-notes"
                    className="block text-dark hover:text-coral"
                  >
                    Release Notes
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/zen-browser"
                    className="block text-dark hover:text-coral"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </li>
            {/* Useful Links */}
            <li>
              <div className="mb-2 font-bold">Useful Links</div>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="/donate"
                    className="block text-dark hover:text-coral"
                  >
                    Donate ❤️
                  </a>
                </li>
                <li>
                  <a href="/about" className="block text-dark hover:text-coral">
                    About Us 🌟
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.zen-browser.app"
                    className="block text-dark hover:text-coral"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/zen-browser"
                    target="_blank"
                    className="block text-dark hover:text-coral"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </li>
            {/* Extra Links */}
            <li>
              <a
                href="/mods"
                className="block font-bold text-dark hover:text-coral"
              >
                Mods
              </a>
            </li>
            <li>
              <a
                href="/download"
                className="block font-bold text-dark hover:text-coral"
              >
                Download
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          id="overlay"
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default MobileNavbar
