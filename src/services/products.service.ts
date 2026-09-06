export async function getAllProducts(
  filters?: {
    brand?: string;
    category?: string;
    subcategory?: string;
  },
  params?: Record<string, string | number | boolean>,
) {
  try {
    const param = new URLSearchParams();
    if (filters?.brand) {
      param.append("brand", filters.brand);
    }

    if (filters?.category) {
      param.append("category", filters.category);
    }

    if (filters?.subcategory) {
      param.append("subcategory", filters.subcategory);
    }

    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?${param ? param.toString() : params}`,
      {},
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}
export async function getProductDetails(productId: string) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${productId}`,
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}