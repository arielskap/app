import React from 'react';
import LabelInput from './LabelInput';
import ImagenLogin from '../assets/static/ropa-donacion.jpg';
import '../assets/styles/Login.css';
import { petition } from '../functions';

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    petition('login', 'POST', `Basic ${btoa(`${document.querySelector('#userLogin').value}:${document.querySelector('#passLogin').value}`)}`);
  };

  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-6 d-none d-sm-none d-md-block'>
          <img src={ImagenLogin} className='card-img h-100' alt='Imagen Login' />
        </div>
        <div className='col-md-6'>
          <div className='card-body mx-5'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='row'>
                <div className='col-12 text-center'>
                  <p style={{ fontSize: 40 }}>Ingresa</p>
                </div>
              </div>

              <div className='pt-2'>
                <div className='form-group'>
                  <LabelInput name='userLogin'>Usuario</LabelInput>
                </div>
                <div className='form-group'>
                  <LabelInput name='passLogin' type='password'>Contraseña</LabelInput>
                </div>
                <div className='row pb-3'>
                  <div className='col-6 d-flex align-items-center'>
                    <input type='checkbox' id='recordame' />
                    <label className='m-0 ml-2 tw-text-sm' htmlFor='recordame'>Recuerdame</label>
                  </div>
                  <div className='col-6 d-flex justify-content-end'>
                    <p className='tw-text-sm'>
                      ¿No tienes cuenta?
                      {' '}
                      <a href=''>Registrate</a>
                    </p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-lg-6 py-4'>
                    <button type='submit' className='btn btn-primary w-100'>Ingresar</button>
                  </div>
                  <div className='col-lg-6 py-lg-4'>
                    <button type='button' className='btn-google btn w-100'>
                      <i className='fab fa-google-plus-g' />
                      <span className='pl-2'>Ingresar con Google</span>
                    </button>
                  </div>
                </div>
              </div>

            </form>
          </div>

          <div className='card-footer text-center'>
            <p className='tw-text-sm'><a href=''>¿Olvido la contraseña?</a></p>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Login;

