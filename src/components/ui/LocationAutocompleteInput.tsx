import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Plane, Mountain, Landmark, Compass, Building2, Navigation } from 'lucide-react';
import { cn } from '../../lib/utils';
import {
  getSmartLocationSuggestions,
  LocationSuggestion,
} from '../../data/indianLocations';

interface LocationAutocompleteInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
  placeholder?: string;
  error?: string;
  className?: string;
}

export const LocationAutocompleteInput: React.FC<LocationAutocompleteInputProps> = ({
  value,
  onChange,
  onBlur,
  name,
  placeholder,
  error,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [remoteSuggestions, setRemoteSuggestions] = useState<LocationSuggestion[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const localSuggestions = getSmartLocationSuggestions(value, 8);

  // Also fetch live India/Karnataka places from OpenStreetMap Nominatim for any specific street/village/town in Karnataka & India
  useEffect(() => {
    const query = value.trim();
    if (query.length < 2) {
      setRemoteSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&addressdetails=1&limit=5&q=${encodeURIComponent(
          query
        )}`;
        const res = await fetch(url, {
          signal: controller.signal,
          headers: {
            'Accept-Language': 'en',
          },
        });
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data)) {
          const mapped: LocationSuggestion[] = data.map((item: any) => {
            const addr = item.address || {};
            const state = addr.state || 'India';
            const cityOrDistrict =
              addr.city ||
              addr.town ||
              addr.village ||
              addr.county ||
              addr.state_district ||
              state;
            const mainName = item.name || item.display_name?.split(',')[0] || query;
            const formattedName =
              state.toLowerCase().includes('karnataka') && !mainName.toLowerCase().includes('karnataka')
                ? `${mainName}, ${cityOrDistrict}`
                : `${mainName}, ${state}`;

            return {
              name: formattedName,
              region: item.display_name?.split(',').slice(1, 3).join(',').trim() || cityOrDistrict,
              state: state,
              category: state.toLowerCase().includes('karnataka') ? 'City & Hub' : 'Outstation India',
              priority: state.toLowerCase().includes('karnataka') ? 1 : 2,
            };
          });
          setRemoteSuggestions(mapped);
        }
      } catch {
        // Ignore abort or network errors gracefully; curated smart dataset is always instant
      }
    }, 220);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [value]);

  // Combine curated instant results (Karnataka prioritized) with live OSM India results without duplicates
  const combinedSuggestions = React.useMemo(() => {
    const seen = new Set<string>();
    const list: LocationSuggestion[] = [];

    for (const item of localSuggestions) {
      const key = item.name.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        list.push(item);
      }
    }

    for (const item of remoteSuggestions) {
      const key = item.name.toLowerCase();
      const alreadyCovered = Array.from(seen).some(
        (existing) => existing.includes(key) || key.includes(existing.split(',')[0])
      );
      if (!alreadyCovered && list.length < 10) {
        seen.add(key);
        list.push(item);
      }
    }

    // Ensure Karnataka results stay on top
    return list.sort((a, b) => a.priority - b.priority);
  }, [localSuggestions, remoteSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (suggestion: LocationSuggestion) => {
    onChange(suggestion.name);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < combinedSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : combinedSuggestions.length - 1
      );
    } else if (e.key === 'Enter' && isOpen && activeIndex >= 0 && combinedSuggestions[activeIndex]) {
      e.preventDefault();
      handleSelect(combinedSuggestions[activeIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const getCategoryIcon = (category: LocationSuggestion['category']) => {
    switch (category) {
      case 'Airport':
        return <Plane className="w-4 h-4 text-primary-600 shrink-0" />;
      case 'Hill Station & Nature':
        return <Mountain className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'Temple & Heritage':
        return <Landmark className="w-4 h-4 text-amber-600 shrink-0" />;
      case 'Coastal & Beach':
        return <Compass className="w-4 h-4 text-sky-600 shrink-0" />;
      case 'City & Hub':
        return <Building2 className="w-4 h-4 text-primary-600 shrink-0" />;
      default:
        return <Navigation className="w-4 h-4 text-gray-500 shrink-0" />;
    }
  };

  // Highlight matching characters in suggestion title
  const renderHighlightedText = (text: string, highlight: string) => {
    const trimmed = highlight.trim();
    if (!trimmed) return <span>{text}</span>;
    const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === trimmed.toLowerCase() ? (
            <span key={i} className="bg-primary-500/25 text-dark-950 font-extrabold px-0.5 rounded">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div ref={containerRef} className="w-full relative">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none z-10">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          name={name}
          value={value}
          autoComplete="off"
          placeholder={placeholder}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            if (onBlur) onBlur();
          }}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
            setActiveIndex(0);
          }}
          onKeyDown={handleKeyDown}
          className={cn(
            'flex h-12 w-full rounded-none border border-gray-200 bg-white pl-11 pr-4 py-2 text-base text-dark-950 ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
            error && 'border-red-500 focus-visible:ring-red-500',
            className
          )}
        />
      </div>

      {isOpen && combinedSuggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-1 z-[100] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-h-80 overflow-y-auto text-left">
          <div className="px-3.5 py-2 bg-dark-950 text-white flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary-500" />
              {value.trim()
                ? 'Smart Matches (Karnataka & India)'
                : 'Popular Karnataka Destinations'}
            </span>
            <span className="text-primary-400">Karnataka Priority</span>
          </div>

          <ul className="divide-y divide-gray-100">
            {combinedSuggestions.map((item, idx) => {
              const isKarnataka = item.state.toLowerCase().includes('karnataka');
              const isActive = idx === activeIndex;
              return (
                <li
                  key={`${item.name}-${idx}`}
                  onMouseDown={(e) => {
                    e.preventDefault(); // Prevent input blur before click registers
                    handleSelect(item);
                  }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={cn(
                    'px-3.5 py-2.5 cursor-pointer transition-colors flex items-start gap-3',
                    isActive ? 'bg-primary-50' : 'hover:bg-gray-50'
                  )}
                >
                  <div className="mt-0.5 p-1.5 rounded-lg bg-gray-100">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-dark-950 truncate">
                      {renderHighlightedText(item.name, value)}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-2 mt-0.5 truncate">
                      <span className="truncate">{item.region}</span>
                      <span>•</span>
                      <span
                        className={cn(
                          'font-bold uppercase tracking-wider text-[10px] px-1.5 py-0.5 rounded',
                          isKarnataka
                            ? 'bg-primary-500/20 text-dark-950'
                            : 'bg-gray-100 text-gray-600'
                        )}
                      >
                        {item.state}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {error && <p className="mt-1.5 text-sm text-red-500 pl-1 text-left">{error}</p>}
    </div>
  );
};
