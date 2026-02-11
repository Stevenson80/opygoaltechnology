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
  Sun,
  Battery,
  Cpu
} from 'lucide-react';

// Images
const logoImage = '/logo.png';
const brandingImage = '/brandingimage.png';
const dashboardImage = '/dashboardimage.png';
const deviceImage = '/deviceimage.png';
const trackingImage = '/trackingimage.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pricingPlans = [
    {
      title: "Standard Plan",
      subtitle: "Perfect for annual budget flexibility",
      price: "₦90,000",
      renewal: "+ Low Annual Renewal Fee",
      features: [
        "Online Live Tracking (Web & App)",
        "Remote Immobilization (Disable Engine)",
        "Geo-Fence & Speed Alerts",
        "Voice Monitoring Capability",
        "History Travel Reports"
      ],
      buttonText: "Select Standard",
      isPremium: false
    },
    {
      title: "Long Life Activation",
      subtitle: "One-time payment, lifetime peace of mind",
      price: "₦120,000",
      renewal: "No Annual Renewal Required",
      features: [
        "All Features of Standard Plan Included",
        "Lifetime Cloud Login Access",
        "Unlimited History Playback",
        "Priority Technical Support",
        "No Hidden Maintenance Fees"
      ],
      buttonText: "Select Long Life",
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans selection:bg-blue-100 selection:text-blue-900">
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
                  onError={(e) => { e.target.src = "https://via.placeholder.com/60?text=OGT"; }}
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
                <a href="#sustainability" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                  Sustainability
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </nav>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
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
                <a href="#sustainability" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Sustainability
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Contact
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg mx-4 mt-2">
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10">
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
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 08060221965
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
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
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=OGT+Branding"; }}
                />
              </div>
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
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Dashboard+Mockup"; }}
                />
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
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
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
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=GPS+Device"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Pricing Section replacing the old Services cards */}
      <section id="services" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Vehicle Tracking Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional GPS security for your personal vehicle with transparent pricing and flexible activation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col border-2 transition-all duration-300 hover:shadow-2xl ${plan.isPremium ? 'border-blue-600 relative' : 'border-transparent'}`}
              >
                {plan.isPremium && (
                  <div className="bg-blue-600 text-white text-center text-[10px] font-bold py-1.5 uppercase tracking-widest absolute top-0 left-0 right-0">
                    Best Value Option
                  </div>
                )}

                <div className={`p-8 text-center bg-white ${plan.isPremium ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{plan.subtitle}</p>

                  <div className="mt-6 flex justify-center items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ unit</span>
                  </div>

                  <div className={`inline-block mt-4 px-4 py-1 rounded-full text-xs font-semibold ${plan.isPremium ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {plan.renewal}
                  </div>
                </div>

                <div className={`p-8 flex-grow ${plan.isPremium ? 'bg-blue-50/50' : 'bg-gray-50/50'}`}>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className={`h-5 w-5 mr-3 shrink-0 ${plan.isPremium ? 'text-blue-600' : 'text-green-600'}`} />
                        <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-white border-t border-gray-100">
                  <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md ${
                    plan.isPremium
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                    : 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-200'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
              <Car className="h-8 w-8 mx-auto text-blue-500 mb-2" />
              <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Personal Car</p>
            </div>
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
              <Truck className="h-8 w-8 mx-auto text-blue-500 mb-2" />
              <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Fleet Trucks</p>
            </div>
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
              <Building className="h-8 w-8 mx-auto text-blue-500 mb-2" />
              <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Corporate</p>
            </div>
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
              <Smartphone className="h-8 w-8 mx-auto text-blue-500 mb-2" />
              <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Mobile Apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sustainability: Renewable Energy Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solar and inverter installation services for residential, commercial, and industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Solar Solutions */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-yellow-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Solar Solutions</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Solar panel installation
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Grid-tie systems
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Off-grid solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Hybrid systems
                </li>
              </ul>
            </div>

            {/* Inverter Systems */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Inverter Systems</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Power inverters
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Battery backup systems
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  UPS solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Maintenance & support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Lagos Office */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lagos Office</h3>
              <p className="text-gray-600 mb-6">
                29 Amoda Alli, Millennium Estate, Gbagada, Lagos, Nigeria
              </p>

              <div className="mb-6">
                <a
                  href="https://wa.me/2348060221965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (+234) 806-022-1965
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700"><strong>Oladotun Steven Ajakaiye</strong></p>
                <p className="text-gray-600 text-sm">Service Manager & Data Analyst</p>
                <div className="mt-4">
                  <a href="mailto:opygoaltechnologyltd@gmail.com" className="text-blue-600 hover:underline flex items-center text-sm">
                    <Mail className="w-4 h-4 mr-2" />
                    opygoaltechnologyltd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Ibadan Office */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ibadan Office</h3>
              <p className="text-gray-600 mb-6">
                31 Oshuntokun Avenue, Bodija, Ibadan, Oyo State, Nigeria
              </p>

              <div className="mb-6">
                <a
                  href="https://wa.me/2348028868540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (+234) 802-886-8540
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700"><strong>Gbeminiyi Agboola</strong></p>
                <p className="text-gray-600 text-sm">Director of Operations</p>
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
                onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=OGT"; }}
              />
              <div>
                <h4 className="text-lg font-bold">Opygoal Technology Ltd</h4>
                <p className="text-gray-400 text-sm">Securing your assets, optimizing your future</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© 2024 Opygoal Technology Ltd.</p>
              <p className="text-gray-400 text-xs mt-1 italic">Your trusted partner across Nigeria and Africa.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
