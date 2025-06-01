
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Search, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-slate-800 mb-6 leading-tight">
          Extract Insights from
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {" "}Documents{" "}
          </span>
          with AI
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Upload research papers, PDFs, and documents. Ask questions in natural language. 
          Get precise answers with source citations. Transform your research workflow today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg"
          >
            Try Vednix AI Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
          >
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">10M+</h3>
          <p className="text-slate-600">Documents Analyzed</p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Search className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">99.8%</h3>
          <p className="text-slate-600">Answer Accuracy</p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Zap className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">3 Sec</h3>
          <p className="text-slate-600">Average Response Time</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
