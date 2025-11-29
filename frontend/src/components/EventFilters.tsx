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
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CountryCode } from "@/types/CountryCode";
import type { Event } from "@/types/event";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface EventFiltersProps {
  searchQuery: string;
  selectedCategory: string | null;
  selectedCountryCode: CountryCode;
  selectedDate: Date | undefined;
  events: Event[] | undefined;
  onSearchChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onDateChange: (date: Date | undefined) => void;
}

const EventFilters = ({
  searchQuery,
  selectedCategory,
  selectedCountryCode,
  selectedDate,
  events,
  onSearchChange,
  onCountryChange,
  onCategoryChange,
  onDateChange,
}: EventFiltersProps) => {

  const countryCodes = Object.values(CountryCode);
  const categories = Array.from(new Set(events?.map((event) => event.segment) || []));

  return (
    <>
      <div className="flex flex-col justify-between md:flex-row gap-3 sm:gap-4 mb-6">
        
        {/* Search Input */}
        <div className="flex-1">
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

          {/* Date Filter */}
          <div className="flex-1 min-w-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal overflow-hidden",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="truncate">
                    {selectedDate ? format(selectedDate, "d MMM yyyy") : "Select date"}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={onDateChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Country Filter */}
          <div className="flex-1 min-w-0">
            <Select value={selectedCountryCode} onValueChange={onCountryChange}>
              <SelectTrigger className="w-full" aria-label="Select Country">
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
              <SelectTrigger className="w-full" aria-label="Select Category">
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
