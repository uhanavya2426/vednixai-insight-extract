
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Brain, Clock, Users, Shield } from "lucide-react";
import DocumentUpload from "@/components/DocumentUpload";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-slate-800">Vednix AI</span>
          <span className="text-sm text-slate-500">.tech</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-slate-600 hover:text-slate-800">
            Features
          </Button>
          <Button variant="ghost" className="text-slate-600 hover:text-slate-800">
            Pricing
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Powerful AI-Driven Research
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform how you work with documents. Upload, analyze, and extract insights 
            from research papers, PDFs, and datasets in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<FileText className="w-12 h-12 text-blue-600" />}
            title="Document Ingestion"
            description="Upload PDFs, research papers, and documents. Our AI processes multiple formats instantly."
          />
          <FeatureCard
            icon={<Search className="w-12 h-12 text-indigo-600" />}
            title="Natural Language Search"
            description="Ask questions in plain English. No complex queries needed - just ask what you want to know."
          />
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-purple-600" />}
            title="Intelligent Extraction"
            description="Get precise answers with source citations. Our AI understands context and provides accurate insights."
          />
        </div>

        {/* Document Upload Component */}
        <DocumentUpload />

        {/* Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Perfect for Professionals
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 mb-2">Researchers</h4>
              <p className="text-sm text-slate-600">Academic research and literature review</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <FileText className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 mb-2">Students</h4>
              <p className="text-sm text-slate-600">Study materials and paper analysis</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 mb-2">Legal Teams</h4>
              <p className="text-sm text-slate-600">Contract and document review</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 mb-2">Analysts</h4>
              <p className="text-sm text-slate-600">Market research and intelligence</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-xl font-bold">Vednix AI</span>
            <span className="text-sm text-slate-400">.tech</span>
          </div>
          <p className="text-slate-400">
            Empowering research and analysis with artificial intelligence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
