import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

import './directory.styles.scss';

const Directory = ({ sections }) => (
           <div className='directory-menu'>
                {
                    sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                        <MenuItem key={id}
                                  title={title}
                                  imageUrl={imageUrl}
                                  size={size}
                                  linkUrl={linkUrl}/>
                    ))
                }
           </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);