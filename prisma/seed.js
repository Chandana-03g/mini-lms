import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
 await prisma.enrollment.deleteMany();
await prisma.module.deleteMany();
await prisma.course.deleteMany();


  // 1: React Basics
 
  await prisma.course.create({
    data: {
      title: "React Basics",
      level: "Beginner",
      featured: true,
      image:"/courses/React.png",
     modules: {
  create: [
    {
      title: "Introduction to React",
      videoUrl: "https://youtu.be/N3AkSS5hXMA",
      notes:
        "React is a popular JavaScript library used to build user interfaces. It is mainly used for creating single-page applications. React allows developers to build reusable and independent UI components. Each component controls its own logic and rendering. React uses a virtual DOM to improve performance and reduce unnecessary page updates. This makes applications faster and more efficient. React is widely used in the industry and is an essential skill for frontend developers.",
    },
    {
      title: "JSX Fundamentals",
      videoUrl: "https://youtu.be/7fPXI_MnBOY",
      notes:
        "JSX is a syntax extension that allows developers to write HTML-like code inside JavaScript. It makes React components easier to read and understand. JSX is not directly understood by browsers and is converted into JavaScript during build time. Developers can embed variables and expressions inside JSX using curly braces. JSX helps structure UI elements clearly within components. Most React applications rely heavily on JSX for defining UI layouts.",
    },
    {
      title: "Components and Props",
      videoUrl: "https://youtu.be/uvEAvxWvwOs",
      notes:
        "Components are the core building blocks of a React application. Each component represents a part of the user interface. Components help split large applications into smaller and manageable pieces. Props are used to pass data from a parent component to a child component. They allow components to be dynamic and reusable. Props are read-only and should not be modified inside child components. Proper use of components and props improves code reusability and maintainability.",
    },
  ],
},

    },
  });


  //  2: Next.js Fundamentals

  await prisma.course.create({
    data: {
      title: "Next.js Fundamentals",
      level: "Intermediate",
      featured: false,
      image:"/courses/next.png",
     modules: {
  create: [
    {
      title: "Introduction to Next.js",
      videoUrl: "https://youtu.be/ZjAqacIC_3c?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI",
      notes:
        "Next.js is a powerful React framework used to build full-stack web applications. It provides built-in features such as routing, server-side rendering, and static site generation. These features help improve application performance and search engine optimization. Next.js also simplifies backend development using API routes. Developers can build scalable and production-ready applications faster. It is widely adopted in the industry for modern web development.",
    },
    {
      title: "File-Based Routing",
      videoUrl: "https://youtu.be/Vm7qM1wmXwE?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI",
      notes:
        "Next.js uses a file-based routing system where each file represents a route. This removes the need for manual route configuration. Dynamic routes allow pages to be generated based on parameters such as IDs or slugs. Nested folders help organize routes in a clean structure. This approach reduces boilerplate code significantly. File-based routing makes navigation intuitive and easy to manage in large applications.",
    },
    {
      title: "Server and Client Components",
      videoUrl: "https://youtu.be/KvjWqn1VpPc?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI",
      notes:
        "Next.js introduces the concept of server and client components to improve performance. Server components run on the server and reduce the amount of JavaScript sent to the browser. Client components handle user interactions such as clicks and form inputs. This separation improves page loading speed and scalability. Choosing the right type of component is important for performance. This feature is unique to modern versions of Next.js.",
    },
  ],
},

    },
  });

  
  //  3: JavaScript Essentials

  await prisma.course.create({
    data: {
      title: "JavaScript Essentials",
      level: "Beginner",
      featured: false,
      image:"/courses/javascript.png",
      modules: {
        create: [
          {
            title: "JavaScript Basics",
            videoUrl: "https://youtu.be/xwKbtUP87Dk",
            notes:
              "JavaScript is a programming language used for web development. It allows adding interactivity to web pages. JavaScript runs in the browser and on servers. Variables store data values. Functions allow code reuse. JavaScript is essential for frontend and backend development. It forms the foundation of modern web apps.",
          },
          
          {
            title: "Functions",
            videoUrl: "https://youtu.be/Bn56WahG_t0",
            notes:
              "Functions are reusable blocks of code. They help organize logic into manageable parts. Functions can accept parameters and return values. JavaScript supports arrow functions. Functions improve readability and maintainability. They reduce code duplication. Understanding functions is critical.",
          },
          {
            title: "Arrays and Objects",
            videoUrl: "https://youtu.be/-oVdqCaL3DQ",
            notes:
              "Arrays store multiple values in a single variable. Objects store key-value pairs. Both are fundamental data structures. Arrays are useful for lists of data. Objects represent real-world entities. JavaScript heavily relies on these structures. Mastering them improves coding skills.",
          },
          
        ],
      },
    },
  });

  // // 4: Next.js Fundamentals
  // await prisma.course.create({
  //   data: {
  //     title: "Next.js Fundamentals",
  //     level: "Intermediate",
  //     featured: true,
  //     image:"/courses/nextjs.png",
  //     modules: {
  //       create: [
  //         {
  //           title: "Introduction to Next.js",
  //           videoUrl: "",
  //           notes:
  //             "Next.js is a React framework used for building full-stack web applications. It provides features like routing and server-side rendering. Next.js improves performance and SEO. It simplifies backend logic with API routes. Developers can build scalable apps faster. It supports static and dynamic rendering. Next.js is widely used in production systems.",
  //         },
  //         {
  //           title: "File-Based Routing",
  //           videoUrl: "",
  //           notes:
  //             "Next.js uses file-based routing to create pages automatically. Each file inside the app directory represents a route. Dynamic routes allow rendering pages based on parameters. This system reduces boilerplate code. Routing becomes intuitive and organized. Nested routes are easy to manage. This approach simplifies navigation logic.",
  //         },
  //         {
  //           title: "Server and Client Components",
  //           videoUrl: "",
  //           notes:
  //             "Next.js introduces server and client components for better performance. Server components run on the server and reduce client-side JavaScript. Client components handle interactivity and user events. This separation improves loading speed. It also enhances scalability. Understanding when to use each is important. This concept is unique to modern Next.js.",
  //         },
  //         {
  //           title: "Data Fetching",
  //           videoUrl: "",
  //           notes:
  //             "Next.js provides multiple ways to fetch data. Data can be fetched on the server or client. Server-side fetching improves performance and SEO. Client-side fetching is useful for interactivity. Next.js supports async functions for data loading. Proper data fetching improves UX. This is a core feature of the framework.",
  //         },
  //         {
  //           title: "Deployment with Vercel",
  //           videoUrl: "",
  //           notes:
  //             "Vercel is the recommended platform for deploying Next.js apps. It offers seamless integration with GitHub. Deployment is fast and reliable. Environment variables are easy to manage. Vercel supports serverless functions. It scales automatically. Many production Next.js apps use Vercel.",
  //         },
  //       ],
  //     },
  //   },
  // });


  //5 : Node.js Basics
  await prisma.course.create({
  data: {
    title: "Node.js Basics",
    level: "Intermediate",
    featured: false,
    image:"/courses/nodejs.png",
    modules: {
      create: [
        {
          title: "Introduction to Node.js",
          videoUrl: "https://youtu.be/ohIAiuHMKMI?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
          notes:
            "Node.js allows JavaScript to run on servers. It is built on the V8 engine. Node.js enables backend development. It is fast and scalable. Many APIs are built with Node.js. It supports asynchronous programming. It is widely used in industry.",
        },
        {
          title: "Modules and Packages",
          videoUrl: "https://youtu.be/FSRo41TaHFU",
          notes:
            "Modules organize code into files. Node.js uses CommonJS modules. Packages extend functionality. npm manages dependencies. Modules improve maintainability. Reusing packages saves time. Dependency management is essential.",
        },
        {
          title: "File System",
          videoUrl: "https://youtu.be/YazJFb_i4A0?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo",
          notes:
            "The file system module handles file operations. It reads and writes files. File handling is common in backend apps. Node.js provides async file methods. Proper handling avoids blocking. File systems support many use cases. This is a core Node.js feature.",
        },
        
      ],
    },
  },
});


