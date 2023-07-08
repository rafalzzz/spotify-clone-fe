import { Form, Select } from "antd";
import "./PhoneNumberPrefix.scss";

const { Option } = Select;

const options = [{ label: "+48", value: "+48" }];

export const PhoneNumberPrefix = (
  <Form.Item name="phoneNumberPrefix" noStyle>
    <Select className="phone-number-prefix" defaultValue={options[0].value}>
      {options.map(({ label, value }) => (
        <Option className="phone-number-prefix__option" key={value} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  </Form.Item>
);
