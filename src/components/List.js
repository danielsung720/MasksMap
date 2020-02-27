import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component{
    render() {
        return(
            <div className="contentList">
                {this.props.todoList && this.props.todoList.map((Data) =>(
                    <Item
                        key={Data.properties.id}
                        name={Data.properties.name}
                        phone={Data.properties.phone}
                        mask_adult={Data.properties.mask_adult}
                        mask_child={Data.properties.mask_child}
                        address={Data.properties.address}
                    />
                ))}
           </div>
        );
    }
}