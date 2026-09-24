import { cars } from '@/data/cars';
import Link from 'next/link';

export const metadata = {
  title: 'Danh sách xe ô tô - AUTO GUIDE',
  description: 'Tìm kiếm và so sánh các mẫu xe ô tô tại Việt Nam.'
};

export default function CarsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-10 text-slate-100">Danh sách xe ô tô</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cars.map(car => (
          <div key={car.slug} className="bg-slate-800 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-slate-700 overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(225,29,72,0.15)] hover:border-rose-500/50 transition-all duration-300">
            <div className="h-48 bg-slate-900 overflow-hidden relative">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {car.brand}
              </div>
            </div>
            <div className="p-5 border-b border-slate-800 flex-grow">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-rose-500 transition-colors">{car.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{car.category}</p>
            </div>
            <div className="p-5 bg-slate-950/50">
              <p className="font-bold text-rose-500 mb-4 text-lg">{car.price} VNĐ</p>
              <Link href={`/cars/${car.slug}`} className="block text-center text-sm bg-slate-800 text-slate-200 border border-slate-700 py-2.5 rounded-lg font-medium hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all duration-300">
                Chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
