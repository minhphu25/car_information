const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const dirs = [
  'app/cars/[slug]',
  'app/compare',
  'app/compare/[slug]',
  'app/prices',
  'app/guides/[slug]',
  'app/faq',
  'app/about',
  'app/geo-test',
  'components',
  'components/schema',
  'data'
];

dirs.forEach(d => {
  fs.mkdirSync(path.join(srcDir, d), { recursive: true });
});

// data/cars.ts
fs.writeFileSync(path.join(srcDir, 'data/cars.ts'), `
export const cars = [
  {
    slug: "toyota-vios",
    name: "Toyota Vios",
    brand: "Toyota",
    category: "Sedan B",
    seats: 5,
    engine: "1.5L",
    power: "106 hp",
    transmission: "CVT / MT",
    fuelCapacity: "42L",
    dimensions: "4425 x 1730 x 1475 mm",
    price: "479,000,000",
    version: "1.5E MT",
    updatedAt: "2026-09-24",
    source: "Dữ liệu minh họa",
    pros: ["Bền bỉ", "Tiết kiệm nhiên liệu", "Giữ giá tốt"],
    cons: ["Trang bị an toàn cơ bản", "Thiết kế ít đổi mới"],
    whoIsItFor: "Phù hợp cho người mua xe lần đầu, chạy dịch vụ hoặc gia đình cần sự ổn định."
  },
  {
    slug: "honda-city",
    name: "Honda City",
    brand: "Honda",
    category: "Sedan B",
    seats: 5,
    engine: "1.5L",
    power: "119 hp",
    transmission: "CVT",
    fuelCapacity: "40L",
    dimensions: "4580 x 1748 x 1467 mm",
    price: "559,000,000",
    version: "G",
    updatedAt: "2026-09-24",
    source: "Dữ liệu minh họa",
    pros: ["Thiết kế thể thao", "Cảm giác lái tốt", "Không gian rộng rãi"],
    cons: ["Cách âm chưa thật sự xuất sắc", "Giá cao hơn các đối thủ cùng phân khúc"],
    whoIsItFor: "Phù hợp cho gia đình trẻ, người thích phong cách thể thao và cảm giác lái tốt."
  },
  {
    slug: "hyundai-accent",
    name: "Hyundai Accent",
    brand: "Hyundai",
    category: "Sedan B",
    seats: 5,
    engine: "1.4L",
    power: "100 hp",
    transmission: "AT / MT",
    fuelCapacity: "45L",
    dimensions: "4440 x 1729 x 1470 mm",
    price: "426,000,000",
    version: "1.4 MT Tiêu chuẩn",
    updatedAt: "2026-09-24",
    source: "Dữ liệu minh họa",
    pros: ["Thiết kế hiện đại", "Nhiều tiện nghi", "Giá bán hấp dẫn"],
    cons: ["Động cơ hơi yếu", "Không gian hàng ghế sau hơi chật"],
    whoIsItFor: "Phù hợp cho người trẻ, khách hàng mua xe lần đầu với ngân sách vừa phải."
  }
];
`);

// data/faqs.ts
fs.writeFileSync(path.join(srcDir, 'data/faqs.ts'), `
export const faqs = [
  { question: "Xe nào phù hợp với người mua ô tô lần đầu?", answer: "Với người mua ô tô lần đầu, các mẫu Sedan hạng B như Toyota Vios, Honda City hoặc Hyundai Accent thường được khuyên dùng nhờ tính dễ lái, chi phí bảo dưỡng thấp và tính thanh khoản cao." },
  { question: "Nên mua xe mới hay xe cũ?", answer: "Mua xe mới giúp bạn an tâm về bảo hành và ít hỏng vặt. Mua xe cũ giúp tiết kiệm chi phí ban đầu (tránh phí trước bạ cao) nhưng cần có kinh nghiệm kiểm tra xe hoặc nhờ người có chuyên môn." },
  { question: "Chi phí nuôi ô tô mỗi tháng gồm những gì?", answer: "Chi phí nuôi ô tô mỗi tháng thường bao gồm: Tiền xăng (tùy mức độ sử dụng), phí gửi xe, phí cầu đường, bảo hiểm, và chi phí bảo dưỡng định kỳ. Trung bình khoảng 4-8 triệu đồng/tháng cho dòng xe phổ thông." },
  { question: "Xe nào phù hợp với gia đình 4 người?", answer: "Gia đình 4 người có thể chọn Sedan hạng B (Vios, City) hoặc SUV/Crossover cỡ nhỏ (Kia Seltos, Hyundai Creta) để có không gian thoải mái và cốp chứa đồ rộng rãi cho các chuyến đi." }
];
`);

