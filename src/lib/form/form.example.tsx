import * as React from 'react'
import Form from './form'
import { useState, Fragment } from 'react'
import FormValue from './formValueType';
import validator from './validator';

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '111',
        password: '123'
    })

    const [fields] = useState([
        { name: 'username', label: '用户名', input: { type: 'text' } },
        { name: 'password', label: '密码', input: { type: 'password' } },
    ])

    const [errors, setErrors] = useState({})
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            { key: 'username', required: true },
            { key: 'username', minLength: 8, maxLength: 20 }
        ]
        const errors = validator(formData, rules)
        setErrors(errors)
        console.log({ formData, errors })
    }

    const onChange = (val) => {
        setFormData(val)
    }

    return (
        <div>
            {JSON.stringify(formData)}
            <Form value={formData}
                fields={fields}
                buttons={
                    <Fragment>
                        <button type="submit">提交</button>
                        <button>返回</button>
                    </Fragment>
                }
                errors={errors}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default FormExample;