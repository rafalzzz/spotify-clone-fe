import { Form, Select } from "antd";
import { PHONE_NUMBER_PREFIX } from "shared/consts/keys";
import "./PhoneNumberPrefix.scss";

const { Option } = Select;

export const PHONE_PREFIX_OPTIONS = [{ label: "+48", value: "+48" }];

export const PhoneNumberPrefix = (
  <Form.Item name={PHONE_NUMBER_PREFIX} noStyle>
    <Select className="phone-number-prefix">
      {PHONE_PREFIX_OPTIONS.map(({ label, value }) => (
        <Option className="phone-number-prefix__option" key={value} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  </Form.Item>
);
