
import Layout from '@/components/Layout';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Fasilitas Pabrik Modern",
      description: "Gedung pabrik pengantongan semen dengan teknologi terkini"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Area Produksi",
      description: "Proses pengantongan semen dengan sistem otomatis"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Pelabuhan Krueng Geukueh",
      description: "Lokasi strategis untuk distribusi ke seluruh wilayah"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Tim Profesional",
      description: "Karyawan berpengalaman dalam industri semen"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Armada Distribusi",
      description: "Truck pengangkut semen untuk distribusi regional"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Kontrol Kualitas",
      description: "Laboratorium pengujian kualitas produk"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-ywm-red to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Galeri</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Dokumentasi Kegiatan dan Fasilitas PT. Yoga Wibawa Mandiri
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={image.id} className="group cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ywm-dark mb-4">
              Pencapaian <span className="text-ywm-red">Kami</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Angka-angka yang menunjukkan komitmen kami dalam melayani industri konstruksi
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-ywm-red mb-2">500K+</h3>
              <p className="text-gray-700 font-medium">Ton Semen per Tahun</p>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-ywm-red mb-2">15+</h3>
              <p className="text-gray-700 font-medium">Tahun Pengalaman</p>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-ywm-red mb-2">200+</h3>
              <p className="text-gray-700 font-medium">Karyawan Profesional</p>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold text-ywm-red mb-2">50+</h3>
              <p className="text-gray-700 font-medium">Kota Distribusi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ywm-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ingin Melihat Fasilitas Kami Langsung?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kunjungi pabrik kami di Pelabuhan Krueng Geukueh, Lhokseumawe untuk melihat 
            proses produksi dan fasilitas modern yang kami miliki.
          </p>
          <a 
            href="/lokasi" 
            className="inline-block bg-white text-ywm-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Lihat Lokasi Kami
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
