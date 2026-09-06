import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { getSpecificBrand } from "@/services/brands.service";
import { getSpecificCategory } from "@/services/categories.service";
import { getAllProducts } from "@/services/products.service";
import { getSpecificSubCategory } from "@/services/subcategories.service";
import { BrandType } from "@/types/brand.types";
import { CategoryType } from "@/types/category.types";
import { ProductsResponseType } from "@/types/response.types";
import { SubcategoryType } from "@/types/subcategory.types";
import Image from "next/image";
import Link from "next/link";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{
    brand?: string;
    category?: string;
    subcategory?: string;
  }>;
}) {
  const params = await searchParams;
  const products: ProductsResponseType = await getAllProducts(params);

  let pageTitle = "All Products";
  let pageImage = null;
  let categoryItem: CategoryType | null = null;

  if (params?.brand) {
    const brand: { data: BrandType } = await getSpecificBrand(params.brand);
    pageTitle = brand.data?.name;
    pageImage = brand.data?.image;
  }

  if (params?.category) {
    const category: { data: CategoryType } = await getSpecificCategory(params.category);
    pageTitle = category.data?.name;
    pageImage = category.data?.image;
    categoryItem = category.data;
  }

  if (params?.subcategory) {
    const subcategory: { data: SubcategoryType } = await getSpecificSubCategory(params.subcategory);
    pageTitle = subcategory.data?.name;
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header Section */}
      <div className="bg-linear-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm font-medium text-white/70 mb-6 flex-wrap">
            <Link className="hover:text-white font-medium transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/40">/</span>
            {params.brand ? (
              <>
                <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
                <span className="text-white/40">/</span>
                <span className="text-white font-medium">{pageTitle}</span>
              </>
            ) : params.subcategory ? (
              <>
                <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
                <span className="text-white/40">/</span>
                <span className="text-white font-medium">{pageTitle}</span>
              </>
            ) : params?.category ? (
              <>
                <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
                <span className="text-white/40">/</span>
                <span className="text-white font-medium">{pageTitle}</span>
              </>
            ) : (
              <span className="text-white font-medium">{pageTitle}</span>
            )}
          </nav>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              {pageImage ? (
                <Image
                  alt={pageTitle}
                  src={pageImage}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.544 14.0933C32.1534 14.7847 33.2022 14.937 33.9932 14.4155C34.8545 13.8413 35.0889 12.6753 34.5147 11.814L31.7022 7.59521C31.5381 7.34912 31.3155 7.14404 31.0518 6.99756L19.3038 0.470215C18.1729 -0.156738 16.796 -0.156738 15.6592 0.470215L3.91705 6.9917C3.60064 7.16748 3.34869 7.42529 3.17877 7.7417L0.336971 13.0093C-0.401311 14.3804 0.114314 16.0854 1.48541 16.8237L3.419 17.8608V20.9839C3.419 22.3315 4.14556 23.5796 5.31744 24.2476L15.6299 30.0894C16.7784 30.7397 18.1788 30.7397 19.3272 30.0894L29.6397 24.2476C30.8174 23.5796 31.5381 22.3374 31.5381 20.9839V14.0991L31.544 14.0933ZM17.4815 13.519L8.68658 8.63232L17.4815 3.74561L26.2764 8.63232L17.4815 13.519ZM15.0499 16.4605L13.8018 19.1675L4.08697 13.9644L5.57525 11.1987L15.0499 16.4605Z" fill="white"/>
                </svg>
              )}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{pageTitle}</h1>
              <p className="text-white/80 font-medium mt-1">
                {params?.brand ? `Shop ${pageTitle} products` : params?.category ? `Browse products in ${pageTitle}` : "Explore our complete collection"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="container mx-auto px-4 py-8">
        {(params?.brand || params?.category || params?.subcategory) && (
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-gray-600">Active Filters:</span>
            <Link className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium" href="/products">
              {pageTitle} ✕
            </Link>
            <Link className="text-sm font-medium text-gray-500 underline" href="/products">Clear all</Link>
          </div>
        )}

        <div className="mb-6 text-sm font-medium text-gray-500">
          Showing {products.data.length} products
        </div>

        {products.data.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Products Found</h3>
            <Link className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold" href="/products">
              View All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {products.data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}