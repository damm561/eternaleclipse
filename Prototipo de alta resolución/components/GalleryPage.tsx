import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const pasteles = [
    {
      id: 1,
      nombre: "Pastel de Chocolate Supremo",
      precio: "$45.000",
      imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
      ingredientes: ["Chocolate belga", "Crema de mantequilla", "Fresas frescas", "Almendras"],
      categoria: "Chocolate"
    },
    {
      id: 2,
      nombre: "Torta Red Velvet Clásica",
      precio: "$42.000",
      imagen: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
      ingredientes: ["Masa red velvet", "Queso crema", "Vainilla", "Decoración vintage"],
      categoria: "Especial"
    },
    {
      id: 3,
      nombre: "Cheesecake de Frutos Rojos",
      precio: "$38.000",
      imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      ingredientes: ["Queso philadelphia", "Frutos rojos", "Base de galleta", "Coulis de frutas"],
      categoria: "Cheesecake"
    },
    {
      id: 4,
      nombre: "Tres Leches Tradicional",
      precio: "$35.000",
      imagen: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=400&h=300&fit=crop",
      ingredientes: ["Bizcocho esponjoso", "Tres leches", "Crema chantilly", "Canela"],
      categoria: "Tradicional"
    },
    {
      id: 5,
      nombre: "Pastel de Zanahoria Gourmet",
      precio: "$40.000",
      imagen: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      ingredientes: ["Zanahoria fresca", "Nueces", "Queso crema", "Especias"],
      categoria: "Saludable"
    },
    {
      id: 6,
      nombre: "Torta de Limón Merengue",
      precio: "$43.000",
      imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      ingredientes: ["Crema de limón", "Merengue tostado", "Base crocante", "Ralladura de limón"],
      categoria: "Cítrico"
    }
  ];

  const categorias = ["Todos", "Chocolate", "Especial", "Cheesecake", "Tradicional", "Saludable", "Cítrico"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Galería</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra deliciosa colección de pasteles artesanales. Cada uno hecho con amor y los mejores ingredientes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categorias.map((categoria) => (
            <Badge 
              key={categoria} 
              variant="outline" 
              className="px-4 py-2 cursor-pointer hover:bg-pink-100 border-pink-200"
            >
              {categoria}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pasteles.map((pastel) => (
            <Card key={pastel.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white/90 backdrop-blur">
              <div className="relative">
                <ImageWithFallback
                  src={pastel.imagen}
                  alt={pastel.nombre}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-pink-500 text-white">
                  {pastel.categoria}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <h3 className="text-xl font-semibold text-gray-800">{pastel.nombre}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-600">{pastel.precio}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Ingredientes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pastel.ingredientes.map((ingrediente, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-pink-100 text-pink-700">
                        {ingrediente}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => onNavigate('personaliza')} 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                >
                  Personalizar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white/70 backdrop-blur rounded-2xl p-8 border border-pink-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-gray-600 mb-6">Podemos crear el pastel de tus sueños completamente personalizado</p>
          <Button 
            onClick={() => onNavigate('personaliza')} 
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
          >
            Crear Pastel Personalizado
          </Button>
        </div>
      </div>
    </div>
  );
}