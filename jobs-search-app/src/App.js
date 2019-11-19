import React, {useState, useEffect} from 'react';
import User from './components/User';
import CompaniesList from './components/CompaniesList';
import './App.css';

//user data
import userData from './data/user';
import companiesData from './data/companies';

function App() {

  const [user, setUser] = useState({})
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    setCompanies([...companiesData])
    setUser({...userData})
  }, []);


  const filterJobs = () => {
    const filteredCompanies = [];
    const userFilters = user.filters;

    companiesData.forEach(company => {
      const requirements = company.requirements;
      const optional_requirements = company.optional_requirements;
      console.log(optional_requirements[0].length)


      //CASE 1: Company has requirements and optional requirements fields
      if(requirements.length > 0 && optional_requirements[0].length > 0) {
        if(requiredChecker(requirements, userFilters) && optionalChecker(optional_requirements, userFilters)) {
          filteredCompanies.push(company);
        }
      } 
      
      //CASE 2: Company has only requirements field
      else if(requirements.length > 0 && optional_requirements[0].length === 0) {
        if(requiredChecker(requirements, userFilters)) {
          filteredCompanies.push(company);
        }
      }

      //CASE 3: Company has only optional requirements field
      else if (requirements.length === 0 && optional_requirements[0].length > 0) {
        if(optionalChecker(optional_requirements, userFilters)) {
          filteredCompanies.push(company);
          console.log('test', filteredCompanies)
        }
      } 

      //CASE 4: Company does not have requiremtns and optional requirements fields
      else if (requirements.length === 0 && optional_requirements[0].length === 0) {
        filteredCompanies.push(company);
      }
    });

    setCompanies(filteredCompanies);

  }

  const requiredChecker = (array1, array2) => {
    const check = array1.every(element => array2.includes(element));
    console.log(check);
    return check;
  }

  const optionalChecker = (array1, array2) => {
    let check;
    array1.forEach(element => {
      check = element.some(value => array2.includes(value));
    })

    console.log(check);
    return check;
  }

  return (

    <div className="App">
      <User user={user}/>

      <div className="buttons__wrapper">
        <button className="btn btn-primary mg-r-sm">All Jobs</button>
        <button className="btn btn-orange" onClick={filterJobs}>Match Me</button>
      </div>

      <CompaniesList companies={companies}/>
    </div>
  );
}

export default App;
