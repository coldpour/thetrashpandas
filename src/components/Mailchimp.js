/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import BaseForm from "components/Form";
import Input from "components/Input";
import Button from "components/Button";
import FormField from "components/FormField";

export const Form = ({ children, ...rest }) => (
  <BaseForm
    action="https://facebook.us17.list-manage.com/subscribe/post?u=576be0d24557fe6a480b06523&amp;id=b5af92ccb0"
    method="post"
    name="mc-embedded-subscribe-form"
    {...rest}
  >
    <DiversionField />
    {children}
  </BaseForm>
);

/******
 * real people should not fill this in and expect good things
 * include this field in the form or risk form bot signups
 * */
const DiversionField = (props) => (
  <div
    css={css`
      position: absolute;
      top: -50px;
      left: -5000px;
    `}
    aria-hidden="true"
  >
    <Input
      type="text"
      name="b_576be0d24557fe6a480b06523_b5af92ccb0"
      tabIndex="-1"
      defaultValue=""
    />
  </div>
);

export const Submit = (props) => (
  <Button type="submit" name="subscribe" {...props} />
);

export const EmailField = (props) => (
  <FormField name="EMAIL" type="email" required {...props}>
    email address
  </FormField>
);
