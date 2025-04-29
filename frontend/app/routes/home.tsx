import type { Route } from "./+types/home";
import { Link } from "react-router"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dev Track Pro" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="flex-1 sm:ml-64">Homeだよ</div>
      <Link to="/sample">
        <button>サンプルはこちら</button>
      </Link>
    </>
  )
}
