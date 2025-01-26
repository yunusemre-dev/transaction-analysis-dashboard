import { useState } from "react";
import { components } from "@/types/openapi";
import Header from "./components/header";
import AnalysisReport from "./components/analysis-report";
import Upload from "./components/upload";
import { Loading } from "./components/loading";

export default function App() {
  const [csvAnalysis, setCsvAnalysis] = useState<{
    response: components["schemas"]["CSVAnalysisResponse"] | null;
    loading: boolean;
    error: string | null;
  }>({
    response: null,
    loading: false,
    error: null,
  });

  const [pulseTrigger, setPulseTrigger] = useState(false);

  const handleUpload = async (file: File) => {
    setCsvAnalysis((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        import.meta.env.VITE_TAS_API_URL + "/api/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: "Failed to upload file",
        }));
        throw new Error(errorData.message);
      }

      const data = await response.json();
      setCsvAnalysis((prev) => ({
        ...prev,
        response: data,
        loading: false,
        error: null,
      }));
    } catch (e) {
      setCsvAnalysis((prev) => ({
        ...prev,
        loading: false,
        error: e instanceof Error ? e.message : "Failed to upload file",
      }));
    } finally {
      setCsvAnalysis((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleFileChange = (newFile: File | null) => {
    setCsvAnalysis((prev) => ({ ...prev, response: null, error: null }));

    if (newFile) {
      handleUpload(newFile);
    }
  };

  return (
    <>
      <Header
        reset={() => {
          setCsvAnalysis({ response: null, loading: false, error: null });
          setPulseTrigger(true);
        }}
      />
      <main className="mx-auto max-w-screen-xl flex-1">
        {csvAnalysis.loading ? (
          <Loading />
        ) : csvAnalysis.response ? (
          <AnalysisReport analysis={csvAnalysis.response} />
        ) : (
          <div className="mx-auto max-w-screen-md p-4 text-center">
            <h1 className="mt-6 text-2xl font-bold">
              Upload Transaction Dataset
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Upload a CSV file containing transaction data to get started.
            </p>
            <div className="mt-6">
              <Upload
                onFileChange={handleFileChange}
                pulse={pulseTrigger}
                onPulseComplete={() => setPulseTrigger(false)}
              />
              {csvAnalysis.error && (
                <p className="mt-4 text-destructive">{csvAnalysis.error}</p>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
