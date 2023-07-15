import { Form, Input, Select, Row, Col } from "antd";

import "./CustomDateInput.scss";

const { Option } = Select;

const MONTH_OPTIONS = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

export const CustomDateInput = () => {
  const form = Form.useFormInstance();
  console.log({ form, errors: form.getFieldsError(), values: form.getFieldsValue() });

  return (
    <Form.Item
      className="date-field"
      label={<span className="date-field__label">Enter your date of birth</span>}
    >
      <Row>
        <Col span={4}>
          <Form.Item
            name="day"
            className="date-field__input"
            label={<span className="date-field__label">Day</span>}
            validateStatus={false ? "error" : ""}
          >
            <Input maxLength={2} placeholder="DD" />
          </Form.Item>
        </Col>
        <Col span={14} offset={1}>
          <Form.Item
            name="month"
            label={<span className="date-field__label">Month</span>}
            className="date-field__input"
            validateStatus={false ? "error" : ""}
          >
            <Select placeholder="Month">
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
            name="year"
            label={<span className="date-field__label">Year</span>}
            className="date-field__input"
            validateStatus={false ? "error" : ""}
          >
            <Input maxLength={4} placeholder="RRRR" />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>
  );
};
