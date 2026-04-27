import { useState, useEffect, useRef } from 'react';
import { Play, X, Mail, MessageCircle, Video, Sparkles, ChevronRight, Grid, User, Phone } from 'lucide-react';
import Cursor from './components/Cursor';

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  concept: string;
  tools: string[];
  thumbnail: string;
}

type ActiveSection = 'home' | 'showreel' | 'projects' | 'about' | 'contact';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [isHovering, setIsHovering] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Identity Animation",
      description: "Animated logo reveal and brand identity system",
      videoUrl: "https://player.vimeo.com/video/1079126285",
      concept: "Creating a dynamic brand identity through motion, focusing on fluid transitions and emotional connection.",
      tools: ["After Effects", "Illustrator", "Cinema 4D"],
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Product Launch Campaign",
      description: "Full campaign motion graphics for tech product launch",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      concept: "Visual storytelling that highlights product features through kinetic typography and 3D elements.",
      tools: ["After Effects", "Premiere Pro", "Blender"],
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Event Opening Sequence",
      description: "Conference opening animation and motion graphics",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      concept: "Creating an immersive experience that sets the tone for a major industry event.",
      tools: ["After Effects", "Photoshop", "Procreater"],
      thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Social Media Series",
      description: "Animated content series for social platforms",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      concept: "Short-form animated content designed for maximum engagement and shareability.",
      tools: ["After Effects", "Premiere Pro", "Illustrator"],
      thumbnail: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Explainer Video Series",
      description: "Animated explainer videos for SaaS platform",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      concept: "Simplifying complex concepts through clear visual storytelling and character animation.",
      tools: ["After Effects", "Illustrator", "Character Animator"],
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Music Visualizer",
      description: "Custom music visualization for electronic artist",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      concept: "Syncing visual elements with audio frequencies to create an immersive audio-visual experience.",
      tools: ["After Effects", "Trapcode Suite", "Cinema 4D"],
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Handle cinematic intro
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 3500); // 3.5 seconds for full intro sequence

    return () => clearTimeout(timer);
  }, []);



  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
    document.body.style.overflow = 'auto';
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'showreel', label: 'Showreel', icon: Video },
    { id: 'projects', label: 'Projects', icon: Grid },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#111111] text-white overflow-hidden relative">
      {/* Custom cursor */}
      <Cursor isHovering={isHovering} />
      
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#111111] animate-gradient-slow"></div>
      
      {/* Subtle grain overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22256%22 height=%22256%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none"></div>
      
      {/* Animated radial glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10 animate-pulse-slow pointer-events-none"></div>
      


      {/* Cinematic Intro */}
      <div 
        ref={introRef}
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
          introComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Dark overlay with grain */}
        <div className="absolute inset-0 bg-black/95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22256%22 height=%22256%22 filter=%22url(%23noise)%22 opacity=%220.1%22/%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Ambient light glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Intro text sequence */}
        <div className="relative z-10 text-center space-y-8">
          {/* VARUN text with fade and upward motion */}
          <h1 className={`text-8xl md:text-9xl font-bold tracking-tighter bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent transition-all duration-1000 ${
            introComplete ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'
          }`}>
            VARUN
          </h1>
          
          {/* Motion Graphics Designer text */}
          <div className={`transition-all duration-1000 delay-700 ${
            introComplete ? 'opacity-0 translate-y-10 blur-sm' : 'opacity-100 translate-y-0 blur-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-6">
              Motion Graphics Designer
            </h2>
            
            {/* Tagline */}
            <p className="text-xl text-gray-400 max-w-2xl mx-auto px-6">
              I create visuals that move, engage, and convert.
            </p>
          </div>
        </div>
      </div>

      {/* Main UI - Only shows after intro */}
      <div className={`relative z-40 transition-all duration-1000 ${
        introComplete ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Navigation Panel */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
          <div className="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 space-y-4 shadow-2xl">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as ActiveSection)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className={`relative group flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                      : 'hover:bg-gray-800/50 border border-gray-700/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-300'
                      : 'text-gray-400 group-hover:text-white'
                  }`} />
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                  )}
                  
                  {/* Tooltip */}
                  <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="min-h-screen flex items-center justify-center px-8 py-24">
          <div className="max-w-6xl w-full mx-auto">
            {/* Home Section */}
            {activeSection === 'home' && (
              <div className="animate-fade-in">
                <div className="text-center space-y-8">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm animate-float-slow">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <span className="text-lg font-medium text-blue-300">Motion Graphics Designer</span>
                  </div>
                  
                  <h1 className="text-7xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-zoom-in">
                    VARUN
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl font-light text-gray-300 max-w-3xl mx-auto">
                    I create visuals that move, engage, and convert.
                  </h2>
                  
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Transforming ideas into captivating motion experiences that tell stories and drive results.
                  </p>
                  
                  <div className="pt-8">
                    <button
                      onClick={() => setActiveSection('showreel')}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                    >
                      <span className="text-lg font-medium">View Showreel</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Showreel Section */}
            {activeSection === 'showreel' && (
              <div className="animate-fade-in">
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Showreel</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">A curated selection of my best motion work from the past year</p>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl animate-float">
                      <div className="aspect-video">
                        <iframe
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&modestbranding=1&rel=0"
                          className="w-full h-full"
                          title="Varun Motion Graphics Showreel"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className="animate-fade-in">
                <div className="space-y-12">
                  <div className="text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Projects</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Selected motion graphics projects showcasing different styles and techniques</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => openProjectModal(project)}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="group relative cursor-pointer animate-float-slow"
                        style={{ animationDelay: `${project.id * 100}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 group-hover:border-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                                <Play className="w-8 h-8 text-white ml-1" />
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* About Section */}
            {activeSection === 'about' && (
              <div className="animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 animate-float">
                        <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                        <p className="text-gray-300 leading-relaxed">
                          I'm a motion graphics designer specializing in high-impact visual storytelling. 
                          I create content for brands, events, and digital platforms that moves, engages, and converts.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                          With a background in both design and animation, I bridge the gap between creative vision 
                          and technical execution to deliver compelling motion experiences.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 animate-float" style={{ animationDelay: '200ms' }}>
                        <h3 className="text-2xl font-semibold mb-6">Tools & Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {['After Effects', 'Premiere Pro', 'Cinema 4D', 'Illustrator', 'Photoshop', 'Blender'].map((tool, index) => (
                            <div
                              key={tool}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                              <span className="font-medium">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <div className="animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Let's Work Together</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Ready to bring your ideas to life with motion?</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <a
                      href="mailto:varun@motiondesign.com"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 group-hover:border-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                            <Mail className="w-6 h-6 text-blue-300" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-1">Email</h3>
                            <p className="text-gray-400">varun@motiondesign.com</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 group-hover:border-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                            <MessageCircle className="w-6 h-6 text-blue-300" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                            <p className="text-gray-400">+1 234 567 890</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  <div className="text-center mt-12">
                    <button
                      onClick={() => setActiveSection('showreel')}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                    >
                      <span className="text-lg font-medium">View My Work</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in">
          {/* Backdrop blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-lg"
            onClick={closeProjectModal}
          ></div>
          
          {/* Modal content */}
          <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
            <button
              onClick={closeProjectModal}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:scale-110 hover:border-red-500/30 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="aspect-video">
              <iframe
                src={selectedProject.videoUrl}
                className="w-full h-full"
                title={selectedProject.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.concept}</p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}