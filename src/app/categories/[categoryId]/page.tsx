import SubcategoryCard from "@/components/Subcategories/SubcategoryCard/SubcategoryCard";
import { getSpecificCategory, getSubcategoriesOnCategory } from "@/services/categories.service";
import { CategoryType } from "@/types/category.types";
import { SubcategoryResponseType } from "@/types/response.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryDetailsProps {
  params: Promise<{ categoryId: string }>;
}

export default async function CategoryDetails({ params }: CategoryDetailsProps) {
  const { categoryId } = await params;
  const category: { data: CategoryType } = await getSpecificCategory(categoryId);
  const subCategories: SubcategoryResponseType = await getSubcategoriesOnCategory(categoryId);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm font-medium text-white/70 mb-6">
            <Link className="hover:text-white transition-colors" href="/">Home</Link>
            <span className="text-white/40">/</span>
            <Link className="hover:text-white transition-colors" href="/categories">Categories</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">{category.data?.name}</span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden">
              {category.data?.image && (
                <Image
                  alt={category.data?.name || "Category Image"}
                  className="w-12 h-12 object-contain"
                  src={category.data?.image}
                  width={48}
                  height={48}
                  priority
                />
              )}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{category.data?.name}</h1>
              <p className="text-white/80 font-medium mt-1">Choose a subcategory to browse products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <Link className="inline-flex items-center gap-2 text-gray-600 font-medium hover:text-green-600 transition-colors mb-6" href="/categories">
          <span>&larr; Back to Categories</span>
        </Link>

        {subCategories.data?.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Subcategories Found</h3>
            <p className="text-gray-500 font-medium mb-6">This category doesn&apos;t have any subcategories yet.</p>
            <Link className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors" href={`/products?category=${category.data?._id}`}>
              View All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {subCategories?.data?.map((subCategory) => (
              <SubcategoryCard key={subCategory._id} subCategory={subCategory} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}