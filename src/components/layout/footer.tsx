import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
