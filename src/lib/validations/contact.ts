import { z } from "zod";

// 문의 폼의 입력 규칙(스키마). 에러 메시지도 여기서 한 번에 관리합니다.
export const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해 주세요."),
  // Zod 4부터는 z.string().email() 대신 z.email()을 사용합니다.
  email: z.email("올바른 이메일 형식이 아닙니다."),
  message: z.string().min(10, "내용은 10자 이상 입력해 주세요."),
});

// 스키마에서 타입을 자동으로 만들어, 타입을 따로 중복 작성하지 않습니다.
export type ContactFormValues = z.infer<typeof contactSchema>;
