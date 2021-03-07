import { h, render, Component } from 'preact';
import { products } from './data/data'
import { ProductGrid } from './components/product-grid'
import SearchBar from './components/search-bar'
import Header from './components/header'
import Menu from './components/menu'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchBar />
                <Menu />
                <ProductGrid products={products}/>
            </div>
        )
    }
}

const root = document.querySelector('#root')
render(<App />, root)