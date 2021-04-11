import React,{useState} from 'react';
import { Formik,ErrorMessage, Form, Field } from 'formik';
import {RegisterFormSchema,User} from './RegisterFormSchema'
import {userJson} from './user-data'
import './App.css';

function App() {

//const validated: User = RegisterFormSchema.validateSync(parsed);
  const initialUser=new User(userJson)
  return (
    <div className="App">
    <h2>User Registration</h2>
      <header className="App-header">
      <Formik
      initialValues={initialUser}
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
          <Form onSubmit={handleSubmit}>
          {JSON.stringify(values)}
               <label htmlFor="fullName" style={{ display: "block" }}>
          Name
            </label>
            <input
              id="fullName"
              type="text"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.fullName && touched.fullName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.fullName && touched.fullName && (
              <div className="input-feedback">{errors.fullName}</div>
            )}
          
               <label htmlFor="address" style={{ display: "block" }}>
          Address
            </label>
            <input
              id="areaName"
              type="text"
              value={values.address.areaName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.fullName && touched.fullName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.fullName && touched.fullName && (
              <div className="input-feedback">{errors.fullName}</div>
            )}
 
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

          </Form>
        );
      }}
    </Formik>
     
     </header>
    </div>
  );
}

export default App;
