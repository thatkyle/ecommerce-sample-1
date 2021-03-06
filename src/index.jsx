import { h, render, Component } from 'preact';
import { products } from './data/data'
import { ProductGrid } from './components/product-grid'

class App extends Component {
    render() {
        return (
            <div>
                <ProductGrid products={products}/>
            </div>
        )
    }
}

render(<App />, document.body)