import React from 'react';
import './Connexion.css'

const Connexion = () => {


    
    return (
        <div>
            <div className='form'>

            <form action='' method='post'>
                <h1> Connexion</h1>

                <div> 
                    <label htmlFor=''> votre adresse mail</label>
                    <input type="email"/>
                </div>

                <div>
                   <label htmlFor=''> votre mot de passe</label>
                    <input type='password'/>
                </div>

               <button> connexion </button>

            </form>
            

            
        </div>
        
     
     </div>
    );
};

export default Connexion;