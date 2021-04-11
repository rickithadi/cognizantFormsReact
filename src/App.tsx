import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import {RegisterFormSchema,User} from './RegisterFormSchema'
import {userJson} from './user-data'
import './App.css';

function App() {
  const [user] = useState(new User(userJson))
  //const [user, updateUser] = useState(initialStateValue);

//const validated: User = RegisterFormSchema.validateSync(parsed);
  return (
    <div className="App">
    {user&& JSON.stringify(user)}
    <h2>User Registration</h2>
      <header className="App-header">
      <Formik
      initialValues={user}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={RegisterFormSchema}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

          </form>
        );
      }}
    </Formik>
     
     </header>
    </div>
  );
}

export default App;
