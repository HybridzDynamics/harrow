import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Beaker, Globe, Palette, Music, Trophy, Users } from "lucide-react";

const Academics = () => {
  const departments = [
    {
      icon: BookOpen,
      name: "English Language Arts",
      description: "Developing critical thinking, communication skills, and literary appreciation through comprehensive reading and writing programs.",
      subjects: ["Literature", "Creative Writing", "Public Speaking", "Media Studies"]
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Building strong mathematical foundations from basic arithmetic to advanced calculus and statistics.",
      subjects: ["Algebra", "Geometry", "Calculus", "Statistics", "Applied Mathematics"]
    },
    {
      icon: Beaker,
      name: "Sciences",
      description: "Hands-on exploration of the natural world through laboratory experiments and scientific inquiry.",
      subjects: ["Biology", "Chemistry", "Physics", "Environmental Science"]
    },
    {
      icon: Globe,
      name: "Social Studies",
      description: "Understanding human society, culture, and history to become informed global citizens.",
      subjects: ["World History", "Geography", "Civics", "Economics"]
    },
    {
      icon: Palette,
      name: "Arts",
      description: "Fostering creativity and artistic expression through various visual and performing arts.",
      subjects: ["Visual Arts", "Drama", "Digital Media", "Art History"]
    },
    {
      icon: Music,
      name: "Music",
      description: "Developing musical skills and appreciation through performance and music theory.",
      subjects: ["Choir", "Band", "Music Theory", "Music Technology"]
    }
  ];

  const programs = [
    {
      icon: Trophy,
      title: "Honors Program",
      description: "Advanced coursework for academically gifted students seeking additional challenges."
    },
    {
      icon: Users,
      title: "Peer Tutoring",
      description: "Student-to-student academic support system fostering collaborative learning."
    },
    {
      icon: Globe,
      title: "International Exchange",
      description: "Cultural immersion programs with partner schools worldwide."
    }
  ];

  const achievements = [
    "95% graduation rate",
    "85% college acceptance rate",
    "State champions in Academic Olympics",
    "Award-winning robotics team",
    "Outstanding music program recognition"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            A comprehensive curriculum designed to challenge minds, inspire creativity, and prepare students for future success.
          </p>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Academic Departments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse departments offer comprehensive programs designed to meet every student's interests and abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4">
                    <dept.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{dept.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {dept.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Special Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhanced learning opportunities that go beyond the standard curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-primary">Academic Calendar</h2>
              <p className="text-xl text-muted-foreground">
                Important dates and milestones throughout the academic year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Fall Semester</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Classes Begin</span>
                      <span className="font-medium">August 15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mid-term Exams</span>
                      <span className="font-medium">October 10-14</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Final Exams</span>
                      <span className="font-medium">December 12-16</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Winter Break</span>
                      <span className="font-medium">December 19 - January 8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Spring Semester</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Classes Begin</span>
                      <span className="font-medium">January 9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mid-term Exams</span>
                      <span className="font-medium">March 6-10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Final Exams</span>
                      <span className="font-medium">May 22-26</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Graduation</span>
                      <span className="font-medium">June 5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
     
    </div>
  );
};

export default Academics;