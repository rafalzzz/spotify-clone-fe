import { isValidDate } from "@/register/utils/helpers/is-valid-date";
import { isAllowedAge } from "@/register/utils/helpers/is-allowed-age";
import { NamePath } from "antd/es/form/interface";

export const dateOfBirthValidator =
  (getFieldValue: (name: NamePath) => string | undefined) => () => {
    const day = getFieldValue("day");
    const month = getFieldValue("month");
    const year = getFieldValue("year");

    if (!isValidDate(Number(year), Number(month), Number(day)) || !day || !month || !year) {
      return Promise.reject("Invalid date");
    }

    if (!isAllowedAge(Number(year), Number(month), Number(day))) {
      return Promise.reject("Account permitted for individuals over the age of 12");
    }

    return Promise.resolve();
  };
