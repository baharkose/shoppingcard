import AppRouter from "./router/AppRouter";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <div className="bg-light app">
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </div>
  );
}

export default App;
