import React, { useState } from 'react';
import { Quote, MapPin, Award, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { storiesData } from '../data/ngoData';

export default function Stories({ onOpenDonate }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const activeStory = storiesData[activeStoryIndex];

  return (
    <section id="stories" className="py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Voices of Transformation
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3323] tracking-tight">
            Real People. Unstoppable Dignity.
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Behind every number is a human being who refused to accept poverty as destiny. Read their journeys of courage and lasting community leadership.
          </p>
        </div>

        {/* Featured Story Showcase Card */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Beneficiary Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[480px]">
              <img
                src={activeStory.image}
                alt={activeStory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden"></div>
              
              {/* Mobile overlay for name */}
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="text-xs bg-amber-500 font-bold px-2.5 py-0.5 rounded uppercase">
                  {activeStory.causeType}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">
                  {activeStory.name}, {activeStory.age}
                </h3>
                <div className="flex items-center gap-1 text-xs text-stone-200 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{activeStory.location}</span>
                </div>
              </div>
            </div>

            {/* Story Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              
              <div className="hidden lg:flex items-center justify-between">
                <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider border border-amber-300">
                  {activeStory.causeType} Impact Story
                </span>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{activeStory.location}</span>
                </div>
              </div>

              <div className="hidden lg:block">
                <h3 className="font-serif text-3xl font-bold text-stone-900">
                  {activeStory.name}, <span className="font-normal text-stone-600">{activeStory.age}</span>
                </h3>
                <p className="text-sm font-semibold text-emerald-800 mt-1">
                  {activeStory.role}
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative pl-6 sm:pl-8 border-l-4 border-amber-500 space-y-2">
                <Quote className="w-6 h-6 text-amber-500/30 absolute -left-3 -top-2" />
                <p className="font-serif text-lg sm:text-xl text-stone-800 italic leading-relaxed">
                  "{activeStory.quote}"
                </p>
              </div>

              {/* Measurable Change Badge */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    Measurable Outcome
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-stone-800 mt-0.5">
                    {activeStory.impact}
                  </div>
                </div>
              </div>

              {/* Navigation controls & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  {storiesData.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveStoryIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeStoryIndex === idx
                          ? 'w-8 bg-[#0A3323]'
                          : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`View story ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenDonate({ cause: activeStory.causeType.toLowerCase() })}
                    className="w-full sm:w-auto py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0A3323] hover:bg-[#145239] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Support Girls Like Meera</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

