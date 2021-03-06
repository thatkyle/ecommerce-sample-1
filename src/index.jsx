import { h, render, Component } from 'preact';
import { products } from './data'
import { ProductGrid } from './product-grid'

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