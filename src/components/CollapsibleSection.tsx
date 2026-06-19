import { useState, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Props {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  toggleable?: boolean;
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
  visible?: boolean;
  badge?: string;
}

export default function CollapsibleSection({
  title,
  icon,
  children,
  defaultOpen = false,
  toggleable = false,
  enabled = true,
  onToggle,
  visible = true,
  badge,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    if (!enabled && toggleable) {
      setIsOpen(false);
    }
  }, [enabled, toggleable]);

  if (!visible) return null;

  const handleToggle = () => {
    if (toggleable && onToggle) {
      onToggle(!enabled);
    }
  };

  const handleHeaderClick = () => {
    if (enabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        enabled
          ? "bg-slate-800/50 border-slate-700"
          : "bg-slate-900/50 border-slate-800 opacity-60"
      }`}
    >
      <div
        onClick={handleHeaderClick}
        className={`flex items-center justify-between px-4 py-3 ${
          enabled ? "cursor-pointer hover:bg-slate-700/30" : "cursor-not-allowed"
        } rounded-t-xl transition-colors`}
      >
        <div className="flex items-center gap-3">
          {toggleable && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
              className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                enabled
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-700 text-slate-500 border border-slate-600"
              }`}
            >
              {enabled && <Check className="w-3 h-3" />}
            </button>
          )}
          <span className="text-emerald-400">{icon}</span>
          <span className={`font-medium ${enabled ? "text-white" : "text-slate-500"}`}>
            {title}
          </span>
          {badge && (
            <span className="px-2 py-0.5 text-xs bg-slate-700 text-slate-400 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen && enabled ? "rotate-180" : ""
          } ${enabled ? "text-slate-400" : "text-slate-600"}`}
        />
      </div>

      {isOpen && enabled && (
        <div className="px-4 pb-4 pt-1 space-y-4 border-t border-slate-700/50 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
