import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'galeria', label: 'Galería' },
    { id: 'personaliza', label: 'Personaliza tu pastel' },
    { id: 'sorteos', label: 'Sorteos' },
    { id: 'detras', label: 'Detrás del pastel' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-pink-300 to-purple-300 p-2 rounded-full">
              <span className="text-white font-semibold text-lg">DI</span>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-800">Doña Isabela</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => onNavigate(item.id)}
                  className={currentPage === item.id ? 
                    "bg-pink-200 text-pink-800 hover:bg-pink-300" : 
                    "text-gray-600 hover:text-pink-600 hover:bg-pink-50"
                  }
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}