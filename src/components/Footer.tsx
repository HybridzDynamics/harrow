import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  useEffect(() => {
    // Dynamically load DMCA badge helper script (only in browser)
    if (typeof document !== "undefined") {
      const id = "dmca-badge-helper";
      if (!document.getElementById(id)) {
        const script = document.createElement("script");
        script.id = id;
        script.src = "https://images.dmca.com/Badges/DMCABadgeHelper.min.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={schoolLogo} alt="Harrow  Academy" className="h-10 w-10" />
              <div>
                <h3 className="text-lg font-bold">Harrow  Academy</h3>
                <p className="text-sm text-primary-foreground/80">Secondary School</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Where students thrive today! Join our amazing community at Harrow  Academy Secondary School.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Academics", href: "/academics" },
                { name: "Admissions", href: "/admissions" },
                { name: "Events", href: "/events" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-secondary" />
                <span className="text-primary-foreground/80">123 Education Street, Learning City</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MessageCircle size={16} className="text-secondary" />
                <span className="text-primary-foreground/80">Discord Ticket System</span>
              </div>
            </div>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">School Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <Clock size={16} className="text-secondary" />
                <div className="text-primary-foreground/80">
                  <p>School Hours:</p>
                  <p>7:00 PM - 8:56 PM BST</p>
                </div>
              </div>
              <div className="text-sm text-primary-foreground/80 mt-3">
                <p>Reception Hours:</p>
                <p>7:30 PM - 9:00 PM BST</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Harrow Academy. All rights reserved.
          </p>
        </div>
        <div className="mt-8 text-center">
          made with ❤️ by <a href="https://hybridzdynamics.vercel.app/" className="text-secondary hover:underline" rel="noopener noreferrer" target="_blank">Hybridz Dynamics</a>
          <a
            href="https://www.dmca.com/Protection/Status.aspx?ID=9a681193-270b-4482-9eb0-046db4bf22a1&refurl=https://harrowacademy.vercel.app/"
            title="DMCA.com Protection Status"
            className="dmca-badge"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-04.png?ID=a0934868-aaab-4a57-8b45-a550e92f7968"
              alt="DMCA.com Protection Status"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;