import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 py-14">
      <Container>
        <a
          href="https://github.com/Luaneo/luaneo-blog"
          className="font-bold hover:underline"
        >
          View on GitHub
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
