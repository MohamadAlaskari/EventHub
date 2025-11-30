import { Search, Heart, MapPin, Ticket, Share2, Globe } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Feature {
    icon: LucideIcon
    title: string
    description: string
    gradientType: "primary" | "accent"
}

export interface Step {
    stepNumber: number
    title: string
    description: string
    gradientType: "primary" | "accent"
}

export const features: Feature[] = [
    {
        icon: Globe,
        title: "Discover Events Worldwide",
        description: "Explore events from around the world. Browse concerts, festivals, sports, and cultural events happening globally.",
        gradientType: "primary"
    },
    {
        icon: Search,
        title: "Search & Filter",
        description: "Search events by keywords and filter by country, category (Music, Sports, Arts & Theatre), and date to find exactly what you're looking for.",
        gradientType: "accent"
    },
    {
        icon: Heart,
        title: "Save Favorites",
        description: "Add events to your favorites list to easily access them later. Manage all your saved events in one place.",
        gradientType: "primary"
    },
    {
        icon: MapPin,
        title: "Event Locations",
        description: "View event locations on interactive maps. Get detailed venue information including address and coordinates.",
        gradientType: "accent"
    },
    {
        icon: Share2,
        title: "Share Events",
        description: "Share your favorite events with friends using the built-in share functionality. Spread the word about amazing events.",
        gradientType: "primary"
    },
    {
        icon: Ticket,
        title: "Get Your Tickets",
        description: "Access official event pages to secure your tickets instantly. Get redirected to trusted ticket platforms for a seamless booking experience.",
        gradientType: "accent"
    }
]

export const steps: Step[] = [
    {
        stepNumber: 1,
        title: "Sign Up",
        description: "Create a free account to access all features. Sign up with your email and start exploring events right away.",
        gradientType: "primary"
    },
    {
        stepNumber: 2,
        title: "Browse & Filter",
        description: "Search and filter events by keyword, country, category, or date. Use our powerful filters to find events that match your interests.",
        gradientType: "accent"
    },
    {
        stepNumber: 3,
        title: "Save & Share",
        description: "Add events to your favorites, view detailed event information with maps, and share events with friends.",
        gradientType: "primary"
    }
]

