import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="rounded-xl border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] overflow-x-hidden">
        <div className="max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
            <a href="/" aria-label="tailus logo">
              <Image alt="" src="/logo.png" width={120} height={20} />
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/tailus-ui"
                target="blank"
                aria-label="github"
                className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/tailus_ui"
                target="blank"
                aria-label="twitter"
                className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                  />
                </svg>
              </a>
              <a
                href="https://youtube.com/@tailus-ui"
                target="blank"
                aria-label="medium"
                className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <span className="font-medium text-gray-950 dark:text-white">
                Enterprise
              </span>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-950 dark:text-white">
                Product
              </span>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Customization
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Enterprise
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-950 dark:text-white">
                Docs
              </span>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Utils
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Principles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Jargon
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Plugin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Customizer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Boilerplates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-950 dark:text-white">
                Community
              </span>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/ksham-innovation/?originalSubdomain=in"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Linkedin
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ksham_innovation/"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>

              <form className="mt-12 max-w-xs w-full">
                <div className="space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400">
                  <label className="block font-medium text-sm" htmlFor="email">
                    Subscribe to our newsletter
                  </label>
                  <input
                    className="w-full focus:outline rounded-[--field-border-radius] appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-primary-600 shadow-gray-700/5 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700 dark:bg-[--field-dark-bg] dark:focus:bg-[--field-dark-focus-bg] dark:outline-primary-500 dark:shadow-gray-950/40 dark:border-[--field-dark-border-color] dark:hover:border-[--field-dark-border-hover-color] dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-base h-9 px-3"
                    placeholder="Your email"
                    type="email"
                    id="email"
                    required
                    name="email"
                  />
                  <span className="hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm">
                    Helper message
                  </span>
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md bg-gray-100 px-6 py-3 dark:bg-gray-900">
            <span className="text-gray-600 dark:text-gray-400">
              Copyright &copy; Ksham Innovation 2023 | All rights Reserved.
            </span>
            <div className="flex gap-3">

            <Link href={'/'} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
               Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
              TradeMark
            </Link>
            <Link href={'/'} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                Patent
            </Link>
                </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
