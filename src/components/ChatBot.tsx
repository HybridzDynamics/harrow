import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface IntentPattern {
  keywords: string[];
  responses: string[];
  followUpQuestions?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm the Silvergate Academy AI assistant. How can I help you today? I can assist with admissions, academics, events, facilities, or any other questions about our school.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const intentPatterns: Record<string, IntentPattern> = {
    greeting: {
      keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings"],
      responses: [
        "Hello! Welcome to Silvergate Academy. I'm here to help you with any questions about our school. What would you like to know?",
        "Hi there! Thanks for visiting Silvergate Academy. How can I assist you today?",
        "Welcome to Silvergate Academy! I'm your AI assistant and I'm excited to help you learn more about our school."
      ],
      followUpQuestions: ["Would you like to know about our admissions process?", "Are you interested in our academic programs?", "Would you like to hear about our facilities?"]
    },
    
    admissions: {
      keywords: ["admission", "apply", "enroll", "enrollment", "application", "requirements", "how to join", "sign up", "register"],
      responses: [
        "Great! Our admissions process at Silvergate Academy is straightforward. We accept students year-round with flexible enrollment options. You can apply online through our admissions portal, and we'll guide you through each step.",
        "To apply to Silvergate Academy, simply visit our admissions page and complete the online application. We require basic information and academic records. Our admissions team reviews applications promptly.",
        "Silvergate Academy welcomes new students throughout the year! Our application process is designed to be simple and accessible. We'll need some basic information and we can schedule a virtual tour for you and your family."
      ],
      followUpQuestions: ["Would you like to know about our admission requirements?", "Are you interested in scheduling a virtual tour?", "Do you need information about tuition and fees?"]
    },

    academics: {
      keywords: ["academic", "course", "subject", "curriculum", "program", "classes", "study", "learning", "education", "teaching"],
      responses: [
        "Silvergate Academy offers a comprehensive and innovative curriculum! We provide core subjects like Mathematics, Science, English, and History, plus exciting specialized programs including digital media, coding, and creative arts.",
        "Our academic programs are designed to prepare students for the future. We combine traditional subjects with cutting-edge technology courses, including game design, digital storytelling, and STEM programs.",
        "At Silvergate Academy, we believe in personalized learning. Our curriculum includes core academics plus unique electives in technology, arts, and innovation that help students discover their passions."
      ],
      followUpQuestions: ["Would you like details about our STEM programs?", "Are you interested in our arts and creative programs?", "Do you want to know about our advanced placement options?"]
    },

    events: {
      keywords: ["event", "activity", "competition", "extracurricular", "club", "sports", "festival", "ceremony", "graduation"],
      responses: [
        "Silvergate Academy hosts amazing events throughout the year! We have academic competitions, creative showcases, virtual science fairs, esports tournaments, and seasonal celebrations that bring our community together.",
        "Our events calendar is packed with exciting activities! From coding competitions to art exhibitions, drama productions to academic achievement ceremonies - there's always something happening at Silvergate Academy.",
        "We believe school life should be engaging and fun! Our events include student talent shows, inter-house competitions, career days with industry professionals, and special celebration events for our diverse community."
      ],
      followUpQuestions: ["Would you like to see our upcoming events calendar?", "Are you interested in joining any of our clubs?", "Do you want to know about our competitive teams?"]
    },

    facilities: {
      keywords: ["facility", "building", "campus", "library", "lab", "computer", "technology", "equipment", "resources"],
      responses: [
        "Silvergate Academy features state-of-the-art virtual learning environments and cutting-edge technology resources. Our students have access to digital labs, online libraries, and collaborative virtual spaces.",
        "Our facilities are designed for modern education! We provide advanced computer labs, multimedia studios, virtual reality learning spaces, and comprehensive online resources accessible 24/7.",
        "At Silvergate Academy, we invest in the best technology for our students. Our facilities include digital creation labs, coding environments, online collaboration tools, and extensive digital library resources."
      ],
      followUpQuestions: ["Would you like a virtual tour of our facilities?", "Are you interested in our technology resources?", "Do you want to know about our online learning platforms?"]
    },

    staff: {
      keywords: ["teacher", "staff", "faculty", "instructor", "principal", "counselor", "support", "help"],
      responses: [
        "Our faculty at Silvergate Academy consists of certified, experienced educators who are passionate about innovative teaching. Our teachers use modern technology and personalized approaches to help every student succeed.",
        "Silvergate Academy's staff are dedicated professionals committed to student success. We have subject specialists, learning support coordinators, and guidance counselors all working together for our students.",
        "Our teaching team combines traditional educational expertise with modern digital pedagogy. Every staff member at Silvergate Academy is committed to creating an engaging and supportive learning environment."
      ],
      followUpQuestions: ["Would you like to meet our leadership team?", "Are you interested in our student support services?", "Do you want to know about our teacher qualifications?"]
    },

    tuition: {
      keywords: ["tuition", "fee", "cost", "price", "payment", "scholarship", "financial aid", "affordable"],
      responses: [
        "Silvergate Academy offers competitive tuition rates with various payment options to make quality education accessible. We also provide scholarship opportunities and financial aid for qualifying families.",
        "We believe excellent education should be affordable. Silvergate Academy has flexible payment plans, scholarship programs, and financial assistance options. Contact our admissions team for specific pricing information.",
        "Our tuition is designed to be accessible while maintaining high educational standards. We offer multiple payment options and financial aid programs to support families in their educational investment."
      ],
      followUpQuestions: ["Would you like information about our scholarship programs?", "Are you interested in our payment plan options?", "Do you need details about financial aid applications?"]
    },

    contact: {
      keywords: ["contact", "reach", "phone", "email", "address", "location", "visit", "call"],
      responses: [
        "You can reach Silvergate Academy through multiple channels! Visit our contact page for phone numbers and email addresses, or continue chatting with me for immediate assistance.",
        "I'm here to help right now, but for detailed inquiries, you can also contact our main office. All contact information is available on our website's contact page.",
        "Feel free to keep asking me questions! For administrative matters, you can find all our contact details on the website, including email and phone numbers for different departments."
      ],
      followUpQuestions: ["Do you need to speak with admissions directly?", "Would you like to schedule a callback?", "Are you looking for a specific department?"]
    },

    technology: {
      keywords: ["online", "virtual", "digital", "computer", "internet", "platform", "software", "app"],
      responses: [
        "Silvergate Academy is at the forefront of educational technology! We use advanced learning management systems, virtual classrooms, and interactive digital tools to create engaging learning experiences.",
        "Our technology infrastructure supports seamless online learning with high-quality video platforms, collaborative tools, and comprehensive digital resources that students can access anytime, anywhere.",
        "Technology is integrated into everything we do at Silvergate Academy. From virtual labs to AI-assisted learning, we prepare students for a digital future while maintaining personal connections."
      ],
      followUpQuestions: ["Would you like a demo of our learning platform?", "Are you interested in our digital curriculum tools?", "Do you want to know about our tech support for students?"]
    }
  };

  const predictUserIntent = (message: string): string => {
    const normalizedMessage = message.toLowerCase().trim();
    
    // Calculate confidence scores for each intent
    const intentScores: Record<string, number> = {};
    
    Object.entries(intentPatterns).forEach(([intent, pattern]) => {
      let score = 0;
      pattern.keywords.forEach(keyword => {
        if (normalizedMessage.includes(keyword)) {
          score += keyword.length; // Longer keywords get higher weight
        }
      });
      intentScores[intent] = score;
    });

    // Find the highest scoring intent
    const bestIntent = Object.entries(intentScores).reduce((a, b) => 
      intentScores[a[0]] > intentScores[b[0]] ? a : b
    )[0];

    // Return the best intent if it has a score > 0, otherwise return 'default'
    return intentScores[bestIntent] > 0 ? bestIntent : 'default';
  };

  const generateResponse = (userMessage: string): { response: string; followUp?: string } => {
    const intent = predictUserIntent(userMessage);
    
    if (intent === 'default') {
      const defaultResponses = [
        "That's an interesting question! I'd be happy to help you learn more about Silvergate Academy. Could you tell me more specifically what you're looking for?",
        "I want to make sure I give you the best information about Silvergate Academy. Could you be more specific about what you'd like to know?",
        "Great question! I can help you with information about admissions, academics, events, facilities, or anything else about Silvergate Academy. What interests you most?",
        "I'm here to help you learn about everything Silvergate Academy has to offer! What specific area would you like to explore - academics, admissions, student life, or something else?"
      ];
      return {
        response: defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
      };
    }

    const pattern = intentPatterns[intent];
    const response = pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
    const followUp = pattern.followUpQuestions 
      ? pattern.followUpQuestions[Math.floor(Math.random() * pattern.followUpQuestions.length)]
      : undefined;

    return { response, followUp };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const { response, followUp } = generateResponse(inputValue);
      const botResponse = followUp ? `${response}\n\n${followUp}` : response;
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className={cn(
          "w-96 h-[500px] mb-4 flex flex-col shadow-2xl border-primary/20",
          "animate-scale-in origin-bottom-right backdrop-blur-sm"
        )}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center animate-pulse">
                <Bot className="w-4 h-4 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Silvergate Academy Assistant</h3>
                <p className="text-xs opacity-90">Smart AI • Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/10 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-2 animate-fade-in",
                    message.isUser ? "justify-end" : "justify-start"
                  )}
                >
                  {!message.isUser && (
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[280px] p-3 rounded-lg text-sm whitespace-pre-line",
                      message.isUser
                        ? "bg-secondary text-secondary-foreground ml-8"
                        : "bg-muted text-muted-foreground mr-8"
                    )}
                  >
                    {message.content}
                  </div>
                  {message.isUser && (
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 animate-fade-in">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg mr-8">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t bg-background/95">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Silvergate Academy..."
                className="flex-1 bg-background border-input"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Try asking about: admissions • academics • events • facilities • tuition
            </div>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-glow bg-gradient-to-r from-primary to-primary-glow",
          "hover:scale-110 transition-all duration-300 hover-lift",
          "flex items-center justify-center relative overflow-hidden"
        )}
      >
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent",
          "animate-pulse"
        )} />
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground animate-scale-in" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground animate-scale-in" />
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse border-2 border-background" />
        )}
      </Button>
    </div>
  );
};

export default ChatBot;