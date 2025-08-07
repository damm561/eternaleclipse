import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BehindCakePageProps {
  onNavigate: (page: string) => void;
}

export function BehindCakePage({ onNavigate }: BehindCakePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Detrás del Pastel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre el proceso artesanal detrás de cada creación. Aquí puedes ver cómo se hizo 
            el pastel especial de uno de nuestros clientes, desde la primera mezcla hasta el toque final.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <Card className="bg-white/90 backdrop-blur border-pink-100 overflow-hidden">
            <CardHeader className="text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                <Badge className="bg-pink-500 text-white">Nuevo Video</Badge>
                <Badge variant="outline" className="border-purple-300 text-purple-600">Proceso Completo</Badge>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Pastel de Cumpleaños - Cliente: María</h2>
              <p className="text-gray-600">Torta Red Velvet de 3 pisos con decoración personalizada</p>
            </CardHeader>
            <CardContent>
              {/* Video Placeholder */}
              <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center text-white">
                    <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Video: Proceso Completo del Pastel</h3>
                    <p className="text-gray-300 mb-4">Duración: 12:34 min</p>
                    <p className="text-sm text-gray-400 max-w-md mx-auto">
                      En este video podrás ver todo el proceso de elaboración, desde la preparación 
                      de la masa hasta los detalles finales de decoración.
                    </p>
                  </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        ▶ Reproducir
                      </Button>
                      <span className="text-sm">0:00 / 12:34</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                        🔊
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                        ⛶
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Description */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Lo que verás en este video:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span>Preparación de la masa Red Velvet desde cero</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span>Técnica de horneado para 3 capas perfectas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span>Preparación del relleno de queso crema</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span>Ensamblaje y nivelado de las capas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span>Decoración con fondant y flores comestibles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      <span>Toques finales y presentación</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Detalles del proyecto:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cliente:</span>
                      <span className="font-medium">María González</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ocasión:</span>
                      <span className="font-medium">Cumpleaños 30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sabor:</span>
                      <span className="font-medium">Red Velvet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Porciones:</span>
                      <span className="font-medium">25 personas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tiempo total:</span>
                      <span className="font-medium">8 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nivel:</span>
                      <span className="font-medium">Avanzado</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Galería del Proceso</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "Ingredientes", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop" },
              { step: "Mezclado", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop" },
              { step: "Horneado", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop" },
              { step: "Decoración", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop" }
            ].map((item, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-pink-100 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={`Paso ${index + 1}: ${item.step}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-pink-500 text-white">
                    Paso {index + 1}
                  </Badge>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-gray-800">{item.step}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Nuestro Proceso Artesanal</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                En Doña Isabela, cada pastel es una obra de arte única. Nos enorgullece mostrar 
                nuestro proceso artesanal transparente, donde cada cliente puede ver exactamente 
                cómo se crea su pastel especial.
              </p>
              <p>
                Documentamos cada paso del proceso para que puedas revivir la magia de la creación 
                de tu pastel. Desde la selección de ingredientes frescos hasta los toques finales 
                de decoración, todo es hecho con amor y dedicación.
              </p>
              <p>
                Nuestros videos no solo muestran el proceso técnico, sino también la pasión y el 
                cuidado que ponemos en cada detalle. Creemos que la transparencia genera confianza 
                y que conocer el proceso hace que cada bocado sea aún más especial.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
              alt="Doña Isabela trabajando en la cocina"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Doña Isabela en acción</h4>
                <p className="opacity-90">15 años de experiencia en cada creación</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/70 backdrop-blur rounded-2xl p-8 border border-pink-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Quieres tu propio video personalizado?</h3>
          <p className="text-gray-600 mb-6">
            Documenta la creación de tu pastel especial. Ideal para eventos importantes o como regalo único.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => onNavigate('personaliza')} 
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
            >
              Solicitar Video Personalizado
            </Button>
            <Button 
              onClick={() => onNavigate('contacto')} 
              variant="outline" 
              size="lg"
              className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3"
            >
              Más Información
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}