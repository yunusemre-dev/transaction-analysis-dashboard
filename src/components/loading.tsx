import { Loader } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Loading() {
  return (
    <div className="relative mx-auto mt-8 max-w-screen-xl">
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
        <Skeleton className="h-[118px] w-full" />
        <Skeleton className="h-[118px] w-full" />
        <Skeleton className="h-[118px] w-full" />
        <Skeleton className="h-[118px] w-full" />
      </div>

      <div className="mb-10 mt-4 grid grid-cols-2 gap-4">
        <Skeleton className="min-h-screen w-full" />
        <Skeleton className="min-h-screen w-full" />
      </div>

      <Card className="absolute left-0 right-0 top-36 mx-auto flex w-72 flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>
            <Loader className="mx-auto size-8 animate-spin text-foreground" />
          </CardTitle>
          <CardDescription>Analyzing your transaction data...</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
