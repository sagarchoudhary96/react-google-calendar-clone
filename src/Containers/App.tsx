import ErrorBoundary from "Components/ErrorBoundary";
import Home from "Containers/Home";
import { AppContextProvider } from "Context/AppContext";

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
