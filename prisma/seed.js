import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data (DEV only)
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
            videoUrl: "",
            notes:
              "React is a popular JavaScript library used to build user interfaces. It focuses on creating reusable UI components. React makes it easier to manage complex UIs by breaking them into smaller pieces. It uses a virtual DOM to efficiently update only the required parts of the page. React applications are fast and scalable. Many large companies use React in production. Learning React is essential for modern frontend development.",
          },
          {
            title: "JSX Fundamentals",
            videoUrl: "",
            notes:
              "JSX is a syntax extension that allows writing HTML-like code inside JavaScript. It improves code readability and structure. JSX is compiled into JavaScript before execution. Developers can embed expressions inside JSX using curly braces. JSX helps define UI structure clearly. It is not mandatory but highly recommended. Most React projects rely heavily on JSX.",
          },
          {
            title: "Components and Props",
            videoUrl: "",
            notes:
              "Components are independent and reusable pieces of UI. Each component handles its own logic and rendering. Props allow data to be passed from parent components to child components. They help make components dynamic and flexible. Props are read-only and should not be modified. Proper use of components improves maintainability. This concept is central to React architecture.",
          },
          {
            title: "State and Events",
            videoUrl: "",
            notes:
              "State is used to store data that changes during the lifecycle of a component. React provides hooks like useState to manage state. Events allow users to interact with the application. Examples include clicks, input changes, and form submissions. Updating state causes the UI to re-render. Managing state correctly avoids bugs. Events connect user actions to logic.",
          },
          {
            title: "Conditional Rendering",
            videoUrl: "",
            notes:
              "Conditional rendering allows components to display content based on conditions. It is useful for showing loading states or login-based UI. React supports conditional rendering using if statements and operators. This keeps the UI dynamic and responsive. It avoids unnecessary rendering. Proper conditional logic improves user experience. This feature is used in almost every React app.",
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
            videoUrl: "",
            notes:
              "Next.js is a React framework used for building full-stack web applications. It provides features like routing and server-side rendering. Next.js improves performance and SEO. It simplifies backend logic with API routes. Developers can build scalable apps faster. It supports static and dynamic rendering. Next.js is widely used in production systems.",
          },
          {
            title: "File-Based Routing",
            videoUrl: "",
            notes:
              "Next.js uses file-based routing to create pages automatically. Each file inside the app directory represents a route. Dynamic routes allow rendering pages based on parameters. This system reduces boilerplate code. Routing becomes intuitive and organized. Nested routes are easy to manage. This approach simplifies navigation logic.",
          },
          {
            title: "Server and Client Components",
            videoUrl: "",
            notes:
              "Next.js introduces server and client components for better performance. Server components run on the server and reduce client-side JavaScript. Client components handle interactivity and user events. This separation improves loading speed. It also enhances scalability. Understanding when to use each is important. This concept is unique to modern Next.js.",
          },
          {
            title: "Data Fetching",
            videoUrl: "",
            notes:
              "Next.js provides multiple ways to fetch data. Data can be fetched on the server or client. Server-side fetching improves performance and SEO. Client-side fetching is useful for interactivity. Next.js supports async functions for data loading. Proper data fetching improves UX. This is a core feature of the framework.",
          },
          {
            title: "Deployment with Vercel",
            videoUrl: "",
            notes:
              "Vercel is the recommended platform for deploying Next.js apps. It offers seamless integration with GitHub. Deployment is fast and reliable. Environment variables are easy to manage. Vercel supports serverless functions. It scales automatically. Many production Next.js apps use Vercel.",
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
            videoUrl: "",
            notes:
              "JavaScript is a programming language used for web development. It allows adding interactivity to web pages. JavaScript runs in the browser and on servers. Variables store data values. Functions allow code reuse. JavaScript is essential for frontend and backend development. It forms the foundation of modern web apps.",
          },
          {
            title: "Control Structures",
            videoUrl: "",
            notes:
              "Control structures manage the flow of a program. Examples include if-else statements and loops. They allow executing code conditionally. Loops help repeat tasks efficiently. Proper use improves logic clarity. Control flow is a basic programming concept. Every JavaScript program uses it.",
          },
          {
            title: "Functions",
            videoUrl: "",
            notes:
              "Functions are reusable blocks of code. They help organize logic into manageable parts. Functions can accept parameters and return values. JavaScript supports arrow functions. Functions improve readability and maintainability. They reduce code duplication. Understanding functions is critical.",
          },
          {
            title: "Arrays and Objects",
            videoUrl: "",
            notes:
              "Arrays store multiple values in a single variable. Objects store key-value pairs. Both are fundamental data structures. Arrays are useful for lists of data. Objects represent real-world entities. JavaScript heavily relies on these structures. Mastering them improves coding skills.",
          },
          {
            title: "Basic DOM Manipulation",
            videoUrl: "",
            notes:
              "DOM represents the structure of a web page. JavaScript can modify the DOM dynamically. This allows updating content without reloading. Event listeners handle user interactions. DOM manipulation enables interactive applications. It is widely used in frontend development. This concept bridges HTML and JavaScript.",
          },
        ],
      },
    },
  });

  // 4: Next.js Fundamentals
  await prisma.course.create({
    data: {
      title: "Next.js Fundamentals",
      level: "Intermediate",
      featured: true,
      image:"/courses/nextjs.png",
      modules: {
        create: [
          {
            title: "Introduction to Next.js",
            videoUrl: "",
            notes:
              "Next.js is a React framework used for building full-stack web applications. It provides features like routing and server-side rendering. Next.js improves performance and SEO. It simplifies backend logic with API routes. Developers can build scalable apps faster. It supports static and dynamic rendering. Next.js is widely used in production systems.",
          },
          {
            title: "File-Based Routing",
            videoUrl: "",
            notes:
              "Next.js uses file-based routing to create pages automatically. Each file inside the app directory represents a route. Dynamic routes allow rendering pages based on parameters. This system reduces boilerplate code. Routing becomes intuitive and organized. Nested routes are easy to manage. This approach simplifies navigation logic.",
          },
          {
            title: "Server and Client Components",
            videoUrl: "",
            notes:
              "Next.js introduces server and client components for better performance. Server components run on the server and reduce client-side JavaScript. Client components handle interactivity and user events. This separation improves loading speed. It also enhances scalability. Understanding when to use each is important. This concept is unique to modern Next.js.",
          },
          {
            title: "Data Fetching",
            videoUrl: "",
            notes:
              "Next.js provides multiple ways to fetch data. Data can be fetched on the server or client. Server-side fetching improves performance and SEO. Client-side fetching is useful for interactivity. Next.js supports async functions for data loading. Proper data fetching improves UX. This is a core feature of the framework.",
          },
          {
            title: "Deployment with Vercel",
            videoUrl: "",
            notes:
              "Vercel is the recommended platform for deploying Next.js apps. It offers seamless integration with GitHub. Deployment is fast and reliable. Environment variables are easy to manage. Vercel supports serverless functions. It scales automatically. Many production Next.js apps use Vercel.",
          },
        ],
      },
    },
  });


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
          videoUrl: "",
          notes:
            "Node.js allows JavaScript to run on servers. It is built on the V8 engine. Node.js enables backend development. It is fast and scalable. Many APIs are built with Node.js. It supports asynchronous programming. It is widely used in industry.",
        },
        {
          title: "Modules and Packages",
          videoUrl: "",
          notes:
            "Modules organize code into files. Node.js uses CommonJS modules. Packages extend functionality. npm manages dependencies. Modules improve maintainability. Reusing packages saves time. Dependency management is essential.",
        },
        {
          title: "File System",
          videoUrl: "",
          notes:
            "The file system module handles file operations. It reads and writes files. File handling is common in backend apps. Node.js provides async file methods. Proper handling avoids blocking. File systems support many use cases. This is a core Node.js feature.",
        },
        {
          title: "Express Basics",
          videoUrl: "",
          notes:
            "Express is a web framework for Node.js. It simplifies server creation. Express handles routes and middleware. It is lightweight and flexible. Most Node apps use Express. It speeds up backend development. It is production-ready.",
        },
        {
          title: "REST APIs",
          videoUrl: "",
          notes:
            "REST APIs enable client-server communication. They use HTTP methods like GET and POST. APIs exchange JSON data. REST is widely adopted. Designing good APIs is important. Node.js is ideal for APIs. This skill is highly valuable.",
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
          videoUrl: "",
          notes:
            "Databases store structured data persistently. They support data retrieval and updates. Databases are core to applications. They ensure data consistency. SQL databases are widely used. Understanding databases is essential. Almost all apps rely on them.",
        },
        {
          title: "Basic SQL Queries",
          videoUrl: "",
          notes:
            "SQL is used to query databases. SELECT retrieves data. INSERT adds records. UPDATE modifies data. DELETE removes records. SQL syntax is simple. Querying data is fundamental.",
        },
        {
          title: "Joins",
          videoUrl: "",
          notes:
            "Joins combine data from multiple tables. They enable relational queries. INNER JOIN is commonly used. Joins reduce redundancy. Understanding joins improves data modeling. They are powerful but must be used carefully. Joins are essential in SQL.",
        },
        {
          title: "Indexes",
          videoUrl: "",
          notes:
            "Indexes improve query performance. They speed up data retrieval. Indexes consume storage. Over-indexing can hurt performance. Choosing the right indexes matters. They are critical for large datasets. Performance tuning relies on them.",
        },
        {
          title: "Database Design",
          videoUrl: "",
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
          videoUrl: "",
          notes:
            "System design focuses on building scalable applications. It involves architecture decisions. Designers consider performance and reliability. Large systems require careful planning. System design is common in interviews. Understanding basics is essential. It improves backend thinking.",
        },
        {
          title: "Scalability",
          videoUrl: "",
          notes:
            "Scalability is the ability to handle increased load. Systems must scale horizontally or vertically. Proper design avoids bottlenecks. Scalability improves user experience. It is critical for growing apps. Many systems fail due to poor scalability. Planning helps avoid issues.",
        },
        {
          title: "Databases at Scale",
          videoUrl: "",
          notes:
            "Large systems handle massive data. Databases must scale efficiently. Sharding distributes data. Replication improves reliability. Indexing improves performance. Database choices affect scalability. This is crucial for real-world apps.",
        },
        {
          title: "Caching",
          videoUrl: "",
          notes:
            "Caching improves performance by storing frequent data. It reduces database load. Redis is commonly used for caching. Caching speeds up responses. Improper caching causes bugs. Cache strategies must be planned. This is used in production systems.",
        },
        {
          title: "Load Balancing",
          videoUrl: "",
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
          videoUrl: "",
          notes:
            "Git is a version control system. It tracks code changes. Git allows collaboration. Developers use Git daily. It helps manage code history. Git improves teamwork. It is essential for developers.",
        },
        {
          title: "Basic Git Commands",
          videoUrl: "",
          notes:
            "Git commands manage repositories. Commands include add, commit, and push. They record changes. Understanding commands is important. Git CLI is widely used. Practice improves confidence. This forms Git fundamentals.",
        },
        {
          title: "Branches",
          videoUrl: "",
          notes:
            "Branches allow parallel development. Developers work independently. Branches prevent conflicts. Merging combines changes. Branching improves workflow. Git branching is powerful. It is used in all teams.",
        },
        {
          title: "GitHub Basics",
          videoUrl: "",
          notes:
            "GitHub hosts Git repositories online. It enables collaboration. Developers share code using GitHub. Issues and pull requests manage work. GitHub is industry standard. Open-source lives on GitHub. It is widely used.",
        },
        {
          title: "Collaboration Workflow",
          videoUrl: "",
          notes:
            "Collaboration workflows define how teams work. Pull requests enable review. Code reviews improve quality. Proper workflow avoids conflicts. Teams rely on structured processes. GitHub supports many workflows. This improves productivity.",
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
          videoUrl: "",
          notes:
            "APIs allow systems to communicate. They expose data and functionality. APIs are everywhere. REST is a popular API style. APIs power frontend-backend communication. Understanding APIs is essential. Modern apps depend on APIs.",
        },
        {
          title: "HTTP Methods",
          videoUrl: "",
          notes:
            "HTTP methods define actions. GET retrieves data. POST creates data. PUT updates data. DELETE removes data. Proper usage improves API clarity. REST APIs rely on these methods.",
        },
        {
          title: "Status Codes",
          videoUrl: "",
          notes:
            "Status codes indicate request results. 200 means success. 400 indicates client errors. 500 indicates server errors. Proper status codes improve debugging. APIs must return correct codes. This improves reliability.",
        },
        {
          title: "Request & Response Structure",
          videoUrl: "",
          notes:
            "APIs exchange data using JSON. Requests contain headers and body. Responses include data and status. Clear structure improves usability. Consistent responses help clients. APIs must be predictable. This is best practice.",
        },
        {
          title: "API Security",
          videoUrl: "",
          notes:
            "API security protects endpoints. Authentication restricts access. Rate limiting prevents abuse. Input validation avoids attacks. Secure APIs protect data. Security is critical for APIs. This ensures trust.",
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
          videoUrl: "",
          notes:
            "Python is a high-level programming language known for its simplicity. It is easy to read and write. Python is widely used in web development, data science, and automation. It has a large standard library. Python supports multiple programming paradigms. Beginners find Python easy to learn. It is one of the most popular languages today.",
        },
        {
          title: "Variables and Data Types",
          videoUrl: "",
          notes:
            "Variables store values in Python programs. Python supports different data types like integers and strings. Dynamic typing makes Python flexible. Data types define how data is stored. Understanding data types prevents errors. Python handles memory automatically. This makes development faster.",
        },
        {
          title: "Control Flow",
          videoUrl: "",
          notes:
            "Control flow determines how code executes. Python uses if-else statements for conditions. Loops repeat actions efficiently. Python syntax is clean and readable. Proper control flow improves logic. This is essential for problem solving. Every Python program uses it.",
        },
        {
          title: "Functions",
          videoUrl: "",
          notes:
            "Functions group reusable logic. Python functions are defined using def keyword. Functions accept parameters and return values. They reduce code duplication. Functions improve readability. Python supports default arguments. This helps build clean programs.",
        },
        {
          title: "Basic Modules",
          videoUrl: "",
          notes:
            "Modules organize Python code into files. Python provides many built-in modules. Importing modules extends functionality. Modules promote code reuse. They simplify large programs. Understanding modules is important. This enables scalable development.",
        },
      ],
    },
  },
});