// 5: Databases & SQL
await prisma.course.create({
  data: {
    title: "Databases & SQL",
    level: "Intermediate",
    featured: false,
    image:"/courses/sql.png",
    modules: {
      create: [
        {
          title: "Introduction to Databases",
          videoUrl: "https://youtu.be/6Iu45VZGQDk",
          notes:
            "Databases store structured data persistently. They support data retrieval and updates. Databases are core to applications. They ensure data consistency. SQL databases are widely used. Understanding databases is essential. Almost all apps rely on them.",
        },
        {
          title: "Basic SQL Queries",
          videoUrl: "https://youtu.be/3s0lFtUrhSQ",
          notes:
            "SQL is used to query databases. SELECT retrieves data. INSERT adds records. UPDATE modifies data. DELETE removes records. SQL syntax is simple. Querying data is fundamental.",
        },
      
        {
          title: "Database Design",
          videoUrl: "https://youtu.be/7m6gXeMDaHc",
          notes:
            "Database design structures data efficiently. Normalization reduces duplication. Good design improves scalability. Poor design causes issues. Schema planning is important. Real systems require careful modeling. Design impacts performance and maintenance.",
        },
      ],
    },
  },
});

//6:Backend System Design
await prisma.course.create({
  data: {
    title: "Backend System Design",
    level: "Advanced",
    featured: false,
    image:"/courses/backendsystem.png",
    modules: {
      create: [
        {
          title: "Introduction to System Design",
          videoUrl: "https://youtu.be/FSR1s2b-l_I",
          notes:
            "System design focuses on building scalable applications. It involves architecture decisions. Designers consider performance and reliability. Large systems require careful planning. System design is common in interviews. Understanding basics is essential. It improves backend thinking.",
        },
        {
          title: "Scalability",
          videoUrl: "https://youtu.be/EWS_CIxttVw",
          notes:
            "Scalability is the ability to handle increased load. Systems must scale horizontally or vertically. Proper design avoids bottlenecks. Scalability improves user experience. It is critical for growing apps. Many systems fail due to poor scalability. Planning helps avoid issues.",
        },
       
        {
          title: "Load Balancing",
          videoUrl: "https://youtu.be/LQuuoHTyYz8",
          notes:
            "Load balancers distribute traffic evenly. They prevent server overload. Load balancing improves availability. It enables horizontal scaling. Many cloud platforms provide load balancers. They are critical for high traffic apps. This ensures system reliability.",
        },
      ],
    },
  },
});

