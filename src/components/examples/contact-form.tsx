"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  // 검증을 통과한 값만 이 함수로 전달됩니다.
  const onSubmit = async (values: ContactFormValues) => {
    try {
      // TODO: 실제 API 호출로 교체하세요. (지금은 1초 대기로 흉내만 냅니다)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("제출된 값:", values);
      toast.success("문의가 전송되었습니다.");
      form.reset();
    } catch {
      toast.error("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        {/* Controller: 입력 칸과 폼 상태(값, 에러)를 이어 주는 연결 장치 */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-name">이름</FieldLabel>
              <Input
                {...field}
                id="contact-name"
                aria-invalid={fieldState.invalid}
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-email">이메일</FieldLabel>
              <Input
                {...field}
                id="contact-email"
                type="email"
                aria-invalid={fieldState.invalid}
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-message">내용</FieldLabel>
              <Textarea
                {...field}
                id="contact-message"
                rows={5}
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button type="submit" form="contact-form" disabled={isSubmitting}>
          {isSubmitting ? "전송 중..." : "보내기"}
        </Button>
      </FieldGroup>
    </form>
  );
}
