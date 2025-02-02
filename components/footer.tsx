import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-72 ml-32">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Technologio</h3>
            <p className="text-sm text-muted-foreground">
              Vytváříme digitální řešení, které posunou Váš byznys dopředu.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Služby</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Webové stránky</li>
              <li>Webové aplikace</li>
              <li>Mobilní aplikace</li>
              <li>Blockchain řešení</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Technologio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
