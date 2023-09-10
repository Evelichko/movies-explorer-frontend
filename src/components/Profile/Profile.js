import React, { useContext, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useEffect } from 'react';


function Profile({
    onSignOut,
    onEditUserInfo,
    message,
    isOk,
    isSubmitting,
    isError, 
    setIsError }
) {

    const { values, handleChange, resetForm, errors, isValid } =
        useFormWithValidation();

        const [isLastValues, setIsLastValues] = useState(false);

    const user = useContext(CurrentUserContext);
   
    const isValidationPassed = !isValid || isLastValues || isError;

    useEffect(() => {
        if (user.name === values.name && user.email === values.email) {
          setIsLastValues(true);
        } else {
          setIsLastValues(false);
          setIsError(false);
        }

    }, [values]);

    function handleSubmit(e) {
        e.preventDefault();
        onEditUserInfo({
            name: values.name,
            email: values.email,
        });
    };

    useEffect(() => {
        if (user) resetForm(user, {}, true);
    }, [user, resetForm]);


    return (
        <section className="profile">
            <h1 className='profile__welcomeMessage'>Привет, {user.name}!</h1>

            <form id='submit' className='profile__info' onSubmit={handleSubmit}>
                <div class='profile__info-data'>
                    <label className='profile__info-label' for='name'>Имя</label>
                    <input
                        className='profile__info-input'
                        name='name'
                        type='text'
                        value={values.name ?? ''}
                        required
                        minLength='2'
                        maxLength='30'
                        onChange={handleChange}
                    />
                </div>
                <span className='profile__error'>{errors.name ?? ''}</span>

                <hr className='profile__line' />

                <div class='profile__info-data'>
                    <label className='profile__info-label' for='email'>E-mail</label>
                    <input
                        className='profile__info-input'
                        name='email'
                         type='email'
                        value={values.email ?? ''}
                        required
                        onChange={handleChange}/>
                </div>
                <span className='profile__error'>{errors.email ?? ''}</span>
                <span className={'profile__message' + (isOk ? ' profile__message_visible' : '')}>{message}</span>

                <button form='submit'
                    type="submit"
                    disabled={isValidationPassed || isSubmitting}
                    className='profile__edit-button'>
                    Редактировать
                </button>

            </form>

            <button className='profile__exit-button' type='button' onClick={() => onSignOut()}>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;

// import React, {useContext, useState} from 'react';
// import { useForm} from 'react-hook-form';
// import './Profile.css';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

// function Profile (props) {
    
//     const { register, formState: {errors, isValid}, handleSubmit, watch } = useForm({mode: 'onChange'});

//     const [activeButton, setActiveButton] = useState(false);

//     const user = useContext(CurrentUserContext);
    
//     watch((data, {name, email}) => {
//         if (data.name !== user.name || data.email !== user.email) {
//             setActiveButton(true);
//         } else {
//             setActiveButton(false);
//             return !isValid 
//         }
//     })
  
//     function submit (data) {
//         if (data.name !== user.name || data.email !== user.email) {
//             props.onEditUserInfo ({
//                 name: data.name,
//                 email: data.email,
//             });
//             setActiveButton(false);
//         } else {
//             return !isValid 
//         }
//     }

//     return (
//         <section className="profile">
            
//             <div className='profile__content'>
//                 <h1 className='profile__title'> Привет, {user.name}</h1>

//                 <form className='profile__edit-form' onSubmit = {handleSubmit(submit)}>

//                     <label className='profile__edit-form-label' htmlFor='name'>Имя</label> 
//                     <input className='profile__edit-form-input' 
//                         name='name' 
//                         type='text' 
//                         id='name' 
//                         {...register('name', {required: true, 
//                             minLength: 2, 
//                             maxLength: 30, 
//                             value: user.name,
//                             pattern: /[a-zа-яё ]/i})}
//                     />
//                     <span className='profile__edit-form-input-text'>
//                         {errors.name?.type === "required" && "Пожалуйста, заполните поле"} 
//                         {errors.name?.type === "pattern" && "Поле содержит недопустимые символы"}
//                         {errors.name?.type === "minLength" && "Минимальное  значение должно быть не меньше 2-х символов"}
//                         {errors.name?.type === "maxLength" && "Достигнута максимальная длина поля"}
//                     </span>                   
                    
//                     <hr className='profile__info-line'/>

//                     <label className='profile__edit-form-label' htmlFor='email'>E-mail</label> 
//                     <input className='profile__edit-form-input' 
//                         name='email' 
//                         id='email'  
//                         {...register('email', {required: true,
//                             value: user.email})} />
//                     <span className='profile__edit-form-input-text'>
//                         {errors.email?.type === "required" && "Пожалуйста, заполните поле"} 
//                         {errors.email?.type === "pattern" && "Поле содержит недопустимые символы"}
//                     </span> 
                    
//                     <p className = 'profile__massage'> {props.message}</p>

//                     <button disabled={!isValid} className={(!activeButton?'form__button_disabled':'profile__edit-form-button')} type='submit'>Редактировать</button>

//                 </form>

//                 <button className='profile__exit-button' type='button' onClick={() => props.onLogAut()}>Выйти из аккаунта</button>
//             </div>
//         </section>     
//     );
// }

// export default Profile;