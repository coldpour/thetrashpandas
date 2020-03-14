import React from "react";
//
import Form from "components/Form";
import FormField from "components/FormField";
import Button from "components/Button";
import TextArea from "components/TextArea";

const StyledTextArea = ({ style, ...restProps }) => (
  <TextArea style={{ marginTop: ".25em", ...style }} {...restProps} />
);

const BookUs = ({ history, ...restProps }) => (
  <Form
    action="mailto:thetrashpandasmusic@gmail.com"
    method="post"
    onSubmit={() => history.push()}
    {...restProps}
  >
    <h2 style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      want us to rock your party?
    </h2>
    <FormField
      type="email"
      required
      aria-required
      style={{ margin: ".25em auto" }}
    >
      email address
    </FormField>

    <FormField
      input={StyledTextArea}
      required
      aria-required
      style={{ margin: ".25em auto" }}
    >
      when, where and who are you?
    </FormField>

    <Button type="submit" style={{ margin: "2em", fontSize: "16px" }}>
      submit
    </Button>

    <input
      type="hidden"
      id="_wpnonce"
      name="_wpnonce"
      defaultValue="0d69e663d7"
    />
    <input type="hidden" name="_wp_http_referer" defaultValue="/booking/" />
    <input type="hidden" name="contact-form-id" defaultValue="67" />
    <input type="hidden" name="action" defaultValue="grunion-contact-form" />
  </Form>
);

export default BookUs;
