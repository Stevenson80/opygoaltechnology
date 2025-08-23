import React from 'react';
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
} from 'lucide-react';

// Import images
import logoImage from './assets/IMG_20211026_192104.jpg';
import gpsLoginImage from './assets/89774257_2978147388874270_2300805085589929984_n.jpg';
import brandingImage from './assets/download(1).png';
import deviceImage from './assets/Screenshot(1183).png';
import dashboardImage from './assets/Screenshot(1113).png';
import trackingImage from './assets/Screenshot(1116).png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <img
                src={logoImage}
                alt="Opygoal Technology Ltd"
                className="h-12 w-auto object-contain max-h-12"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                  Opygoal Technology Ltd
                </h1>
                <p className="text-sm text-gray-600">GPS Tracking Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
                Features
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex mb-4 items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Trusted GPS Solutions
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Secure Your Assets with
              <span className="text-blue-600"> Real-Time GPS Tracking</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Are you looking to secure your assets and optimize your operations?
              Opygoal Technology Ltd. brings you the most reliable and user-friendly
              tracking system available in Nigeria and across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Call 08060221965
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div>
            {/* Hero Image */}
            <img
              src={brandingImage}
              alt="GPS Tracking Solution"
              className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section Example with Responsive Images */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Real-Time Monitoring</h4>
              {/* Content... */}
            </div>
            <div>
              <img
                src={dashboardImage}
                alt="Real-time Dashboard"
                className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="lg:order-2">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Advanced Security Features</h4>
              {/* Content... */}
            </div>
            <div className="lg:order-1">
              <img
                src={deviceImage}
                alt="GT310 GPS Device"
                className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Route Optimization & Reports</h4>
              {/* Content... */}
            </div>
            <div>
              <img
                src={trackingImage}
                alt="Route Tracking"
                className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Responsive Logo */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logoImage}
              alt="Opygoal Technology Ltd"
              className="h-12 w-auto object-contain max-h-12"
            />
            <div>
              <h4 className="text-lg font-bold">Opygoal Technology Ltd</h4>
              <p className="text-gray-400 text-sm">
                Securing your assets, optimizing your future
              </p>
            </div>
          </div>
          <p className="text-gray-400">
            Your trusted partner for comprehensive GPS tracking solutions across Nigeria and Africa.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
