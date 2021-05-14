import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import './collection-preview.styles.scss'

const CollectionPreview = ({title, items, routeName}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(item => (
                    <CollectionItem key={item.key}
                                    item={item}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;