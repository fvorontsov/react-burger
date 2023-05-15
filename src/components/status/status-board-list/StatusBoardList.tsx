import React, {FC} from 'react';
import styles from "./status-board-list.module.css"

type TStatusBoardList = {
    done?: boolean;
}

export const StatusBoardList:FC<TStatusBoardList> = ({ done }) => {
    const arr = [
        34534,
        34535,
        34536,
        34537,
        34538,
        34539,
        34540,
        34541,
        34542,
        34543,
        34544,
        34545,
        34546,
        34547,
        34541,
        // 34542,
        // 34543,
        // 34544,
        // 34545,
        // 34546,
        // 34547,
        // 34542,
        // 34543,
        // 34544,
        // 34545,
        // 34546,
        34547,

    ];

    return (
        <ul className={styles.list}>
            {
                arr.map((number, index) => (
                    <li key={index}>
                        <p className={`text text_type_digits-default ${done && styles.element}`}>{number}</p>
                    </li>
                ))
            }
        </ul>
    );
};
