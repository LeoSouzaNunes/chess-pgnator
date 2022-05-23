import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Form, Input, TextArea, Button } from "./styles";

export default function ClientEmail() {
    const [values, setValues] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    function sendEmail(e) {
        e.preventDefault();
        if (!values.user_name || !values.user_email || !values.message) {
            return;
        }

        emailjs
            .send(
                "service_z8uxtty",
                "template_vzyhz1f",
                values,
                "_GS3F2q4Nz8kk3hcW"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setValues({ user_name: "", user_email: "", message: "" });
                },
                (error) => {
                    console.log(error.text);
                    setValues({
                        user_name: "",
                        user_email: "",
                        message: "",
                    });
                }
            );
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [`${name}`]: value });
    }

    return (
        <Form onSubmit={sendEmail}>
            <Input
                value={values.user_name}
                type="text"
                name="user_name"
                onChange={handleChange}
                placeholder="Name"
            />

            <Input
                value={values.user_email}
                type="email"
                name="user_email"
                onChange={handleChange}
                placeholder="Email"
            />

            <TextArea
                value={values.message}
                name="message"
                onChange={handleChange}
                placeholder="Message"
            />
            <Button type="submit">Send</Button>
        </Form>
    );
}
