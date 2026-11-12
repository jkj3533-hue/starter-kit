import { Gauge, Search, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = { title: "설정 가이드" };

// 보안 헤더 설정 예시 (next.config.ts에 추가하는 코드)
const securityHeadersCode = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;`;

// 검색 엔진 안내 파일 예시 (src/app/robots.ts)
const robotsCode = `import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://내-도메인.com/sitemap.xml",
  };
}`;

type GuideItem = {
  title: string;
  description: string;
  // true이면 이 프로젝트에 이미 적용되어 있는 항목
  isApplied: boolean;
};

const performanceItems: GuideItem[] = [
  {
    title: "폰트 최적화 (next/font)",
    description:
      "layout.tsx에서 Geist 폰트를 next/font로 불러와 폰트 로딩을 최적화합니다.",
    isApplied: true,
  },
  {
    title: "라우트별 코드 분할",
    description:
      "App Router는 페이지마다 필요한 코드만 나눠서 내려받도록 자동으로 처리합니다.",
    isApplied: true,
  },
  {
    title: "이미지 최적화 (next/image)",
    description:
      "이미지를 넣을 때 img 태그 대신 next/image를 쓰면 크기 조절과 지연 로딩이 적용됩니다.",
    isApplied: false,
  },
];

const securityItems: GuideItem[] = [
  {
    title: "입력값 검증 (Zod)",
    description:
      "폼 예제처럼 Zod 스키마로 사용자 입력을 검증하면 잘못된 값을 걸러낼 수 있습니다.",
    isApplied: true,
  },
  {
    title: "환경 변수 구분",
    description:
      "NEXT_PUBLIC_ 으로 시작하는 값만 브라우저에 노출됩니다. 비밀 키에는 이 접두사를 붙이지 마세요.",
    isApplied: true,
  },
  {
    title: "보안 헤더",
    description: "아래 코드를 next.config.ts에 추가하면 기본적인 보안 헤더가 붙습니다.",
    isApplied: false,
  },
];

const seoItems: GuideItem[] = [
  {
    title: "Metadata API",
    description:
      "layout.tsx의 title.template과 description으로 모든 페이지의 제목 형식을 한 곳에서 관리합니다.",
    isApplied: true,
  },
  {
    title: "robots.ts",
    description: "검색 엔진이 접근해도 되는 주소를 알려주는 파일입니다.",
    isApplied: false,
  },
  {
    title: "sitemap.ts",
    description:
      "사이트의 주소 목록을 만들어 검색 엔진이 페이지를 찾기 쉽게 해 줍니다.",
    isApplied: false,
  },
];

function GuideList({ items }: { items: GuideItem[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.title} className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{item.title}</span>
            <Badge variant={item.isApplied ? "default" : "outline"}>
              {item.isApplied ? "적용됨" : "추가 가능"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">{title}</p>
      <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function ConfigExamplePage() {
  return (
    <>
      <ExamplePageHeader
        title="설정 가이드"
        description="성능, 보안, SEO를 위해 알아두면 좋은 Next.js 설정입니다."
      />

      <Tabs defaultValue="performance">
        <TabsList>
          <TabsTrigger value="performance">
            <Gauge />
            성능
          </TabsTrigger>
          <TabsTrigger value="security">
            <ShieldCheck />
            보안
          </TabsTrigger>
          <TabsTrigger value="seo">
            <Search />
            SEO
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>성능 최적화</CardTitle>
              <CardDescription>
                사용자가 더 빠르게 페이지를 볼 수 있도록 돕는 설정입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GuideList items={performanceItems} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>보안 설정</CardTitle>
              <CardDescription>
                안전한 서비스를 위해 기본으로 챙겨야 할 것들입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <GuideList items={securityItems} />
              <CodeBlock title="next.config.ts" code={securityHeadersCode} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO 최적화</CardTitle>
              <CardDescription>
                검색 결과에 잘 노출되도록 돕는 설정입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <GuideList items={seoItems} />
              <CodeBlock title="src/app/robots.ts" code={robotsCode} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
