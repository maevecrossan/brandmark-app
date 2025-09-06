import Image from "next/image";

export default function Projects() {
  return (
    <div className="w-full font-sans">
      {/* Hero */}
      <section className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden rounded-b-lg">
        <Image
          src="/images/brandmark/trade-show-2.jpg"
          alt="Brandmark projects montage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-eurostile-extended text-white text-3xl md:text-5xl font-bold drop-shadow">Projects</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base md:text-lg leading-relaxed text-gray-800">
            We are proud to partner with leading retailers across Ireland to deliver innovative brand experiences that drive engagement and sales. Continue reading for some of our recent highlights.
          </p>
        </div>
      </section>

      {/* Project 1: Secrid Piaggio APE */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Secrid Piaggio APE – Dublin Department Store</h2>
            <p className="mt-3 text-gray-800 leading-relaxed">
              We introduced a bespoke Secrid Piaggio APE installation in a flagship Dublin department store. This unique feature has created a standout focal point in-store, enhancing visibility and boosting sales for the brand.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow">
            <Image
              src="/images/brandmark/APE.jpg"
              alt="Secrid Piaggio APE installation in Dublin department store"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project 2: Secrid Shop-in-Shop */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow">
              <Image
                src="/images/brandmark/a-unit-shop-in-shop.jpg"
                alt="Secrid shop-in-shop build"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Secrid Shop-in-Shop – Dublin Department Store</h2>
            <p className="mt-3 text-gray-800 leading-relaxed">
              Our team completed a full Secrid shop-in-shop build in another leading Dublin department store. This dedicated retail space brings the brand to life, offering customers a premium shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Project 3: Secrid Wall Features */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Secrid Wall Features – Nationwide</h2>
            <p className="mt-3 text-gray-800 leading-relaxed">
              To ensure brand presence across Ireland, we have installed multiple Secrid wall features in key retail locations. These installations highlight the brand’s identity and provide an impactful, consistent in-store presentation.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow">
            <Image
              src="/images/brandmark/secrid-wall.jpg"
              alt="Secrid wall feature installation"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
