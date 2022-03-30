import React from "react";

const styles = {
    ul: {
        listStyle: 'none',
        // textTransform: uppercase
    }
}

export default function SomeWork() {
    return (
        <ul style={styles.ul}>
            <li>Table1</li>
            <li>Table2</li>
            <li>Table3</li>
        </ul>
    )
}