// data/guides.ts
fs.writeFileSync(path.join(srcDir, 'data/guides.ts'), `
export const guides = [
  { slug: "mua-o-to-lan-dau", title: "Kinh nghiệm mua ô tô lần đầu", excerpt: "Những điều cần lưu ý khi quyết định mua chiếc ô tô đầu tiên trong đời." },
  { slug: "chi-phi-nuoi-o-to", title: "Chi phí nuôi ô tô mỗi tháng là bao nhiêu?", excerpt: "Tính toán chi tiết các khoản phí cố định và linh hoạt khi sử dụng ô tô." }
];
`);

// layout.tsx (overwrite)
fs.writeFileSync(path.join(srcDir, 'app/layout.tsx'), \`
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
      <body className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen flex flex-col">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-red-600 tracking-tight">AUTO GUIDE</Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">Trang chủ</Link>
                <Link href="/cars" className="text-gray-700 hover:text-red-600 font-medium">Xe ô tô</Link>
                <Link href="/compare" className="text-gray-700 hover:text-red-600 font-medium">So sánh</Link>
                <Link href="/prices" className="text-gray-700 hover:text-red-600 font-medium">Giá xe</Link>
                <Link href="/guides" className="text-gray-700 hover:text-red-600 font-medium">Kinh nghiệm</Link>
                <Link href="/faq" className="text-gray-700 hover:text-red-600 font-medium">FAQ</Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AUTO GUIDE</h3>
              <p className="text-gray-400">Cẩm nang thông tin ô tô.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Khám phá</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/cars" className="hover:text-white">Xe ô tô</Link></li>
                <li><Link href="/compare" className="hover:text-white">So sánh</Link></li>
                <li><Link href="/prices" className="hover:text-white">Giá xe</Link></li>
                <li><Link href="/guides" className="hover:text-white">Kinh nghiệm</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Thông tin</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">Giới thiệu</Link></li>
                <li><span className="hover:text-white cursor-pointer">Chính sách</span></li>
                <li><span className="hover:text-white cursor-pointer">Nguồn dữ liệu</span></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2026 AUTO GUIDE</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
\`);

// page.tsx (overwrite)
fs.writeFileSync(path.join(srcDir, 'app/page.tsx'), \`
import Link from 'next/link';
import { cars } from '@/data/cars';
import { guides } from '@/data/guides';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">Tìm hiểu ô tô dễ dàng hơn</h1>
          <p className="text-lg text-gray-300 mb-8">Thông số, giá xe, so sánh và kinh nghiệm ô tô được trình bày rõ ràng, dễ hiểu.</p>
          <div className="max-w-xl mx-auto relative">
            <input type="text" placeholder="Bạn đang tìm kiếm mẫu xe hoặc thông tin gì?" className="w-full py-3 px-4 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-red-500" />
            <button className="absolute right-2 top-2 bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700">Tìm kiếm</button>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Mẫu xe nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cars.map(car => (
            <div key={car.slug} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                [Hình ảnh {car.name}]
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">{car.brand} • {car.category}</div>
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-red-600 font-bold mb-4">Từ {car.price} VNĐ</p>
                <Link href={\`/cars/\${car.slug}\`} className="block w-full text-center bg-gray-900 text-white py-2 rounded hover:bg-gray-800">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Compare Preview */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">So sánh phổ biến</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
             <Link href="/compare/toyota-vios-vs-honda-city" className="bg-white px-6 py-4 rounded shadow font-bold text-lg hover:shadow-md text-center">
               Toyota Vios VS Honda City
             </Link>
             <Link href="/compare/hyundai-accent-vs-toyota-vios" className="bg-white px-6 py-4 rounded shadow font-bold text-lg hover:shadow-md text-center">
               Hyundai Accent VS Toyota Vios
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
\`);

// cars/page.tsx
fs.writeFileSync(path.join(srcDir, 'app/cars/page.tsx'), \`
import { cars } from '@/data/cars';
import Link from 'next/link';

export const metadata = {
  title: 'Danh sách xe ô tô - AUTO GUIDE',
  description: 'Tìm kiếm và so sánh các mẫu xe ô tô tại Việt Nam.'
};

export default function CarsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Danh sách xe ô tô</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cars.map(car => (
          <div key={car.slug} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-bold">{car.name}</h3>
              <p className="text-sm text-gray-500">{car.brand}</p>
            </div>
            <div className="p-4">
              <p className="font-bold text-red-600 mb-4">{car.price} VNĐ</p>
              <Link href={\`/cars/\${car.slug}\`} className="block text-center text-sm bg-gray-100 py-2 rounded hover:bg-gray-200">
                Chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
\`);

// cars/[slug]/page.tsx
fs.writeFileSync(path.join(srcDir, 'app/cars/[slug]/page.tsx'), \`
import { cars } from '@/data/cars';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const car = cars.find(c => c.slug === params.slug);
  if (!car) return { title: 'Không tìm thấy xe' };
  return { title: \`\${car.name} - Thông số, giá bán & Đánh giá | AUTO GUIDE\` };
}

export default function CarDetail({ params }: { params: { slug: string } }) {
  const car = cars.find(c => c.slug === params.slug);
  if (!car) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
\`);

// faq/page.tsx
fs.writeFileSync(path.join(srcDir, 'app/faq/page.tsx'), \`
import { faqs } from '@/data/faqs';

export const metadata = { title: 'Câu hỏi thường gặp (FAQ) - AUTO GUIDE' };

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Câu hỏi thường gặp</h1>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-3">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
\`);

// geo-test/page.tsx
fs.writeFileSync(path.join(srcDir, 'app/geo-test/page.tsx'), \`
export default function GeoTestPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">AI Search Test Page</h1>
      <div className="space-y-12">
        <div className="border border-blue-200 rounded p-6 bg-blue-50">
          <h2 className="font-bold text-xl text-blue-800 mb-2">Q: Xe nào phù hợp gia đình 4 người?</h2>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Answer (Direct Answer)</h3>
            <p className="bg-white p-3 rounded mt-1 shadow-sm">Gia đình 4 người có thể chọn Sedan hạng B (Vios, City) hoặc SUV/Crossover cỡ nhỏ (Kia Seltos, Hyundai Creta) để có không gian thoải mái và cốp chứa đồ rộng rãi.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Entities</h3>
            <p className="text-sm">Sedan hạng B, SUV/Crossover, Toyota Vios, Honda City, Kia Seltos, Hyundai Creta</p>
          </div>
        </div>
      </div>
    </div>
  );
}
\`);

// robots.ts
fs.writeFileSync(path.join(srcDir, 'app/robots.ts'), \`
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://autoguide.vn/sitemap.xml',
  }
}
\`);

// sitemap.ts
fs.writeFileSync(path.join(srcDir, 'app/sitemap.ts'), \`
import { MetadataRoute } from 'next'
import { cars } from '../data/cars'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const carUrls = cars.map((car) => ({
    url: \`https://autoguide.vn/cars/\${car.slug}\`,
    lastModified: new Date(),
  }))
  
  return [
    {
      url: 'https://autoguide.vn',
      lastModified: new Date(),
    },
    {
      url: 'https://autoguide.vn/cars',
      lastModified: new Date(),
    },
    {
      url: 'https://autoguide.vn/faq',
      lastModified: new Date(),
    },
    ...carUrls,
  ]
}
\`);

console.log('Setup complete!');
