import styles from '../styles/index.module.scss';
import Input from "../components/ui/Input/Input";


export default function Index() {
   return (
      <>
         <header className="header">
            header
         </header>
         <main className="main" >
            <h1>
               Главная страница
            </h1>
            <div className="authorization">
               <div className="authorization__body">
                  <div className="authorization__left">
                     
                  </div>
                  <form className="authorization__right auth-form">
                     <div className="auth-form__body">
                        <h2 className="auth-form__title">
                           Welcome to lorem..!
                        </h2>
                        <div className="auth-form__toggle-btns">
                           <button className="auth-form__btn active">Login</button>
                           <button className="auth-form__btn">Register</button>
                        </div>
                        <div className="auth-form__descr">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="auth-form__fields">
                           <Input 
                              id="name" 
                              label="User name" 
                              placeholder="Enter your User name" 
                              type="text"
                           />
                           <Input 
                              id="password" 
                              label="Password" 
                              placeholder="Enter your Password" 
                              type="password"
                           />
                           <Input 
                              id="email" 
                              label="Email Address" 
                              placeholder="Enter your Email Address" 
                              type="email"
                           />
                        </div>
                        <div className="auth-form__submit">
                           <button className="auth-form__subit-btn">Register</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </main>
         <footer className="footer">
            footer
         </footer>
      </>
   );
};