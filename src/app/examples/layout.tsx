import { Container } from "@/components/layout/container";

// /examples 아래 모든 페이지가 같은 폭과 여백을 쓰도록 감싸 줍니다.
export default function ExamplesLayout({
  children,
}: LayoutProps<"/examples">) {
  return <Container className="py-8">{children}</Container>;
}
