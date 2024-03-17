import React from "react";
import {
  Body,
  Html,
  Container,
  Tailwind,
  Text,
  Button,
  Img,
  Heading,
  Head,
} from "@react-email/components";

export default function Welcome() {
  return (
    <Html lang="en">
      <Head />
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans mxo-auto">
          <Img></Img>
          <Container className="p-8 rounded-lg shadow-lg">
            <Heading className="text-xl pt-4">Hello there 👋 </Heading>
            <Text className="text-lg font-medium text-gray-700">
              Thanks for reaching out to me. I'll get back to you as soon as
              possible.
            </Text>
            <Button
              href="#"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Visit my website
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
