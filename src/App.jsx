import React, { useState } from 'react';
import {
  MapPin,
  Shield,
  Smartphone,
  Clock,
  AlertTriangle,
  BarChart3,
  Phone,
  Mail,
  CheckCircle,
  Car,
  Truck,
  Building,
  Users,
  Menu,
  X,
  ChevronRight,
  Star,
  Globe,
  Zap,
  Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import './App.css';

// Import images - using placeholder paths for now
const logoImage = '/api/placeholder/120/120';
const gpsLoginImage = '/api/placeholder/600/400';
const brandingImage = '/api/placeholder/800/600';
const deviceImage = '/api/placeholder/500/400';
const dashboardImage = '/api/placeholder/700/500';
const trackingImage = '/api/placeholder/600/400';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={logoImage}
                  alt="Opygoal Technology Ltd"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-cover rounded-xl shadow-md ring-2 ring-blue-100"
                />
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                  Opygoal Technology Ltd
                </h1>
                <p className="text-xs sm:text-sm text-blue-600 font-medium">GPS Tracking Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </nav>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Features
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Services
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Contact
                </a>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg mx-4 mt-2">
                  Get Started
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
                  <Shield className="mr-2 h-4 w-4" />
                  Trusted GPS Solutions
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Secure Your Assets with
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Real-Time GPS Tracking</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Are you looking to secure your assets and optimize your operations?
                  Opygoal Technology Ltd. brings you the most reliable and user-friendly
                  tracking system available in Nigeria and across Africa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 08060221965
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={brandingImage}
                  alt="GPS Tracking Solution"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Advanced GPS Tracking Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience cutting-edge technology designed to keep your assets secure and your operations efficient.
            </p>
          </div>

          <div className="space-y-24">
            {/* Real-Time Monitoring */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                  <Eye className="mr-2 h-4 w-4" />
                  Real-Time Monitoring
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Monitor Your Assets in Real-Time
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get instant updates on your vehicle locations, speed, and status. Our advanced dashboard provides comprehensive insights at a glance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Live Location</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Speed Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Route History</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Instant Alerts</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={dashboardImage}
                  alt="Real-time Dashboard"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Advanced Security Features */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
                  <Shield className="mr-2 h-4 w-4" />
                  Advanced Security
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Military-Grade Security Features
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Protect your valuable assets with our state-of-the-art GT310 GPS device featuring multiple security layers and anti-theft protection.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Engine Immobilization</h4>
                      <p className="text-gray-600">Remotely disable your vehicle in case of theft</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Panic Button</h4>
                      <p className="text-gray-600">Emergency alert system for immediate response</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Geofencing</h4>
                      <p className="text-gray-600">Set virtual boundaries and get instant notifications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <img
                  src={deviceImage}
                  alt="GT310 GPS Device"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Route Optimization */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Smart Analytics
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Route Optimization & Detailed Reports
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Maximize efficiency with intelligent route planning and comprehensive analytics. Get detailed insights to optimize your fleet operations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">Time Tracking</span>
                    </div>
                    <p className="text-sm text-gray-600">Monitor working hours and idle time</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">Route Analysis</span>
                    </div>
                    <p className="text-sm text-gray-600">Optimize routes for fuel efficiency</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={trackingImage}
                  alt="Route Tracking"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive GPS tracking solutions tailored for different industries and use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Vehicles</h3>
              <p className="text-gray-600">Secure your personal car with our advanced tracking system.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fleet Management</h3>
              <p className="text-gray-600">Manage your entire fleet with real-time monitoring and analytics.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Solutions</h3>
              <p className="text-gray-600">Enterprise-grade tracking for large organizations.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Safety</h3>
              <p className="text-gray-600">Keep your loved ones safe with family tracking solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Secure Your Assets?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get in touch with our experts today and discover how Opygoal Technology can help protect what matters most to you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-blue-600 font-medium">08060221965</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-green-600 font-medium">info@opygoaltech.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-purple-600 font-medium">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Get Free Consultation
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl shadow-2xl">
                <div className="text-center text-white space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-yellow-300" />
                      <span>5+ Years of Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-yellow-300" />
                      <span>24/7 Customer Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-yellow-300" />
                      <span>Nationwide Coverage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-yellow-300" />
                      <span>Affordable Pricing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <img
                src={logoImage}
                alt="Opygoal Technology Ltd"
                className="h-10 w-10 object-cover rounded-lg ring-2 ring-gray-700"
              />
              <div>
                <h4 className="text-lg font-bold">Opygoal Technology Ltd</h4>
                <p className="text-gray-400 text-sm">
                  Securing your assets, optimizing your future
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Opygoal Technology Ltd. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Your trusted partner for GPS tracking solutions across Nigeria and Africa.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

