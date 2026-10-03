import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function NotFoundPage() {
  return (
    <main>
      <PageHero eyebrow="404" title="This Page Took a Rest Day">
        The page you're looking for doesn't exist — but the gym's still open.
      </PageHero>
      <section className="bg-cream px-5 py-14 text-center">
        <Link
          to="/"
          className="inline-flex rounded-lg bg-ink px-7 py-3.5 text-[15px] font-sans font-bold text-cream hover:bg-espresso"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
