
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shirt, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <Shirt className="h-8 w-8 text-darkblue" />
            <span className="text-2xl font-bold text-darkblue">ملابس داخلية فاخرة</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-darkblue font-medium">الرئيسية</Link>
            <Link to="/products" className="text-gray-700 hover:text-darkblue font-medium">المنتجات</Link>
            <Link to="/about" className="text-gray-700 hover:text-darkblue font-medium">عن الشركة</Link>
            <Link to="/contact" className="text-gray-700 hover:text-darkblue font-medium">اتصل بنا</Link>
          </nav>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-500 hover:text-darkblue" aria-label="القائمة">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-10">
                <div className="flex flex-col space-y-4 text-right">
                  <Link to="/" className="text-lg font-medium hover:text-darkblue">الرئيسية</Link>
                  <Link to="/products" className="text-lg font-medium hover:text-darkblue">المنتجات</Link>
                  <Link to="/about" className="text-lg font-medium hover:text-darkblue">عن الشركة</Link>
                  <Link to="/contact" className="text-lg font-medium hover:text-darkblue">اتصل بنا</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
