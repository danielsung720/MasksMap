import React, { Component } from 'react';

export default class Item extends Component{
    render() {
        return(
            <div className="item">
                <div>藥局名稱：{this.props.name}</div>
                <div>電話：{this.props.phone}</div>
                <div>地址：{this.props.address}</div>
                <div>成人庫存：{this.props.mask_adult}</div>
                <div>孩童庫存：{this.props.mask_child}</div>
            </div>
        );
    }
}