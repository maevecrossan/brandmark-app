"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="font-sans border-t border-gray-200 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
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

          <div>
            <h5 className="font-eurostile-extended text-sm tracking-wide text-gray-500 mb-2">CONTACT</h5>
            <ul className="space-y-2">
              <li>
                <div className="font-semibold">Lee Graham</div>
                <div>
                  <a href="mailto:lee@brandmark.ie" className="underline hover:text-teal">lee@brandmark.ie</a>
                </div>
                <div>
                  <a href="tel:+353879428719" className="hover:text-teal">+353 879428719</a>
                </div>
              </li>
              <li className="pt-2">
                <div className="font-semibold">Lucy Dunne</div>
                <div>
                  <a href="mailto:lucy@brandmark.ie" className="underline hover:text-teal">lucy@brandmark.ie</a>
                </div>
                <div>
                  <a href="tel:+353873978358" className="hover:text-teal">+353 873978358</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
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
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow">
          <div className="relative w-full aspect-[16/9]">
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

        <div className="text-xs text-gray-500 border-t border-gray-200 pt-4 text-center">
          © {new Date().getFullYear()} Brandmark. All rights reserved.
          <p className="mt-2">
            Disclaimer: Brand names, logos, and images are trademarks or copyrighted works of their respective owners and are used with permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
