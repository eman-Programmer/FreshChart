export async function getSubCategories() {
  try {
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/subcategories");

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function getSpecificSubCategory(subcategoryId: string) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/subcategories/${subcategoryId}`,
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