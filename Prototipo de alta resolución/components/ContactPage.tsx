import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("¡Mensaje enviado! Te contactaremos pronto por WhatsApp.");
      setFormData({ name: "", whatsapp: "", message: "" });
      setSubmitted(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido especial? 
            Estamos aquí para ayudarte a crear el pastel perfecto para tu ocasión especial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur border-pink-100">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-gray-800">Envíanos un mensaje</h2>
              <p className="text-gray-600">Completa el formulario y te contactaremos pronto</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Escribe tu nombre completo"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de WhatsApp *
                  </label>
                  <Input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="Ej: +57 300 123 4567"
                    required
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Incluye el código de país para contactarte mejor
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Cuéntanos sobre tu evento, preferencias de sabor, fecha requerida, número de personas, etc."
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={submitted}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                >
                  {submitted ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* WhatsApp Direct */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.686"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">WhatsApp Directo</h3>
                    <p className="text-gray-600 mb-2">+57 300 123 4567</p>
                    <Button 
                      size="sm" 
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => window.open('https://wa.me/573001234567', '_blank')}
                    >
                      Chatear ahora
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-white/90 backdrop-blur border-pink-100">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-800">Horarios de Atención</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-medium">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sábados</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Domingos</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500 text-white">Abierto ahora</Badge>
                    <span className="text-sm text-gray-600">Cerramos a las 7:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-white/90 backdrop-blur border-pink-100">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-800">Nuestra Ubicación</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Calle 123 #45-67</p>
                      <p className="text-gray-600">Barrio Centro, Medellín</p>
                      <p className="text-gray-600">Antioquia, Colombia</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-pink-300 text-pink-600 hover:bg-pink-50"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    Ver en Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/90 backdrop-blur border-pink-100">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-800">Síguenos en Redes</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="border-pink-300 text-pink-600 hover:bg-pink-50 flex items-center space-x-2"
                    onClick={() => window.open('https://instagram.com/donaisabelapasteleria', '_blank')}
                  >
                    <span>📸</span>
                    <span>Instagram</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 flex items-center space-x-2"
                    onClick={() => window.open('https://facebook.com/donaisabelapasteleria', '_blank')}
                  >
                    <span>👍</span>
                    <span>Facebook</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-red-300 text-red-600 hover:bg-red-50 flex items-center space-x-2"
                    onClick={() => window.open('https://tiktok.com/@donaisabela', '_blank')}
                  >
                    <span>🎵</span>
                    <span>TikTok</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 flex items-center space-x-2"
                    onClick={() => window.open('https://youtube.com/donaisabelapasteleria', '_blank')}
                  >
                    <span>▶️</span>
                    <span>YouTube</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "¿Con cuánta anticipación debo hacer mi pedido?",
                answer: "Recomendamos hacer pedidos con al menos 48 horas de anticipación para pasteles estándar y 1 semana para diseños personalizados."
              },
              {
                question: "¿Hacen envíos a domicilio?",
                answer: "Sí, realizamos entregas en el área metropolitana de Medellín. El costo del envío varía según la distancia."
              },
              {
                question: "¿Pueden hacer pasteles sin gluten o veganos?",
                answer: "¡Por supuesto! Ofrecemos opciones sin gluten, veganas y para diferentes restricciones alimentarias. Solo menciona tus necesidades al hacer el pedido."
              },
              {
                question: "¿Cuál es el tamaño mínimo de pedido?",
                answer: "No tenemos tamaño mínimo. Hacemos desde cupcakes individuales hasta pasteles para grandes celebraciones."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-pink-100">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}