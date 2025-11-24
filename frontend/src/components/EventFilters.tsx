import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CountryCode } from "@/types/CountryCode";
import type { Event } from "@/types/event";

interface EventFiltersProps {
  searchQuery: string;
  selectedCategory: string | null;
  selectedCountryCode: CountryCode;
  events: Event[] | undefined;
  onSearchChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

const EventFilters = ({
  searchQuery,
  selectedCategory,
  selectedCountryCode,
  events,
  onSearchChange,
  onCountryChange,
  onCategoryChange,
}: EventFiltersProps) => {

  const countryCodes = Object.values(CountryCode);
  const categories = Array.from(new Set(events?.map((event) => event.segment) || []));

  return (
    <>
      <div className="flex flex-col justify-between md:flex-row gap-3 sm:gap-4 mb-6">
        
        {/* Search Input */}
        <div className="flex-2">
          <Input
            type="search"
            placeholder="Search events..."
            className="w-full"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex-1 flex flex-col gap-3 sm:flex-row sm:gap-4">

          {/* Country Filter */}
          <div className="flex-1 min-w-0">
            <Select value={selectedCountryCode} onValueChange={onCountryChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto">
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {countryCodes.map((code) => (
                    <SelectItem key={code} value={code}>
                      {code}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div className="flex-1 min-w-0">
            <Select value={selectedCategory ?? ""} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="max-h-60 overflow-y-auto">
                  <SelectLabel>Category</SelectLabel>
                  {categories.map((segment) => (
                    <SelectItem key={segment} value={segment}>
                      {segment}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

        </div>
      </div>

      <Separator className="mb-6" />
    </>
  );
};

export default EventFilters;
