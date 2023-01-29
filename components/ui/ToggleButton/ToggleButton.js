import s from './ToggleButton.module.scss';

const ToggleButton = ({ buttons, toggleBtnHAndler }) => {

   const clickHandler = (e) => {
      let target = e.target;

      toggleBtnHAndler(target, s.active);
   };

   return (
      <div className={s["toggle-btn"]}>
         {buttons.map(button => {
            let active = button.hasOwnProperty('active') && button.active ? s.active : '';
            return (
               <button
                  onClick={clickHandler}
                  type="button"
                  key={button.key}
                  className={s["toggle-btn__field"] + ' ' + active}
               >
                  {button.name}
               </button>
            );
         }
         )}
      </div>
   );
};

export default ToggleButton;