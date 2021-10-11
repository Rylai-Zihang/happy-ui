import { tuple } from "../utils/propTypes";
interface FormError {
    [k: string]: Array<string>
}
type FormRule = {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    validator?: {
        name?: string,
        validate: (value: string) => Promise<void>
    }
}

type FormRules = Array<FormRule>

type FormValue = { [K: string]: any }

const LabelPosition = tuple('left', 'center', 'right')

export  { FormRules, FormError, FormValue }

export type FormLabelPosition = typeof LabelPosition[number]