await prisma.course.create({
  data: {
    title: "Git & GitHub Essentials",
    level: "Beginner",
    featured: false,
    image:"/courses/gitandgithub.png",
    modules: {
      create: [
        {
          title: "What is Git",
          videoUrl: "https://youtu.be/2ReR1YJrNOM",
          notes:
            "Git is a version control system. It tracks code changes. Git allows collaboration. Developers use Git daily. It helps manage code history. Git improves teamwork. It is essential for developers.",
        },
        {
          title: "Basic Git Commands",
          videoUrl: "https://youtu.be/rE2zRhZdjFU",
          notes:
            "Git commands manage repositories. Commands include add, commit, and push. They record changes. Understanding commands is important. Git CLI is widely used. Practice improves confidence. This forms Git fundamentals.",
        },
       
        {
          title: "GitHub Basics",
          videoUrl: "https://youtu.be/a9u2yZvsqHA",
          notes:
            "GitHub hosts Git repositories online. It enables collaboration. Developers share code using GitHub. Issues and pull requests manage work. GitHub is industry standard. Open-source lives on GitHub. It is widely used.",
        },
        
      ],
    },
  },
});


await prisma.course.create({
  data: {
    title: "API Development with REST",
    level: "Intermediate",
    featured: false,
    image:"/courses/rest.png",
    modules: {
      create: [
        {
          title: "What is an API",
          videoUrl: "https://youtu.be/XGa4onZP66Q",
          notes:
            "APIs allow systems to communicate. They expose data and functionality. APIs are everywhere. REST is a popular API style. APIs power frontend-backend communication. Understanding APIs is essential. Modern apps depend on APIs.",
        },
        {
          title: "HTTP Methods",
          videoUrl: "https://youtu.be/kREAjKyPbSI",
          notes:
            "HTTP methods define actions. GET retrieves data. POST creates data. PUT updates data. DELETE removes data. Proper usage improves API clarity. REST APIs rely on these methods.",
        },
        {
          title: "Status Codes",
          videoUrl: "https://youtu.be/fLGw2GK884s",
          notes:
            "Status codes indicate request results. 200 means success. 400 indicates client errors. 500 indicates server errors. Proper status codes improve debugging. APIs must return correct codes. This improves reliability.",
        },
       
      ],
    },
  },
});

