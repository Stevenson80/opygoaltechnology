import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
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
  Users
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
              <img src={logoImage} alt="Opygoal Technology Ltd" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Opygoal Technology Ltd</h1>
                <p className="text-sm text-gray-600">GPS Tracking Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Trusted GPS Solutions
              </Badge>
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
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:+2348060221965">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 08060221965
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={brandingImage}
                alt="GPS Tracking Solution"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Challenges in Fleet Management
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In today's fast-paced world, managing your mobile assets can be a challenge.
              Unauthorized usage, inefficient routes, and security concerns can impact your bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Security Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Vehicle theft and unauthorized usage can lead to significant losses</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Inefficient Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Poor route planning increases fuel costs and reduces productivity</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Time Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Lack of real-time monitoring leads to operational inefficiencies</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              The Solution
            </Badge>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Introducing Our Comprehensive GPS Tracking System
            </h4>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our modular-based system allows for real-time monitoring and management of mobile assets
              throughout Nigeria and Africa, with superior mapping and an intuitive interface.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Features & Benefits
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our GT310 tracking devices offer extensive functionality with the most innovative
              technology in the market today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Real-Time Monitoring</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Live Vehicle Tracking</h5>
                    <p className="text-gray-600">See exactly where your vehicles are, anytime, anywhere with our real-time GPS monitoring.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Superior Mapping Technology</h5>
                    <p className="text-gray-600">Latest mapping technology with accurate and updated maps across Nigeria and Africa.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Comprehensive Dashboard</h5>
                    <p className="text-gray-600">User-friendly interface showing vehicle status, reports, playback, and maintenance management.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={dashboardImage}
                alt="Real-time Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="lg:order-2">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Advanced Security Features</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Geo-fencing & Alerts</h5>
                    <p className="text-gray-600">Set virtual boundaries and receive instant alerts when vehicles enter or exit designated areas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Remote Immobilization</h5>
                    <p className="text-gray-600">Remotely shut down and restart vehicles for enhanced security and theft prevention.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Panic Button & Voice Monitoring</h5>
                    <p className="text-gray-600">Emergency panic button and voice monitoring capabilities for driver safety.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <img
                src={deviceImage}
                alt="GT310 GPS Device"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Route Optimization & Reports</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Shortest Route Mapping</h5>
                    <p className="text-gray-600">Map the shortest routes and save 20-30% on fuel bills with optimized routing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Detailed Reporting</h5>
                    <p className="text-gray-600">Comprehensive reports including speed, mileage, stops, and driver behavior analysis.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h5 className="font-semibold text-gray-900">Unauthorized Stop Monitoring</h5>
                    <p className="text-gray-600">Monitor unauthorized stops and idle time to increase driver productivity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={trackingImage}
                alt="Route Tracking"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We service a diverse market spanning a broad spectrum of business disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Car className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Fleet Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Corporate fleets, taxi services, and car hire companies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Transportation, distribution, haulage, and courier services</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Heavy machinery, construction equipment, and engineering vehicles</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Emergency Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Health services, security, and emergency response vehicles</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-4">
                    <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <CardTitle className="text-xl text-green-800">Sustainability: Renewable Energy Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base mb-4">
                  Comprehensive solar and inverter installation services for residential, commercial, and industrial applications.
                  Reduce energy costs, ensure reliable power supply, and contribute to environmental sustainability.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="text-left">
                    <h6 className="font-semibold text-green-700 mb-2">Solar Solutions:</h6>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Solar panel installation</li>
                      <li>• Grid-tie systems</li>
                      <li>• Off-grid solutions</li>
                      <li>• Hybrid systems</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h6 className="font-semibold text-green-700 mb-2">Inverter Systems:</h6>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Power inverters</li>
                      <li>• Battery backup systems</li>
                      <li>• UPS solutions</li>
                      <li>• Maintenance & support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Cost Savings & Benefits
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">20-30%</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">Fuel Savings</h5>
                <p className="text-gray-600 text-sm">Reduce fuel costs through optimized routing and monitoring</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">Accurate Invoicing</h5>
                <p className="text-gray-600 text-sm">Proof of visits and accurate timesheets for better customer relations</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">Theft Recovery</h5>
                <p className="text-gray-600 text-sm">Real-time tracking for quick recovery of stolen vehicles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Fleet Management?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact Opygoal Technology Ltd. today for a consultation and discover how our solutions can benefit your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <CardDescription>We guarantee complete satisfaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Phone</h5>
                    <a href="tel:+2348060221965" className="text-blue-600 hover:text-blue-800 transition-colors">
                      08060221965
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Email</h5>
                    <a href="mailto:opygoaltechnologyltd@gmail.com" className="text-green-600 hover:text-green-800 transition-colors">
                      opygoaltechnologyltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Location</h5>
                    <p className="text-gray-600">Millenium Estate, Gbagada, Lagos Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Opygoal Technology?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <p className="text-gray-600">Registered and well-established company with proven track record</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <p className="text-gray-600">24/7 backup support and call center services</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <p className="text-gray-600">Offshore hosting in USA with backup servers in China and Nigeria</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <p className="text-gray-600">Comprehensive security solutions beyond GPS tracking</p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4" asChild>
                  <a href="tel:+2348060221965">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 08060221965
                  </a>
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Steven Ajakaiye - Director of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImage} alt="Opygoal Technology Ltd" className="h-10 w-auto" />
                <div>
                  <h4 className="text-lg font-bold">Opygoal Technology Ltd</h4>
                  <p className="text-gray-400 text-sm">Securing your assets, optimizing your future</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for comprehensive GPS tracking solutions across Nigeria and Africa.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>GPS Vehicle Tracking</li>
                <li>Fleet Management</li>
                <li>Security Solutions</li>
                <li>CCTV Systems</li>
                <li>Access Control</li>
                <li>Solar & Inverter Systems</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <a href="tel:+2348060221965" className="block hover:text-white transition-colors">
                  Phone: 08060221965
                </a>
                <a href="mailto:opygoaltechnologyltd@gmail.com" className="block hover:text-white transition-colors">
                  Email: opygoaltechnologyltd@gmail.com
                </a>
                <p>Location: Millenium Estate, Gbagada, Lagos Nigeria</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Opygoal Technology Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

