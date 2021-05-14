import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div className='shop-page'>
            {
                this.state.collections.map(collection => (
                    <CollectionPreview title={collection.title}
                                       items={collection.items}
                                       routeName={collection.routeName}
                                       key={collection.id}/>
                ))
            }
            </div>
        )
    }
}

export default ShopPage;