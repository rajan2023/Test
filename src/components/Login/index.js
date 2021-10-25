import {Form,Button,InputTitle,Error} from '../../styles/form.style';
import styles from './index.module.scss';
import { useState } from 'react';
import Input from '../UI/input';
import {updateObject,checkValidity} from '../../shared/utliity';
const Login =() =>{
    const [authForm,setAuthForm] = useState({
        email:{
            elementConfig: {
                type: "email",
                placeholder: "test@test.com",
                            },
            value: "",
            validation: {
                required: true,
                isEmail: true
                         },
                valid: false,
                touched: false,
                         },
        password:{
              elementConfig: {
                    type: "password",
                    placeholder: "**********",
                 },
                    value: "",
                    validation: {
                    required: true,
                  },
                    valid: false,
                    touched: false,
                 },
    });
    const [error ,setError] = useState({
        errorBol:false,
        errorMsg:null
    });
    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(authForm, {
          [controlName]: updateObject(authForm[controlName], {
            value: event.target.value,
            valid: checkValidity(
              event.target.value,
              authForm[controlName].validation
            ),
            touched: true,
          }),
        });
        setAuthForm(updatedControls);
      };
      const formElementsArray = [];
      for (let key in authForm) {
        formElementsArray.push({
          id: key,
          config: authForm[key],
        });
      }
      console.log(formElementsArray)
    let forms = formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ));
    const formSubmitHandler = (e) =>{
        e.preventDefault();
    }
    return (
        <div className={styles.loginPage}>
     <div className={styles.login}>
        <InputTitle>Admin Panel</InputTitle>
        {error.errorBol ?(
        <Error>{error.errorMsg}</Error>
        ):null}
        <Form autoComplete="off" onSubmit={(e) =>formSubmitHandler(e)}>
        {forms}
        <Button type="submit" disabled={!(authForm.email.valid && authForm.password.valid)}>Submit</Button>
        </Form>
        </div>
        </div>
    )
}
export default Login;