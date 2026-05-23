export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-24 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 sm:text-6xl animate-fade-in">
          Andy Malgonne
        </h1>
        <p className="text-xl text-slate-400 text-center max-w-2xl">
          Ingénieur Cloud & DevOps | Portfolio propulsé par Next.js, GitHub Actions, ArgoCD & K3s sur Proxmox.
        </p>
        <div className="flex gap-4 items-center mt-4">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">
            Pipeline CI/CD : En ligne & Automatisé, ça marche hein ? ^^ 
          </span>
        </div>
      </div>
    </main>
  );
}