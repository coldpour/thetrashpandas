import React from "react";
//
import Form from "components/Form";
import Button from "components/Button";
import Input from "components/Input";
import FormField from "components/FormField";
import Fieldset from "components/Fieldset";
import Radio from "components/Radio";
import HeadlineSpan from "components/HeadlineSpan";

const StyledFieldset = ({ style, ...restProps }) => (
  <Fieldset
    style={{ margin: "2em .25em 0", padding: "1em .5em .5em", ...style }}
    {...restProps}
  />
);

const NameField = ({ style, ...restProps }) => (
  <FormField
    style={{ flex: 1, minWidth: "300px", margin: ".25em", ...style }}
    {...restProps}
  />
);

const SubscribeForm = props => (
  <Form
    action="https:facebook.us17.list-manage.com/subscribe/post?u=576be0d24557fe6a480b06523&amp;id=b5af92ccb0"
    method="post"
    name="mc-embedded-subscribe-form"
    {...props}
  >
    <h2 style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <HeadlineSpan>wanna hear about</HeadlineSpan>{" "}
      <HeadlineSpan>upcoming shows?</HeadlineSpan>
    </h2>
    <FormField name="EMAIL" type="email" required style={{ margin: "auto" }}>
      email address
    </FormField>
    <h3 style={{ marginBottom: "0" }}>personalize your notifications</h3>
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <StyledFieldset
        legend="name"
        style={{
          display: "flex",
          minWidth: "300px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <NameField name="FNAME">first</NameField>
        <NameField name="LNAME">last</NameField>
      </StyledFieldset>
      <StyledFieldset
        legend="email format"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100px"
        }}
      >
        <FormField
          name="EMAILTYPE"
          input={Radio}
          value="html"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60px"
          }}
        >
          html
        </FormField>
        <FormField
          name="EMAILTYPE"
          input={Radio}
          value="text"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60px"
          }}
        >
          text
        </FormField>
      </StyledFieldset>
    </div>
    <div id="mce-responses" className="clear">
      <div
        className="response"
        id="mce-error-response"
        style={{ display: "none" }}
      ></div>
      <div
        className="response"
        id="mce-success-response"
        style={{ display: "none" }}
      ></div>
    </div>
    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
    <div
      style={{ position: "absolute", top: "-50px", left: "-5000px" }}
      aria-hidden="true"
    >
      <Input
        type="text"
        name="b_576be0d24557fe6a480b06523_b5af92ccb0"
        tabIndex="-1"
        value=""
      />
    </div>
    <Button
      type="submit"
      name="subscribe"
      style={{ margin: "2em", fontSize: "16px" }}
    >
      submit
    </Button>
  </Form>
);

export default SubscribeForm;
