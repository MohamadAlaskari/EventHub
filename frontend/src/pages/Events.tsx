import EventCard from "@/components/EventCard";
import EventFilters from "@/components/EventFilters";
import { EventsPagination } from "@/components/EventsPagination";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEvents } from "@/hooks/useEvents";
import { CountryCode } from "@/types/CountryCode";
import type { Event } from "@/types/event";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";

const Events = () => {
  const [page, setPage] = useState(0);
  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode>(CountryCode.DE);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Format date to YYYY-MM-DD format for backend
  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : undefined;

  const { events, isLoading, pageInfo } = useEvents({
    countryCode: selectedCountryCode,
    segment: selectedCategory ?? undefined,
    startDate: formattedDate,
    keyword: searchQuery,
    size: 15,
    page,
  });


  // Suche wird jetzt im Backend gemacht, keine clientseitige Filterung mehr nötig
  const filteredEvents = events || [];
  



  const handleCountryChange = (value: string) => {
    setSelectedCountryCode(value as CountryCode);
    setPage(0);
  };

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setPage(0);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value || null);
    setPage(0);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setPage(0);
  };

  const handleResetFilter = () => {
    setSelectedCountryCode(CountryCode.DE);
    setSearchInput("");
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedDate(undefined);
    setPage(0);
  };

  return (
    <Layout>
      <SEO
        title="Events - EventHub | Discover Amazing Events"
        description="Find amazing events happening around you. From concerts to conferences, discover and attend incredible events with EventHub."
        keywords="events, concerts, conferences, festivals, tickets, discover events, entertainment, music, tech events, local events"
      />

      {/* Header Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Events</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Find amazing events happening around you. From concerts to conferences, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {isLoading ? (
            /* Skeleton Loader */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-48 bg-muted animate-pulse" />
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-4 bg-muted rounded animate-pulse" />
                    <Skeleton className="h-4 bg-muted rounded w-2/3 animate-pulse" />
                    <Skeleton className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
                {/* search + filters */}
                    <EventFilters
                        searchInput={searchInput}
                        selectedCategory={selectedCategory}
                        selectedCountryCode={selectedCountryCode}
                        selectedDate={selectedDate}
                        events={events}
                        onSearchInputChange={setSearchInput}
                        onSearch={handleSearch}
                        onCountryChange={handleCountryChange}
                        onCategoryChange={handleCategoryChange}
                        onDateChange={handleDateChange}
                    />

              {/* if Events found */}
              {filteredEvents.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-foreground">
                      {pageInfo?.totalElements ?? 0} Event
                      {(pageInfo?.totalElements ?? 0) !== 1 ? "s" : ""} Found
                    </h2>
                    <div className="text-sm text-muted-foreground">
                      Page {pageInfo ? pageInfo.number + 1 : 1} of {pageInfo?.totalPages}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event: Event,idx) => (
                      <EventCard key={event.id} event={event} isAboveTheFold={idx < 3}/>
                    ))}
                  </div>

                  {/* Pagination */}
                  {pageInfo && pageInfo.totalPages > 1 && (
                    <div className="mt-10">
                        <EventsPagination
                            page={page}
                            totalPages={pageInfo.totalPages}
                            onPageChange={setPage}
                        />
                    </div>
                  )}
                </>
              ) : (
                /* if No Events found */
                <div className="text-center py-20">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No events found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filter criteria
                  </p>
                  <Button onClick={handleResetFilter} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
