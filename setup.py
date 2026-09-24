import os

src_dir = os.path.join(os.path.dirname(__file__), 'src')
dirs = [
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
]

for d in dirs:
    os.makedirs(os.path.join(src_dir, d), exist_ok=True)

with open(os.path.join(src_dir, 'data/cars.ts'), 'w', encoding='utf-8') as f:
    f.write('''export const cars = [
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
  }
];
''')

with open(os.path.join(src_dir, 'app/layout.tsx'), 'w', encoding='utf-8') as f:
    f.write('''import type { Metadata } from 'next'
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
              <Link href="/" className="text-2xl font-bold text-red-600">AUTO GUIDE</Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600">Trang chủ</Link>
                <Link href="/cars" className="text-gray-700 hover:text-red-600">Xe ô tô</Link>
                <Link href="/faq" className="text-gray-700 hover:text-red-600">FAQ</Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
''')

with open(os.path.join(src_dir, 'app/page.tsx'), 'w', encoding='utf-8') as f:
    f.write('''import Link from 'next/link';
import { cars } from '@/data/cars';

export default function Home() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">Tìm hiểu ô tô dễ dàng hơn</h1>
          <p className="text-lg text-gray-300 mb-8">Thông số, giá xe, so sánh và kinh nghiệm ô tô được trình bày rõ ràng, dễ hiểu.</p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Mẫu xe nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map(car => (
            <div key={car.slug} className="bg-white rounded-lg shadow border">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-red-600 font-bold mb-4">Từ {car.price} VNĐ</p>
                <Link href={`/cars/${car.slug}`} className="block w-full text-center bg-gray-900 text-white py-2 rounded hover:bg-gray-800">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
''')

print("Setup complete")
