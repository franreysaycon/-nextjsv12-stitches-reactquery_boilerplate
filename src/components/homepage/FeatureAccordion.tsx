import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import VerticalGrid from "../common/VerticalGrid"
import Box from "../common/Box"
import FeatureAccordionItem from "./FeatureAccordionItem"

const FeatureAccordion = () => (
  <Accordion.Root type="single" defaultValue="item-1" collapsible={true}>
    <FeatureAccordionItem header="General Setup" value="item-1">
      <VerticalGrid>
        <Box as="p" css={{ fontWeight: "$bold" }}>
          Hello World! Enjoy a NextJS v12 boilerplate.
        </Box>
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
          Built in components include the following:
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
          For static analysis, I used <strong>eslint</strong> and
          <strong>tsc --noEmit</strong>. This only uses eslint standard, change
          it depending on your needs! For formatting, I used
          <strong>prettier</strong> behind eslint so it&apos;s automatic. I
          highly suggest to use VSCode eslint extension to catch problems early.
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
    <FeatureAccordionItem header="Folder Philosophy" value="item-2">
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
            <li>stitches folder contains all stiches configurations</li>
          </Box>
        </Box>
        <Box as="p">
          It is important to note that these are just suggestions and a good
          developer should adjust it depending on your needs. It just has to
          make sense, consistent and most importantly simple. :D
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Styling" value="item-3">
      <VerticalGrid>
        <Box as="p">
          We use <strong>@stitches/react</strong> as the main styling solution -
          CSS in JS. SSR is already setup.
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
          <strong>Animation Philosophy</strong>
          <Box as="ul" css={{ margin: "$space$4 0 0 0" }}>
            <li>
              use stitches whenever possible especially for simple keyframing.
            </li>
            <li>
              for animations that require JS capabilities, use framer motion.
            </li>
            <li>
              for animations that require spring transitions, use framer motion.
            </li>
          </Box>
        </Box>
        <Box as="p">
          We use stitches to style our <strong>@radixui</strong>.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="API Integration" value="item-4">
      <VerticalGrid>
        <Box as="p">
          <strong>NextJS</strong> as the main framework.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Testing" value="item-5">
      <VerticalGrid>
        <Box as="p">
          <strong>NextJS</strong> as the main framework.
        </Box>
      </VerticalGrid>
    </FeatureAccordionItem>
    <FeatureAccordionItem header="Analytics" value="item-6">
      <></>
    </FeatureAccordionItem>
  </Accordion.Root>
)

export default FeatureAccordion
