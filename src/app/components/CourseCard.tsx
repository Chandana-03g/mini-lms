import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  level: string;
  featured: boolean;
  image: string;
  showFeaturedBadge?: boolean;
};

export default function CourseCard({
  id,
  title,
  level,
  featured,
  image,
  showFeaturedBadge = true,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="
        flex-shrink-0
        bg-card
        rounded-2xl
        overflow-hidden
        border
        shadow-md
        transform-gpu
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:scale-[1.02]
        hover:shadow-2xl
        hover:border-primary
        cursor-pointer
        w-full sm:min-w-[280px]
      "
    >
      {/* Image placeholder */}
      <div className="relative bg-secondary h-40 sm:h-48">
        {featured && showFeaturedBadge && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full font-medium">
            Featured
          </span>
        )}
        <img
          src={image || "/courses/default.png"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 sm:p-3">
        <h3 className="font-semibold text-card-foreground text-lg mb-2">
          {title}
        </h3>
        <span className="inline-block rounded-full bg-secondary text-secondary-foreground text-sm px-3 py-1">
          {level}
        </span>
      </div>
    </Link>
  );
}
