
import {Input,Label} from '../../../styles/form.style';
import styles from './index.module.scss';
const Inputs = (props) =>{
    return (
        <div className={styles.input_gap}>
        <Label>{props.label}</Label>
        <Input {...props.elementConfig} fail={props.invalid && props.shouldValidate && props.touched} onChange={props.changed} value={props.value}/>
        </div>)
}
export default Inputs;