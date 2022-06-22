import React from 'react'
import { Formik } from 'formik'
import '../Login/Login.scss'
import { Link } from 'react-router-dom'
import RegisterImg from '../Register/Register.svg'
import Axios from 'axios'

const Register = () => (
  <div className='container login-wrapper '>
    <div className='row d-flex align-items-center '>
      <div className='col-lg-6'>
        <Formik
          initialValues={{ email: '', password: '', fname: '' }}
          validate={values => {
            const errors = {}

            if (!values.email && !values.password && !values.fname) {
              errors.email = 'Required'
              errors.password = 'Required'
              errors.fname = 'Required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address'
            } else if (
              !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\@\#&*=+%_])[a-zA-Z\d@$!%*?&]{8,}$/.test(
                values.password
              )
            ) {
              errors.password =
                'Invalid Password Please enter atleast Uppercase,lowercase and symbol'
            } else if (!/^[a-zA-Z ]{8,30}$/.test(values.fname)) {
              errors.fname = 'Invalid Name'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            Axios.post(
              'https://react-redux-project-b172f-default-rtdb.firebaseio.com/registration.json',
              values
            ).then(response => response.JSON())

            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className='form'>
              <h1>Sign Up </h1>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='fname'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fname}
                />
                {errors.fname && touched.fname && errors.fname}
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email ID / Phone Number'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className='form-group'>
                <input
                  className='form-control '
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <div className='d-flex justify-content-end'>
                  <Link to='/'>Forget Password?</Link>
                </div>
              </div>
              <div className='form-group'>
                <button
                  type='submit'
                  className='d-block w-100 btn'
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
                <div>
                  <Link to='/Register'>
                    Already have an account?<span>Sign In</span>
                  </Link>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className='col-lg-6 d-flex justify-content-center'>
        <img src={RegisterImg} className='img-fluid' alt='' />
      </div>
    </div>
  </div>
)

export default Register
