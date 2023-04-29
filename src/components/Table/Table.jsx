import React from "react";
import CustomersContainer from "./Customers/CustomersContainer";
import s from "./Table.module.css"

const Table = (props) => {
    return <table className={s.table}>
        <thead>
        <tr className={s.title}>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
        </tr>
        </thead>
        <CustomersContainer searchTerm={props.searchTerm}/>
    </table>
}

export default Table;