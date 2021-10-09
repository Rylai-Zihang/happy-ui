import {FormRules, FormValue} from "./formTypes";


function isEmpty(value:any):boolean {
    return value === undefined || value === null || value === ""
}
const validator = (formValue: FormValue, formRules: FormRules) => {
    let errors = {}
    const addError = (key:string, msg:string) => {
        if(errors[key] === undefined) {
            errors[key] = []
        }
        errors[key].push(msg)
    }

    formRules.map(rule => {
        const value = formValue[rule.key]
        if(rule.required) {
            if(isEmpty(value)) {
                addError(rule.key, "必填")
            }
        }
        if(rule.minLength) {
            if(!isEmpty(value) && value.length < rule.minLength ) {
                addError(rule.key, "太短")
            }
        }
        if(rule.maxLength) {
            if(!isEmpty(value) && value.length > rule.maxLength ) {
                addError(rule.key, "太长")
            }
        }
    })
    return errors
}

export default validator