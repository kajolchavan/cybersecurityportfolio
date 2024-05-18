import { client } from "@/cms/lib/client";
import BlogMain from "@/components/BlogMain";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

const fetchBlogData = async () =>{
  const blogsQuery = `*[_type == "blogs" ]{
    coverImage{
         asset->{
           _id,
           url
         }
       },
    bannerImage{
         asset->{
           _id,
           url
         }
       },
    title,
      content,
      _id
 
      
       
       
   }`
  const blogs = await client.fetch(blogsQuery);
  return blogs
}
  

const BlogPage = async () => {
  const blogs = await fetchBlogData()
  
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Blogs"} />
   <BlogMain blogs={blogs} />
    </NoxfolioLayout>
  );
};



export default BlogPage;
