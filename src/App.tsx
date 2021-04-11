import React,{useState} from 'react';
import { Formik,ErrorMessage, Form, Field, FieldArray } from 'formik';
import {RegisterFormSchema,User} from './RegisterFormSchema'
import {userJson} from './user-data'
import './App.css';

function App() {

//const validated: User = RegisterFormSchema.validateSync(parsed);
  const initialUser=new User(userJson)
  return (
    <div className="App">
    <h2>User Registration</h2>
      <div className="App-header">
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
                   <ErrorMessage name="fullName" />
         
          {JSON.stringify(values.address)}

    <FieldArray name='hobbies'>
{({ insert, remove, push }) => (
<div>
<h2>hobbies
<button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: '' })}
                >
                  Add Hobby
                </button>
 </h2>
  {values.hobbies.length>0&& values.hobbies.map((hobby,i)=>  (
  <div>
    <div  key={i}>
                        <Field
                          name={`hobbies.${i}.name`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`hobbies.${i}.name`}
                          component="div"
                          className="field-error"
                        />

                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(i)}
                        >
    remove
                        </button>

    </div>
   </div>
    
    ))}
</div>
)}

  
</FieldArray>

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
     
     </div>
    </div>
  );
}

export default App;
