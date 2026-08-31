import {
    type RouteConfig,
    route,
    index,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("layout/layout.tsx", [
        index("routes/home.tsx"),
        route("about", "about/about.tsx"),
        route("app", "our_app/app.tsx"),
        route("contacts", "contacts/contacts.tsx"),
    ]),
] satisfies RouteConfig;