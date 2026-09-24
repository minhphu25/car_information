import Link from 'next/link';
import { cars } from '@/data/cars';

export default function Home() {
  return (
    <div>
      <section className="relative text-white py-32 text-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        {/* CSS Gradient Background without image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-transparent to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-rose-900/30 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-semibold tracking-wider mb-4">KHÁM PHÁ THẾ GIỚI Ô TÔ</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Tìm hiểu ô tô <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">dễ dàng hơn</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">Thông số, giá xe, so sánh và kinh nghiệm ô tô được trình bày rõ ràng, dễ hiểu.</p>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-slate-100 tracking-tight">
          Mẫu xe nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cars.map(car => (
            <div key={car.slug} className="bg-slate-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-slate-700 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(225,29,72,0.15)] hover:border-rose-500/50 transition-all duration-500">
              <div className="h-56 bg-slate-900 overflow-hidden relative">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {car.category}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-rose-500 transition-colors">{car.name}</h3>
                <p className="text-rose-500 font-bold mb-6 text-xl">Từ {car.price} VNĐ</p>
                <Link href={`/cars/${car.slug}`} className="block w-full text-center bg-slate-800 text-white py-3.5 rounded-xl font-semibold hover:bg-rose-600 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20">
                  Khám phá ngay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* User Feedback / Testimonials */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-rose-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-100 relative inline-block left-1/2 -translate-x-1/2">
            Cộng đồng đánh giá
            <span className="absolute -bottom-3 left-1/4 w-1/2 h-1 bg-rose-600 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-slate-700 hover:border-rose-500/50 transition-colors relative">
              <div className="text-rose-500 mb-4 flex space-x-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-slate-300 italic mb-6">"Nhờ AUTO GUIDE mà mình đã quyết định mua chiếc Toyota Vios. Thông tin thông số và so sánh giá rất trực quan, giúp người mua lần đầu như mình không bị bỡ ngỡ."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">H</div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-200">Hoàng Lê</h4>
                  <p className="text-sm text-slate-500">Chủ xe Toyota Vios</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-slate-700 hover:border-rose-500/50 transition-colors relative">
              <div className="text-rose-500 mb-4 flex space-x-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-slate-700">★</span>
              </div>
              <p className="text-slate-300 italic mb-6">"Website có giao diện rất đẹp, các tính năng đánh giá ưu nhược điểm cực kỳ khách quan. Rất hữu ích khi phân vân giữa Honda CR-V và CX-5."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">T</div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-200">Tuấn Anh</h4>
                  <p className="text-sm text-slate-500">Thành viên diễn đàn Otofun</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-slate-700 hover:border-rose-500/50 transition-colors relative">
              <div className="text-rose-500 mb-4 flex space-x-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-slate-300 italic mb-6">"Mục chi phí nuôi xe hàng tháng được phân tích rất sát với thực tế, các bạn có ý định mua xe điện như VF8 nhất định phải tham khảo trang này!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">M</div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-200">Minh Thư</h4>
                  <p className="text-sm text-slate-500">Người dùng xe điện</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
