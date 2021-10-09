import * as React from "react"
import "./form.scss"
import prefix from "../helpers/prefix"
import { FormValue, FormError, FormLabelPosition } from "./formTypes"
import Input from "../input/input"
import "./form.scss"
import { fontSizeMap, FormElementSize } from "../utils/sizeMaps"

interface Props {
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: React.ReactFragment;
    labelPosition?: FormLabelPosition;
    labelWidth?: string | number;
    scale?: FormElementSize;
    onChange: (Value: FormValue) => void;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    errors: FormError;
    errorsDisplayMode?: "first" | "all";
}

const formPrefix = prefix("form")

const Form: React.FunctionComponent<Props> = (props) => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }

    const { fields, buttons, value, onChange, errors, labelPosition, labelWidth, scale, errorsDisplayMode } = props
    const formData = value

    const onInputChange = (name: string, value: string) => {
        const newValue = { ...formData, [name]: value }
        onChange(newValue)
    }

    const finalLabelWidth = ((labelWidth + "").indexOf("px") > -1) ? labelWidth : (labelWidth + "px")

    const defaultScale = scale || "small"
    const fontSizeRatio = fontSizeMap[defaultScale]

    return (
        <form onSubmit={onSubmit}>
            <table className={formPrefix("table")}>
                <tbody>
                    {fields.map(f => {
                        return (
                            <tr className={formPrefix("row")} key={f.name}>
                                <td className={formPrefix("label")}>{f.label}</td>
                                <td className={formPrefix("content")}>
                                    <Input scale={scale} type={f.input.type} value={formData[f.name]} onChange={(e) => onInputChange(f.name, e.target.value)} ></Input>
                                    <div className={formPrefix("warning")}>{
                                        errorsDisplayMode === "first" ?
                                            errors[f.name] && errors[f.name][0] :
                                            errors[f.name] && errors[f.name].join(". ")
                                    }</div>
                                </td>
                            </tr>)
                    })}
                    <tr className={formPrefix("row")}>
                        <td></td>
                        <td>
                            {buttons}
                        </td>
                    </tr>
                </tbody>
            </table>
            <style jsx>{`
                .happy-ui-form-label {
                    width: ${finalLabelWidth};
                    text-align: ${labelPosition};
                    font-size: calc(${fontSizeRatio} * 16px);
                }
            `}
            </style>
        </form >
    )
}

Form.defaultProps = {
    scale: "small" as FormElementSize,
    labelPosition: "left" as FormLabelPosition,
    labelWidth: 50,
    errorsDisplayMode: "all"
}

export default Form
