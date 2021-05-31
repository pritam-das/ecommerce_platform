import React from 'react';
import './category.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';

import { selectCollection, selectCollections } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    const { title, items, routeName, id} = collection;
    return(
        <CollectionPreview title={title}
                            items={items}
                            routeName={routeName}
                            key={id} />
    )
}

const mapStateToProps = (state, ownProps) => ({
    //ownProps are the props that are being passed on by the component wrapping this component
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);