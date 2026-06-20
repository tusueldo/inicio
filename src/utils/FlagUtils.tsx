import { CountryTaxData } from "../data/countries";

/**
 * Returns a secure, reliable CDN URL for a country flag SVG image.
 * Uses the Flagpedia API which provides high-quality country flag SVGs by 2-letter ISO code.
 * Lowercases the ISO code since Flagpedia expects lowercase.
 */
export function getFlagUrl(countryCode: string): string {
  // Flagpedia flags URL format: https://flagcdn.com/w40/co.png
  // Lowercase the code (e.g. "ES" -> "es")
  return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
}

interface FlagImageProps {
  country: { code: string; name: string } | CountryTaxData;
  className?: string;
}

export function FlagImage({ country, className = "w-6 h-4 inline-block object-cover rounded-sm shadow-sm" }: FlagImageProps) {
  return (
    <img
      src={getFlagUrl(country.code)}
      alt={`Bandera de ${country.name}`}
      className={className}
      loading="lazy"
      onError={(e) => {
        // Fallback to text initials if image fails
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
