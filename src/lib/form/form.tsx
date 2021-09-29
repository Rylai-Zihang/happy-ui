import * as React from "react"
import "./form.scss"
import prefix from "../helpers/prefix"
import FormValue from "./formValueType"

interface Props {
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: React.ReactFragment;
    // 这里泛型的含义没懂
    onChange: (Value: FormValue) => void;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    errors: { [k: string]: Array<string> }
}

const Form: React.FunctionComponent<Props> = (props) => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }

    const { fields, buttons, value, onChange, errors } = props
    const formData = value

    const onInputChange = (name: string, value: string) => {
        const newValue = { ...formData, [name]: value }
        onChange(newValue)
    }

    return (
        <form onSubmit={onSubmit}>
            {fields.map(f => {
                return (<div key={f.name}>
                    <div>{f.label}</div>
                    <input type={f.input.type} value={formData[f.name]} onChange={(e) => onInputChange(f.name, e.target.value)} />
                    <div>{errors[f.name]}</div>
                </div>)
            })}
            <div>{buttons}</div>
        </form>
    )
}

export default Form
