import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ProductDetail from "./components/ProductDetail"

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ProductDetail id={2} />
    </QueryClientProvider>
  )
}

export default App;
