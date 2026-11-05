import type { Metadata } from "next";

import { ContactForm } from "@/components/examples/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = { title: "폼 예제" };

export default function FormExamplePage() {
  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle>문의하기</CardTitle>
        <CardDescription>
          React Hook Form + Zod 검증 예제입니다. 비워 두고 보내 보세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  );
}
