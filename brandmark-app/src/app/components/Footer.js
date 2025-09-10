"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ObfuscatedEmail({ user, domain, tld, label, className = "", clickToReveal = false, revealLabel = "Reveal email" }) {
  const [addr, setAddr] = useState("");
  const [revealed, setRevealed] = useState(!clickToReveal);

  useEffect(() => {
    if (!clickToReveal) {
      // Assemble on client to avoid exposing in SSR HTML
      setAddr(`${user}\u0040${domain}.${tld}`);
    }
  }, [user, domain, tld, clickToReveal]);

  const onReveal = () => {
    if (!revealed) {
      setAddr(`${user}\u0040${domain}.${tld}`);
      setRevealed(true);
    }
  };

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={onReveal}
        className={`underline text-teal hover:text-black focus:outline-none focus:ring-2 focus:ring-teal/50 rounded ${className}`}
        aria-label={`Reveal email for ${user}`}
      >
        {revealLabel}
      </button>
    );
  }

  if (!addr) return <span className="sr-only">Email hidden until page loads</span>;
  return (
    <a
      href={`mailto:${addr}`}
      className={`underline hover:text-teal ${className}`}
      rel="nofollow noopener"
    >
      {label || addr}
    </a>
  );
}

function ObfuscatedTel({ country = "+353", number, label, className = "" }) {
  const [href, setHref] = useState("");
  const [display, setDisplay] = useState("");
  useEffect(() => {
    const digits = `${country}${number}`.replace(/\s+/g, "");
    setHref(`tel:${digits}`);
    // Simple readable mask e.g. +353 879 428 719
    const pretty = `${country} ${number}`;
    setDisplay(pretty);
  }, [country, number]);
  if (!href) return <span className="sr-only">Phone hidden until page loads</span>;
  return (
    <a href={href} className={`hover:text-teal ${className}`} rel="nofollow noopener">
      {label || display}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="font-sans border-t border-gray-200 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        {/* Contact section flowing landscape */}
        <section>
          <h5 className="font-eurostile-extended text-sm tracking-wide text-gray-500 mb-4">CONTACT</h5>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <li className="border border-gray-200 rounded p-4">
              <div className="font-semibold">Lee Graham</div>
              <div className="italic">Director/Agent</div>
              <div>
                <ObfuscatedEmail user="lee" domain="brandmark" tld="ie" clickToReveal revealLabel="Click to view email" />
              </div>
              <div>
                <ObfuscatedTel country="+353" number="879 428 719" />
              </div>
            </li>
            <li className="border border-gray-200 rounded p-4">
              <div className="font-semibold">Lucy Dunne</div>
              <div className="italic">Associate Director</div>
              <div>
                <ObfuscatedEmail user="lucy" domain="brandmark" tld="ie" clickToReveal revealLabel="Click to reveal email" />
              </div>
              <div>
                <ObfuscatedTel country="+353" number="873 978 358" />
              </div>
            </li>
            <li className="border border-gray-200 rounded p-4">
              <div className="font-semibold">Gerry Graham</div>
              <div className="italic">Road Sales</div>
              <div>
                <ObfuscatedEmail user="gerry" domain="brandmark" tld="ie" clickToReveal revealLabel="Click to reveal" />
              </div>
            </li>
          </ul>
        </section>

        {/* Address with small map on the right */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 lg:col-span-2">
            <h5 className="font-eurostile-extended text-sm tracking-wide text-gray-500 mb-2">VISIT US:</h5>
            <a
              href="https://maps.app.goo.gl/TufUvwNdD5p68ryw8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Brandmark Agencies location in Google Maps"
              className="block hover:underline"
            >
              <address className="not-italic leading-relaxed text-gray-800 hover:text-teal">
                <div>Brandmark Agencies</div>
                <div>Suite 5, Unit 14 Fashion City</div>
                <div>Ballymount</div>
                <div>Dublin, Ireland</div>
                <div>D24X6CT</div>
              </address>
            </a>
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <div className="relative w-full h-48 md:h-40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.0716876157253!2d-6.352670720569049!3d53.306162390136336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670b58bf5ab163%3A0xbf2812d14f01de0d!2sBrandmark%20Agencies!5e0!3m2!1sen!2sie!4v1757061730853!5m2!1sen!2sie"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social at the very bottom */}
        <section>
          <h5 className="font-eurostile-extended text-sm tracking-wide text-gray-500 mb-2">SOCIAL</h5>
          <div className="flex items-center gap-4 text-2xl text-gray-700">
            <a aria-label="Instagram" className="hover:text-black" href="https://www.instagram.com/brandmarkagencies/?hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a aria-label="LinkedIn" className="hover:text-black" href="https://www.linkedin.com/company/brandmark-agencies/?originalSubdomain=ie" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="mt-3 text-sm text-gray-600">@Brandmark Agencies</div>
        </section>

        <div className="text-xs text-gray-500 border-t border-gray-200 pt-4 text-center">
          © {new Date().getFullYear()} Brandmark Agencies. All rights reserved.
          <p className="mt-2">
            Disclaimer: Brand names, logos, and images are trademarks or copyrighted works of their respective owners and are used with permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
