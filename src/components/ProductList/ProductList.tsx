import React, {useEffect, useState} from 'react';
function ProductList({
    category
                     }: {
    category?: string
}) {
    const [products, setProducts] = useState<string[]>([])
    useEffect(() => {
        console.log('Fetching Products')
        setProducts(['Cloting', 'Household'])
    }, []);
    return (<div>

        <p>{category}</p>
        {products.map(product =>
            (<p key={product}>product</p>)
        )}
    </div>)
}

export default ProductList