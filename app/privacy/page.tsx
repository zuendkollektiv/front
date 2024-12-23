import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="prose prose-invert flex-grow container mx-auto px-4 py-24 text-white">
        <h1 className="mb-4 text-3xl font-bold font-mono">
          Datenschutzerklärung
        </h1>
        <p>
          <strong>1. Datenschutz auf einen Blick</strong>
        </p>
        <p>
          <strong>Allgemeine Hinweise</strong>
          <br />
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
        <p>
          <strong>Datenerfassung auf unserer Website</strong>
          <br />
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
        </p>
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong>
          <br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
          <br />
          Andere Daten werden automatisch beim Besuch der Website durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
          Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
          betreten.
        </p>
        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong>
          <br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <p>
          <strong>2. Hosting und Content Delivery Networks (CDN)</strong>
        </p>
        <p>
          <strong>Externes Hosting</strong>
          <br />
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v.a. um IP-Adressen, Meta- und Kommunikationsdaten, Vertragsdaten,
          Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
          Website generiert werden, handeln.
          <br />
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
          gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
          lit. b DSGVO) und im Interesse einer sicheren, schnellen und
          effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          <br />
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
          Erfüllung seiner Leistungspflichten erforderlich ist und unsere
          Weisungen in Bezug auf diese Daten befolgen. Wir setzen folgenden
          Hoster ein:
          <br />
          <a
            href="https://vercel.com/docs/security#gdpr"
            className="text-red-500"
          >
            http://vercel.com
          </a>
          <br />
        </p>
        <p>
          <strong>3. Datenerfassung auf dieser Website</strong>
        </p>
        <p>
          <strong>Cookies</strong>
          <br />
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
          kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
          Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
          Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
          automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische
          Lösung durch Ihren Webbrowser erfolgt.
          <br />
          Cookies, die zur Durchführung des elektronischen
          Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen
          erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind,
          werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der
          Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von
          Cookies zur technisch fehlerfreien und optimierten Bereitstellung
          seiner Dienste. Sofern eine entsprechende Einwilligung abgefragt
          wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art.
          6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          <strong>4. Analyse-Tools und Werbung</strong>
        </p>
        <p>
          <strong>Plausible Analytics</strong>
          <br />
          Diese Website nutzt den Webanalysedienst Plausible Analytics, um die
          Nutzung unserer Website zu analysieren und regelmäßig zu verbessern.
          Über die gewonnenen Statistiken können wir unser Angebot verbessern
          und für Sie als Nutzer interessanter ausgestalten. Rechtsgrundlage für
          die Nutzung von Plausible Analytics ist Art. 6 Abs. 1 S. 1 lit. f
          DSGVO.
          <br />
          Plausible Analytics verwendet keine Cookies und erhebt keine
          personenbezogenen Daten. Alle Daten werden anonymisiert und aggregiert
          verarbeitet. Weitere Informationen finden Sie in der
          Datenschutzerklärung von Plausible Analytics unter:{" "}
          <a href="https://plausible.io/data-policy" className="text-red-500">
            https://plausible.io/data-policy
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
