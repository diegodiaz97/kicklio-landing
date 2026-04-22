'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <Image src="/kicklio-icon.png" alt="Kicklio icon" width={40} height={40} className="rounded-xl object-cover" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Kicklio</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#B84D6F] font-medium transition-colors">Features</a>
              <a href="#screenshots" className="text-gray-600 hover:text-[#B84D6F] font-medium transition-colors">Galería</a>
              <a href="#download" className="text-gray-600 hover:text-[#B84D6F] font-medium transition-colors">Descargar</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-8">
              <div className="w-28 h-28 rounded-3xl flex items-center justify-center shadow-xl shadow-[#B84D6F]/20 overflow-hidden">
                <Image src="/kicklio-icon.png" alt="Kicklio icon" width={112} height={112} className="rounded-3xl object-cover" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bienvenido a Kicklio
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              La app móvil innovadora construida con Kotlin Multiplatform Mobile para una experiencia fluida en iOS y Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#download" className="bg-[#B84D6F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#9c3a5f] transition-colors shadow-lg shadow-[#B84D6F]/10">
                Descargar Ahora
              </a>
              <a href="#features" className="border border-[#B84D6F] text-[#4A7BA7] px-8 py-3 rounded-full font-semibold hover:bg-[#f8f5f8] transition-colors">
                Conocer Más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir Kicklio?</h3>
            <p className="text-lg text-gray-600">Experimenta el poder del desarrollo multiplataforma con estilo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#B84D6F]/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#B84D6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ultrarrápida</h4>
              <p className="text-gray-600">Rendimiento optimizado en todos los dispositivos con velocidad nativa.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#4A7BA7]/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4A7BA7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Multiplataforma</h4>
              <p className="text-gray-600">Un código para iOS y Android, construido con tecnología KMM.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-900/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Confiable</h4>
              <p className="text-gray-600">Aplicación segura y estable con actualizaciones constantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Explora Kicklio</h3>
            <p className="text-lg text-gray-600">Interfaz moderna y diseño intuitivo</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Pantalla 1</span>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Pantalla 2</span>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Pantalla 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">¿Listo para comenzar?</h3>
          <p className="text-xl text-gray-400 mb-8">Descarga Kicklio ahora y experimenta el futuro de las apps móviles.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a href="#" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z"/>
                <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"/>
                <path d="M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z"/>
                <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <Image src="/kicklio-icon.png" alt="Kicklio icon" width={40} height={40} className="rounded-xl object-cover" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Kicklio</h4>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#B84D6F] transition-colors">Privacidad</a>
              <a href="#" className="text-gray-600 hover:text-[#B84D6F] transition-colors">Términos</a>
              <a href="#" className="text-gray-600 hover:text-[#B84D6F] transition-colors">Contacto</a>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center text-gray-600 text-sm">
            <p>Construido con ❤️ usando Kotlin Multiplatform Mobile</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
