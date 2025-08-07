import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SorteosPageProps {
  onNavigate: (page: string) => void;
}

export function SorteosPage({ onNavigate }: SorteosPageProps) {
  const [participated, setParticipated] = useState(false);

  const handleParticipate = () => {
    setParticipated(true);
    setTimeout(() => {
      alert("¡Te has registrado en el sorteo! Revisa las instrucciones para participar en Instagram.");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg px-6 py-2 mb-4">
            ¡SORTEO ACTIVO!
          </Badge>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sorteo Mensual</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¡Gana un pastel personalizado valorado en $80.000! Participa en nuestro sorteo mensual 
            y llévate a casa una deliciosa sorpresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Prize Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&h=600&fit=crop"
                alt="Pastel premio del sorteo"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-yellow-500 text-white text-lg px-4 py-2">
                  Premio: $80.000
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">Pastel Premium Personalizado</h3>
                  <p className="text-lg opacity-90">Incluye decoración premium y mensaje personalizado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur border-pink-100">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-gray-800">¿Cómo participar?</h2>
                <p className="text-gray-600">Sigue estos sencillos pasos para entrar al sorteo</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Compra cualquier pastel</h4>
                    <p className="text-gray-600 text-sm">Realiza una compra en nuestra pastelería durante este mes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Toma una foto</h4>
                    <p className="text-gray-600 text-sm">Fotografía tu pastel en el momento más especial</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Súbela a Instagram</h4>
                    <p className="text-gray-600 text-sm">Publica la foto con el hashtag <span className="font-semibold text-pink-600">#DoñaIsabelaMoments</span></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Etiquétanos</h4>
                    <p className="text-gray-600 text-sm">Menciona <span className="font-semibold text-pink-600">@donaIsabelaPasteleria</span> en tu publicación</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contest Info */}
            <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-pink-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Información del sorteo</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Fecha de inicio:</span>
                    <span className="font-semibold">1 de Agosto 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fecha límite:</span>
                    <span className="font-semibold">31 de Agosto 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Anuncio del ganador:</span>
                    <span className="font-semibold">3 de Septiembre 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participantes actuales:</span>
                    <span className="font-semibold text-pink-600">156 personas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participate Button */}
            <div className="text-center">
              {!participated ? (
                <Button 
                  onClick={handleParticipate}
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-12 py-4 text-lg"
                >
                  🎉 ¡Participar Ahora!
                </Button>
              ) : (
                <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                  <p className="text-green-800 font-semibold">✅ ¡Ya estás registrado en el sorteo!</p>
                  <p className="text-green-600 text-sm mt-1">No olvides seguir las instrucciones en Instagram</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Previous Winners */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Ganadores Anteriores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "María González", month: "Julio 2025", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop" },
              { name: "Carlos Ramírez", month: "Junio 2025", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop" },
              { name: "Ana Martínez", month: "Mayo 2025", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop" }
            ].map((winner, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-pink-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <ImageWithFallback
                    src={winner.image}
                    alt={`Pastel ganador de ${winner.name}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold text-gray-800">{winner.name}</h4>
                  <p className="text-gray-600 text-sm">Ganador de {winner.month}</p>
                  <Badge variant="outline" className="mt-2 border-pink-300 text-pink-600">
                    🏆 Ganador
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white/70 backdrop-blur rounded-2xl p-8 border border-pink-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Aún no has probado nuestros pasteles?</h3>
          <p className="text-gray-600 mb-6">Visita nuestra galería y elige tu favorito para participar en el sorteo</p>
          <Button 
            onClick={() => onNavigate('galeria')} 
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
          >
            Ver Galería de Pasteles
          </Button>
        </div>
      </div>
    </div>
  );
}