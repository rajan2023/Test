import styled from 'styled-components';
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Button = styled.button`
padding:1rem 1.2rem;
background-color: var(--button-color);
border:none;
cursor: pointer;
color:var(--button-font-color);
letter-spacing: .3px;
border-radius: 5px;
width: min-content;
outline: none;
transition: all .2s;
&:disabled{
    background-color: #ccc;
    cursor: not-allowed;
}
&:disabled:hover{
    background-color: #ccc;
}
&:hover{
    background-color:var(--button-color-light);
}
`
const Input = styled.input`
padding:1rem 1.2rem;
outline-color:${props => props.fail ?'#ffcfdc':'#b9edf1'};
border:1px solid ${props => props.fail ?'#ffcfdc':'#ccc'};
font-size: var(--input-font-size);
border-radius: 5px;
letter-spacing: .4px;
box-sizing: border-box;
&::placeholder {
    font-size:1.2rem;
color:${props => props.fail ?'#ffcfdc':'#ccc'};
}
`;
const InputTitle = styled.p`
color:#444;
font-size: 2.5rem;
letter-spacing: .5px;
font-weight: 600;
text-align: center;
`
const Label = styled.label`
font-size:1.1rem;
color:#888;
letter-spacing: .5px;
margin:4px 0;
`
const Error = styled.p`
background-color: #ffc7ca;
color:#ff616b;
font-size: 1.2rem;
border:1px solid #ff616b;
padding:5px 7px;
border-radius: 3px;
letter-spacing: .5px;
margin: 8px 0;
font-weight: 600;
`
export {
    Form,
    Button,
    Input,
    Label,
    InputTitle,
    Error,
}