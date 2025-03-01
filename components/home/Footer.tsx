import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-background py-10 text-muted-foreground dark:bg-black dark:text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-primary">About Us</h2>
          <p className="mt-2 text-sm">Welcome to YourBlog, your go-to source for insightful articles on various topics. Stay updated with the latest trends and informative content.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-primary">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">About</a></li>
            <li><a href="#" className="hover:text-primary">Categories</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-primary">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="hover:text-primary transition-colors dark:hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors dark:hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors dark:hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors dark:hover:text-white"><Linkedin size={20} /></a>
          </div>
          <h2 className="text-lg font-semibold text-primary mt-4">Subscribe</h2>
          <div className="mt-2 flex flex-col sm:flex-row items-center gap-2">
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:bg-black dark:border-gray-700 dark:text-black" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6 border-t pt-4">© {new Date().getFullYear()} YourBlog. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
