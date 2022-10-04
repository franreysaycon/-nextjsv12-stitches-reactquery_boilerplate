import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import VerticalGrid from "../common/VerticalGrid"
import Box from "../common/Box"
import FeatureAccordionItem from "./FeatureAccordionItem"
import FeatureForm from "./FeatureForm"

const FeatureAccordion = () => (
  <Accordion.Root type="single" defaultValue="item-1" collapsible={true}>
    <FeatureAccordionItem header="Introduction" value="item-1">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box as="p" css={{ fontWeight: "$bold" }}>
          Hello World! Enjoy a NextJS v12 boilerplate.
        </Box>
        <Box as="p">
          My approach to this boilerplate is to maximize control while not
          reinventing the wheel in terms of good practices such as
          accessibility, theme tokens, cross-browser style extensions,
          asynchronous API fetching best practices, form handling, etc.
        </Box>
        <Box as="p">
          I chose libraries with the mindset above. Of course, feel free to
          customize it according to your needs.
        </Box>
        <Box as="p">
          PS: I didn&apos;t include anything about global state management.
          Hahaha! :P I would choose&nbsp;
          <Box as="a" href="https://github.com/pmndrs/zustand" target="_blank">
            zustand
          </Box>
          , though, haha!
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Development Environment" value="item-3">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box as="p">
          I used yarn as a package manager, and Node should be version 16 and
          above.
        </Box>
        <Box as="p">
          The primary language is <strong>Typescript</strong>. It&apos;s just
          good to optimize for collaboration early and to enjoy the many
          benefits of a typed language, especially for apps at scale.
        </Box>
        <Box as="p">
          The boilerplate assumes the paradigm of SSR or ISR with NextJS. You
          will need more configurations to support SSG, especially if you care
          about image optimization.
        </Box>
        <Box>
          I created some small typical components, hoping they will help you
          quickly in terms of layout and hint at how everything is structured.
          <Box as="ul" css={{ margin: "$space$4 0 0 0" }}>
            <li>
              <strong>Box</strong> - stitches enabled div. (click on styling to
              know more about stitches)
            </li>
            <li>
              <strong>MainContainer</strong> - a page fold component with a min
              height of the viewport
            </li>
            <li>
              <strong>MaxContainer</strong> - a page max width helper for
              designs that require a max width for content
            </li>
            <li>
              <strong>MetaHead</strong> - a next/head component that gives out
              the usual meta tags looking for in a website.
            </li>
            <li>
              <strong>Button</strong> - stitches enabled button
            </li>
            <li>
              <strong>Input</strong> - stitches enabled input
            </li>
            <li>
              <strong>ToastProvider</strong> - built with @radixui primitives to
              enable toast notifications globally.
            </li>
          </Box>
        </Box>
        <Box as="p">
          Eslint and prettier are the heroes for static analysis and automatic
          formatting. This boilerplate just used standard rules optimized for
          Typescript.
        </Box>
        <Box as="p">
          To catch integration problems early, husky with lint-staged to
          automatically check any formatting errors ahead of time (pre-commit).
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Folder Philosophy" value="item-4">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box>
          Here&apos;s the general philosophy for the folder setup:
          <Box as="ul" css={{ margin: "$space$4 0 0 0" }}>
            <li>
              for every page, create a file in __test__ for page component
              testing.
            </li>
            <li>
              for every page with custom components, create a folder with the
              first level page name in components where these components will
              live.
            </li>
            <li>
              all common components are under the components/common folder.
            </li>
            <li>
              all common providers are under the components/providers folder.
            </li>
            <li>for every custom hook, place it under hooks.</li>
            <li>for every query hook, add it under hooks/queries</li>
            <li>for every mutation hook, add it under hooks/mutations</li>
            <li>for every custom utility function, place it under lib</li>
            <li>
              for every group of API endpoints, create a file under services and
              create a mock under the mocks folder for testing.
            </li>
            <li>
              for every image for a specific page, create a folder in images and
              add all images under that folder.
            </li>
            <li>all common images are under the images/common folder.</li>
            <li>stitches folder contains all stiches configurations.</li>
            <li>playwright folder contains all e2e tests.</li>
          </Box>
        </Box>
        <Box>
          We use the Pascal case for our components and camel case for other
          miscellaneous files. We, of course, also follow the use- prefix for
          hooks.
        </Box>
        <Box as="p">
          PS: Remember, these are just suggestions! Adjust it depending on your
          needs. Look for something that makes sense, is consistent, and, most
          importantly, is simple. :D
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Styling" value="item-5">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box as="p">
          <strong>@stitches/react</strong> is the primary styling solution - CSS
          in JS. The document file of Next is already configured to use
          stitches.
        </Box>
        <Box as="p">
          <strong>@radixui</strong> is the primary component library. It is
          important to note that radix primarily gives out only primitives, and
          it&apos;s up to us to style them. At least you don&apos;t have to
          worry about accessibility and the likes anymore, especially for
          typical but complex UI components like this accordion.
        </Box>
        <Box as="p">
          Optionally, for animations, <strong>framer-motion</strong> was
          installed. I suggest being as close to stitches as possible,
          especially for simple animations of fading in and out. We use
          framer-motion on animations that rely on JS, like in view or spring
          computations.
        </Box>
        <Box as="p">
          The philosophy for styling in this boilerplate is to be mobile-first.
        </Box>
        <Box as="p">
          The folder stitches contain different configurations of stitches. They
          are the following:
          <Box as="ul" css={{ margin: "$space$4 0 0 0" }}>
            <li>
              <strong>stitches/index.ts</strong> contains the global CSS with
              simple resets and theme tokens using standard theme token values
              and breakpoints.
            </li>
            <li>
              <strong>stitches/keyframes.ts</strong> contains stitches-only
              animations
            </li>
            <li>
              <strong>stitches/recipes.ts</strong> contains recipes you could
              add to stitches object definitions.
            </li>
          </Box>
        </Box>
        <Box as="p">
          We use stitches to style @radixui primitives. To take advantage of
          stitches CSS APIs, use the Box component, then override it with the
          HTML element you want.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="API Integration" value="item-6">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box as="p">
          This boilerplate assume you would be using REST. I included&nbsp;
          <strong>react-query</strong> to make our lives easier in handling
          asynchronous API states.
        </Box>
        <Box as="p">
          Under the services folder, we use the axios factory pattern to create
          an API client for a specific backend API. If you only have one,
          it&apos;s natural that only one client exists.
        </Box>
        <Box as="p">
          The example API client is set up with an interceptor to convert all
          API results into camelcase. I recommend adding more interceptors for
          authentication refreshes and automatic redirection to a login page.
        </Box>
        <Box as="p">
          It would be best if you took advantage of the factory pattern to
          enable different clients and have their own custom rules.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Forms" value="item-7">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box as="p">
          <strong>react-hook-forms</strong> is the main library for handling our
          forms. We use it with <strong>Joi</strong> for schema validation,
          integrated with a hook form joi resolver.
        </Box>
        <Box as="p">Here&apos;s an example working form.</Box>
        <FeatureForm />
        <Box as="p">
          We use label @radixui primitives for form accessibility. Everything
          else is created in-house, styled with stitches.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Testing" value="item-8">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box as="p">
          Our general setup uses <strong>jest</strong> and&nbsp;
          <strong>mock service workers</strong> as our main testing libraries —
          jest for the runner and mock service workers for mocking API calls.
        </Box>
        <Box as="p">
          We want to test all components, including pages, hooks, and utility
          functions, under the lib folder for unit testing. I would ignore
          testing services as it&apos;s already covered by using mock service
          workers.
        </Box>
        <Box as="p">
          We put all page tests under the __test__ folder. We utilize
          <strong>@testing-library/react</strong> to aid in testing hooks and
          components.
        </Box>
        <Box as="p">
          The Jest setup involves automatic clearing of mocks and installation
          of mock service workers. Each mock should cover one service combined
          in the mocks/server.ts file.
        </Box>
        <Box as="p">
          For E2E testing, we use <strong>playwright</strong>. The playwright
          folder houses all such tests.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Deployment" value="item-9">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box as="p">I suggest deploying to Vercel for things to be easy.</Box>
        <Box as="p">
          This boilerplate makes use of .env files for secret handling. The
          following environment variables are part of the setup. Check
          .env.example for this.
          <Box as="ul" css={{ margin: "$space$4 0 0 0" }}>
            <li>
              <strong>NEXT_PUBLIC_SITE_URL</strong> - absolute URL of your
              application&apos;s index needed for meta tags to work correctly
              and sitemap creation.
            </li>
            <li>
              <strong>NEXT_PUBLIC_GA_MEASUREMENT_ID</strong> - measurement ID
              for google analytics v4
            </li>
            <li>
              <strong>NEXT_PUBLIC_API_BASE_URL</strong> - the base URL of your
              API endpoint, assuming you only have one URL for your backend.
            </li>
          </Box>
        </Box>
        <Box as="p">
          There&apos;s also built-in site mapping and robots.txt, created on
          build. PS: This does not have PWA configurations. It should be easy to
          incorporate it, though.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Analytics" value="item-10">
      <VerticalGrid css={{ padding: "$space$4" }}>
        <Box as="p">
          It&apos;s essential to consider sending statistics from people using
          your front end.
        </Box>
        <Box as="p">
          This boilerplate has built-in definitions for&nbsp;
          <strong>Google Analytics v4</strong>, but it will only work if we set
          NEXT_PUBLIC_GA_MEASUREMENT_ID.
        </Box>
        <Box as="p">
          If you don&apos;t want to use Google Analytics, delete the only lib
          function in this boilerplate and remove the useEffect hook that uses
          it at _app.tsx.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
  </Accordion.Root>
)

export default FeatureAccordion
