import Product from "../models/product.model.js";

// Get all menu items
export const getMenuItems = async () => {
  try {
    const result = await Product.find();
    return {
      success: true,
      menu: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//Detta har jag skrivit
//Lägg till ny produkt i menu
export const addNewProduct = async (newProduct) => {
  try {
    const result = await Product.create(newProduct);
    return {
      success: true,
      product: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//Uppdatera en produkt
export const addUpdateProduct = async (prodId, product) => {
  try {
    const result = await Product.findOneAndUpdate({ prodId }, product);
    return {
      success: true,
      product: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
