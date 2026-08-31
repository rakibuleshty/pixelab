import Vision from "~/vision/vision";
import type { Route } from "./+types/home";
import Hero from "~/hero/hero";
import Blocks from "~/blocks/blocks";
import Testimonials from "~/testimonials/testimonials";
import Team from "~/team/team";
import Newsletter from "~/newsletter/newsletter";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <Blocks />
      <Testimonials />
      <Team />
      <Newsletter />
    </>
  );
}
