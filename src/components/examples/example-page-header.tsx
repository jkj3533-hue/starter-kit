type ExamplePageHeaderProps = {
  title: string;
  description: string;
};

// 예제 페이지 맨 위의 제목과 설명: 모든 예제가 같은 모양을 쓰도록 모아 둔 컴포넌트
export function ExamplePageHeader({ title, description }: ExamplePageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 text-center">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
