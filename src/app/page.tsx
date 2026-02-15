export default function Home() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-100">Resend CLI</h1>
        <p className="text-lg text-neutral-400">
          An opinionated Resend email API client with JSON output across all 29 commands.
          Designed for LLM agents, scripts, and humans who prefer structured data over dashboards.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Installation</h2>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
          <code className="text-sm text-neutral-300">npm install -g the-resend-cli</code>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Usage</h2>
        <div className="space-y-4">
          <div className="group space-y-2">
            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Send an email</p>
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 text-xs text-neutral-300">
              <code>{`resend emails send --from "Acme <hello@acme.com>" \\
  --to user@example.com \\
  --subject "Welcome!" --html "<h1>Hello</h1>"`}</code>
            </pre>
          </div>

          <div className="group space-y-2">
            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Manage domains</p>
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 text-xs text-neutral-300">
              <code>{`resend domains list`}</code>
            </pre>
          </div>
        </div>
      </section>

      <footer className="pt-8 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
        <p>Built by Shubham Rasal</p>
        <div className="flex gap-4">
          <a href="https://github.com/Shubham-Rasal/resend-cli" className="hover:text-neutral-300 transition-colors">Source</a>
          <a href="https://resend.com" className="hover:text-neutral-300 transition-colors">Resend</a>
        </div>
      </footer>
    </div>
  );
}
