import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/sidemenu.tsx", [
        index("routes/home.tsx"),
        route("sample", "routes/sample.tsx"),
    ]),
] satisfies RouteConfig;
