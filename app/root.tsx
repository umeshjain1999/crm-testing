import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RefineThemes } from "@refinedev/chakra-ui";
import type { MetaFunction } from "@remix-run/node";
import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/remix-router";

import { dataProvider } from "@refinedev/supabase";
import { useLoaderData } from "@remix-run/react";
import { authProvider } from "~/authProvider";
import styles from "~/global.css";
import { supabaseClient } from "~/utility";

export const meta: MetaFunction = () => [
  {
    title: "New Remix + Refine App",
  },
];

export async function loader() {
  return json({
    ENV: {
      DATABASE_URL: process.env.DATABASE_URL,
      DATABASE_PUBLIC_KEY: process.env.DATABASE_PUBLIC_KEY,
    },
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  const customTheme = extendTheme({
    ...RefineThemes.Orange,
  });
  return (
    (<html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <ChakraProvider theme={customTheme}>
        <RefineKbarProvider>
          {/* <DevtoolsProvider> */}
            <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider(supabaseClient)}
              authProvider={authProvider}
              resources={[
              {
                name: "fake_data",
                list: "/blog-posts",
                // create: "/blog-posts/create",
                // edit: "/blog-posts/edit/:id",
                show: "/blog-posts/show/:id",
                meta: {
                  label: "Tabular Data",
                  canDelete: true,
                },
              },{
                name: "styled_components",
                list: "/styled-components",
                meta: {
                  label: "Style Comp.",
                },
              },{
                name: "zustand",
                list: "/zustand",
                meta: {
                  label: "Zustand",
                },
              }]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "gDSecS-xsAvXh-rMzg1H",
              }}
            >
              <>
                <Outlet />
                <UnsavedChangesNotifier />
                <RefineKbar />
              </>
            </Refine>
            {/* <DevtoolsPanel /> */}
          {/* </DevtoolsProvider> */}
        </RefineKbarProvider>
        </ChakraProvider>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>)
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}