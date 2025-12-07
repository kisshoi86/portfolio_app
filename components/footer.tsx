import { profile } from "@/lib/constants";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{profile.name}</h3>
            <p className="text-sm text-muted-foreground">{profile.role}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">연락처</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <div className="flex gap-4">
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">링크</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </a>
              <a
                href="#work"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Work
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="mt-2">
            <a
              href="#"
              className="transition-colors hover:text-foreground"
            >
              개인정보 처리 방침
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}




