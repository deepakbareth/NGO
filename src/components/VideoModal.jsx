import React from 'react';
import { X, Play, Shield, Sparkles } from 'lucide-react';
import { ngoConfig } from '../data/ngoData';

export default function VideoModal({ isOpen, onClose, onOpenDonate }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        
        {/* Modal Top Bar */}
        <div className="p-4 bg-stone-950 flex items-center justify-between text-white border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="font-bold text-sm tracking-wide">
              Documentary Preview: "Silent Sparks in the Hamlets"
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Ground Footage Preview */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
            alt="Grassroots ground documentary"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 flex flex-col justify-between p-6">
            <div className="flex justify-end">
              <span className="bg-black/60 backdrop-blur-sm text-stone-300 text-xs px-2.5 py-1 rounded font-mono border border-white/10">
                HD • 02:45
              </span>
            </div>

            <div className="text-center max-w-lg mx-auto space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <p className="text-lg sm:text-xl text-white font-semibold">
                "We don't need charity. We need an opportunity to prove what our daughters can build."
              </p>
              <p className="text-xs text-stone-300">
                Filmed on location in Purulia & Sundarbans field pods • Produced by Samarpan Media Fellowship
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Ground Verified Footage
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenDonate();
                }}
                className="text-amber-400 hover:text-amber-300 font-semibold underline cursor-pointer"
              >
                Donate to this cause →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