await prisma.course.create({
  data: {
    title: "Python Programming",
    level: "Beginner",
    featured: true,
    image:"/courses/python.png",
    modules: {
      create: [
        {
          title: "Introduction to Python",
          videoUrl: "https://youtu.be/4EaYeZyzIB0",
          notes:
            "Python is a high-level programming language known for its simplicity. It is easy to read and write. Python is widely used in web development, data science, and automation. It has a large standard library. Python supports multiple programming paradigms. Beginners find Python easy to learn. It is one of the most popular languages today.",
        },
        {
          title: "Variables and Data Types",
          videoUrl: "https://youtu.be/LKFrQXaoSMQ",
          notes:
            "Variables store values in Python programs. Python supports different data types like integers and strings. Dynamic typing makes Python flexible. Data types define how data is stored. Understanding data types prevents errors. Python handles memory automatically. This makes development faster.",
        },
        
        {
          title: "Functions",
          videoUrl: "https://youtu.be/89cGQjB5R4M",
          notes:
            "Functions group reusable logic. Python functions are defined using def keyword. Functions accept parameters and return values. They reduce code duplication. Functions improve readability. Python supports default arguments. This helps build clean programs.",
        },
        
      ],
    },
  },
});


// await prisma.course.create({
//   data: {
//     title: "Advanced Python",
//     level: "Advanced",
//     featured: false,
//     image:"/courses/py.png",
//     modules: {
//       create: [
//         {
//           title: "Object-Oriented Programming",
//           videoUrl: "",
//           notes:
//             "Python supports object-oriented programming. Classes define blueprints for objects. Objects combine data and behavior. OOP improves code organization. Inheritance enables code reuse. Encapsulation improves security. OOP is used in large applications.",
//         },
//         {
//           title: "Exception Handling",
//           videoUrl: "",
//           notes:
//             "Exceptions handle runtime errors gracefully. Python uses try and except blocks. Proper handling prevents crashes. Exceptions improve reliability. Custom exceptions can be defined. Error handling is essential. This improves program robustness.",
//         },
//         {
//           title: "File Handling",
//           videoUrl: "",
//           notes:
//             "Python can read and write files easily. File handling is used in many applications. Files store persistent data. Python supports text and binary files. Proper closing of files is important. File operations must handle errors. This is commonly used in scripts.",
//         },
//         {
//           title: "Generators and Iterators",
//           videoUrl: "",
//           notes:
//             "Generators produce values lazily. They save memory compared to lists. Iterators allow sequential access. Python provides generator functions. Yield keyword is used. This improves performance. Generators are used in data processing.",
//         },
//         {
//           title: "Multithreading Basics",
//           videoUrl: "",
//           notes:
//             "Multithreading allows concurrent execution. Python provides threading module. Threads improve responsiveness. CPU-bound tasks have limitations. Proper synchronization is required. Multithreading is useful for I/O tasks. This concept is advanced.",
//         },
//       ],
//     },
//   },
// });


