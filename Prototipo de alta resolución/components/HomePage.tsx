import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Bienvenidos a <span className="text-pink-600">Doña Isabela</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Creamos pasteles artesanales únicos con amor, tradición y los mejores ingredientes. 
            Cada pastel cuenta una historia especial.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => onNavigate('galeria')} 
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
            >
              Ver Galería
            </Button>
            <Button 
              onClick={() => onNavigate('personaliza')} 
              variant="outline" 
              size="lg"
              className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3"
            >
              Personaliza tu Pastel
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=500&fit=crop"
              alt="Pasteles artesanales Doña Isabela"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">Pasteles hechos con amor</h3>
                <p className="text-lg opacity-90">Más de 15 años creando momentos dulces e inolvidables</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            ¿Por qué elegir Doña Isabela?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎂</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">100% Artesanal</h3>
                <p className="text-gray-600">Cada pastel es único, hecho a mano con recetas tradicionales y técnicas artesanales.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalización Total</h3>
                <p className="text-gray-600">Adapta cada detalle a tu gusto: sabores, decoración y mensaje especial.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ingredientes Premium</h3>
                <p className="text-gray-600">Solo utilizamos los mejores ingredientes frescos y naturales para garantizar el mejor sabor.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}