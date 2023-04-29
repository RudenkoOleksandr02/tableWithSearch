import React from "react";
import Customer from "./Customer/Customer";
import {connect} from "react-redux";
import {changeStatus} from "../../../redux/customers-reducer";

const CustomersContainer = (props) => {
    const updateStatus = (id, status) => {
        props.changeStatus(id, status);
    }

    let filteredData = props.customers.filter((row) => {
        return Object.values(row).some((value) => {
            if (typeof value === 'string') {
                return value.toLowerCase().includes(props.searchTerm.toLowerCase());
            }
        })
    });

    return <tbody>
    {filteredData.map((data) => {
        return <Customer
            name={data.name}
            company={data.company}
            phoneNumber={data.phoneNumber}
            email={data.email}
            country={data.country}
            status={data.status}
            id={data.id}
            updateStatus={updateStatus}
            key={data.id}
        />
    })}
    </tbody>
}
const mapStateToProps = (state) => {
    return {
        customers: state.customersData.customers
    }
}
export default connect(mapStateToProps, {changeStatus})(CustomersContainer)