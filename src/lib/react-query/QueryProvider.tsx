import { ReactNode } from 'react'
import { ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();


export const QueryProvider = ({ children }: { children: ReactNode }) => {
 return (
   <QueryClientProvider client={queryClient}>
       {children}
       <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
 )
}




