import Image from "next/image";
import NotebookBackgroundWrapper from "@/components/NotebookBackgroundWrapper";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  alt: string;
}

// Using existing project images as placeholders
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Newly renovated classrooms",
    image: "/images/smile-boy.png",
    alt: "Happy student in classroom",
  },
  {
    id: 2,
    title: "Newly renovated classrooms",
    image: "/images/smile-girl.png",
    alt: "Smiling girl student",
  },
  {
    id: 3,
    title: "Newly renovated classrooms",
    image: "/images/partnership/hero-left.png",
    alt: "Students in classroom",
  },
  {
    id: 4,
    title: "Newly renovated classrooms",
    image: "/images/partnership/hero-center.png",
    alt: "Children at school window",
  },
  {
    id: 5,
    title: "Newly renovated classrooms",
    image: "/images/partnership/hero-right.png",
    alt: "Students learning in classroom",
  },
  {
    id: 6,
    title: "Newly renovated classrooms",
    image: "/images/about/hero-desktop.png",
    alt: "Educational activities",
  },
];

export default function PhotoGridSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <NotebookBackgroundWrapper
          bgMobile="bg-[url('/patterns/notebook-green-mobile.png')]"
          bgDesktop="bg-[url('/patterns/notebook-green.png')]"
        >
          <div className="py-16 px-4 lg:px-8">
            {/* Photo Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative w-full h-[250px] bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Caption */}
                  <div className="p-4">
                    <h3 className="text-lg font-medium font-display text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </NotebookBackgroundWrapper>
      </div>
    </section>
  );
}
