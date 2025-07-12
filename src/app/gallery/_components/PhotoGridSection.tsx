"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NotebookBackgroundWrapper from "@/components/NotebookBackgroundWrapper";

interface GalleryItem {
  image: string;
  title: string;
}

// Helper to extract Google Drive file ID and convert to direct image link
function getDirectImageUrl(driveUrl: string): string {
  const match = driveUrl.match(/\/d\/([\w-]+)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return driveUrl;
}

function parseCSV(csv: string): GalleryItem[] {
  // Split by newlines and filter out empty lines
  const lines = csv.trim().split("\n").filter(Boolean);
  // Find the header row (should contain 'Image' and 'Title')
  const headerIndex = lines.findIndex(
    (line) =>
      line.toLowerCase().includes("image") &&
      line.toLowerCase().includes("title")
  );
  if (headerIndex === -1) return [];
  const dataLines = lines.slice(headerIndex + 1);
  const items: GalleryItem[] = [];
  for (const line of dataLines) {
    // Split by comma, but handle quoted commas
    const columns =
      line
        .match(/(?:"([^"]*)")|([^,]+)/g)
        ?.map((col) => col.replace(/^"|"$/g, "")) || [];
    // Find the first column that looks like a Google Drive link
    const imageCol = columns.find((col) => col.includes("drive.google.com"));
    // Find the last non-empty column as the title
    const titleCol = columns
      .reverse()
      .find((col) => col.trim() && !col.includes("drive.google.com"));
    if (imageCol && titleCol) {
      items.push({
        image: getDirectImageUrl(imageCol),
        title: titleCol.trim(),
      });
    }
  }
  return items;
}

export default function PhotoGridSection() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQ6bM77HbogZXSEgGrEAdV-C4NhDGaKglzz57QAlxpZOZ5ki0JPD8N1fnuS3ia3wRSayFpW-hod-RT/pub?gid=0&single=true&output=csv"
    )
      .then((res) => res.text())
      .then((csv) => setGalleryItems(parseCSV(csv)));
  }, []);

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
              {galleryItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative w-full h-[250px] bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
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
