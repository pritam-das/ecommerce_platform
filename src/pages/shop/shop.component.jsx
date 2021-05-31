import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
    {
        collections.map(collection => (
            <CollectionPreview title={collection.title}
                                items={collection.items}
                                routeName={collection.routeName}
                                key={collection.id}/>
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);