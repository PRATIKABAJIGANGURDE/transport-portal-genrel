
import TransportForm from "@/components/TransportForm";
import { TransportEntry } from "@/types/transport";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DataEntryPage = ({ onSubmit }: { onSubmit: (entry: TransportEntry) => void }) => {
  const navigate = useNavigate();
  
  const handleSubmit = (entry: TransportEntry) => {
    onSubmit(entry);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-4 -ml-2 text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Entries
        </Button>
        
        <Card className="border-none shadow-lg animate-in">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-primary">
              Add New Transport Entry
            </CardTitle>
            <CardDescription>Create a new transport entry with vehicle and payment details</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <TransportForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataEntryPage;
