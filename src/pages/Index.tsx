
import TransportEntries from "@/components/TransportEntries";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransportEntries, deleteTransportEntry } from "@/services/transportService";
import { Loader2 } from "lucide-react";

const Index = () => {
  const queryClient = useQueryClient();
  
  const { data: entries = [], isLoading, isError } = useQuery({
    queryKey: ['transportEntries'],
    queryFn: fetchTransportEntries
  });

  const handleDeleteEntry = async (id: string) => {
    const success = await deleteTransportEntry(id);
    if (success) {
      queryClient.invalidateQueries({ queryKey: ['transportEntries'] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Truck className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">Pratik Transport Co</h1>
            <p className="text-slate-500">Manage your transport entries and track payments</p>
          </div>
        </header>

        <Card className="border-none shadow-lg animate-in">
          <CardHeader className="bg-primary/5 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-primary">
              Transport Entries
            </CardTitle>
            <CardDescription>View and manage your transport entries</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : isError ? (
              <div className="text-center py-12 text-red-500">
                Error loading entries. Please refresh the page.
              </div>
            ) : (
              <TransportEntries 
                entries={entries} 
                onDelete={handleDeleteEntry} 
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
