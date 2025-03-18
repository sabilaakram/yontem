import React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { format } from "date-fns";
import { render } from "@react-email/render";

interface QuoteEmailTemplateProps {
  name: string;
  email: string;
  enddate: Date;
  message: string;
  phone: string;
  startdate: Date;
}

const EmailTemplate = (EmailItems: QuoteEmailTemplateProps) => {
  const formattedStartDate = format(
    new Date(EmailItems.startdate),
    "dd/MM/yyyy"
  );
  const formattedEndDate = format(new Date(EmailItems.enddate), "dd/MM/yyyy");

  return (
    <Html>
      <Head />
      <Preview>Quote from Yontem Teknoloji</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={headerContainer}>
            {/* <Row>
              <Column align="center">
                <Link href="https://laptop-rental.com.au/">
                  <Img
                    src="https://laptop-rental.com.au/logo_red.png"
                    alt="logo"
                    width={200}
                    height={100}
                  />
                </Link>
              </Column>
            </Row> */}
          </Section>
          <Section style={{ padding: "20px" }}>
            <Text style={paragraph}>
              <strong>Name:</strong> {EmailItems.name}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> {EmailItems.email}
            </Text>
            <Text style={paragraph}>
              <strong>Phone Number:</strong> {EmailItems.phone}
            </Text>
            <Text style={paragraph}>
              <strong>Start Date:</strong> {formattedStartDate}
            </Text>
            <Text style={paragraph}>
              <strong>End Date:</strong> {formattedEndDate}
            </Text>{" "}
            <Text style={messageParagraph}>
              <strong>Message/Quote:</strong> {EmailItems.message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  maxWidth: "720px",
  width: "100%",
  backgroundColor: "#eee",
};

const headerContainer = {
  backgroundColor: "rgb(214, 24, 55)",
};

const messageParagraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  padding: "0 16px",
  color: "#484848",
  whiteSpace: "pre",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  padding: "0 16px",
  color: "#484848",
};

export const renderQuoteEmailTemplate = (props: QuoteEmailTemplateProps) => {
  return render(<EmailTemplate {...props} />);
};

export default EmailTemplate;
