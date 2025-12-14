import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  level: string;
  featured: boolean;
  image: string;
  showFeaturedBadge?: boolean;
  variant?: "default" | "featured";
};


export default function CourseCard({
  id,
  title,
  level,
  featured,
  image,
  showFeaturedBadge = true,
  variant = "default",
}: CourseCardProps) {

  return (
 <Link
  href={`/courses/${id}`}
  className={`
  flex-shrink-0
  bg-[#162235]
  rounded-2xl
  overflow-hidden

  border border-transparent
  shadow-md

  transform-gpu
  transition-all duration-300 ease-out

  hover:-translate-y-1
  hover:scale-[1.02]
  hover:shadow-2xl
  hover:border-purple-500

  cursor-pointer

 ${variant === "featured"
  ? "min-w-[260px]"
  : "w-full sm:min-w-[280px]"}

`}


>



      {/* Image placeholder */}
      <div
  className={`relative bg-gradient-to-br from-purple-500 to-blue-500
    ${variant === "featured"
  ? "h-40"
  : "h-40 sm:h-48"}

  `}
>

        {featured && showFeaturedBadge && (
          <span className="absolute top-3 right-3 bg-yellow-400 text-black text-sm px-3 py-1 rounded-full font-medium">
             Featured
          </span>
        )}

        <img
          src={image || "/courses/default.png"}
          alt={title}
          className="w-full h-full object-cover"
        />

      </div>
<div className={variant === "featured" ? "p-2" : "p-2 sm:p-3"}>

  <h3
    className={`font-semibold text-white
      ${variant === "featured" ? "text-sm mb-1" : "text-lg mb-2"}
    `}
  >

          {title}
        </h3>

        <span
  className={`inline-block rounded-full bg-purple-800 text-gray-300
    ${variant === "featured"
      ? "text-xs px-2 py-0.5"
      : "text-sm px-3 py-1"}
  `}
>
  {level}
</span>

      </div>
    </Link>
  );
}
