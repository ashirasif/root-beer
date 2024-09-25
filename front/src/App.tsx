import { QueryClient, QueryClientProvider } from "@tanstack/react-query"



function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <p>Hello</p>
      </div>
    </QueryClientProvider>
  )
}

export default App
