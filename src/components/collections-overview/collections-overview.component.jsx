import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
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
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);