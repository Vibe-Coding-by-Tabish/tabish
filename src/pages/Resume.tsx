import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Create a temporary link to download the PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alex_Chen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-surface-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface-primary/95 backdrop-blur-md border-b border-surface-tertiary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-text-secondary hover:text-electric-blue hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
            <h1 className="text-2xl font-bold text-text-primary">Resume</h1>
            <Button 
              variant="hero" 
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <main className="container mx-auto px-6 py-8">
        <div className="bg-surface-secondary rounded-lg shadow-elegant overflow-hidden">
          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full h-[80vh] border-0"
            title="Alex Chen Resume"
          >
            <p className="p-8 text-text-secondary text-center">
              Your browser doesn't support PDF viewing. 
              <Button 
                variant="link" 
                onClick={handleDownload}
                className="ml-2"
              >
                Download the resume instead
              </Button>
            </p>
          </iframe>
        </div>
        
        {/* Mobile Download Button */}
        <div className="mt-6 flex justify-center md:hidden">
          <Button 
            variant="hero" 
            size="lg"
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Resume;