import s from './Form.module.scss';
import Input from "../ui/Input/Input";
import Button from '../ui/Button/Button';
import ToggleButton from '../ui/ToggleButton/ToggleButton';
import { auth, registration } from '../../api/api';

const Form = ({ buttons, title, descr, active, type = null, fields, toggleBtnHAndler }) => {
   let show = active ? s.active : '';


   const submitHandler = async (e) => {
      e.preventDefault();

      let formData = new FormData(e.target);

      const name = formData.get('name');
      const password = formData.get('password');

      let user = {
         name,
         password
      };

      let res = null;

      if (type == 'Register') {
         const email = formData.get('email');

         user = { ...user, email };

         res = await registration(user);
      } else {
         res = await auth(user);
      }

      console.log(res);


   };


   return (
      <form onSubmit={submitHandler} className={s.form + ' ' + show}>
         <div className={s['form__body']}>
            <h2 className={s['form__title']}>{title}</h2>
            <div className={s['form__toggle-btn']}>
               <ToggleButton toggleBtnHAndler={toggleBtnHAndler} buttons={buttons} />
            </div>
            <div className={s['form__descr']}>{descr}</div>
            <div className="auth-form__fields">
               {fields.map(field => <Input key={field.id} {...field} />)}
               {type == 'Login' ?
                  <div className={s['form__forgot-link']}>
                     <a href='##'>Forgot Password ?</a>
                  </div>
                  :
                  ''
               }
            </div>
            <div className={s['form__submit']}>
               <Button
                  type="submit"
               >
                  {type}
               </Button>
            </div>
         </div>
      </form>
   );
};

export default Form;