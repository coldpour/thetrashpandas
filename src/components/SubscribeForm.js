import React from "react";
//
import Form from "components/Form";
import Button from "components/Button";
import Input from "components/Input";
import FormField from "components/FormField";
import Fieldset from "components/Fieldset";
import Radio from "components/Radio";
import HeadlineSpan from "components/HeadlineSpan";

const StyledInput = ({ style, ...restProps }) => (
  <Input
    style={{
      marginTop: ".25em",
      borderRadius: "5px 0px 0px 5px",
      ...style
    }}
    {...restProps}
  />
);

const SubscribeForm = props => (
  <Form
    action="https://facebook.us17.list-manage.com/subscribe/post?u=576be0d24557fe6a480b06523&amp;id=b5af92ccb0"
    method="post"
    name="mc-embedded-subscribe-form"
    style={{ display: "flex", alignItems: "flex-end" }}
    {...props}
  >
    <FormField
      name="EMAIL"
      type="email"
      required
      input={StyledInput}
      style={{ flex: 1 }}
    >
      email address
    </FormField>
    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
    <div
      style={{ position: "absolute", top: "-50px", left: "-5000px" }}
      aria-hidden="true"
    >
      <Input
        type="text"
        name="b_576be0d24557fe6a480b06523_b5af92ccb0"
        tabIndex="-1"
        defaultValue=""
      />
    </div>
    <Button
      type="submit"
      name="subscribe"
      style={{ fontSize: "16px", borderRadius: "0px 5px 5px 0px" }}
    >
      join
    </Button>
  </Form>
);

export default SubscribeForm;
