import React, {useState} from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import s from "./App.module.css"

const App = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTerm = (value) => {
        setSearchTerm(value);
    }

    return <div className={s.wrapper}>
        <div className={s.inner}>
            <div>
                <h1>All Customers</h1>
                <span>Active Members</span>
            </div>
            <Search searchTerm={searchTerm} handleSearchTerm={handleSearchTerm}/>
        </div>
        <Table searchTerm={searchTerm}/>
    </div>
}

const ContainerApp = (props) => {
    return <Provider store={store}>
        <App/>
    </Provider>
}
export default ContainerApp;