import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Users, Send, GraduationCap, Award, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    teachingName: "",
    Discord_user: "",
    Roblox_user: "",
    department: "",
    subject: "",
    benefit: "",
    bestPerson: "",
    mltSlt: "",
    experience: "",
    roleplay: ""
  });


  
  const departments = [
    "Humanities (History, Geography, Religion, Life Lessons)",
    "Core (English, Maths, Science (3/3))",
    "Information (Computing, Citizenship)",
    "Technology (Design Technology, Food Technology)",
    "Physical and Mental (PE, Pastoral)",
    "Performance (Music, Drama)",
    "Arts (Art, Design)"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual webhook URL
      const webhookUrl = "https://discord.com/api/webhooks/1418254371707158538/rhUrtA5QP87yMStvgiuhlo6lNW7LDgJ3j1zFs5VwnXUTjHh7PevQEy2AzFCUjSs1geXx";
      
       const payload = {
      content: "<@&1416538148770418708>New Application in the House", // Ping the role
      embeds: [{
        title: " New Staff Application - Harrow Academy",
        color: 0x3B82F6,
        fields: [
          { name: "Teaching Name", value: formData.teachingName, inline: true },
          { name: "Discord User", value: formData.Discord_user, inline: true },
          { name: "Roblox User", value: formData.Roblox_user, inline: true },
          { name: "Department", value: formData.department, inline: false },
          { name: "Subject", value: formData.subject, inline: false },
          { name: "How do you benefit the team?", value: formData.benefit, inline: false },
          { name: "Why are you the best person?", value: formData.bestPerson, inline: false },
          { name: "Applying for MLT or SLT?", value: formData.mltSlt, inline: true },
          { name: "Experience", value: formData.experience, inline: false },
          { name: "About You (Roleplay)", value: formData.roleplay, inline: false }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Harrow Academy Staff Applications",
        }
      }]
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    toast({
      title: "Application Submitted! 🎉",
      description: "Thank you for your interest in joining our team. We'll review your application and get back to you soon.",
    });

    // Reset form
    setFormData({
      teachingName: "",
      Discord_user: "",
      Roblox_user: "",
      department: "",
      subject: "",
      benefit: "",
      bestPerson: "",
      mltSlt: "",
      experience: "",
      roleplay: ""
    });
  } catch (error) {
    toast({
      title: "Submission Error",
      description: "There was an issue submitting your application. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
             Harrow Academy is looking for passionate educators to join our amazing team. Apply today and help shape the future!
          </p>
        </div>
      </section>

      
    
      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-primary">Staff Application Form</h2>
              <p className="text-xl text-muted-foreground">
                Join the Harrows Academy team today!
              </p>
            </div>

            <Card className="hover-lift animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-up">
                      <Label htmlFor="teachingName">What is your teaching name? *</Label>
                      <Input 
                        id="teachingName" 
                        placeholder="Enter your teaching name"
                        value={formData.teachingName}
                        onChange={(e) => handleInputChange('teachingName', e.target.value)}
                        required 
                      />
                    </div>
                    
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                    <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                      <Label htmlFor="Discord_user">What is your Discord username? *</Label>
                      <Input
                        id="Discord_user"
                        placeholder="e.g., User#1234"
                        value={formData.Discord_user}
                        onChange={(e) => handleInputChange('Discord_user', e.target.value)}
                        required
                      />
                    </div>
                    <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                      <Label htmlFor="Roblox_user">What is your Roblox username? *</Label>
                      <Input
                        id="Roblox_user"
                        placeholder="e.g., User123"
                        value={formData.Roblox_user}
                        onChange={(e) => handleInputChange('Roblox_user', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                      <Label htmlFor="department">What department do you teach? *</Label>
                      <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border">
                          {departments.map((dept, index) => (
                            <SelectItem key={index} value={dept}>{dept}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                      <Label htmlFor="subject">What subject do you teach? *</Label>
                      <Input 
                        id="subject" 
                        placeholder="e.g., Mathematics, English, Science"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
                    <Label htmlFor="benefit">How do you benefit the team? *</Label>
                    <Textarea 
                      id="benefit" 
                      placeholder="Describe how you would contribute to our team and school community"
                      rows={4}
                      value={formData.benefit}
                      onChange={(e) => handleInputChange('benefit', e.target.value)}
                      required 
                    />
                  </div>

                  <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                    <Label htmlFor="bestPerson">Why are you the best person for this position? *</Label>
                    <Textarea 
                      id="bestPerson" 
                      placeholder="Tell us what makes you uniquely qualified for this role"
                      rows={4}
                      value={formData.bestPerson}
                      onChange={(e) => handleInputChange('bestPerson', e.target.value)}
                      required 
                    />
                  </div>

                  <div className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
                    <Label>Are you applying for MLT or SLT? *</Label>
                    <RadioGroup 
                      value={formData.mltSlt} 
                      onValueChange={(value) => handleInputChange('mltSlt', value)} 
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Y" id="mlt-yes" />
                        <Label htmlFor="mlt-yes">Yes - MLT/SLT Position</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="N" id="mlt-no" />
                        <Label htmlFor="mlt-no">No - Teaching Position</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="animate-slide-up" style={{ animationDelay: "0.8s" }}>
                    <Label htmlFor="experience">Tell me about your experience *</Label>
                    <Textarea 
                      id="experience" 
                      placeholder="Describe your teaching experience, qualifications, and professional background"
                      rows={4}
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      required 
                    />
                  </div>

                  <div className="animate-slide-up" style={{ animationDelay: "0.9s" }}>
                    <Label htmlFor="roleplay">Tell me about you (roleplay) *</Label>
                    <Textarea 
                      id="roleplay" 
                      placeholder="Introduce yourself as if you're meeting the school community for the first time"
                      rows={4}
                      value={formData.roleplay}
                      onChange={(e) => handleInputChange('roleplay', e.target.value)}
                      required 
                    />
                  </div>

                  <div className="animate-scale-in" style={{ animationDelay: "1s" }}>
                    <Button 
                      type="submit" 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Harrow Academy?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Harrow Academy focuses on striving to make children the best they can be in today's diverse society. Join our team and help us achieve this mission!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="golden" 
              size="lg" 
              className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
              onClick={() => document.getElementById('teachingName')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Application
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://discord.gg/yYa2Yv6VYa" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;