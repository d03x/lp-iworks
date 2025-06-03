import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iWorks : Digital Informal worker Platforms" },
    { name: "description", content: "iWorks is a digital platform for informal workers to find job and oppurtunity" },
  ];
}

export default function Home() {
  return <Welcome />;
}
