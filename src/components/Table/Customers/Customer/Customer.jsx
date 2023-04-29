import React from "react";
import s from "./Customer.module.css"

const Customer = ({name, company, phoneNumber, email, country, status, updateStatus, id, ...props}) => {
    return <tr className={s.customer}>
        <td aria-label='Customer Name'>{name}</td>
        <td aria-label='Company'>{company}</td>
        <td aria-label='Phone Number'>{phoneNumber}</td>
        <td aria-label='Email'>{email}</td>
        <td aria-label='Country'>{country}</td>
        <td aria-label='Status'><button className={status ? s.active : s.inactive} onClick={() => updateStatus(id, !status)}>{status ? 'Active' : 'Inactive'}</button></td>
    </tr>
}


export default Customer;