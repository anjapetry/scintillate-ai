import NavBar from "@/components/NavBar";
import { createClient } from "@/prismicio";

export default async function Header() {
  const client = createClient(); // handles our routing, caching, etc.
  const settings = await client.getSingle("settings");
  return (
    <header>
      <NavBar settings={settings} />
    </header>
  );
}
