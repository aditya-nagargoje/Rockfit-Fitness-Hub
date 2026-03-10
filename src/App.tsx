/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Users, 
  Star, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Clock, 
  Zap, 
  Heart, 
  Activity, 
  Flame, 
  Target, 
  ChevronRight, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            ROCK<span className="text-primary">FIT</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-300 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+917020569018" 
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Phone size={16} />
            Call: 7020569018
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-lg font-medium text-zinc-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#membership" 
                className="block w-full text-center bg-primary text-white py-3 rounded-xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                JOIN NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase">
            The Ultimate Fitness Destination
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
            ROCKFIT <span className="text-primary">FITNESS HUB</span><br />
            <span className="text-3xl md:text-5xl uppercase">Transform Your Strength</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10">
            One of the most trusted gyms in Charholi with modern equipment, certified trainers, and a motivating environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/917020569018" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Join Now
            </a>
            <a 
              href="tel:+917020569018" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-zinc-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const features = [
    "Weight Training", "Cardio Machines", "Zumba Classes", 
    "Yoga Sessions", "CrossFit Training", "Diet Plans", "Personal Coaching"
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Rockfit</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Modern Fitness For Modern People</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              ROCKFIT Fitness Hub is a premier fitness destination in Charholi, Pune. We provide a positive environment, friendly trainers, and professional coaching to help you achieve your fitness goals. Our facility is a clean, motivating space equipped with state-of-the-art machines and led by experts who care about your progress.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
              alt="Gym Interior" 
              className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { title: "Weight Training", icon: <Dumbbell />, desc: "Build muscle and strength with our professional equipment." },
    { title: "Cardio Workouts", icon: <Activity />, desc: "Improve your heart health and burn calories effectively." },
    { title: "Zumba Classes", icon: <Flame />, desc: "Fun, high-energy dance workouts for all fitness levels." },
    { title: "Yoga", icon: <Heart />, desc: "Find balance and flexibility with our expert yoga instructors." },
    { title: "CrossFit Training", icon: <Zap />, desc: "High-intensity functional movements for total fitness." },
    { title: "Personal Training", icon: <Target />, desc: "One-on-one sessions tailored to your specific goals." },
    { title: "Diet Guidance", icon: <CheckCircle2 />, desc: "Customized nutrition plans to fuel your transformation." },
    { title: "Spinning Workouts", icon: <Activity />, desc: "Intense indoor cycling sessions for endurance." },
  ];

  return (
    <section id="programs" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Programs</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Choose Your Path To Fitness</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-950 p-8 rounded-2xl border border-white/5 card-hover group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {program.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{program.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const stats = [
    { label: "Happy Members", value: "250+", icon: <Users /> },
    { label: "Google Rating", value: "4.5 ★", icon: <Star /> },
    { label: "Certified Trainers", value: "Expert", icon: <CheckCircle2 /> },
    { label: "Modern Gym Equipment", value: "Premium", icon: <Dumbbell /> },
  ];

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Rockfit</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">The Best Fitness Experience in Charholi</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary"><CheckCircle2 className="w-5 h-5" /></div>
                <div>
                  <h5 className="text-white font-bold text-lg">Friendly and Supportive Staff</h5>
                  <p className="text-zinc-500">Our team is here to motivate and guide you every step of the way.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary"><CheckCircle2 className="w-5 h-5" /></div>
                <div>
                  <h5 className="text-white font-bold text-lg">Clean Workout Environment</h5>
                  <p className="text-zinc-500">We maintain the highest standards of hygiene and gym atmosphere.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900 p-8 rounded-2xl border border-white/5 text-center"
              >
                <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  const plans = [
    {
      name: "Basic Membership",
      price: "₹1,500",
      period: "per month",
      features: ["Gym Access", "Cardio Area", "Locker Room", "Standard Equipment"],
      popular: false
    },
    {
      name: "Standard Membership",
      price: "₹3,500",
      period: "per 3 months",
      features: ["All Basic Features", "Zumba Classes", "Yoga Sessions", "Diet Guidance"],
      popular: true
    },
    {
      name: "Premium Training",
      price: "₹6,000",
      period: "per month",
      features: ["Personal Trainer", "Custom Workout Plan", "Advanced Diet Plan", "Priority Support"],
      popular: false
    }
  ];

  return (
    <section id="membership" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Affordable Membership For All</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'bg-zinc-950 border-primary shadow-2xl shadow-primary/10' : 'bg-zinc-950 border-white/5'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-zinc-500 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/917020569018" 
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 ${plan.popular ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                <MessageCircle size={18} />
                Join Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Inside Rockfit Hub</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square overflow-hidden rounded-2xl group"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-zinc-950 p-12 rounded-3xl border border-white/5 inline-block">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-4">4.5 Google Rating</h3>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">Trusted by 250+ members in Charholi with a 4.5 star Google rating.</p>
          <div className="mt-8 flex items-center justify-center gap-2 text-primary font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>Verified Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Get In Touch Today</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary"><MapPin /></div>
                <div>
                  <h5 className="text-white font-bold text-lg">Address</h5>
                  <p className="text-zinc-400">Pune - Alandi Rd, Chovisawadi, Charholi Budruk, Pune, Maharashtra 412105</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary"><Phone /></div>
                <div>
                  <h5 className="text-white font-bold text-lg">Phone Number</h5>
                  <p className="text-zinc-400">+91 7020569018</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary"><Clock /></div>
                <div>
                  <h5 className="text-white font-bold text-lg">Opening Hours</h5>
                  <p className="text-zinc-400">Open Daily – Closes at 10 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="tel:+917020569018" 
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a 
                href="https://wa.me/917020569018" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="h-[450px] rounded-3xl overflow-hidden border border-white/10 grayscale contrast-125">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4651351151603!2d73.9004445751944!3d18.64304998247653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c72877777777%3A0x1234567890abcdef!2sROCKFIT%20Fitness%20Hub!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h3 className="text-4xl md:text-6xl font-black text-white mb-4">Start Your Fitness Journey Today</h3>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Join Rockfit Fitness Hub and transform your body with professional training and modern equipment.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/917020569018" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-zinc-950 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-zinc-900 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle size={24} />
            Join Now
          </a>
          <a 
            href="tel:+917020569018" 
            className="w-full sm:w-auto bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-zinc-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Phone size={24} />
            Call 7020569018
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                ROCK<span className="text-primary">FIT</span>
              </span>
            </div>
            <p className="text-zinc-500 mb-6">
              Your premium fitness hub in Charholi. We provide modern equipment and expert coaching to help you transform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h5>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-500 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-zinc-500 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-zinc-500 hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#membership" className="text-zinc-500 hover:text-primary transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h5>
            <ul className="space-y-4 text-zinc-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Pune - Alandi Rd, Chovisawadi, Charholi Budruk, Pune</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 7020569018</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Opening Hours</h5>
            <ul className="space-y-4 text-zinc-500">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="text-white">5:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">6:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} ROCKFIT Fitness Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/917020569018" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 transition-all transform hover:scale-110 animate-float"
    >
      <MessageCircle size={32} />
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Membership />
      <Gallery />
      <Reviews />
      <Contact />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
