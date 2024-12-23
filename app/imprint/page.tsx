import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Imprint() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-24 text-white">
        <h1 className="mb-4 text-3xl font-bold font-mono">Impressum</h1>
        <p>
          <strong>Angaben gemäß § 5 TMG:</strong>
        </p>
        <p>
          zündkollektiv
          <br />
          Pappelallee 32A
          <br />
          10437 Berlin
          <br />
        </p>
        <p>
          <strong>Kontakt:</strong>
          <br />
          E-Mail:{" "}
          <a href="mailto:post@zuendkollektiv.org" className="text-red-500">
            post@zuendkollektiv.org
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
