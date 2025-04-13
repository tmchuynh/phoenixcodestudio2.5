"use client";

import DynamicButton from "@/components/button/button-dynamic";
import CallToAction from "@/components/CTA/Simple";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/lib/constants/frequently-asked-questions";
import { useRouter } from "next/navigation";

export default function FrequentlyAskedQuestions() {
  const router = useRouter();

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <h1>FAQs: Your Digital Journey Starts Here</h1>
      <p className="mt-4">
        Welcome to the Phoenix Code Studio FAQs page, where we address common
        questions about our services, process, and how we can help your business
        thrive online. Whether you’re new to digital transformation or looking
        to deepen your understanding of our approach, you’ll find answers that
        guide you towards informed decisions and successful outcomes.
      </p>
      <p>
        Explore below for insights into our methodologies, capabilities, and how
        we empower businesses like yours to lead in the digital age.
      </p>
      <p className="mt-4">
        Can’t find what you’re looking for?{" "}
        <DynamicButton
          variant="link"
          onClick={() => router.push("/contact-us")}
          className="m-0 p-0 h-fit"
        >
          Reach out to us anytime
        </DynamicButton>
        we’re happy to help!
      </p>
      <section className="mb-8">
        <Accordion type="single" collapsible className="w-full">
          {FAQs.map((question, index) => (
            <AccordionItem value={`${index}`} key={index}>
              <AccordionTrigger className="text-start">
                <h3>{question.question}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <CallToAction />
    </main>
  );
}
