import React from 'react';
import { Quote, MapPin, Award, Heart, Sparkles } from 'lucide-react';
import { storiesData } from '../data/ngoData';

export default function Stories({ onOpenDonate }) {
  // Show top 2 stories side by side for a clean, non-bloated layout
  const topStories = storiesData.slice(0, 2);

  return (
    <section id="stories" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Voices of Hope
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#09281B] tracking-tight">
            Real People. Unstoppable Dignity.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Behind every number is a courageous human journey made possible by compassionate donors.
          </p>
        </div>

        {/* 2 Clean Side-by-Side Glassy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topStories.map((story) => (
            <div
              key={story.id}
              className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-14 h-14 rounded-2xl object-cover shadow-sm border-2 border-white"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-base text-stone-900">{story.name}</h3>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full uppercase">
                        {story.causeType}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-600" />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>

                <div className="relative pl-4 border-l-2 border-amber-500/80">
                  <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-stone-200/60">
                <div className="flex items-center gap-2 text-xs text-emerald-900 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200/60">
                  <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">{story.impact}</span>
                </div>

                <button
                  onClick={() => onOpenDonate({ cause: story.causeType.toLowerCase() })}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-[#09281B] bg-white hover:bg-stone-50 border border-stone-200/80 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>Support Similar Journeys</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
