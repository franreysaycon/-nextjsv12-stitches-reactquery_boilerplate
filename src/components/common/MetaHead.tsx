import React from "react"
import Head from "next/head"

interface MetaHeadProps {
  title: string
  description: string
  link: string
}

const MetaHead: React.FC<MetaHeadProps> = ({ title, description, link }) => (
  <Head>
    <title key="title">{title}</title>
    <meta name="title" content={title} key="meta-title" />
    <meta name="description" content={description} key="description" />
    <meta name="robots" content="index, follow" key="robots" />

    <meta property="og:type" content="article" key="og:type" />
    <meta property="og:title" content={title} key="og:title" />
    <meta
      property="og:description"
      content={description}
      key="og:description"
    />
    <meta
      property="og:image"
      content={`${process.env.NEXT_PUBLIC_SITE_URL}/social-preview.png`}
      key="og:image"
    />
    <meta
      property="og:image:alt"
      content="Psychedelics Anonymous Banner"
      key="og:image:alt"
    />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@ezu_xyz" />
    <meta name="twitter:title" content={title} key="twitter:title" />
    <meta
      name="twitter:description"
      content={description}
      key="twitter:description"
    />
    <meta
      name="twitter:image"
      content={`${process.env.NEXT_PUBLIC_SITE_URL}/social-preview.png`}
      key="twitter:image"
    />
    <meta
      name="twitter:image:alt"
      content="Psychedelics Anonymous Banner"
      key="twitter:image:alt"
    />
    <meta name="twitter:card" content="summary" />

    <meta property="og:url" content={link} key="og:url" />
    <meta
      property="og:site_name"
      content="Psychedelics Anonymous | A Web3 brand."
      key="og:site_name"
    />

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link
      rel="icon"
      href={`${process.env.NEXT_PUBLIC_SITE_URL}/favicon.ico`}
      type="image/x-icon"
    />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${process.env.NEXT_PUBLIC_SITE_URL}/apple-touch-icon.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${process.env.NEXT_PUBLIC_SITE_URL}/favicon-32x32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${process.env.NEXT_PUBLIC_SITE_URL}/favicon-16x16.png`}
    />
    <link
      rel="manifest"
      href={`${process.env.NEXT_PUBLIC_SITE_URL}/site.webmanifest`}
    />
    <link
      rel="mask-icon"
      href={`${process.env.NEXT_PUBLIC_SITE_URL}/safari-pinned-tab.svg" color="#5bbad5`}
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff"></meta>

    <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${link}`} />
  </Head>
)

export default MetaHead
