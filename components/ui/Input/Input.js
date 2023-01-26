import s from './Input.module.scss'

const Input = (props) => {
   let {id, type, placeholder, label} = props;
   return (
      <div className={s.input}>
         <label htmlFor={id}>{label}</label>
         <input type={type} id={id} placeholder={placeholder}/>
      </div>
   );
};

export default Input;