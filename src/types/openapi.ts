/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/analyze/merchant": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Analyze a single merchant transaction
         * @description Normalizes merchant name and provides additional merchant information
         */
        post: operations["AnalysisController_analyzeMerchant"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/analyze/patterns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Analyze patterns in multiple transactions
         * @description Detects recurring patterns and trends in transaction data
         */
        post: operations["AnalysisController_analyzePatterns"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload and analyze CSV transactions
         * @description Upload a CSV file containing transactions to analyze merchants and detect patterns
         */
        post: operations["UploadController_uploadTransactions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        TransactionDto: {
            /**
             * @description Original merchant description from the transaction
             * @example AMAZON.COM*KB8LL
             */
            description: string;
            /**
             * @description Transaction amount
             * @example 29.99
             */
            amount: number;
            /**
             * @description Transaction date in ISO format
             * @example 2024-01-25
             */
            date: string;
        };
        MerchantAnalysisRequestDto: {
            /** @description Transaction to analyze */
            transaction: components["schemas"]["TransactionDto"];
        };
        NormalizedMerchantResponse: {
            /**
             * @description Normalized merchant name
             * @example Amazon
             */
            merchant: string;
            /**
             * @description Primary category of the merchant
             * @example Shopping
             */
            category: string;
            /**
             * @description Sub-category of the merchant
             * @example Online Retail
             */
            sub_category: string;
            /**
             * @description Confidence score of the normalization
             * @example 0.95
             */
            confidence: number;
            /**
             * @description Whether the transaction is a subscription
             * @example false
             */
            is_subscription: boolean;
            /**
             * @description Additional flags for the merchant
             * @example [
             *       "online_purchase"
             *     ]
             */
            flags: string[];
        };
        MerchantAnalysisResponse: {
            /** @description Normalized merchant information */
            normalized: components["schemas"]["NormalizedMerchantResponse"];
        };
        TransactionsDto: {
            /**
             * @description List of transactions to analyze
             * @example [
             *       {
             *         "description": "AMAZON.COM*KB8LL",
             *         "amount": 29.99,
             *         "date": "2024-01-25"
             *       },
             *       {
             *         "description": "NETFLIX.COM",
             *         "amount": 14.99,
             *         "date": "2024-01-24"
             *       }
             *     ]
             */
            transactions: components["schemas"]["TransactionDto"][];
        };
        PatternResponse: {
            /**
             * @description Type of the detected pattern
             * @example recurring
             */
            type: string;
            /**
             * @description Merchant name associated with the pattern
             * @example Netflix
             */
            merchant: string;
            /** @description Amount associated with the pattern */
            amount: number | string;
            /**
             * @description Frequency of the pattern
             * @example monthly
             */
            frequency: string;
            /**
             * @description Confidence score of the pattern detection
             * @example 0.85
             */
            confidence: number;
            /**
             * @description Expected date of next occurrence
             * @example 2024-02-01T00:00:00Z
             */
            next_expected?: string | null;
            /**
             * @description Additional notes about the pattern
             * @example Regular monthly subscription
             */
            notes?: string | null;
        };
        PatternAnalysisResponse: {
            /**
             * @description List of detected transaction patterns
             * @example [
             *       {
             *         "type": "recurring",
             *         "merchant": "Netflix",
             *         "amount": 14.99,
             *         "frequency": "monthly",
             *         "confidence": 0.85,
             *         "next_expected": "2024-02-01T00:00:00Z",
             *         "notes": "Regular monthly subscription"
             *       },
             *       {
             *         "type": "variable",
             *         "merchant": "Amazon",
             *         "amount": "20-50",
             *         "frequency": "2-3 times per month",
             *         "confidence": 0.75,
             *         "notes": "Regular shopping pattern with variable amounts"
             *       }
             *     ]
             */
            patterns: components["schemas"]["PatternResponse"][];
        };
        NormalizedMerchant: {
            /**
             * @description Normalized merchant name
             * @example Amazon
             */
            merchant: string;
            /**
             * @description Primary category of the merchant
             * @example Shopping
             */
            category: string;
            /**
             * @description Sub-category of the merchant
             * @example Online Retail
             */
            sub_category: string;
            /**
             * @description Confidence score of the normalization
             * @example 0.95
             */
            confidence: number;
            /**
             * @description Whether the transaction is a subscription
             * @example false
             */
            is_subscription: boolean;
            /**
             * @description Additional flags for the merchant
             * @example [
             *       "online_purchase"
             *     ]
             */
            flags: string[];
        };
        NormalizedTransaction: {
            /**
             * @description Original merchant description from the transaction
             * @example AMAZON.COM*KB8LL
             */
            original: string;
            /** @description Normalized merchant information */
            normalized: components["schemas"]["NormalizedMerchant"];
        };
        Pattern: {
            /**
             * @description Type of the detected pattern
             * @example recurring
             */
            type: string;
            /**
             * @description Merchant name associated with the pattern
             * @example Netflix
             */
            merchant: string;
            /** @description Amount associated with the pattern */
            amount: number | string;
            /**
             * @description Frequency of the pattern
             * @example monthly
             */
            frequency: string;
            /**
             * @description Confidence score of the pattern detection
             * @example 0.85
             */
            confidence: number;
            /**
             * @description Expected date of next occurrence
             * @example 2024-02-01T00:00:00Z
             */
            next_expected?: string;
            /**
             * @description Additional notes about the pattern
             * @example Regular monthly subscription
             */
            notes?: string;
        };
        CSVAnalysisResponse: {
            /**
             * @description List of normalized transactions
             * @example [
             *       {
             *         "original": "AMAZON.COM*KB8LL",
             *         "normalized": {
             *           "merchant": "Amazon",
             *           "category": "Shopping",
             *           "sub_category": "Online Retail",
             *           "confidence": 0.95,
             *           "is_subscription": false,
             *           "flags": [
             *             "online_purchase"
             *           ]
             *         }
             *       }
             *     ]
             */
            normalized_transactions: components["schemas"]["NormalizedTransaction"][];
            /**
             * @description List of detected transaction patterns
             * @example [
             *       {
             *         "type": "recurring",
             *         "merchant": "Netflix",
             *         "amount": 14.99,
             *         "frequency": "monthly",
             *         "confidence": 0.85,
             *         "next_expected": "2024-02-01T00:00:00Z",
             *         "notes": "Regular monthly subscription"
             *       }
             *     ]
             */
            detected_patterns: components["schemas"]["Pattern"][];
            /**
             * @description Total amount of transactions
             * @example 1425.15
             */
            total_amount: number;
            /**
             * @description Average amount of transactions
             * @example 142.52
             */
            average_amount: number;
            /**
             * @description Total number of transactions
             * @example 58
             */
            total_transactions: number;
            /**
             * @description Total number of merchants
             * @example 20
             */
            merchant_count: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    AnalysisController_analyzeMerchant: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MerchantAnalysisRequestDto"];
            };
        };
        responses: {
            /** @description Merchant successfully analyzed */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MerchantAnalysisResponse"];
                };
            };
            /** @description Invalid transaction data */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AnalysisController_analyzePatterns: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TransactionsDto"];
            };
        };
        responses: {
            /** @description Patterns successfully analyzed */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PatternAnalysisResponse"];
                };
            };
            /** @description Invalid transactions data */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UploadController_uploadTransactions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description CSV file containing transactions
                     */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description CSV file successfully analyzed */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CSVAnalysisResponse"];
                };
            };
            /** @description Invalid file format or content */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
