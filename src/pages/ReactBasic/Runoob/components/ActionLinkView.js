/*
 * @Author: fu.nan
 * @Date: 2020-04-06 13:32:05
 * @LastEditors: fu.nan
 * @LastEditTime: 2020-04-06 16:50:11
 */
import React from 'react';

// 事件处理
function ActionLinkView() {
    function handleClick(e) {
        e.preventDefault();
        console.log('链接点击')
    }
    return (
        <div className="component-wrapper">
            <a href="/" onClick={handleClick}>
                点我
            </a>
        </div>
    )
}

export default ActionLinkView;
