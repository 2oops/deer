import './App.css';
import Example from "./hoc/Example";
import ProductList from './hoc/Example/ProductList';
import ProductTable from './hoc/Example/ProductTable';

function App() {
  return (
    <div>
      <Example render={({ products }) => <ProductList products={products} />} />
      <Example render={({ products, onDelete }) => <ProductTable products={products} onDelete={(id) => onDelete(id)} />} />
      <Example render={({ products }) => <h2>{products.length}</h2>} />
    </div>
  );
}

export default App;
