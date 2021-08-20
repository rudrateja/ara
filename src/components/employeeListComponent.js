import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {updateEmployeeList} from '../actions';
import { useDispatch } from 'react-redux';
import empData from '../user.json';
import {Link} from 'react-router-dom';

const EmployeeListComp = ()=>{
    const employeeList = useSelector(state=>state.employeeList);
    const loggedInUser = useSelector(state=>state.loggedInUser);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateEmployeeList(empData.user));
    }, []);
    console.log(employeeList);
    if(!loggedInUser.isLoggedIn){
        return (
            <div style={{display:'flex', height:'500px', justifyContent:'center', alignItems:'center' }}>
                Please <Link to="/login" style={{fontSize:'1.2em', padding:'5px'}}> Login </Link> to View the Data
            </div>
        )
    }
    return (
        <div className="dashboard-container">
        <h2 className="ara-h2">Employee List</h2>
            <table className="ara-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((emp)=>{
                        return (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.email}</td>
                                <td>{emp.phoneNo}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};



export default EmployeeListComp;