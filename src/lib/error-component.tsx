import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "Something went wrong. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-paper px-6 text-center text-ink">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">Error</p>
      <h1 className="font-display text-3xl text-forest">Off the plat.</h1>
      <p className="max-w-md text-sm text-ink-soft">{errorMessage(error)}</p>
      <a href="/" className="mt-4 text-sm text-sage underline-offset-4 hover:underline">
        Back to Parkview
      </a>
    </main>
  );
}
