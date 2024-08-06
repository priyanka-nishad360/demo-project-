"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { Icon } from "@iconify/react";
// import { DateBox } from "../../styles/blogStyles";

import Section from "../../components/pageLayouts/Section";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Blogs = () => {
  const [apires, setApiRes] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState();
  const navigate = useRouter();

  useEffect(() => {
    try {
      const start = async () => {
        setLoading(true);

        await axios
          .get(`${BASE_URL}/blog/posts?pageNo=${page}`)
          .then(function (response) {
            console.log(response);
            setApiRes(response.data.data.posts);
            setTotalPages(response.data.totalPages || 1);
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
            setLoading(false);
          });
      };
      start();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [setPage, page]);
  return (
    // <div className=" bg-gray-100 dark:bg-neutral-950 dark:text-white py-8 md:px-8 sm:px-4 px-2 min-h-screen">
    //   {loading ? (
    //     <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
    //       <img src="/loading.svg" alt="loading..." style={{ width: "100px" }} />
    //     </div>
    //   ) : (
    //     <>
    //       <Section className=" dark:text-neutral-50 grid gap-y-8 gap-x-4 py-8 place-items-center sm:grid-cols-2 md:grid-cols-3">
    //         {apires.map((blog) => {
    //           const formattedDate = new Date(blog.createdAt);
    //           const day = formattedDate.getDate();
    //           const month = formattedDate.toLocaleString("default", {
    //             month: "short",
    //           });
    //           const year = formattedDate.getFullYear();

    //           return (
    //             <div
    //               className="cursor-pointer w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    //               key={blog.id}
    //               onClick={() => {
    //                 navigate.push(`../blogs/${blog.id}`);
    //               }}
    //             >
    //               {blog.imageUrl ? (
    //                 <div className="blog-image h-56 rounded-t-lg overflow-hidden grid place-items-center">
    //                   <img
    //                     className=" scale-125 "
    //                     src={blog.imageUrl}
    //                     alt="itax.logo"
    //                   />
    //                 </div>
    //               ) : (
    //                 <div class="flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    //                   broken image...
    //                 </div>
    //               )}
    //               <div className="blog-content mt-5 pr-3 text-sm p-2">
    //                 <h3 className="max-h-[100px] overflow-hidden line-clamp-1 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
    //                   {blog.title}
    //                 </h3>
    //                 <p className="max-h-[130px] overflow-hidden line-clamp-3 h-16 mb-3 font-normal text-gray-700 dark:text-gray-400">
    //                   {blog.content}
    //                 </p>

    //                 <div className="blog-date mt-2">
    //                   <h6 className="date-month-year text-end font-semibold">{`${day} ${month} ${year}`}</h6>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </Section>
    //       <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    //     </>
    //   )}
    // </div>
    <>
      <div className="container mx-auto flex flex-wrap py-6">
        {/* Posts Section */}
        {loading ? (
          <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
            <Image
              src="/loading.svg"
              alt="loading..."
              width={100}
              height={100}
            />
          </div>
        ) : (
          <>
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
              <div className="grid grid-cols-2 gap-4">
                {apires?.map((blog) => {
                  const formattedDate = new Date(blog.createdAt);
                  const day = formattedDate.getDate();
                  const month = formattedDate.toLocaleString("default", {
                    month: "short",
                  });
                  const content = blog.contentdiscription.slice(1, 180);
                  const year = formattedDate.getFullYear();

                  return (
                    <article
                      className="flex flex-col shadow mb-4 hover:shadow-lg cursor-pointer hover:shadow-primary"
                      key={blog.id}
                      onClick={() => {
                        navigate.push(`../blogs/${blog.id}`);
                      }}
                    >
                      {/* Article Image */}
                      {blog.imageUrl ? (
                        <div className="blog-image h-30 rounded-t-lg overflow-hidden grid place-items-center">
                          <Image
                            className=" scale-125 "
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${blog.imageUrl}`}
                            alt="itaxEasy"
                            width={300}
                            height={200}
                          />
                        </div>
                      ) : (
                        <div class="flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                          <Image alt="demo image" width={400} height={200} src="https://source.unsplash.com/random/400x200/?accounts" />
                        </div>
                      )}

                      <div className="bg-white flex flex-col justify-start p-2">
                        <div>
                          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            Blog
                          </span>
                          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            Audit
                          </span>
                          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            Account
                          </span>
                        </div>
                        <p className="md:heading-6  text-xs  hover:text-gray-700 pb-4 ">
                          {blog.title}
                        </p>

                        <p className="pb-2 text-xs hidden md:block">
                          {content}...
                          <span className="text-primary">Continue reading</span>
                        </p>
                        <p href="#" className="text-sm pb-3">
                          By{" "}
                          <a
                            href="#"
                            className="font-semibold hover:text-gray-800"
                          >
                            ItaxEasy
                          </a>
                          ,{" "}
                          <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                            <Icon icon="mdi:clock" />
                            {`${day} ${month} ${year}`}
                          </span>
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
            </section>
            {/* Sidebar Section  */}
            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
              <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                <p className="text-xl font-semibold pb-5">About Us</p>
                <p className="pb-2">
                  Read latest articles on GST, Income Tax, International
                  Taxation, Corporate Laws, Tax Filing Software, AS, Income Tax
                  Slab, GST Rates on best tax professional blog in India.
                </p>
                <Link href="/about" className="w-full btn-primary text-center">
                  Get to know us
                </Link>
              </div>
              <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                <p className="text-xl font-semibold pb-5">Related Post</p>

                <div>
                  <a
                    href="#"
                    className="flex flex-col items-center bg-white  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <Image
                      className="object-cover w-full  h-96 md:h-20 md:w-48 "
                      src="https://source.unsplash.com/random/?accounts"
                      alt='demo image'
                      height={200}
                      width={400}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <p className="mb-3 font-semibold text-gray-700 text-xs dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center bg-white  shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <Image
                      className="object-cover w-full  h-96 md:h-20 md:w-48 "
                      src="https://source.unsplash.com/random/?court"
                      alt='demo image'
                      height={200}
                      width={400}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <p className="mb-3 font-semibold text-gray-700 text-xs dark:text-gray-400">
                        HC Allows Liquidator’s Plea to Dissolve Co. As There
                        Were No Recoverable Assets for Remittance of ...
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </>
        )}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

function Pagination(prop) {
  const { page, setPage, totalPages } = prop;
  return (
    <nav className="flex justify-center my-8">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            className=" cursor-pointer flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={+page === 0}
            onClick={() => setPage((prev) => +prev - 1)}
          >
            Prev
          </button>
        </li>
        <li>
          <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {page}
          </span>
        </li>
        <li>
          <button
            className=" cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setPage((prev) => +prev + 1)}
            disabled={+totalPages === +page + 1}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Blogs;
