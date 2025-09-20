import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Trophy, Music, Palette, BookOpen } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Science Fair",
      date: "2024-02-15",
      time: "9:00 AM - 3:00 PM",
      location: "Main Gymnasium",
      category: "Academic",
      description: "Students showcase their innovative science projects and compete for awards.",
      icon: Trophy
    },
    {
      title: "Spring Concert",
      date: "2024-03-10",
      time: "7:00 PM - 9:00 PM",
      location: "School Auditorium",
      category: "Arts",
      description: "Our talented students perform in a celebration of music and creativity.",
      icon: Music
    },
    {
      title: "Career Day",
      date: "2024-03-22",
      time: "10:00 AM - 2:00 PM",
      location: "Multiple Classrooms",
      category: "Career",
      description: "Local professionals share insights about various career paths.",
      icon: Users
    },
    {
      title: "Art Exhibition Opening",
      date: "2024-04-05",
      time: "6:00 PM - 8:00 PM",
      location: "Art Gallery",
      category: "Arts",
      description: "Showcase of student artwork from all grade levels.",
      icon: Palette
    },
    {
      title: "Academic Awards Ceremony",
      date: "2024-04-18",
      time: "7:00 PM - 9:00 PM",
      location: "School Auditorium",
      category: "Academic",
      description: "Recognizing outstanding academic achievements and scholarships.",
      icon: Trophy
    },
    {
      title: "Spring Drama Production",
      date: "2024-05-03",
      time: "7:30 PM - 9:30 PM",
      location: "School Theater",
      category: "Arts",
      description: "Student theatrical performance of a classic drama.",
      icon: Users
    }
  ];

  const pastEvents = [
    {
      title: "Winter Sports Banquet",
      date: "2024-01-20",
      category: "Sports",
      highlight: "Celebrated outstanding athletic achievements"
    },
    {
      title: "Debate Tournament",
      date: "2024-01-15",
      category: "Academic",
      highlight: "Our team placed 2nd in regional competition"
    },
    {
      title: "Holiday Concert",
      date: "2023-12-15",
      category: "Arts",
      highlight: "Beautiful performances by choir and band"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-primary text-primary-foreground";
      case "Arts":
        return "bg-secondary text-secondary-foreground";
      case "Sports":
        return "bg-destructive text-destructive-foreground";
      case "Career":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Our events calendar is still being developed. Check back soon for exciting events and activities!
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our academic calendar is still to be discovered. Stay tuned for exciting events and activities!
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Coming Soon!</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              We're working hard to plan amazing events for our school community. Check our Discord for updates and announcements about upcoming activities.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://discord.gg/yYa2Yv6VYa" target="_blank" rel="noopener noreferrer">
                Join Discord for Updates
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Event Calendar</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay organized with our comprehensive calendar of school events and activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-scale-in">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Full Calendar View</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Access our complete event calendar with detailed information about all school activities, 
                    important dates, and deadlines. Never miss an important event again!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg">
                      View Full Calendar
                    </Button>
                    <Button variant="outline" size="lg">
                      Subscribe to Calendar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Recent Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look at some of our recent successful events and celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Badge className={getCategoryColor(event.category)} variant="secondary">
                    {event.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-primary">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{formatDate(event.date)}</p>
                  <p className="text-muted-foreground leading-relaxed">{event.highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our vibrant school community by participating in events, volunteering, or organizing your own activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              Volunteer Opportunities
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Submit Event Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;