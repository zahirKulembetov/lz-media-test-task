import { useRef, useState } from 'react';
import s from './Input.module.scss';

const Input = (props) => {
   let { id, type, placeholder, label } = props;

   const passwordField = useRef(null);

   const [icon, setIcon] = useState('/static/icons/eye-slash.svg');

   const passVisibilityHandler = () => {

      let iconField = passwordField.current;
      const typeOfField = iconField.getAttribute('type');

      if (typeOfField == 'text') {
         setIcon('/static/icons/eye-slash.svg');
         passwordField.current.setAttribute('type', 'password');
      } else {
         setIcon('/static/icons/eye.svg');
         passwordField.current.setAttribute('type', 'text');
      }

   };

   let isPasswordField = type == 'password';


   return (
      <div className={s.input}>
         <label className={s.label} htmlFor={id}>{label}</label>
         <input
            className={s.field}
            type={type}
            id={id}
            placeholder={placeholder}
            name={id}
            ref={passwordField}
         />
         {isPasswordField
            ?
            <span onClick={passVisibilityHandler} className={s.icon}>
               <img src={icon} />
            </span>

            : ''
         }






      </div>
   );
};

export default Input;