import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

interface UploadProps {
  onFileChange: (file: File | null) => void;
  pulse?: boolean;
  onPulseComplete?: () => void;
}

export default function Upload({
  onFileChange,
  pulse,
  onPulseComplete,
}: UploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileChange(acceptedFiles[0]);
    } else {
      onFileChange(null);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxSize: 1024 * 1024, // 1MB
    maxFiles: 1,
  });

  return (
    <div className="relative">
      <div
        {...getRootProps()}
        className={cn(
          "h-72 cursor-pointer content-center items-center rounded-lg border-2 border-dashed p-8 text-center transition-colors",
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-muted-foreground",
          isDragReject ? "border-destructive bg-destructive/10" : "",
          pulse && "animate-single-pulse",
        )}
        onAnimationEnd={onPulseComplete}
      >
        <input {...getInputProps()} />

        {isDragActive ? (
          <p className="text-primary">Drop the CSV file here...</p>
        ) : (
          <div>
            <Download className="mx-auto size-8 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">
              Drag & drop a CSV file here, or click to select
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Only CSV files up to 1MB are accepted
            </p>
          </div>
        )}

        {fileRejections.length > 0 && (
          <div className="mt-4 text-sm text-destructive">
            {fileRejections.map(({ file, errors }) => (
              <div key={file.name}>
                {errors.map((error) => (
                  <p key={error.code}>{error.message}</p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
