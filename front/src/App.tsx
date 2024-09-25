import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AddDrinks from "./components/AddDrink";

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AddDrinks />
    </QueryClientProvider>
  )
}

export default App;
