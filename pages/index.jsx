import styles from '../styles/index.module.scss';

import Form from '../components/Form/Form';
import { useState } from 'react';

const buttons = [
   { key: 0, name: 'Login', active: true },
   { key: 1, name: 'Register', active: false }
];

const authFields = [
   {
      id: 'name',
      label: 'User name',
      placeholder: 'Enter your User name',
      type: 'text'
   },
   {
      id: 'password',
      label: 'Password',
      placeholder: 'Enter your Password',
      type: 'password'
   }
];

const registerFields = [
   {
      id: 'name',
      label: 'User name',
      placeholder: 'Enter your User name',
      type: 'text'
   },
   {
      id: 'email',
      label: 'Email Address',
      placeholder: 'Enter your Email Address',
      type: 'email'
   },
   {
      id: 'password',
      label: 'Password',
      placeholder: 'Enter your Password',
      type: 'password'
   },
];

export default function Index() {

   const [form, setForm] = useState('Login');
   const [fields, setFields] = useState(authFields);
   const [toggleBtn, setToggleBtn] = useState(buttons);

   const toggleBtnHAndler = (target, active) => {
      target.classList.add(active);
      let formType = target.innerHTML;
      setForm(formType);

      if (formType == 'Register') {
         setFields(registerFields);
      } else {
         setFields(authFields);
      }

      setToggleBtn((prevButtons) => {
         return prevButtons.map(btn => {
            btn.active = false;
            if (formType == btn.name) {
               btn.active = true;
            }

            return btn;
         });
      });


   };

   return (
      <>
         <main className="main" >
            <section className={styles['main-page']}>
               <div className="container">
                  <div className={styles['main-page__body']}>
                     <div className={styles['main-page__left']}>
                        <div className={styles['main-page__fone']}>
                           <img src="/static/images/cat.jpg" alt="cat" />
                        </div>
                        <div className={styles['main-page__content']}>
                           <div className={styles['main-page__title']}>
                              <h1>Lorem Ipsum is simply</h1>
                           </div>
                           <div className={styles['main-page__descr']}>Lorem Ipsum is simply</div>
                        </div>
                     </div>
                     <div className={styles['main-page__rigth']}>
                        <Form
                           buttons={toggleBtn}
                           active={true}
                           title="Welcome to lorem..!"
                           descr="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                           type={form}
                           fields={fields}
                           toggleBtnHAndler={toggleBtnHAndler}
                        />
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   );
};