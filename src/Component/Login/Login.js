import React from 'react'
import { Formik } from 'formik'
import '../Login/Login.scss'
import { Link } from 'react-router-dom'
import LoginImg from '../Login/Login.svg'

const Login = () => (
  <div className='container login-wrapper '>
    <div className='row d-flex align-items-center '>
      <div className='col-lg-6'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {}
            if (!values.email && !values.password) {
              errors.email = 'Required'
              errors.password = 'Required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address'
            } else if (
              /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
                values.password
              )
            ) {
              errors.password =
                'Invalid Password Please enter atleast Uppercase,lowercase and symbol'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
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
              <h1>Sign In </h1>
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
                  Sign In
                </button>
                <div>
                  <Link to='/Register'>
                    New to Netflix ?<span>Sign Up now</span>
                  </Link>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className='col-lg-6'>
        <img src={LoginImg} className='img-fluid' alt='' />
      </div>
    </div>
  </div>
)

export default Login
