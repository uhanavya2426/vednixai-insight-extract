
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Search, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
          Extract Insights from
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {" "}Documents{" "}
          </span>
          with AI
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Upload research papers, PDFs, and documents. Ask questions in natural language. 
          Get precise answers with source citations. Transform your research workflow today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg"
          >
            Try Vednix AI Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg"
          >
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 border border-blue-400/30 rounded-full mb-4">
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">10M+</h3>
          <p className="text-gray-300">Documents Analyzed</p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-900/30 border border-indigo-400/30 rounded-full mb-4">
            <Search className="w-8 h-8 text-indigo-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">99.8%</h3>
          <p className="text-gray-300">Answer Accuracy</p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/30 border border-purple-400/30 rounded-full mb-4">
            <Zap className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">3 Sec</h3>
          <p className="text-gray-300">Average Response Time</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
