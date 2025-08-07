import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CustomizePageProps {
  onNavigate: (page: string) => void;
}

export function CustomizePage({ onNavigate }: CustomizePageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCake, setSelectedCake] = useState<string | null>(null);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);
  const [addedIngredients, setAddedIngredients] = useState<string[]>([]);
  const [customMessage, setCustomMessage] = useState("");
  const [customerName, setCustomerName] = useState("");

  const baseOptions = [
    {
      id: "chocolate",
      nombre: "Chocolate",
      precio: 35000,
      imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
      ingredientes: ["Masa de chocolate", "Crema de chocolate", "Decoración básica"]
    },
    {
      id: "vainilla",
      nombre: "Vainilla",
      precio: 32000,
      imagen: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=300&h=200&fit=crop",
      ingredientes: ["Masa de vainilla", "Crema de mantequilla", "Decoración básica"]
    },
    {
      id: "red-velvet",
      nombre: "Red Velvet",
      precio: 40000,
      imagen: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=200&fit=crop",
      ingredientes: ["Masa red velvet", "Queso crema", "Decoración vintage"]
    }
  ];

  const availableIngredients = [
    "Fresas frescas", "Arándanos", "Frambuesas", "Chocolate blanco", 
    "Almendras", "Nueces", "Mermelada de frutas", "Crema chantilly",
    "Fondant", "Flores comestibles", "Caramelo", "Coco rallado"
  ];

  const ingredientsToRemove = selectedCake 
    ? baseOptions.find(cake => cake.id === selectedCake)?.ingredientes || []
    : [];

  const calculatePrice = () => {
    const baseCake = baseOptions.find(cake => cake.id === selectedCake);
    const basePrice = baseCake?.precio || 0;
    const addedPrice = addedIngredients.length * 3000;
    return basePrice + addedPrice;
  };

  const handleSubmitQuote = () => {
    alert("¡Cotización enviada! Te contactaremos pronto por WhatsApp para coordinar los detalles.");
    onNavigate('inicio');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                  currentStep >= step ? 'bg-pink-500' : 'bg-gray-300'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 ${currentStep > step ? 'bg-pink-500' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Titles */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {currentStep === 1 && "Paso 1: Elige tu pastel base"}
            {currentStep === 2 && "Paso 2: Personaliza ingredientes"}
            {currentStep === 3 && "Paso 3: Mensaje personalizado"}
          </h1>
          <p className="text-gray-600">
            {currentStep === 1 && "Selecciona el sabor base para tu pastel personalizado"}
            {currentStep === 2 && "Modifica los ingredientes según tus preferencias"}
            {currentStep === 3 && "Añade un mensaje especial para tu pastel"}
          </p>
        </div>

        {/* Step 1: Base Selection */}
        {currentStep === 1 && (
          <div className="grid md:grid-cols-3 gap-6">
            {baseOptions.map((cake) => (
              <Card 
                key={cake.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCake === cake.id ? 'ring-2 ring-pink-500 bg-pink-50' : 'bg-white'
                }`}
                onClick={() => setSelectedCake(cake.id)}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={cake.imagen}
                    alt={cake.nombre}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {selectedCake === cake.id && (
                    <div className="absolute top-2 right-2 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                      ✓
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{cake.nombre}</h3>
                  <p className="text-xl font-bold text-pink-600 mb-3">${cake.precio.toLocaleString()}</p>
                  <div className="space-y-1">
                    {cake.ingredientes.map((ingrediente, index) => (
                      <Badge key={index} variant="outline" className="mr-1 mb-1 text-xs">
                        {ingrediente}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Step 2: Ingredients Customization */}
        {currentStep === 2 && selectedCake && (
          <div className="space-y-8">
            <Card className="bg-white">
              <CardHeader>
                <h3 className="text-xl font-semibold">Quitar ingredientes</h3>
                <p className="text-gray-600">Selecciona los ingredientes que quieres remover</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {ingredientsToRemove.map((ingredient) => (
                    <div key={ingredient} className="flex items-center space-x-2">
                      <Checkbox
                        id={ingredient}
                        checked={removedIngredients.includes(ingredient)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setRemovedIngredients([...removedIngredients, ingredient]);
                          } else {
                            setRemovedIngredients(removedIngredients.filter(i => i !== ingredient));
                          }
                        }}
                      />
                      <label htmlFor={ingredient} className="text-sm">{ingredient}</label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <h3 className="text-xl font-semibold">Agregar ingredientes</h3>
                <p className="text-gray-600">Cada ingrediente adicional cuesta $3.000</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {availableIngredients.map((ingredient) => (
                    <div key={ingredient} className="flex items-center space-x-2">
                      <Checkbox
                        id={`add-${ingredient}`}
                        checked={addedIngredients.includes(ingredient)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setAddedIngredients([...addedIngredients, ingredient]);
                          } else {
                            setAddedIngredients(addedIngredients.filter(i => i !== ingredient));
                          }
                        }}
                      />
                      <label htmlFor={`add-${ingredient}`} className="text-sm">{ingredient}</label>
                      <span className="text-xs text-gray-500">+$3.000</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Custom Message */}
        {currentStep === 3 && selectedCake && (
          <Card className="bg-white">
            <CardHeader>
              <h3 className="text-xl font-semibold">Mensaje personalizado</h3>
              <p className="text-gray-600">Añade un mensaje especial para tu pastel</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tu nombre</label>
                <Input
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje en el pastel</label>
                <Textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Ej: Feliz Cumpleaños María!"
                  rows={3}
                />
              </div>
              
              {/* Order Summary */}
              <div className="bg-pink-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Resumen de tu pedido</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Pastel base ({baseOptions.find(c => c.id === selectedCake)?.nombre})</span>
                    <span>${baseOptions.find(c => c.id === selectedCake)?.precio.toLocaleString()}</span>
                  </div>
                  {addedIngredients.length > 0 && (
                    <div className="flex justify-between">
                      <span>Ingredientes adicionales ({addedIngredients.length})</span>
                      <span>+${(addedIngredients.length * 3000).toLocaleString()}</span>
                    </div>
                  )}
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total estimado</span>
                    <span className="text-pink-600">${calculatePrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : onNavigate('galeria')}
            className="border-pink-300 text-pink-600 hover:bg-pink-50"
          >
            {currentStep === 1 ? 'Volver a Galería' : 'Anterior'}
          </Button>
          
          {currentStep < 3 ? (
            <Button 
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === 1 && !selectedCake}
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              Siguiente
            </Button>
          ) : (
            <Button 
              onClick={handleSubmitQuote}
              disabled={!customerName || !customMessage}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
            >
              Solicitar Cotización
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}