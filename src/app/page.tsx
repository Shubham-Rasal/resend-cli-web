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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group space-y-2">
            <p className="text-sm font-medium text-neutral-300">Emails</p>
            <div className="space-y-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-[10px] text-neutral-400 font-mono">
              <p>resend emails send [options]</p>
              <p>resend emails send-batch [options]</p>
              <p>resend emails get &lt;id&gt;</p>
              <p>resend emails update &lt;id&gt;</p>
              <p>resend emails cancel &lt;id&gt;</p>
            </div>
          </div>

          <div className="group space-y-2">
            <p className="text-sm font-medium text-neutral-300">Domains</p>
            <div className="space-y-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-[10px] text-neutral-400 font-mono">
              <p>resend domains create [options]</p>
              <p>resend domains list</p>
              <p>resend domains get &lt;id&gt;</p>
              <p>resend domains update &lt;id&gt;</p>
              <p>resend domains delete &lt;id&gt;</p>
              <p>resend domains verify &lt;id&gt;</p>
            </div>
          </div>

          <div className="group space-y-2">
            <p className="text-sm font-medium text-neutral-300">API Keys</p>
            <div className="space-y-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-[10px] text-neutral-400 font-mono">
              <p>resend api-keys create [options]</p>
              <p>resend api-keys list</p>
              <p>resend api-keys delete &lt;id&gt;</p>
            </div>
          </div>

          <div className="group space-y-2">
            <p className="text-sm font-medium text-neutral-300">Audiences</p>
            <div className="space-y-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-[10px] text-neutral-400 font-mono">
              <p>resend audiences create [options]</p>
              <p>resend audiences list</p>
              <p>resend audiences get &lt;id&gt;</p>
              <p>resend audiences delete &lt;id&gt;</p>
            </div>
          </div>

          <div className="group space-y-2">
            <p className="text-sm font-medium text-neutral-300">Contacts</p>
            <div className="space-y-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-[10px] text-neutral-400 font-mono">
              <p>resend contacts create [options]</p>
              <p>resend contacts list [options]</p>
              <p>resend contacts get &lt;id&gt;</p>
              <p>resend contacts update &lt;id&gt;</p>
              <p>resend contacts delete &lt;id&gt;</p>
            </div>
          </div>

          <div className="group space-y-2">
            <p className="text-sm font-medium text-neutral-300">Broadcasts</p>
            <div className="space-y-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 text-[10px] text-neutral-400 font-mono">
              <p>resend broadcasts create [options]</p>
              <p>resend broadcasts list</p>
              <p>resend broadcasts get &lt;id&gt;</p>
              <p>resend broadcasts update &lt;id&gt;</p>
              <p>resend broadcasts send &lt;id&gt;</p>
              <p>resend broadcasts delete &lt;id&gt;</p>
            </div>
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
