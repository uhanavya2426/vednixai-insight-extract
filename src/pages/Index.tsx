
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Brain, Clock, Users, Shield } from "lucide-react";
import DocumentUpload from "@/components/DocumentUpload";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold text-white">Vednix AI</span>
          <span className="text-sm text-gray-400">.tech</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
            Features
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
            Pricing
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful AI-Driven Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform how you work with documents. Upload, analyze, and extract insights 
            from research papers, PDFs, and datasets in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<FileText className="w-12 h-12 text-blue-400" />}
            title="Document Ingestion"
            description="Upload PDFs, research papers, and documents. Our AI processes multiple formats instantly."
          />
          <FeatureCard
            icon={<Search className="w-12 h-12 text-indigo-400" />}
            title="Natural Language Search"
            description="Ask questions in plain English. No complex queries needed - just ask what you want to know."
          />
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-purple-400" />}
            title="Intelligent Extraction"
            description="Get precise answers with source citations. Our AI understands context and provides accurate insights."
          />
        </div>

        {/* Document Upload Component */}
        <DocumentUpload />

        {/* Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Perfect for Professionals
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Researchers</h4>
              <p className="text-sm text-gray-300">Academic research and literature review</p>
            </Card>
            <Card className="text-center p-6 border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
              <FileText className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Students</h4>
              <p className="text-sm text-gray-300">Study materials and paper analysis</p>
            </Card>
            <Card className="text-center p-6 border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Legal Teams</h4>
              <p className="text-sm text-gray-300">Contract and document review</p>
            </Card>
            <Card className="text-center p-6 border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Analysts</h4>
              <p className="text-sm text-gray-300">Market research and intelligence</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-xl font-bold">Vednix AI</span>
            <span className="text-sm text-gray-400">.tech</span>
          </div>
          <p className="text-gray-400">
            Empowering research and analysis with artificial intelligence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
