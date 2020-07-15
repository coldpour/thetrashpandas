/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//
import Input from "components/Input";
import { Form, Submit, EmailField } from "components/Mailchimp";

const StyledInput = (props) => (
  <Input
    css={css`
      border-radius: 5px 0px 0px 5px;
    `}
    {...props}
  />
);

const SubscribeForm = (props) => (
  <Form
    css={css`
      display: flex;
      align-items: stretch;
      padding-top: 1em;
    `}
    {...props}
  >
    <EmailField
      input={StyledInput}
      css={css`
        flex: 1;
        padding-top: 0;
      `}
    />
    {/* <div css={{ background: "green", flex: 1 }}>email address</div> */}
    <Submit
      primary
      css={css`
        font-size: 1.25em;
        border-radius: 0px 5px 5px 0px;
        padding: 0.5em 1em;
      `}
    >
      join
    </Submit>
  </Form>
);

export default SubscribeForm;
