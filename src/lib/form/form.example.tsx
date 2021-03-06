import * as React from 'react'
import Form from './form'
import { useState, Fragment } from 'react'
import { FormValue, FormLabelPosition, FormRules } from './formTypes';
import { FormElementSize } from '../utils/sizeMaps';
import validator from './validator';
import Button from '../button/button';

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'Rylai',
        phone: '13218195990',
        password: '123'
    })

    const [labelPosition, setLabelPosition] = useState<FormLabelPosition>("left")
    const [labelWidth, setLabelWidth] = useState(60)
    const [scale, setScale] = useState<FormElementSize>("small")

    const [fields] = useState([
        { name: 'username', label: '用户名', input: { type: 'text' } },
        { name: 'phone', label: '电话', input: { type: 'text' } },
        { name: 'password', label: '密码', input: { type: 'password' } },
    ])

    const transformError = (error: string) => {
        const map = {
            "username-exist": "用户名已存在",
            "invalid-phone-number": "电话号码格式有误"
        }
        return map[error]
    }

    const checkUserName = (username: string, resolve: () => void, reject: (string) => void) => {
        setTimeout(() => {
            // fake ajax
            const existNames = ["Rylai", "Ryan"]
            if (existNames.indexOf(username) < 0) {
                resolve()
            } else {
                // todo key repeated
                reject({ key: "username", msg: "username-exist" })
            }
        }, 1000)
    }

    const checkPhoneNumber = (phone: string, resolve: () => void, reject: (string) => void) => {
        setTimeout(() => {
            // fake ajax
            const reg = /^1[3-9]\d{9}$/
            if (reg.test(phone)) {
                resolve()
            } else {
                reject({ key: "phone", msg: "invalid-phone-number" })
            }
        }, 1000)
    }

    const [errors, setErrors] = useState({})
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules: FormRules = [
            { key: 'username', required: true },
            { key: 'username', minLength: 5, maxLength: 10 },
            {
                key: 'username', validator: {
                    validate: (value: string) => {
                        return new Promise((resolve, reject) => {
                            checkUserName(value, resolve, reject)
                        })
                    }
                }
            },
            {
                key: 'phone', validator: {
                    validate: (value: string) => {
                        return new Promise((resolve, reject) => {
                            checkPhoneNumber(value, resolve, reject)
                        })
                    }
                }
            }
        ]
        validator(formData, rules, (errors) => {
            setErrors(errors)
            console.log(errors)
        })
    }

    const onChange = (val) => {
        setFormData(val)
    }

    return (
        <div>
            <Form value={formData}
                fields={fields}
                scale={scale}
                buttons={
                    <Fragment>
                        <Button scale={scale} category="primary" type="submit" style={{ 'marginRight': '10px' }}>提交</Button>
                        <Button scale={scale}>返回</Button>
                    </Fragment>
                }
                labelPosition={labelPosition}
                labelWidth={labelWidth}
                errors={errors}
                onChange={onChange}
                onSubmit={onSubmit}
                transformError={transformError}
            />
        </div>
    );
};

export default FormExample;