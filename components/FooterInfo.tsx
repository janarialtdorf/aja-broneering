'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface FooterInfoProps {
  onSubmit: () => void;
  isLoading?: boolean;
}

export const FooterInfo: React.FC<FooterInfoProps> = ({ onSubmit, isLoading }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center mt-6 bg-white p-4 border border-neutral-300 rounded text-xs">
      <div className="col-span-8 text-neutral-700 leading-relaxed">
        Pärast aegade kinnitamist saate X päeva enne vahetuse algust veel oma aegu tungival vajadusel veebikaudu muuta, siiski palume valida ainult ajad millele kinnitamise hetke seisuga kindlasti kohale saate tulla, arvestage ka sellega et füüsiliselt kohale jõuaksite selleks ajaks. Erandkorras saab meile kirjutades meilile <span className="underline font-semibold">vabatahtlikud@poff.ee</span> kuni Y tundi enne vahetust, kui soovite ära öelda Z tundi enne vahetuse algust palun helistage numbrile +372 ________.
      </div>

      <div className="col-span-4 flex justify-end">
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="bg-black hover:bg-neutral-800 text-white font-bold text-sm py-3 px-6 rounded shadow flex items-center gap-2 transition disabled:opacity-50"
        >
          <span>{isLoading ? 'Salvestan...' : 'Valikuid kinnitama'}</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};