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
      <div className="mb-8 rounded-xl overflow-hidden bg-gray-100 aspect-video shadow-md">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tổng quan</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {car.name} là mẫu xe thuộc phân khúc {car.category} của {car.brand}. {car.whoIsItFor}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Thông số kỹ thuật</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-left">
            <tbody>
              <tr className="border-b"><th className="p-3 bg-gray-50 w-1/3">Phân khúc</th><td className="p-3">{car.category}</td></tr>
              <tr className="border-b"><th className="p-3 bg-gray-50">Số chỗ</th><td className="p-3">{car.seats}</td></tr>
              <tr className="border-b"><th className="p-3 bg-gray-50">Động cơ</th><td className="p-3">{car.engine}</td></tr>
              <tr className="border-b"><th className="p-3 bg-gray-50">Công suất</th><td className="p-3">{car.power}</td></tr>
              <tr className="border-b"><th className="p-3 bg-gray-50">Hộp số</th><td className="p-3">{car.transmission}</td></tr>
              <tr className="border-b"><th className="p-3 bg-gray-50">Kích thước</th><td className="p-3">{car.dimensions}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 border-l-4 border-red-600">
        <h2 className="text-2xl font-bold mb-4">Giá tham khảo</h2>
        <p className="text-3xl font-bold text-red-600 mb-2">{car.price} VNĐ</p>
        <p className="text-gray-600 mb-1">Phiên bản: {car.version}</p>
        <p className="text-sm text-gray-500 italic">* Dữ liệu minh họa. Cập nhật: {car.updatedAt}. Giá có thể thay đổi tùy đại lý.</p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-700">Ưu điểm</h2>
          <ul className="list-disc pl-5 space-y-2">
            {car.pros.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-700">Nhược điểm</h2>
          <ul className="list-disc pl-5 space-y-2">
            {car.cons.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Phù hợp với ai?</h2>
        <p className="text-gray-700">{car.whoIsItFor}</p>
      </section>
    </div>
  );
}
