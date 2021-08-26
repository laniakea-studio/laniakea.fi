import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

interface ContactFormProps {
  data?: any;
}

export const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  return (
    <Form>
      <label htmlFor="message">message</label>
      <textarea id="message" />
      <label htmlFor="phoneOrMail">phone or email</label>
      <input id="phoneOrMail" type="text" />
      <button type="submit">send</button>
    </Form>
  );
};

const Form = styled.form`
  font-weight: 400;
  height: 100%;
  position: relative;
  max-width: 560px;
  label {
    font-size: 14px;
    margin-bottom: 5px;
    opacity: 0.7;
    cursor: pointer;
  }
  label:first-of-type {
    position: absolute;
    top: -20px;
  }
  textarea,
  input {
    border-radius: 3px;
    margin-bottom: 20px;
    color: ${theme.colorOnBlack};
    padding: 20px;
    transition: border-color 0.2s;
    &:focus {
      border-color: #fff;
      transition: border-color 0.2s;
    }
  }
  textarea {
    flex: 1;
  }
  input {
    height: 50px;
  }
  button {
    border-radius: 3px;
    color: #00;
    background: #fff;
    border: 1px solid #fff;
    height: 50px;
  }
`;
