import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/login';
import EmployeeList from './pages/employeeList';
import DashboardHome from './pages/dashboardHome';
import Header from './components/header';

const DashboardLayout = ({children})=>{
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

const Routes =  ()=> {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" exact>
            <LoginPage />  
          </Route>
        <Route>
            <DashboardLayout>
                <Switch>
                <Route path="/" exact>
                    <DashboardHome />
                </Route>
                <Route path="/employee-list" exact>
                    <EmployeeList />
                </Route>
                </Switch>
            </DashboardLayout>
        </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;