import * as React from 'react'
import Form from './form'
import { useState, Fragment } from 'react'
import { FormValue, FormLabelPosition, FormRules } from './formTypes';
import { FormElementSize } from '../utils/sizeMaps';
import validator from './validator';
import Button from '../button/button';

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '111',
        password: '123'
    })

    const [labelPosition, setLabelPosition] = useState<FormLabelPosition>("left")
    const [labelWidth, setLabelWidth] = useState(60)
    const [scale, setScale] = useState<FormElementSize>("small")

    const [fields] = useState([
        { name: 'username', label: '用户名', input: { type: 'text' } },
        { name: 'password', label: '密码', input: { type: 'password' } },
    ])

    const [errors, setErrors] = useState({})
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules: FormRules = [
            { key: 'username', required: true },
            { key: 'username', minLength: 8, maxLength: 20 }
        ]
        const errors = validator(formData, rules)
        console.log({ formData, errors })
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
            />
        </div>
    );
};

export default FormExample;