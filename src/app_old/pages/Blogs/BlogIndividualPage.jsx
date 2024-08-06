"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown.js";
// // import { useParams } from "react-router-dom";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { Image } from "../../styles/blogStyles";
import { useRouter } from "next/router";
import Link from "next/link";
import { Icon } from "@iconify/react";
// import { useAuth } from "../../hooks/useAuth";

export default function BlogIndividualPage({ params }) {
  const pathURL = params.slug[0];
  // const { token } = useAuth();
  // const { id } = useParams();
  // const navigate = useRouter();
  // const id = navigate?.asPath.split("/").at(-1);
  const [loading, setLoading] = useState(true);
  // const [editMode, setEditMode] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blog/posts/${pathURL}`);
        console.log("response :", response.data);
        setBlogData(response.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [pathURL]);

  const handleUpdate = async () => {
    try {
      await axios.put(`${BASE_URL}/blog/posts/${id}`, blogData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEditMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/blog/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Redirect to the blog list page after successful deletion
      window.location.replace("/blogs");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {loading ? (
        <div className="fixed min-h-screen w-screen bg-white flex items-center justify-center">
          <img src="/loading.svg" alt="loading..." style={{ width: "100px" }} />
        </div>
      ) : (
        // <div className="min-h-screen lg:w-2/3 px-5 m-auto py-14">
        //   <h1 className="text-sm md:text-xl xl:text-2xl font-semibold text-center bg-blue-800 text-white rounded py-2">
        //     {blogData.title}
        //   </h1>
        //   <div className="flex justify-center mt-5">
        //     <img
        //       className="bg-cover rounded"
        //       src={blogData.imageUrl}
        //       alt="Blog Image!"
        //     />
        //   </div>
        //   <div className="mt-5 text-sm sm:text-lg text-slate-900 text-jutify">
        //     {blogData.content}
        //   </div>
        // </div>

        <div className="container mx-auto flex flex-wrap py-6">
          {/* Posts Section */}
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <article className="flex flex-col shadow my-4">
              {/* Article Image */}
              <img
                className="bg-cover rounded"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${blogData.imageUrl}`}
                alt="Blog Image!"
              />
              <div className="bg-white flex flex-col justify-start p-6">
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
                <h6 className="heading-5 hover:text-gray-700 pb-4">
                  {blogData.title}
                </h6>
                <p href="#" className="text-sm pb-3">
                  By{" "}
                  <a href="#" className="font-semibold hover:text-gray-800">
                    ItaxEasy
                  </a>
                  ,{" "}
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
                    <Icon icon="mdi:clock" />3 days ago
                  </span>
                </p>
                <h1 className="pb-6 heading-6">{blogData.contentheading}</h1>
                <p className="pb-6">{blogData.contentdiscription}</p>
              </div>
            </article>

            {/* Pagination */}
          </section>
          {/* Sidebar Section */}
          <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">About Us</p>
              <p className="pb-2">
                Read latest articles on GST, Income Tax, International Taxation,
                Corporate Laws, Tax Filing Software, AS, Income Tax Slab, GST
                Rates on best tax professional blog in India.
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
                  <img
                    className="object-cover w-full  h-96 md:h-20 md:w-48 "
                    src="https://source.unsplash.com/random/?accounts"
                    alt
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-3 font-semibold text-gray-700 text-xs dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