await prisma.course.create({
  data: {
    title: "Advanced Python",
    level: "Advanced",
    featured: false,
    image:"/courses/py.png",
    modules: {
      create: [
        {
          title: "Object-Oriented Programming",
          videoUrl: "",
          notes:
            "Python supports object-oriented programming. Classes define blueprints for objects. Objects combine data and behavior. OOP improves code organization. Inheritance enables code reuse. Encapsulation improves security. OOP is used in large applications.",
        },
        {
          title: "Exception Handling",
          videoUrl: "",
          notes:
            "Exceptions handle runtime errors gracefully. Python uses try and except blocks. Proper handling prevents crashes. Exceptions improve reliability. Custom exceptions can be defined. Error handling is essential. This improves program robustness.",
        },
        {
          title: "File Handling",
          videoUrl: "",
          notes:
            "Python can read and write files easily. File handling is used in many applications. Files store persistent data. Python supports text and binary files. Proper closing of files is important. File operations must handle errors. This is commonly used in scripts.",
        },
        {
          title: "Generators and Iterators",
          videoUrl: "",
          notes:
            "Generators produce values lazily. They save memory compared to lists. Iterators allow sequential access. Python provides generator functions. Yield keyword is used. This improves performance. Generators are used in data processing.",
        },
        {
          title: "Multithreading Basics",
          videoUrl: "",
          notes:
            "Multithreading allows concurrent execution. Python provides threading module. Threads improve responsiveness. CPU-bound tasks have limitations. Proper synchronization is required. Multithreading is useful for I/O tasks. This concept is advanced.",
        },
      ],
    },
  },
});


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
          videoUrl: "",
          notes:
            "Java is a popular object-oriented language. It is platform independent. Java runs on the JVM. It is widely used in enterprise applications. Java has strong typing. It supports robust libraries. Many large systems use Java.",
        },
        {
          title: "Variables and Data Types",
          videoUrl: "",
          notes:
            "Java uses static typing. Variables must be declared with types. Primitive data types store simple values. Reference types store objects. Type safety reduces errors. Java enforces strict rules. This improves reliability.",
        },
        {
          title: "Control Statements",
          videoUrl: "",
          notes:
            "Control statements manage program flow. Java supports if-else and loops. Switch statements simplify conditions. Control flow is essential. Proper logic improves code quality. Java syntax is structured. This is a core concept.",
        },
        {
          title: "Methods",
          videoUrl: "",
          notes:
            "Methods define reusable behavior. Java methods belong to classes. They accept parameters and return values. Methods improve code organization. Overloading allows multiple methods. Methods are fundamental. Every Java program uses them.",
        },
        {
          title: "Basic Input Output",
          videoUrl: "",
          notes:
            "Java supports input and output operations. Scanner reads user input. Output is printed using System.out. File I/O is also supported. Handling input safely is important. I/O is used frequently. This connects programs with users.",
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
          videoUrl: "",
          notes:
            "Angular is a frontend framework by Google. It is used to build single-page applications. Angular uses TypeScript. It follows a component-based architecture. Angular is powerful and scalable. Many enterprise apps use Angular. It is widely adopted.",
        },
        {
          title: "Angular Architecture",
          videoUrl: "",
          notes:
            "Angular applications are built using modules. Components define UI logic. Services handle business logic. Dependency injection is core. This architecture improves maintainability. Angular enforces structure. This helps large teams.",
        },
        {
          title: "Components and Templates",
          videoUrl: "",
          notes:
            "Components control views in Angular. Templates define HTML structure. Data binding connects logic to UI. Angular supports one-way and two-way binding. Components are reusable. This is core Angular functionality. Every Angular app uses components.",
        },
        {
          title: "Routing",
          videoUrl: "",
          notes:
            "Angular routing enables navigation. Routes map URLs to components. Router outlet displays content. Routing supports lazy loading. This improves performance. Navigation is seamless. Routing is essential in SPAs.",
        },
        {
          title: "Services and Dependency Injection",
          videoUrl: "",
          notes:
            "Services provide shared logic. Dependency injection supplies dependencies. Angular manages service lifecycles. This improves testability. Services reduce duplication. DI is powerful. This is a key Angular feature.",
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
          videoUrl: "",
          notes:
            "DevOps is a set of practices combining development and operations. It improves collaboration between teams. DevOps aims for faster delivery. Automation is key. DevOps reduces deployment failures. It improves system reliability. Modern companies use DevOps.",
        },
        {
          title: "CI/CD Pipelines",
          videoUrl: "",
          notes:
            "CI/CD automates building and deployment. Continuous integration tests code automatically. Continuous deployment releases code quickly. Pipelines reduce manual work. Automation improves consistency. CI/CD is essential in DevOps. Most teams rely on pipelines.",
        },
        {
          title: "Version Control in DevOps",
          videoUrl: "",
          notes:
            "Version control tracks changes. Git is widely used. It enables collaboration. DevOps relies on version control. Branching strategies matter. Version control ensures traceability. This is a foundation of DevOps.",
        },
        {
          title: "Containers and Docker",
          videoUrl: "",
          notes:
            "Containers package applications with dependencies. Docker is a popular container tool. Containers ensure consistency. They simplify deployment. Docker images are portable. Containers improve scalability. DevOps teams use containers extensively.",
        },
        {
          title: "Monitoring and Logging",
          videoUrl: "",
          notes:
            "Monitoring tracks system health. Logging records application events. Together they help detect issues. Alerts notify teams of failures. Observability improves reliability. Monitoring is critical in production. DevOps emphasizes observability.",
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
