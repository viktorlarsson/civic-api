import { AxiosRequestConfig } from 'axios';
export declare type server = 'mockingService' | 'qa' | 'production' | 'test';
export declare const servers: {
    mockingService: string;
    qa: string;
    production: string;
    test: string;
};
export declare const setCredentials: (client_id: string, client_secret: string) => void;
export declare const convertToQueryString: (params: any) => string;
export declare const getRequest: <T>(url: string, options?: AxiosRequestConfig | undefined) => Promise<T>;
