import { DataProvider } from '@/components/providers/DataProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';

const RootLayout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <Slot />
      </DataProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
