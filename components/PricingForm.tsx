// components/Form.tsx
"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export type FormType = {
  name: string | null;
  email: string | null;
  companyName: string | null;
  role: string | null;
  needs: string | null;
  message: string | null;
};

export default function Component() {
  const router = useRouter();
  const [forme, setForme] = useState<FormType>({
    name: null,
    email: null,
    companyName: null,
    role: null,
    needs: null,
    message: null,
  });

  const SubmitForm = async () => {
    console.log("Submitting form with data:", forme);

    try {
      const response = await fetch(
        `https://sheet.best/api/sheets/a4fc15f0-e578-45c5-8be4-c9d255018dd2`,
        {
          method: "POST",
          body: JSON.stringify(forme),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      router.push("/"); // Redirect to a thank-you page after successful submission
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="w-1/2 ml-36 md:w-4/5 lg:w-5/6 h-auto md:h-1/2 md:ml-10 border bg-opacity-65 bg-[#0f310e] rounded-3xl">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-lg space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Get in Touch
            </h2>
            <p className="text-gray-200 dark:text-gray-400">
              We&apos;d love to hear from you. Please fill out the form below.
            </p>
          </div>
          <div className="space-y-1">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                className="bg-opacity-70 bg-[#0f310e]"
                placeholder="Enter your name"
                onChange={(e) =>
                  setForme({
                    ...forme,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                className="bg-opacity-70 bg-[#0f310e]"
                placeholder="Enter your email"
                type="email"
                onChange={(e) =>
                  setForme({
                    ...forme,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                Company&apos;s name
              </Label>
              <Input
                id="company"
                className="bg-opacity-70 bg-[#0f310e]"
                placeholder="Enter company name"
                type="text"
                onChange={(e) =>
                  setForme({
                    ...forme,
                    companyName: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-white">
                Role
              </Label>
              <Input
                id="role"
                className="bg-opacity-70 bg-[#0f310e]"
                placeholder="Enter your role in the company"
                type="text"
                onChange={(e) =>
                  setForme({
                    ...forme,
                    role: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="needs" className="text-white">
                Needs
              </Label>
              <Input
                id="needs"
                className="bg-opacity-70 bg-[#0f310e]"
                placeholder="What are you contacting us for"
                type="text"
                onChange={(e) =>
                  setForme({
                    ...forme,
                    needs: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Additional details
              </Label>
              <Textarea
                id="message"
                className="min-h-[50px] text-white bg-opacity-70 bg-[#0f310e]"
                placeholder="Enter your message"
                onChange={(e) =>
                  setForme({
                    ...forme,
                    message: e.target.value,
                  })
                }
              />
            </div>
            <Button
              className="w-full border rounded-3xl "
              onClick={(e) => SubmitForm()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
