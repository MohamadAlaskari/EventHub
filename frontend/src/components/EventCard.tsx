import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '@/types/event';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

interface EventCardProps {
  event: Event;
  isAboveTheFold?: boolean;
}

const EventCard = ({ event, isAboveTheFold = false }: EventCardProps) => {
  const [shouldLoad, setShouldLoad] = useState(isAboveTheFold);
  const [isVisible, setIsVisible] = useState(isAboveTheFold);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If image is above the fold, load it immediately
    if (isAboveTheFold) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When image enters viewport
            setShouldLoad(true);
            // Small delay to show animation
            setTimeout(() => setIsVisible(true), 50);
            // Stop observing after loading
            observer.disconnect();
          }
        });
      },
      {
        // Start loading 200px before image appears (preload)
        rootMargin: '200px',
        // threshold: 0.1 means when 10% of image is visible
        threshold: 0.1,
      }
    );

    if (imgContainerRef.current) {
      observer.observe(imgContainerRef.current);
    }

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, [isAboveTheFold]);

  // Safe date creation with fallback
  const createEventDate = () => {
    if (!event.startDate) return new Date();
    
    const dateTimeString = event.startTime 
      ? `${event.startDate}T${event.startTime}`
      : `${event.startDate}T00:00:00`;
    
    const date = new Date(dateTimeString);
    return isNaN(date.getTime()) ? new Date() : date;
  };
  
  const eventDate = createEventDate();
  const eventImage = event.images.find(img => img.ratio === "16_9") || event.images[0];

  return (
    <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 overflow-hidden">
        {/**Card image and overlay price and segment badge */}
        <div 
          ref={imgContainerRef}
          className="relative overflow-hidden bg-muted"
        >
            {shouldLoad ? (
              <img
                src={eventImage?.url}
                alt={event.name}
                loading={isAboveTheFold ? "eager" : "lazy"}
                fetchPriority={isAboveTheFold ? "high" : "auto"}
                decoding="async"
                srcSet={`${eventImage?.url}?w=400 400w, ${eventImage?.url}?w=800 800w`}
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                onError={(e) => {
                  // Fallback when image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              // Placeholder while waiting
              <div className="w-full h-48 bg-muted animate-pulse flex items-center justify-center">
                <Calendar className="h-8 w-8 text-muted-foreground/30" />
              </div>
            )}
            
            {/* Badges - only show when image is loaded */}
            {shouldLoad && (
              <>
                <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground shadow-soft">
                        {event.segment}
                    </Badge>
                </div>

                {event.minPrice && (
                <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-success text-success-foreground border-success">
                    ${event.minPrice}
                    </Badge>
                </div>
                )}
              </>
            )}
        </div>

      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {event.name}
        </h3>
      </CardHeader>

      <CardContent className="pt-0 space-y-3">

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-primary" />
          <span>
            {format(eventDate, 'MMM dd, yyyy')}
            {event.startTime && ` • ${format(eventDate, 'h:mm a')}`}
          </span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="line-clamp-1">{event.venue}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>{event.city}, {event.country}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            {event.promoter}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        <Link to={`/events/${event.id}`} className="w-full">
          <Button 
            variant="hero" 
            className="w-full group-hover:shadow-glow transition-all duration-300"
            size="lg"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;