import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/layout";

export default function BaseLayout() {
  
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
// export async function loader({ request }: LoaderArgs) {
//   const { authenticated, redirectTo } = await authProvider.check(request);

//   if (!authenticated) {
//     // throw redirect(redirectTo ?? "/login");
//   }

//   return json({
//     ENV: {
//       DATABASE_URL: process.env.DATABASE_URL,
//       DATABASE_PUBLIC_KEY: process.env.DATABASE_PUBLIC_KEY,
//     },
//   });
// }
