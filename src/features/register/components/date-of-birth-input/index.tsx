import { Form, Input, Select, Row, Col } from 'antd';

import { MONTH_OPTIONS } from '@/register/consts';
import { dateOfBirthValidator } from '@/register/utils/validators';
import './DateOfBirthInput.scss';

const { Option } = Select;

type DateOfBirthInputProps = {
  name: string;
  label?: string;
};

export const DateOfBirthInput = ({ label = '', name }: DateOfBirthInputProps) => {
  const form = Form.useFormInstance();

  const handleMonthChange = () => {
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
            name='day'
            className='date-of-birth__input'
            label={<span className='date-of-birth__label'>Day</span>}
          >
            <Input maxLength={2} placeholder='DD' onChange={handleMonthChange} />
          </Form.Item>
        </Col>
        <Col span={14} offset={1}>
          <Form.Item
            name='month'
            label={<span className='date-of-birth__label'>Month</span>}
            className='date-of-birth__input'
          >
            <Select placeholder='Month' onChange={handleMonthChange}>
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
            name='year'
            label={<span className='date-of-birth__label'>Year</span>}
            className='date-of-birth__input'
          >
            <Input maxLength={4} placeholder='RRRR' onChange={handleMonthChange} />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>
  );
};
