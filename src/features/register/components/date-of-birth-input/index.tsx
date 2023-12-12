import { Form, Input, Select, Row, Col } from 'antd';

import { MONTH_OPTIONS } from '@/register/consts';
import { FORM_LABELS, FORM_FIELD_PLACEHOLDERS } from '@/register/consts';
import { ERegisterFormKeys, TDateOfBirthInput } from '@/register/types';
import { dateOfBirthValidator } from '@/register/utils/validators';

import './DateOfBirthInput.scss';

const { Option } = Select;

export const DateOfBirthInput = ({ label = '', name }: TDateOfBirthInput) => {
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
            name={ERegisterFormKeys.DAY}
            className='date-of-birth__input'
            label={
              <span className='date-of-birth__label'>{FORM_LABELS[ERegisterFormKeys.DAY]}</span>
            }
          >
            <Input
              maxLength={2}
              placeholder={FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.DAY]}
              onChange={validateInput}
            />
          </Form.Item>
        </Col>
        <Col span={14} offset={1}>
          <Form.Item
            name={ERegisterFormKeys.MONTH}
            label={
              <span className='date-of-birth__label'>{FORM_LABELS[ERegisterFormKeys.MONTH]}</span>
            }
            className='date-of-birth__input'
          >
            <Select
              placeholder={FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.MONTH]}
              onChange={validateInput}
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
            name={ERegisterFormKeys.YEAR}
            label={
              <span className='date-of-birth__label'>{FORM_LABELS[ERegisterFormKeys.YEAR]}</span>
            }
            className='date-of-birth__input'
          >
            <Input
              maxLength={4}
              placeholder={FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.YEAR]}
              onChange={validateInput}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>
  );
};