await prisma.course.create({
  data: {
    title: "Java Programming",
    level: "Beginner",
    featured: false,
    image:"/courses/java.png",
    modules: {
      create: [
        {
          title: "Introduction to Java",
          videoUrl: "https://youtu.be/t54pgbVy6t0",
          notes:
            "Java is a popular object-oriented language. It is platform independent. Java runs on the JVM. It is widely used in enterprise applications. Java has strong typing. It supports robust libraries. Many large systems use Java.",
        },
        {
          title: "Variables and Data Types",
          videoUrl: "https://youtu.be/D3DqJrlckbs",
          notes:
            "Java uses static typing. Variables must be declared with types. Primitive data types store simple values. Reference types store objects. Type safety reduces errors. Java enforces strict rules. This improves reliability.",
        },
       
        {
          title: "Methods",
          videoUrl: "https://youtu.be/KSS3MUbBWLk",
          notes:
            "Methods define reusable behavior. Java methods belong to classes. They accept parameters and return values. Methods improve code organization. Overloading allows multiple methods. Methods are fundamental. Every Java program uses them.",
        },
        
      ],
    },
  },
});


await prisma.course.create({
  data: {
    title: "Angular Fundamentals",
    level: "Intermediate",
    featured: true,
      image:"/courses/angular.png",
    modules: {
      create: [
        {
          title: "Introduction to Angular",
          videoUrl: "https://youtu.be/a6E5pzst2YE",
          notes:
            "Angular is a frontend framework by Google. It is used to build single-page applications. Angular uses TypeScript. It follows a component-based architecture. Angular is powerful and scalable. Many enterprise apps use Angular. It is widely adopted.",
        },
        {
          title: "Angular Architecture",
          videoUrl: "https://youtu.be/FzITHZTpdb0",
          notes:
            "Angular applications are built using modules. Components define UI logic. Services handle business logic. Dependency injection is core. This architecture improves maintainability. Angular enforces structure. This helps large teams.",
        },
       
        {
          title: "Routing",
          videoUrl: "https://youtu.be/r5DEBMuStPw",
          notes:
            "Angular routing enables navigation. Routes map URLs to components. Router outlet displays content. Routing supports lazy loading. This improves performance. Navigation is seamless. Routing is essential in SPAs.",
        },
       
      ],
    },
  },
});



await prisma.course.create({
  data: {
    title: "DevOps Fundamentals",
    level: "Intermediate",
    featured: true,
    image:"/courses/devops.png",
    modules: {
      create: [
        {
          title: "What is DevOps",
          videoUrl: "https://youtu.be/Xrgk023l4lI",
          notes:
            "DevOps is a set of practices combining development and operations. It improves collaboration between teams. DevOps aims for faster delivery. Automation is key. DevOps reduces deployment failures. It improves system reliability. Modern companies use DevOps.",
        },
        {
          title: "CI/CD Pipelines",
          videoUrl: "https://youtu.be/AlrImm1T8Wg",
          notes:
            "CI/CD automates building and deployment. Continuous integration tests code automatically. Continuous deployment releases code quickly. Pipelines reduce manual work. Automation improves consistency. CI/CD is essential in DevOps. Most teams rely on pipelines.",
        },
        {
          title: "Version Control in DevOps",
          videoUrl: "https://youtu.be/IeXhYROClZk",
          notes:
            "Version control tracks changes. Git is widely used. It enables collaboration. DevOps relies on version control. Branching strategies matter. Version control ensures traceability. This is a foundation of DevOps.",
        },
        
      ],
    },
  },
});


  console.log("✅ Database seeded with multiple courses and detailed notes");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
