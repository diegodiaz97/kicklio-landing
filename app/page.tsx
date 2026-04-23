'use client';

import { useState } from 'react';
import Image from 'next/image';
import { KicklioIcon } from './components/KicklioIcon';

type LangCode = 'es' | 'en' | 'pt' | 'de' | 'it' | 'fr';

const languageOptions: Array<{ code: LangCode; name: string; flag: string }> = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const translations: Record<LangCode, Record<string, string>> = {
  es: {
    heroTag: 'Gestión de equipos',
    heroTitle: 'kicklio - La app para equipos amateur de fútbol',
    heroText:
      'Organiza entrenamientos, formaciones, comunicaciones y posts de Instagram para tu equipo de fútbol en una sola app.',
    ctaPrimary: 'Descargar ahora',
    ctaSecondary: 'Ver características',
    feature1Title: 'Formaciones rápidas',
    feature1Text: 'Crea y comparte alineaciones profesionales al instante.',
    feature2Title: 'Control de jugadores',
    feature2Text: 'Gestión simple de miembros, roles y asistencias.',
    feature3Title: 'Estadísticas clave',
    feature3Text: 'Monitorea rendimiento y resultados en tiempo real.',
    feature4Title: 'Contenido listo',
    feature4Text: 'Diseña posts para Instagram en segundos.',
    screenshotTitle: 'Interfaz clara para todos',
    screenshotText: 'Paneles para entrenador, capitán y organizador de equipo.',
    footerText: 'Construido con ❤️ para equipos de fútbol amateur.',
  },
  en: {
    heroTag: 'Team management',
    heroTitle: 'kicklio - The app for amateur soccer teams',
    heroText:
      'Organize training, lineups, communication and Instagram posts for your soccer team in one app.',
    ctaPrimary: 'Download now',
    ctaSecondary: 'See features',
    feature1Title: 'Quick lineups',
    feature1Text: 'Create and share pro-looking formations instantly.',
    feature2Title: 'Player control',
    feature2Text: 'Easy management for members, roles, and attendance.',
    feature3Title: 'Key stats',
    feature3Text: 'Track performance and results in real time.',
    feature4Title: 'Ready content',
    feature4Text: 'Design Instagram posts in seconds.',
    screenshotTitle: 'Clear interface for everyone',
    screenshotText: 'Dashboards for coach, captain, and team organizer.',
    footerText: 'Built with ❤️ for amateur soccer teams.',
  },
  pt: {
    heroTag: 'Gestão de times',
    heroTitle: 'kicklio - O app para times amadores de futebol',
    heroText:
      'Organize treinos, formações, comunicação e posts do Instagram para seu time de futebol em um só app.',
    ctaPrimary: 'Baixar agora',
    ctaSecondary: 'Ver recursos',
    feature1Title: 'Formações rápidas',
    feature1Text: 'Crie e compartilhe formações profissionais instantaneamente.',
    feature2Title: 'Controle de jogadores',
    feature2Text: 'Gestão simples de membros, funções e presenças.',
    feature3Title: 'Estatísticas chave',
    feature3Text: 'Acompanhe desempenho e resultados em tempo real.',
    feature4Title: 'Conteúdo pronto',
    feature4Text: 'Crie posts para Instagram em segundos.',
    screenshotTitle: 'Interface clara para todos',
    screenshotText: 'Painéis para técnico, capitão e organizador do time.',
    footerText: 'Criado com ❤️ para times de futebol amadores.',
  },
  de: {
    heroTag: 'Teamverwaltung',
    heroTitle: 'kicklio - Die App für Amateur-Fußballteams',
    heroText:
      'Organisiere Training, Aufstellungen, Kommunikation und Instagram-Posts für dein Fußballteam in einer App.',
    ctaPrimary: 'Jetzt herunterladen',
    ctaSecondary: 'Funktionen ansehen',
    feature1Title: 'Schnelle Aufstellungen',
    feature1Text: 'Erstelle und teile professionelle Formationen sofort.',
    feature2Title: 'Spielerkontrolle',
    feature2Text: 'Einfache Verwaltung von Mitgliedern, Rollen und Anwesenheit.',
    feature3Title: 'Wichtige Statistiken',
    feature3Text: 'Verfolge Leistung und Ergebnisse in Echtzeit.',
    feature4Title: 'Fertiger Inhalt',
    feature4Text: 'Gestalte Instagram-Posts in Sekunden.',
    screenshotTitle: 'Klare Oberfläche für alle',
    screenshotText: 'Dashboards für Trainer, Kapitän und Organisator.',
    footerText: 'Entwickelt mit ❤️ für Amateur-Fußballteams.',
  },
  it: {
    heroTag: 'Gestione squadra',
    heroTitle: 'kicklio - L’app per squadre amatoriali di calcio',
    heroText:
      'Organizza allenamenti, formazioni, comunicazioni e post Instagram per la tua squadra di calcio in un’unica app.',
    ctaPrimary: 'Scarica ora',
    ctaSecondary: 'Vedi funzionalità',
    feature1Title: 'Formazioni rapide',
    feature1Text: 'Crea e condividi formazioni professionali in un istante.',
    feature2Title: 'Controllo giocatori',
    feature2Text: 'Gestione semplice di membri, ruoli e presenze.',
    feature3Title: 'Statistiche chiave',
    feature3Text: 'Monitora prestazioni e risultati in tempo reale.',
    feature4Title: 'Contenuti pronti',
    feature4Text: 'Progetta post Instagram in pochi secondi.',
    screenshotTitle: 'Interfaccia chiara per tutti',
    screenshotText: 'Cruscotti per allenatore, capitano e organizzatore.',
    footerText: 'Creato con ❤️ per squadre di calcio amatoriali.',
  },
  fr: {
    heroTag: 'Gestion d’équipe',
    heroTitle: 'kicklio - L’app pour les équipes de football amateur',
    heroText:
      'Organisez entraînements, compositions, communications et posts Instagram pour votre équipe de football dans une seule app.',
    ctaPrimary: 'Télécharger maintenant',
    ctaSecondary: 'Voir les fonctionnalités',
    feature1Title: 'Compositions rapides',
    feature1Text: 'Créez et partagez des compositions professionnelles en un instant.',
    feature2Title: 'Contrôle des joueurs',
    feature2Text: 'Gestion simple des membres, rôles et présences.',
    feature3Title: 'Statistiques clés',
    feature3Text: 'Suivez performance et résultats en temps réel.',
    feature4Title: 'Contenu prêt',
    feature4Text: 'Créez des posts Instagram en quelques secondes.',
    screenshotTitle: 'Interface claire pour tous',
    screenshotText: 'Tableaux de bord pour coach, capitaine et organisateur.',
    footerText: 'Conçu avec ❤️ pour les équipes de football amateur.',
  },
};

