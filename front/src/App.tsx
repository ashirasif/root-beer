import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import AddDrinks from "./components/AddDrink";
import Home from "./pages/home";

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AddDrinks /> */}
      <Home />
    </QueryClientProvider>
  )
}

export default App;
