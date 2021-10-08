import * as React from "react"
import "./form.scss"
import prefix from "../helpers/prefix"
import { FormValue, FormError, FormLabelPosition } from "./formTypes"
import Input from "../input/input"
import "./form.scss"

interface Props {
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: React.ReactFragment;
    labelPosition?: FormLabelPosition;
    labelWidth?: string | number;
    onChange: (Value: FormValue) => void;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    errors: FormError;
}

const defaultProps = {
    labelPostion: "left" as FormLabelPosition,
    labelWidth: 60
}

const formPrefix = prefix("form")

const Form: React.FunctionComponent<Props> = (props) => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }

    const { fields, buttons, value, onChange, errors, labelPosition, labelWidth } = props
    const formData = value

    const onInputChange = (name: string, value: string) => {
        const newValue = { ...formData, [name]: value }
        onChange(newValue)
    }

    const finalLabelWidth = ((labelWidth + "").indexOf("px") > -1) ? labelWidth : (labelWidth + "px")

    return (
        <form onSubmit={onSubmit}>
            <table className={formPrefix("table")}>
                {fields.map(f => {
                    return (
                        <tr className={formPrefix("row")} key={f.name}>
                            <td className={formPrefix("label")}>{f.label}</td>
                            <td>
                                <Input type={f.input.type} value={formData[f.name]} onChange={(e) => onInputChange(f.name, e.target.value)} ></Input>
                                <div className={formPrefix("warning")}>{errors[f.name]}</div>
                            </td>
                        </tr>)
                })}
            </table>
            <div>{buttons}</div>
            <style jsx>{`
                .happy-ui-form-label {
                    width: ${finalLabelWidth};
                    text-align: ${labelPosition};
                }
            `}
            </style>
        </form >
    )
}

Form.defaultProps = defaultProps

export default Form
