type FormRule = {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number
}

type FormRules = Array<FormRule>

export default FormRules