import { Wallet, Upload } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  reset: () => void;
}

export default function Header({ reset }: HeaderProps) {
  return (
    <header className="border-b bg-muted/50 p-4">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-medium">
          <Wallet />
          <span>Transaction Analysis System</span>
        </div>
        <div className="flex items-center gap-2">
          <Button size="lg" onClick={reset}>
            <Upload />
            Upload CSV
          </Button>
        </div>
      </div>
    </header>
  );
}
