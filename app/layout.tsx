import './globals.css';
import { Inter } from 'next/font/google';
import Header from './header';
import { METADATA } from '@/data/metadata';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: METADATA.name,
    template: `%s - ${METADATA.name}`,
  },
  metadataBase: new URL(METADATA.url),
  description: METADATA.description,
  keywords: [
    "Next.js v15",
    "Next.js 15 template",
    "Tailwind CSS v4",
    "Tailwind v4 template",
  ],
  authors: [
    {
      name: METADATA.name,
      url: METADATA.url,
    },
  ],
  creator: METADATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: METADATA.url,
    title: METADATA.name,
    description: METADATA.description,
    siteName: METADATA.name,
    images: [
      {
        url: METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: METADATA.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.name,
    description: METADATA.description,
    images: [METADATA.ogImage],
    creator: METADATA.handles.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon",
    apple: "/apple-touch-icon.png",
  },
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
  }) => {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-black`}
        suppressHydrationWarning={true}
      >
        <div className='relative min-h-screen p-6'>
          <Header />
          <main className='container mx-auto flex max-w-5xl flex-1 flex-col px-4'>
            {children}
          </main>
          <footer>
            <div className='flex items-center justify-center py-8'>
              <span className='text-sm text-neutral-400'>
                By
                <a
                  href='https://twitter.com/Ibelick'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-1 text-neutral-50'
                >
                  @Ibelick
                </a>
                &nbsp;and
                <a
                  href='https://twitter.com/cbmonx'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-1 text-neutral-50'
                >
                  @cbmonx
                </a>
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;