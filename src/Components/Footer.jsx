import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"; // using lucide-react icons

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Logo width="120px" />
          <p className="mt-4 text-sm leading-6 text-gray-400">
            A modern blog platform where you can read, write, and share
            insightful posts. Join the community and grow with us.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
            Company
          </h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-white">Features</Link></li>
            <li><Link to="/" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/" className="hover:text-white">Affiliate Program</Link></li>
            <li><Link to="/" className="hover:text-white">Press Kit</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
            Support
          </h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-white">Account</Link></li>
            <li><Link to="/" className="hover:text-white">Help</Link></li>
            <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-white">Customer Support</Link></li>
          </ul>
        </div>

        {/* Legals */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
            Legals
          </h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-white">Licensing</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} DevUI. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a href="#" className="hover:text-white"><Facebook size={18} /></a>
          <a href="#" className="hover:text-white"><Twitter size={18} /></a>
          <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
          <a href="#" className="hover:text-white"><Github size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
