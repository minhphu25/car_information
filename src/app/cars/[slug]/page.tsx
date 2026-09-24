import { cars } from '@/data/cars';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find(c => c.slug === slug);
  if (!car) return { title: 'Không tìm thấy xe' };
  return { title: `${car.name} - Thông số, giá bán & Đánh giá | AUTO GUIDE` };
}

export default async function CarDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find(c => c.slug === slug);
  if (!car) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-slate-700">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-slate-100">{car.name}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">Tổng quan</h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          {car.name} là mẫu xe thuộc phân khúc {car.category} của {car.brand}. {car.whoIsItFor}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">Thông số kỹ thuật</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-700">
          <table className="min-w-full bg-slate-900 text-left text-slate-300">
            <tbody>
              <tr className="border-b border-slate-700"><th className="p-4 bg-slate-800 w-1/3 text-slate-200">Phân khúc</th><td className="p-4">{car.category}</td></tr>
              <tr className="border-b border-slate-700"><th className="p-4 bg-slate-800 text-slate-200">Số chỗ</th><td className="p-4">{car.seats}</td></tr>
              <tr className="border-b border-slate-700"><th className="p-4 bg-slate-800 text-slate-200">Động cơ</th><td className="p-4">{car.engine}</td></tr>
              <tr className="border-b border-slate-700"><th className="p-4 bg-slate-800 text-slate-200">Công suất</th><td className="p-4">{car.power}</td></tr>
              <tr className="border-b border-slate-700"><th className="p-4 bg-slate-800 text-slate-200">Hộp số</th><td className="p-4">{car.transmission}</td></tr>
              <tr><th className="p-4 bg-slate-800 text-slate-200">Kích thước</th><td className="p-4">{car.dimensions}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 p-6 bg-slate-800 rounded-xl border-l-4 border-rose-600 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">Giá tham khảo</h2>
        <p className="text-3xl font-bold text-rose-500 mb-2">{car.price} VNĐ</p>
        <p className="text-slate-400 mb-1">Phiên bản: {car.version}</p>
        <p className="text-sm text-slate-500 italic">* Dữ liệu minh họa. Cập nhật: {car.updatedAt}. Giá có thể thay đổi tùy đại lý.</p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Ưu điểm</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            {car.pros.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-rose-400">Nhược điểm</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            {car.cons.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
      
      <section className="mb-8 bg-slate-800 p-6 rounded-xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-4 text-slate-100">Phù hợp với ai?</h2>
        <p className="text-slate-300">{car.whoIsItFor}</p>
      </section>
    </div>
  );
}
