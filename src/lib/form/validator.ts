import {FormRules, FormValue} from "./formTypes";


function isEmpty(value:any):boolean {
    return value === undefined || value === null || value === ""
}

function flat(arr: Array<any>) {
    return arr.reduce((acc, cur) => {
        return acc.concat(cur)
    }, [])
}

function fromEntries(arr: Array<[string, string[]]>) {
    const result = {}
    for(let i = 0; i < arr.length; i++) {
        const key = arr[i][0]
        result[key] = arr[i][1]
    }
    return result
}

interface Error {
    msg: string,
    promise?: Promise<any>
}

const validator = (formValue: FormValue, formRules: FormRules, callback: (errors: any) => void) => {
    let errors = {}
    const addError = (key:string, error: Error) => {
        if(errors[key] === undefined) {
            errors[key] = []
        }
        errors[key].push(error)
    }

    formRules.map(rule => {
        const value = formValue[rule.key]
        if(rule.validator) {
            addError(rule.key, { msg: rule.validator.name, promise: rule.validator.validate(value) })
        }
        if(rule.required) {
            if(isEmpty(value)) {
                addError(rule.key, { msg: "required" })
            }
        }
        if(rule.minLength) {
            if(!isEmpty(value) && value.length < rule.minLength ) {
                addError(rule.key, { msg: "min-length" })
            }
        }
        if(rule.maxLength) {
            if(!isEmpty(value) && value.length > rule.maxLength ) {
                addError(rule.key, { msg: "max-length" })
            }
        }
    })
    const promiseArr = flat(Object.values(errors)).filter(item => item.promise).map(item => item.promise)

    Promise.all(promiseArr).then(() => {
        const newErrors = fromEntries(
            Object.keys(errors).map(key => {
                return [key, errors[key].filter((error:Error) => !error.promise).map((error: Error) => error.msg)]
            })
        )
        callback(newErrors)
    }, (promiseError) => {
        const { errorKey, errorMsg } = promiseError
        addError(errorKey, { msg: errorMsg })
        const newErrors = fromEntries(
            Object.keys(errors).map(key => {
                return [key, errors[key].filter((error:Error) => !error.promise).map((error:Error) => error.msg)]
            })
        )
        console.log({ errors, newErrors })
        callback(newErrors)
    })
}

export default validator