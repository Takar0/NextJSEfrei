// AboutPage.tsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Ã propos de Nous</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Nous sommes une entreprise dÃ©diÃ©e Ã  [votre mission/produit/service], 
          engagÃ©e Ã  fournir [votre proposition de valeur]. Notre Ã©quipe est composÃ©e 
          de professionnels passionnÃ©s qui travaillent sans relÃ¢che pour [objectif ou but].
        </p>
      </div>
      <div className="mt-6">
        <a href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contactez-nous
        </a>
      </div>
    </div>
  );
};

export default AboutPage;