import React, { Component } from 'react';
import styles from './CustomTable.module.css';

class CustomTable extends Component {
    render() {
        const { title, data, columns } = this.props;
        return (
            <div>
                <div className={styles.tableTitle}>{title}</div>
                <div className={styles.tableBody}>
                    <div className={styles.tableHeader} />
                </div>
            </div>
        );
    }
}

export default CustomTable;
