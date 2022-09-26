import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import VerticalGrid from "../common/VerticalGrid"
import Box from "../common/Box"
import FeatureAccordionItem from "./FeatureAccordionItem"

const FeatureAccordion = () => (
  <Accordion.Root type="single" defaultValue="item-1" collapsible={true}>
    <FeatureAccordionItem header="Introduction" value="item-1">
      <VerticalGrid>
        <Box as="p" css={{ fontWeight: "$bold" }}>
          Hello World! Enjoy a NextJS v12 boilerplate.
        </Box>
        <Box as="p">
          My approach on this boilerplate is to maximize control. I am not a fan
          of libaries that feature bloat themselves to something that
          doesn&apos;t make sense anymore or too complex. I want to be close as
          much as possible to React/NextJS and CSS bare essentials.
        </Box>
        <Box as="p">
          The libraries are chosen with that main criteria in mind while making
          sure we get best practices for free as much as possible and create a
          structure that can be touched by a big team and scale comfortably in
          the future.
        </Box>
        <Box as="p">
          Of course nothing is set on stone. No boilerplate can capture all
          needs! Do customize.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="General Setup" value="item-3">
      <VerticalGrid>
        <Box as="p">
          The main language is <strong>Typescript</strong>. It&apos;s just good
          to optimized for collaboration early and to enjoy the many benefits of
          a typed language especially for apps at scale.
        </Box>
        <Box as="p">
          It assumed you will be using NextJS with SSR and/or ISR.&nbsp;
          <strong>next.config.js</strong> includes the domain whitelisting for
          github api to load the avatar for NextJS&apos;s image optimization.
          SSG means you would need to handle image optimization on your own.
        </Box>
        <Box as="p">
          As for building components, as much as possible I create my own per
          project dependent on the need but if it&apos;s a complicated component
          and you want accessibility built in and other good practices, this
          boilerplate includes <strong>@radixui</strong> primitives. I used it
          for this accordion component.
        </Box>
        <Box>
          I created some handy components:
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
              the usual meta tags looked for in a website.
            </li>
          </Box>
        </Box>
        <Box as="p">
          For static analysis, I use <strong>eslint</strong>. This only uses
          eslint standard, change it depending on your needs! For formatting, I
          used&nbsp;<strong>prettier</strong> behind eslint so it&apos;s
          automatic. I highly suggest to use VSCode eslint extension to catch
          problems early.
        </Box>
        <Box>
          The following environment variables are part of the setup. Check
          .env.example for this.
          <Box as="ul" css={{ margin: "$space$4 0 0 0" }}>
            <li>
              <strong>NEXT_PUBLIC_SITE_URL</strong> - absolute url of your
              application&apos;s index needed for meta tags to work properly and
              sitemap creation.
            </li>
            <li>
              <strong>NEXT_PUBLIC_GA_MEASUREMENT_ID</strong> - measurement ID
              for google analytics v4
            </li>
            <li>
              <strong>NEXT_PUBLIC_API_BASE_URL</strong> - the base url of your
              API endpoint. This is assuming you only have one URL for your
              backend.
            </li>
          </Box>
        </Box>
        <Box as="p">
          For commit checks, I used <strong>husky</strong> (a pre-commit Git
          hook) with <strong>lint-staged</strong> to automatically check any
          formatting errors ahead of time.
        </Box>
        <Box as="p">
          This also has built-in site mapping and robots.txt, created on build.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Folder Philosophy" value="item-4">
      <VerticalGrid>
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
              all common components is under the components/common folder.
            </li>
            <li>for every custom hooks, place it under hooks.</li>
            <li>for every query hook, add it under hooks/queries</li>
            <li>for every mutation hook, add it under hooks/mutations</li>
            <li>for every custom utilities, place it under lib</li>
            <li>
              for every group of API endpoints, create a file under services and
              create a mock under mocks folder for testing.
            </li>
            <li>
              for every images for a specific page, create a folder in images
              and add all images under that image.
            </li>
            <li>all common images is under the images/common folder.</li>
            <li>stitches folder contains all stiches configurations.</li>
            <li>playwright folder contains all e2e tests.</li>
          </Box>
        </Box>
        <Box>
          We use the Pascal case for our components and camel case for other
          miscellaneous files. We of course also follow the use prefix for
          hooks.
        </Box>
        <Box as="p">
          It is important to note that these are just suggestions and a good
          developer should adjust it depending on your needs. It just has to
          make sense, consistent and most importantly simple. :D
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Styling" value="item-5">
      <VerticalGrid>
        <Box as="p">
          We use <strong>@stitches/react</strong> as the main styling solution -
          CSS in JS. SSR is already setup.
        </Box>
        <Box as="p">
          I prefer to push for a mobile first approach on all style definitions.
          Examples of that is how I achieved responsiveness on this boilerplate
          preview. Check the homepage code!
        </Box>
        <Box as="p">
          <strong>stitches/index.ts</strong> contains the global CSS with simple
          resets and theme tokens using standard theme token values and
          breakpoints.
        </Box>
        <Box as="p">
          <strong>stitches/keyframes.ts</strong> contains stitches only
          animations
        </Box>
        <Box as="p">
          <strong>stitches/recipes.ts</strong> contains recipes you could add to
          stitches object definitions.
        </Box>
        <Box>
          I am not opinionated on how one should do animations. I would say use
          stitches defined animations as much as possible to keep things in CSS
          on build. Only use <strong>framer-motion</strong> if you can&apos;t
          achieve it cleanly with stitches alone. Especially if it involves
          spring transitions, viewports triggered animations, drag and drop,
          etc.
        </Box>
        <Box as="p">
          We use stitches to style our <strong>@radixui</strong>. To take
          advantage of stitches css APIs, do use the Box component then override
          it with the HTML element you want.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="API Integration" value="item-6">
      <VerticalGrid>
        <Box as="p">
          This boilerplate assumes you would be using REST. Given a certain
          resource, you would create a service file as stated in the folder
          setup philosophy. Do change it according to your needs!
        </Box>
        <Box as="p">
          I use <strong>react-query</strong> to handle our async API requests
          with <strong>axios</strong>.
        </Box>
        <Box as="p">
          Under services folder, we use the axios factory pattern to create an
          API client for a specific backend API. If you only have one, it&apos;s
          natural that only one client exists. The example API client is setup
          with an interceptor to convert all API results into camelcase.
        </Box>
        <Box as="p">
          I suggest to take advantage of axios interceptors to try
          authentication refresh retries on a failed auth APIs. Take advantage
          of the factor pattern to enable different clients and have their own
          custom rules.
        </Box>
        <Box as="p">
          Take advantage of configuring the query client in _app.tsx as well for
          any conveniences you want implemented globally.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Testing" value="item-7">
      <VerticalGrid>
        <Box as="p">
          Our general setup is to use <strong>jest</strong> and&nbsp;
          <strong>mock service worker</strong> as our main testing libraries.
          Jest for the runner and mock service workers for mocking API calls.
        </Box>
        <Box as="p">
          For unit test, we want to test, all components including pages, hooks,
          and utility functions under the lib folder. I would not test services
          as it&apos;s already covered by using mock service workers.
        </Box>
        <Box as="p">
          We put all page tests under __test__ folder. We utilize
          <strong>@testing-library/react</strong> to aid in testing hooks and
          components.
        </Box>
        <Box as="p">
          The Jest setup involves automatic clearing of mocks and installation
          of mock service workers. As stated each mock should cover one service,
          and combined in the mocks/server.ts file.
        </Box>
        <Box as="p">
          For E2E test, we use <strong>playwright</strong>. All tests stored in
          the playwright folder.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Analytics" value="item-8">
      <VerticalGrid>
        <Box as="p">
          It&apos;s also important to think about sending statistics on people
          who are using your frontend.
        </Box>
        <Box as="p">
          This boilerplate has built in definitions for Google Analytics v4, but
          it will only work if a NEXT_PUBLIC_GA_MEASUREMENT_ID was set.
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
