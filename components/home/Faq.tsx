import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faq = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

      {/* Accordion */}
      <div className="w-full max-w-5xl ">
        <Accordion type="single" collapsible>
          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger style={{ fontSize: "1.2rem" }}>
              What is the purpose of this blog app?
            </AccordionTrigger>
            <AccordionContent style={{ fontSize: "1.2rem" }}>
              This blog app is designed to allow users to read, create, and
              share insightful articles on various topics. It also supports
              features like commenting, liking, and profile management to engage
              the community.
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger style={{ fontSize: "1.2rem" }}>
              Can I create my own blog posts?
            </AccordionTrigger>
            <AccordionContent style={{ fontSize: "1.2rem" }}>
              Yes! Once you create an account and log in, you can write, edit,
              and publish your own blog posts for others to read.
            </AccordionContent>
          </AccordionItem>

          {/* Question 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger style={{ fontSize: "1.2rem" }}>
              How do I comment on a blog post?
            </AccordionTrigger>
            <AccordionContent style={{ fontSize: "1.2rem" }}>
              Simply open any blog post and scroll to the comments section. You
              must be logged in to post a comment and engage with other readers.
            </AccordionContent>
          </AccordionItem>

          {/* Question 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger style={{ fontSize: "1.2rem" }}>
              Is the blog app mobile-friendly?
            </AccordionTrigger>
            <AccordionContent style={{ fontSize: "1.2rem" }}>
              Absolutely! The blog app is fully responsive and works smoothly on
              mobile devices, tablets, and desktops.
            </AccordionContent>
          </AccordionItem>

          {/* Question 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger style={{ fontSize: "1.2rem" }}>
              Can the admin create and manage blogs?
            </AccordionTrigger>
            <AccordionContent style={{ fontSize: "1.2rem" }}>
              Yes, the admin has special privileges to create, edit, and manage
              blogs. Admins can also monitor user comments, reply to feedback,
              and manage blog visibility across the platform.
            </AccordionContent>
          </AccordionItem>

          {/* Question 7 */}
          <AccordionItem value="item-7">
            <AccordionTrigger style={{ fontSize: "1.2rem" }}>
              Are there categories or tags for blogs?
            </AccordionTrigger>
            <AccordionContent style={{ fontSize: "1.2rem" }}>
              Yes! Blogs can be organized by categories and tags, making it
              easier for readers to find content based on their interests.
            </AccordionContent>
          </AccordionItem>

          {/* Question 8 */}
          <AccordionItem value="item-8">
            <AccordionTrigger style={{ fontSize: "1.2rem" }}>
              Can users edit or delete their blogs?
            </AccordionTrigger>
            <AccordionContent style={{ fontSize: "1.2rem" }}>
              Absolutely. Users can edit or delete their own blog posts anytime
              from their dashboard after logging in.
            </AccordionContent>
          </AccordionItem>

          {/* Question 9 */}
          <AccordionItem value="item-9">
            <AccordionTrigger style={{ fontSize: "1.2rem" }}>
              Is there a way to contact support?
            </AccordionTrigger>
            <AccordionContent style={{ fontSize: "1.2rem  " }}>
              Yes. You can reach out to our support team via the contact form
              available on our website for any help or feedback.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
