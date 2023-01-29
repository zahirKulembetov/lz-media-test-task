import s from './Button.module.scss';

const Button = (props) => {
   return (
      <button className={s.btn} {...props}>{props.children}</button>
   );
};

export default Button;