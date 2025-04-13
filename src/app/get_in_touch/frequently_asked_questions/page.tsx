"use client";

import CallToAction from "@/components/CTA/Simple";
import LoadingIndicator from "@/components/states/loading/Loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQs } from "@/lib/constants/frequently-asked-questions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FrequentlyAskedQuestions() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <main className="mx-auto py-6 w-10/12 md:w-11/12">
      <h1 className="font-bold text-2xl">Welcome to Our FAQs Page!</h1>
      <p className="mt-4">
        Got questions? We’ve got answers! This page is your go-to resource for
        quick, clear information about our services, products, and processes.
        Whether you're exploring our offerings, seeking guidance, or
        troubleshooting an issue, you’ll find solutions right here.
      </p>
      <p className="mt-4">
        Can’t find what you’re looking for?{" "}
        <Button
          variant="link"
          onClick={() => router.push("/contact-us")}
          className="m-0 p-0 h-fit"
        >
          Reach out to us anytime
        </Button>
        - we’re happy to help!
      </p>
      <section className="mb-8">
        <Accordion type="single" collapsible className="w-full">
          {FAQs.map((question, index) => (
            <AccordionItem value={`${index}`} key={index}>
              <AccordionTrigger className="text-start">
                {question.question}
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
