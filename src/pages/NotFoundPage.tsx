import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <section className="texture-grain flex min-h-[70vh] items-center bg-espresso-900 text-cream-50">
      <div className="container-x relative z-10 py-20 text-center">
        <p className="font-display text-[clamp(5rem,18vw,11rem)] leading-none font-semibold text-clay-400">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
          Like yesterday's croissants, this page is gone.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream-100/70">
          The link may be stale, or the address mistyped. Everything that matters — coffee, pastries, tables — is
          one click away.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/" variant="light" size="lg">
            Back to home
          </Button>
          <Button to="/menu" variant="outlineLight" size="lg">
            See the menu
          </Button>
        </div>
      </div>
    </section>
  );
}
