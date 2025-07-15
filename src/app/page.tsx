import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with celestial gradient */}
      <Header />
      
      {/* Main content */}
      <div className="px-8 py-12 max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-playfair font-bold tracking-tight">hi!! i&apos;m alisa.</h1>
          </div>
          <p className="text-lg mb-2 font-mono">i&apos;m 19, currently toronto {'->'} sf</p>
        </section>

        {/* Current Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold mb-4">CURRENTLY I AM:</h2>
          <ul className="space-y-2 text-base font-mono">
            <li>• interning at <span className="underline"><Image
              src="/icons/zoox.jpeg"
              alt="Zoox"
              width={20}
              height={20}
              className="rounded-sm inline-block align-middle mx-1"
            />zoox</span> working on the software powering robo-taxis!!</li>
            <li>• frolicking around <span className="underline">sf</span> and soaking up the sunnies 🌟</li>
            <li>• painting <span className="underline">water-colour</span> cards for loved ones</li>
            <li>• foosball enjoyer &lt;3</li>
            <li>• studying <span className="underline">systems design engineering</span> @ university of waterloo</li>
          </ul>
        </section>

        {/* Previous Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold mb-4">PREVIOUSLY I:</h2>
          <ul className="space-y-2 text-base font-mono">
            <li>• was at <span className="underline"><Image
              src="/icons/arup.jpeg"
              alt="Arup"
              width={20}
              height={20}
              className="rounded-sm inline-block align-middle mx-1"
            />arup</span> and <span className="underline"><Image
              src="/icons/blackberry.jpeg"
              alt="Blackberry"
              width={20}
              height={20}
              className="rounded-sm inline-block align-middle mx-1"
            />blackberry</span> as a swe</li>
            <li>• led <span className="underline">petmap</span> as a tech lead, a non-profit cross-functional team of pms, designers and devs to build a student therapy dog platform</li>
            <li>• reached level 3 of <span className="underline">improv foundations</span></li>
            <li>• made an autonomous <span className="underline">sumo-bot</span></li>
            <li>• learning and building an <span className="underline">interpreter</span> w/ go</li>
          </ul>
        </section>

        {/* Looking for Section */}
        <section className="mb-12">
          <p className="text-base font-mono">looking for winter 2026 swe internship opportunities!</p>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold mb-4">SOME PROJECTS:</h2>
          <ul className="space-y-2 text-base font-mono">
            <li>• <span className="underline">petmap</span> - student therapy dog platform</li>
            <li>• <span className="underline">tranSLate</span> - ASL language translator app</li>
            <li>• <span className="underline">autonomous sumobot</span> - robotics project</li>
            <li>• <span className="underline">duskterpreter</span> - my own programming language built w/ go</li>
            <li>• <span className="underline">rsa encryption</span> - cryptography project</li>
            <li>• <span className="underline">a whole new world</span> - java game</li>
            <li>• <span className="underline">traffic light model</span> - hardware project</li>
          </ul>
        </section>

        {/* Community Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-playfair font-bold mb-4">COMMUNITY:</h2>
          <ul className="space-y-2 text-base font-mono">
            <li>• <span className="underline">creative destruction lab venture shadow</span> - 2022</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 text-base font-mono">
            <Link href="https://www.linkedin.com/in/wu-alisa/" target="_blank" className="underline hover:no-underline">linkedin</Link>
            <Link href="https://github.com/areuie" target="_blank" className="underline hover:no-underline">github</Link>
            <Link href="https://x.com/_alisawu" target="_blank" className="underline hover:no-underline">twitter</Link>
            <Link href="mailto:alisa.wu@uwaterloo.ca" className="underline hover:no-underline">email</Link>
          </div>
        </section>

        {/* Footer */}
        <section className="flex justify-between text-sm font-mono">
          <Link href="#" className="underline hover:no-underline">made with ❤️</Link>
        </section>
      </div>
    </div>
  );
}