export default function Home() {
  const [lang, setLang] = useState<LangCode>('es');
  const [langOpen, setLangOpen] = useState(false);
  const t = translations[lang];
  const currentLanguage = languageOptions.find((option) => option.code === lang)!;

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#8a3044]/30 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <KicklioIcon className="h-12 w-12" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">kicklio</p>
              <p className="text-sm text-slate-300">Team management</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            <a href="#features" className="transition hover:text-white">Características</a>
            <a href="#screenshots" className="transition hover:text-white">Interfaz</a>
            <a href="#download" className="transition hover:text-white">Descargar</a>
          </nav>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((state) => !state)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 shadow-sm transition hover:border-slate-500 hover:bg-slate-900"
            >
              <span className="text-base">{currentLanguage.flag}</span>
              <span>{currentLanguage.name}</span>
              <span className="text-xs">▾</span>
            </button>
            {langOpen ? (
              <div className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => {
                      setLang(option.code);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition ${
                      lang === option.code ? 'bg-slate-900 text-white' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                    }`}
                  >
                    <span className="text-base">{option.flag}</span>
                    <span>{option.name}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(circle_at_top,_rgba(138,48,68,0.25),_transparent_55%)] blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[#327281]/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#8a3044]/30 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md animate-fade-in">
                <span className="rounded-full bg-[#8a3044] px-2.5 py-1 text-xs uppercase tracking-[0.3em] text-white">Nuevo</span>
                <span>{t.heroTag}</span>
              </div>

              <div className="space-y-6 animate-slide-in-up">
                <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                  {t.heroTitle}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  {t.heroText}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#download"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#8a3044] px-8 py-4 text-base font-semibold text-white shadow-[0_24px_60px_rgba(138,48,68,0.24)] transition duration-300 hover:bg-[#a03a57] sm:w-auto"
                >
                  {t.ctaPrimary}
                </a>
                <a
                  href="#features"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-white/5 px-8 py-4 text-base font-semibold text-slate-100 transition duration-300 hover:border-slate-500 hover:bg-white/10 sm:w-auto"
                >
                  {t.ctaSecondary}
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Impacto</p>
                  <p className="mt-4 font-semibold text-white">5x más rápido en planificación</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Alcance</p>
                  <p className="mt-4 font-semibold text-white">200+ equipos administrados</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-6 shadow-xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Control</p>
                  <p className="mt-4 font-semibold text-white">100% control organizativo</p>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -left-10 top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/30 backdrop-blur-xl animate-pulse-glow">
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <KicklioIcon className="h-14 w-14" />
                      <div>
                        <p className="text-sm text-slate-400">kicklio</p>
                        <p className="text-lg font-semibold text-white">App dashboard</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-[#327281]/10 px-3 py-1 text-xs font-semibold text-[#327281]">
                      Versión 1.0
                    </span>
                  </div>
                </div>
                <div className="relative p-6">
                  <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#8a3044]/20 blur-3xl" />
                  <div className="relative overflow-hidden rounded-[1.8rem] bg-slate-950/95 p-6 shadow-inner shadow-white/5">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-sm uppercase tracking-[0.3em]">Estadísticas</span>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">Activo</span>
                    </div>
                    <div className="mt-8 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-4xl font-semibold text-white">92%</p>
                        <p className="mt-2 text-sm text-slate-400">Retención diaria</p>
                      </div>
                      <div className="rounded-3xl bg-[#327281]/10 px-4 py-3 text-sm text-[#327281]">
                        +12% esta semana
                      </div>
                    </div>
                    <div className="mt-8 h-52 rounded-[1.5rem] bg-slate-900 p-4">
                      <div className="h-full rounded-[1.25rem] bg-gradient-to-br from-[#327281] to-[#8a3044]" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 border-t border-white/10 p-6 sm:grid-cols-3">
                  <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-300 ring-1 ring-white/5">
                    <p className="font-semibold text-white">Formaciones</p>
                    <p className="mt-2 text-xs text-slate-500">Alinea tu equipo en segundos</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-300 ring-1 ring-white/5">
                    <p className="font-semibold text-white">Miembros</p>
                    <p className="mt-2 text-xs text-slate-500">Roles y organizadores siempre claros</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-300 ring-1 ring-white/5">
                    <p className="font-semibold text-white">Historial</p>
                    <p className="mt-2 text-xs text-slate-500">Resultados y estadísticas al instante</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="overflow-hidden bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#8a3044]">Por qué kicklio</p>
                <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  La central de gestión para equipos amateur de fútbol.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Organización, comunicación y contenido visual en una misma plataforma, con apariencia limpia y moderna.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: t.feature1Title, text: t.feature1Text, accent: '#8a3044' },
                  { title: t.feature2Title, text: t.feature2Text, accent: '#327281' },
                  { title: t.feature3Title, text: t.feature3Text, accent: '#8a3044' },
                  { title: t.feature4Title, text: t.feature4Text, accent: '#327281' },
                ].map((item) => (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200/90 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg animate-slide-in-up hover:scale-105">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: item.accent + '20' }}>
                      <span className="text-xl" style={{ color: item.accent }}>•</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="screenshots" className="py-20 bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#8a3044]">Pantallas</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Organiza tu equipo con estilo y claridad.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
                Interfaz visualmente atractiva y fácil de usar para entrenadores, organizadores y jugadores.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {['01', '02', '03'].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-2 animate-slide-in-up hover:shadow-2xl hover:shadow-[#8a3044]/30">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#327281]/20 to-transparent" />
                  <div className="relative h-72 rounded-[1.75rem] bg-slate-950 p-6">
                    <div className="mb-6 flex items-center justify-between text-sm text-slate-400">
                      <span>Mockup {item}</span>
                      <span className="rounded-full border border-slate-700/80 px-2 py-1">Beta</span>
                    </div>
                    <div className="flex h-full items-end justify-center">
                      <div className="h-40 w-full rounded-[1.5rem] bg-gradient-to-br from-[#8a3044] via-[#327281] to-slate-800 p-4 shadow-inner shadow-black/40">
                        <div className="h-full w-full rounded-[1.25rem] bg-slate-950/95" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="py-24 bg-slate-900">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#8a3044]">Lanzamiento</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Todo lo que tu app necesita para destacar.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                kicklio te ayuda a gestionar entrenamientos, jugadores, resultados y contenido con una experiencia profesional.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-[16px] bg-gradient-to-br from-[#8a3044] to-[#9d3957] px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(138,48,68,0.5)] active:scale-95 animate-scale-in"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                    <path d="M16.365 1.43c0 1.14-.438 2.16-1.143 2.89-.76.81-1.972 1.545-3.139 1.345-.15-.017-.31-.033-.472-.033-.29 0-.6.03-.913.1-.36.08-.7.22-1 .41-.25.16-.47.38-.64.64-.18.28-.28.6-.28.97v1.18c0 .74-.08 1.48-.24 2.18-.18.82-.48 1.6-.91 2.3-.44.71-1.05 1.34-1.72 1.81-.86.64-2 .1-2.15-1.12-.05-.4-.12-.82-.2-1.23-.14-.8-.29-1.6-.48-2.38-.14-.6-.44-1.11-.88-1.52-.6-.54-1.47-.7-2.24-.3-.83.44-1.51 1.2-1.94 2.1-.54 1.2-.68 2.56-.4 3.82.32 1.4 1.1 2.68 2.22 3.6 1.17 1 2.56 1.63 3.96 1.84.06 0 .12.01.18.01.61 0 1.2-.12 1.77-.35 1.05-.4 2-.98 2.85-1.72.9-.78 1.62-1.72 2.12-2.78.56-1.2.84-2.49.84-3.8 0-.19-.01-.38-.02-.56-.01-.22-.02-.45-.03-.67h.01zm-2.7 14.1c-.37.9-.93 1.75-1.65 2.45-.54.53-1.12.96-1.7 1.24-.57.28-1.15.43-1.74.43-.47 0-.94-.09-1.38-.27-.45-.19-.87-.44-1.25-.75-.38-.31-.7-.68-.95-1.11-.3-.47-.53-.98-.7-1.52-.18-.55-.28-1.12-.3-1.7-.03-.88.18-1.74.64-2.45.43-.66 1.03-1.2 1.74-1.52.58-.26 1.2-.4 1.82-.4.47 0 .94.08 1.39.24.45.16.86.4 1.23.72.38.33.69.72.94 1.16.3.59.48 1.25.54 1.94.04.37.05.74.04 1.12v.06c0 .04 0 .08-.01.12-.02.25-.04.5-.07.75zm1.22-8.4c-.5.6-1.06 1.14-1.68 1.62-.61.48-1.29.82-2.03.98-.13.03-.26.05-.39.05-.32 0-.64-.07-.93-.2-.63-.28-1.14-.79-1.49-1.42-.34-.63-.49-1.34-.41-2.05.02-.27.07-.53.14-.79.09-.34.21-.67.36-.99.45-.94 1.07-1.75 1.83-2.34.61-.47 1.3-.74 2.04-.8.24-.02.48-.02.72 0 .63.03 1.24.2 1.79.48.82.42 1.53 1.04 2.05 1.8.26.37.47.78.62 1.2.16.45.24.92.23 1.4-.01.55-.2 1.1-.55 1.56z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200">App Store</p>
                    <p className="font-semibold">Descargar</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-[16px] border-2 border-slate-600 bg-slate-900/50 px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-900 hover:shadow-[0_20px_40px_rgba(50,114,129,0.3)] active:scale-95 animate-scale-in"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                    <path d="M5.8 4.6l10.3 4.8-10.3 4.8V4.6zm.4 10.5l10.7 5-1.1-4.7-9.6-3.3zM17.1 4.3l-1.1 4.8 1.1 4.7 5-2.4c.5-.2.8-.8.8-1.4 0-.6-.3-1.2-.8-1.4l-5-2.4z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Google Play</p>
                    <p className="font-semibold">Obtener</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/70 bg-slate-950 px-4 py-12 text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <KicklioIcon className="h-12 w-12" />
            <div>
              <p className="text-lg font-semibold text-white">kicklio</p>
              <p className="text-sm text-slate-500">Plataforma móvil premium</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <a href="#" className="transition hover:text-white">Privacidad</a>
            <a href="#" className="transition hover:text-white">Términos</a>
            <a href="#" className="transition hover:text-white">Contacto</a>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800/70 pt-8 text-center text-sm text-slate-500">
          <p>{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}
