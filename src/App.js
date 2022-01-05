import Header from "./components/Header";
import Main from "./components/Main";
import ErrorBoundary from "./ErrorBoundary"
import "./main.css";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Header />
      <Main />
    </ErrorBoundary>
  );
}

const FallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
