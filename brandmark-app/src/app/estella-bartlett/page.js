"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function EstellaBartlettPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
        <Image
          src="/images/estella-bartlett/estella-bartlett-12.webp"
          alt="Estella Bartlett lifestyle hero"
          aria-describedby="eb-hero-credit"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        <p id="eb-hero-credit" className="sr-only">Images © Estella Bartlett — used with permission.</p>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
            <div className="inline-block">
              <Image
                src="/images/estella-bartlett/eb_logo.png"
                alt="Estella Bartlett logo"
                width={260}
                height={64}
                priority
                sizes="(min-width: 768px) 260px, 200px"
                className="drop-shadow object-contain w-[200px] h-auto md:w-[260px] invert"
              />
            </div>
            <p className="mt-3 text-white/90 max-w-xl">
              Delicate, meaningful jewellery and accessories designed in London.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Everyday elegance</h2>
        <p className="mt-3 text-gray-800 leading-relaxed">
          Estella Bartlett is a British jewellery and accessories brand founded in 2011 by siblings Nick and Louise Bartlett.
          The brand is renowned for delicate, whimsical designs that blend timeless elegance with playful charm.
        </p>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
        <div className="bg-mist/70 rounded-lg p-6 md:p-8">
          <h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About Estella Bartlett</h3>
          <div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
            <p>
              Estella Bartlett is a British jewellery and accessories brand founded in 2011 by siblings Nick and Louise Bartlett. Based in London, the brand is renowned for its delicate, whimsical designs that blend timeless elegance with playful charm. Each piece is thoughtfully crafted to evoke positive emotions and serve as a meaningful addition to everyday style.
            </p>
            <p>
              The brand’s mission is to create beautiful, high-quality jewellery that is both accessible and inspiring. Drawing inspiration from nature, travel, and childhood memories, Estella Bartlett’s collections feature motifs like stars, hearts, bees, and flowers, often adorned with semi-precious stones and intricate detailing.
            </p>
            <p>
              Sustainability and social responsibility are integral to Estella Bartlett’s ethos. The company utilizes 80% recycled brass in its jewellery production and partners with organizations like Traidcraft Exchange to promote ethical practices and reduce waste. Additionally, Estella Bartlett collaborates with charities such as the Young Women’s Trust and Teens Unite, supporting initiatives that empower young women and cancer survivors.
            </p>
            <p>
              Estella Bartlett’s commitment to quality, affordability, and meaningful design has garnered a loyal following. Their pieces are not only stylish accessories but also thoughtful gifts, each presented in signature packaging that reflects the brand’s attention to detail and dedication to creating a memorable customer experience.
            </p>

            <a
              href="https://estellabartlett.com/"
              className="inline-block mt-4 text-teal hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the Estella Bartlett website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
          <Image
              src="/images/estella-bartlett/estella-bartlett-2.jpg"
              alt="Estella Bartlett product shot 2"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-[center_70%] md:object-[center_60%]"
            />
          </div>
          <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
          <Image
              src="/images/estella-bartlett/estella-bartlett-3.jpg"
              alt="Estella Bartlett product shot 3"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-bottom"
            />
          </div>
          <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
          <Image
              src="/images/estella-bartlett/estella-bartlett-4.jpg"
              alt="Estella Bartlett product shot 4"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-[center_70%]"
            />
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
              src="/images/estella-bartlett/estella-bartlett-5.jpg"
              alt="Estella Bartlett lifestyle 5"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-[center_70%] md:object-[center_60%]"
            />
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
              src="/images/estella-bartlett/estella-bartlett-6.jpg"
              alt="Estella Bartlett lifestyle 6"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-[center_80%] md:object-[center_70%]"
            />
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
              src="/images/estella-bartlett/estella-bartlett-7.jpg"
              alt="Estella Bartlett lifestyle 7"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
