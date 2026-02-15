"use client";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { Input } from "@/components/ui/input";
import WindowContainer from "@/components/window-container";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios";
import { useState } from "react";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof schema>) {
    setIsSubmitting(true);
    try {
      await axios.post("/api/contact", data);
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex flex-col min-h-screen w-full items-center">
      <Header />
      <div className="w-full px-4 flex-1 flex items-center justify-center">
        <WindowContainer title="contact" className="max-w-xl p-4 bg-foreground">
          <form className="w-full mt-4 text-white" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>

              <Controller name="name" control={form.control} render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-lg">name</FieldLabel>
                  <Input {...field} id={field.name} aria-invalid={fieldState.invalid} autoComplete="off" />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
              />

              <Controller name="email" control={form.control} render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-lg">email</FieldLabel>
                  <Input {...field} type="email" id={field.name} aria-invalid={fieldState.invalid} autoComplete="off" />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
              />

              <Controller name="message" control={form.control} render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-lg">message</FieldLabel>
                  <Textarea {...field} id={field.name} aria-invalid={fieldState.invalid} rows={4} required />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
              />

            </FieldGroup>

            <button type="submit" className="mt-8 bg-primary text-foreground hover:bg-secondary py-1 px-4 w-full text-xl" disabled={isSubmitting}>
              {isSubmitting ? "sending..." : "send"}
            </button>
          </form>
        </WindowContainer>
      </div>
      <Footer />
    </main>
  );
}