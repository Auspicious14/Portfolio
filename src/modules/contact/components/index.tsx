import Link from "next/link";
import React from "react";
import { Github, Linkedin, Twitter, Mail, MessageSquare } from "lucide-react";

export const ContactComponent = () => {
  return (
    <div className="py-12">
      <div className="lg:flex justify-between items-center gap-16">
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold mb-6 text-white">Let&apos;s Build Your MVP</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I&apos;m currently accepting new projects for Q2 2026. Whether you have a fully-defined product spec or just an idea on a napkin, let&apos;s talk about how to make it a reality.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium">Available for freelance & contract roles</span>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-12 lg:mt-0">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <MessageSquare className="text-primary" /> Direct Channels
            </h4>
            <div className="space-y-6">
              <a 
                href="mailto:uthmanabdulganiyu20189@gmail.com" 
                className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-medium">uthmanabdulganiyu20189@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/uthman-abdulganiyu/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-white font-medium">Uthman Abdulganiyu</p>
                </div>
              </a>

              <a 
                href="https://github.com/Auspicious14" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">GitHub</p>
                  <p className="text-white font-medium">Auspicious14</p>
                </div>
              </a>

              <a 
                href="https://x.com/_Auspy_" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Twitter size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Twitter / X</p>
                  <p className="text-white font-medium">@_Auspy_</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

