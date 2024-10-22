import { House, PackageSearch } from "lucide-react";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div
        id="hs-application-sidebar"
        className="hs-overlay [--body-scroll:true] lg:[--overlay-backdrop:false] [--is-layout-affect:true] [--auto-close:lg]
    hs-overlay-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
    w-[260px] h-full
    hidden
    fixed inset-y-0 start-0 z-[60]
    bg-white border-e border-gray-200

   "
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-6 pt-4">
            {/* <!-- Logo --> */}
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Preline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="20"
                fill="none"
                viewBox="0 0 176 40"
              >
                <path
                  fill="#2563eb"
                  fillRule="evenodd"
                  d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#283841"
                  d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
            </a>
            {/* <!-- End Logo --> */}
          </div>

          {/* <!-- Content --> */}
          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="flex flex-col space-y-1">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href="#"
                  >
                    <House className="shrink-0 size-4"/>
                    Dashboard
                  </a>
                </li>

                <li className="hs-accordion" id="users-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    aria-expanded="true"
                    aria-controls="users-accordion-child"
                  >
                    <PackageSearch className="shrink-0 size-4" />
                    Products
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="users-accordion-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="users-accordion"
                  >
                    <ul
                      className="hs-accordion-group ps-8 pt-1 space-y-1"
                      data-hs-accordion-always-open
                    >
                      <li className="hs-accordion" id="users-accordion-sub-1">
                        <button
                          type="button"
                          className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          aria-expanded="true"
                          aria-controls="users-accordion-sub-1-child"
                        >
                          Sub Menu 1
                          <svg
                            className="hs-accordion-active:block ms-auto hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                          <svg
                            className="hs-accordion-active:hidden ms-auto block size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        <div
                          id="users-accordion-sub-1-child"
                          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                          role="region"
                          aria-labelledby="users-accordion-sub-1"
                        >
                          <ul className="pt-1 space-y-1">
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                Link 1
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                Link 2
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                Link 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="hs-accordion" id="users-accordion-sub-2">
                        <button
                          type="button"
                          className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          aria-expanded="true"
                          aria-controls="users-accordion-sub-2-child"
                        >
                          Sub Menu 2
                          <svg
                            className="hs-accordion-active:block ms-auto hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                          <svg
                            className="hs-accordion-active:hidden ms-auto block size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>

                        <div
                          id="users-accordion-sub-2-child"
                          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                          role="region"
                          aria-labelledby="users-accordion-sub-2"
                        >
                          <ul className="pt-1 space-y-1">
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                Link 1
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                Link 2
                              </a>
                            </li>
                            <li>
                              <a
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                Link 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="hs-accordion" id="account-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    aria-expanded="true"
                    aria-controls="account-accordion-child"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="18" cy="15" r="3" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                      <path d="m21.7 16.4-.9-.3" />
                      <path d="m15.2 13.9-.9-.3" />
                      <path d="m16.6 18.7.3-.9" />
                      <path d="m19.1 12.2.3-.9" />
                      <path d="m19.6 18.7-.4-1" />
                      <path d="m16.8 12.3-.4-1" />
                      <path d="m14.3 16.6 1-.4" />
                      <path d="m20.7 13.8 1-.4" />
                    </svg>
                    Account
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="account-accordion-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="ps-8 pt-1 space-y-1">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="hs-accordion" id="projects-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    aria-expanded="true"
                    aria-controls="projects-accordion-child"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Projects
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="projects-accordion-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="projects-accordion"
                  >
                    <ul className="ps-8 pt-1 space-y-1">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                    Calendar
                  </a>
                </li>
                <li>
                  <a
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Documentation
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- End Content --> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
