import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";
import blog4 from "../assets/blog-4.png";
import blog5 from "../assets/blog-5.png";
import blog6 from "../assets/blog-6.png";
import blog7 from "../assets/blog-7.png";
import blog8 from "../assets/blog-8.png";
import blog9 from "../assets/blog-9.png";
import blog10 from "../assets/blog-10.png";
import hero from "../assets/hero.png";

// for social icons
import { FaTwitter, FaDiscord, FaFacebook } from 'react-icons/fa';

export const  blogData = [

    {
      cardImage: blog1,
      topic: "Database",
      title: "Building microservices with Dropwizard, MongoDB & Docker",
      text: "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-...",
      author: {
        name: "Julia Walker",
        authorImage: hero,
        date: "Jan 17, 2022",
        time: "3 min"
      }
    },
    {
     cardImage:blog2 ,
      topic: "Web Performance",
      title: "Fast web page loading on a $20 feature phone",
      text: "Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light...",
      author: {
        name: "Julia Walker",        
        authorImage: hero ,
        date: "Dec 10, 2021",
        time: "2 min"
      }
    },

    {
        cardImage: blog3,
      topic: "Accessibility",
      title: "Accessibility Tips for Web Developers",
      text: "It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: mobility...",
      author: {
        name: "Julia Walker",
        authorImage: hero ,
        date: "Nov 28, 2021",
        time: "4 min"
      }
    },
    {
       cardImage: blog4,
      topic: "Database",
      title: "Dynamically Securing Databases using Hashicorp Vault",
      text: "Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: securing...",
      author: {
        name: "Julia Walker",
        authorImage: hero ,
        date: "Nov 20, 2021",
        time: "4 min"
      }
    },
    {
      cardImage: blog5,
      topic: "Web Performance",
      title: "Adaptive Loading - Improving Web Performance on low-end devices",
      text: "Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely...",
      author: {
        name: "Julia Walker",
        authorImage: hero ,
        date: "Nov 10, 2021",
        time: "3 min"
      }
    },
    {
        cardImage: blog6,
      topic: "Accessibility",
      title: "Don't Develop Just for Yourself - A Developer's Checklist to Accessibility",
      text: "We, as developers, tend to develop sites unconsciously for people like ourselves. If we don't actively pay attention, the sites are often accessible only for certain...",
      author: {
        name: "Julia Walker",
        authorImage: hero ,
        date: "Oct 25, 2021",
        time: "7 min"
      }


    },

    {
      cardImage: blog7,
      topic: "Database",
      title: "Building a Restful CRUD API with Node JS, Express, and MongoDB",
      text: "Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API...",
      author: {
        name: "Julia Walker",
        authorImage: hero ,
        date: "Oct 15, 2021",
        time: "5 min"
      }
    },


    {
      cardImage: blog8,
      topic: "Web Performance",
      title: "Monitoring Performance with the PageSpeed Insights API",
      text: "The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API includes",
      author: {
        name: "Julia Walker",
        authorImage:hero ,
        date: "Oct 3, 2021",
        time: "5 min"
      }
    },

    {
      cardImage: blog9,
      topic: "Accessibility",
      title: "The best web accessibility tools for developers in 2021",
      text: "The quality of the tools you use defines the speed with which you can diagnose and resolve problems. Each year the landscape changes dramatically in web technologies,",
      author: {
        name: "Julia Walker",
        authorImage: hero ,
        date: "Sep 13, 2021",
        time: "7 min"
      }
    },

    {
      cardImage: blog10,
      topic: "Database",
      title: "How to connect a React frontend with a NodeJS/Express backend",
      text: "The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a",
      author: {
        name: "Julia Walker",
        authorImage: hero ,
        date: "Sep 21, 2021",
        time: "4 min"
      }
    }
  ];
  
  
export const tags = [
    "#mongodb",
    "#nodejs",
    "#a11y",
    "#mobility",
    "#inclusion",
    "#webperf",
    "#optimize",
    "#performance"
  ];
  
  

  export const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'Discord', icon: FaDiscord, url: 'https://discord.com' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com' },
  ];