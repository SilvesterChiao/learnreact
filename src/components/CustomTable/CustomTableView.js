import React, { Component } from 'react';
import styles from './CustomTable.module.scss';

class CustomTable extends Component {
    render() {
        const { title } = this.props;
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
