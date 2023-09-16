import { Form, Input, Select, Row, Col } from 'antd';

import { MONTH_OPTIONS } from '@/register/consts';
import { FORM_LABELS, FORM_FIELD_PLACEHOLDERS } from '@/register/consts';
import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { dateOfBirthValidator } from '@/register/utils/validators';
import './DateOfBirthInput.scss';

const { Option } = Select;

type DateOfBirthInputProps = {
  name: string;
  label?: string;
};

export const DateOfBirthInput = ({ label = '', name }: DateOfBirthInputProps) => {
  const form = Form.useFormInstance();

  const validateInput = () => {
    form.validateFields([name]);
  };

  return (
    <Form.Item
      name={name}
      className='date-of-birth'
      label={<span className='date-of-birth__label'>{label}</span>}
      rules={[
        ({ getFieldValue }) => ({
          validator: dateOfBirthValidator(getFieldValue),
        }),
      ]}
    >
      <Row>
        <Col span={4}>
          <Form.Item
            name={RegisterFormKeys.DAY}
            className='date-of-birth__input'
            label={
              <span className='date-of-birth__label'>{FORM_LABELS[RegisterFormKeys.DAY]}</span>
            }
          >
            <Input
              maxLength={2}
              placeholder={FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.DAY]}
              onChange={validateInput}
            />
          </Form.Item>
        </Col>
        <Col span={14} offset={1}>
          <Form.Item
            // When name is "Month" - placeholder disappear
            name={FORM_LABELS[RegisterFormKeys.MONTH]}
            label={
              <span className='date-of-birth__label'>{FORM_LABELS[RegisterFormKeys.MONTH]}</span>
            }
            className='date-of-birth__input'
          >
            <Select
              placeholder={'Month'}
              onChange={(value) => {
                validateInput();
                form.setFieldValue('month', value);
              }}
            >
              {MONTH_OPTIONS.map(({ label, value }) => (
                <Option key={value} value={value} disabled={!value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4} offset={1}>
          <Form.Item
            name={RegisterFormKeys.YEAR}
            label={
              <span className='date-of-birth__label'>{FORM_LABELS[RegisterFormKeys.YEAR]}</span>
            }
            className='date-of-birth__input'
          >
            <Input
              maxLength={4}
              placeholder={FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.YEAR]}
              onChange={validateInput}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>
  );
};
