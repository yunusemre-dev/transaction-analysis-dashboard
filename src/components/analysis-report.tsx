import {
  CreditCard,
  DollarSign,
  ChartNoAxesColumnIncreasing,
  Store,
} from "lucide-react";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
} from "./ui/card";
import { components } from "@/types/openapi";
import { Badge } from "./ui/badge";

interface AnalysisReportProps {
  analysis: components["schemas"]["CSVAnalysisResponse"];
}

export default function AnalysisReport({ analysis }: AnalysisReportProps) {
  return (
    <div className="mx-auto mt-8 max-w-screen-xl">
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Total Spent</CardTitle>
            <DollarSign className="size-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <span>$</span>
              {analysis.total_amount.toFixed(2)}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Transactions</CardTitle>
            <CreditCard className="size-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analysis.total_transactions}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              Avg. Transaction
            </CardTitle>
            <ChartNoAxesColumnIncreasing className="size-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <span>$</span>
              {analysis.average_amount.toFixed(2)}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Merchants</CardTitle>
            <Store className="size-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysis.merchant_count}</div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-10 mt-4 grid grid-cols-2 gap-4">
        <div>
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Normalized Merchants
              </CardTitle>
              <CardDescription>
                AI-powered merchant name normalization and categorization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {analysis.normalized_transactions.map((p) => (
                <Card key={p.original} className="bg-background">
                  <CardHeader>
                    <CardDescription className="flex items-center justify-between">
                      <span>Original</span>
                      <span>Normalized</span>
                    </CardDescription>
                    <CardTitle className="flex items-center justify-between">
                      <span>{p.original}</span>
                      <span>{p.normalized.merchant}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Badge>{p.normalized.category}</Badge>
                    <Badge>{p.normalized.sub_category}</Badge>
                    {p.normalized.flags.map((flag) => (
                      <Badge key={flag} variant="outline">
                        {flag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Detected Patterns
              </CardTitle>
              <CardDescription>
                Subscription and recurring payment detection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {analysis.detected_patterns.map((p) => (
                <Card key={p.merchant} className="bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{p.merchant}</span>
                      <span>
                        {p.amount.toString().startsWith("~")
                          ? "~$" + p.amount.toString().slice(1)
                          : "$" + p.amount}
                      </span>
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span>
                        {p.type} &bull; {p.frequency}
                      </span>
                      {p.next_expected && <span>{p.next_expected}</span>}
                    </CardDescription>
                  </CardHeader>
                  {p.notes && (
                    <CardContent>
                      <div>{p.notes}</div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
