import { faqs } from '@/data/faqs';

export const metadata = { title: 'Câu hỏi thường gặp (FAQ) - AUTO GUIDE' };

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-10 text-slate-100">Câu hỏi thường gặp</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-slate-700 hover:-translate-y-1 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300">
            <h2 className="text-xl font-bold mb-3 text-slate-100">{faq.question}</h2>
            <p className="text-slate-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
