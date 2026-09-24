import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AUTO GUIDE - Cẩm nang ô tô Việt Nam',
  description: 'Thông số, giá xe, so sánh và kinh nghiệm ô tô được trình bày rõ ràng, dễ hiểu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="bg-slate-950 text-slate-200 font-sans antialiased min-h-screen flex flex-col selection:bg-rose-600 selection:text-white">
        <header className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50 shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-black bg-gradient-to-r from-rose-600 to-red-500 bg-clip-text text-transparent tracking-tight">AUTO GUIDE</Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-slate-300 hover:text-rose-500 font-medium transition-colors duration-300 hover:-translate-y-0.5 transform inline-block">Trang chủ</Link>
                <Link href="/cars" className="text-slate-300 hover:text-rose-500 font-medium transition-colors duration-300 hover:-translate-y-0.5 transform inline-block">Xe ô tô</Link>
                <Link href="/faq" className="text-slate-300 hover:text-rose-500 font-medium transition-colors duration-300 hover:-translate-y-0.5 transform inline-block">FAQ</Link>
              </nav>
            </div>
          </div>
        </header>
        <div className="fixed inset-0 z-[-1] bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2000&auto=format&fit=crop" 
            alt="Aggressive Car Background" 
            className="w-full h-full object-cover opacity-20 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950"></div>
          {/* Mẫu sợi carbon (Carbon Fiber Pattern) để tăng độ ngầu */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>
        <main className="flex-grow relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
