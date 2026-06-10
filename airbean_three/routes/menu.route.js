import { Router } from "express";
import { getMenuItems } from "../services/menu.service.js";
import {
  authenticateKey,
  authorizeAdmin,
} from "../middlewares/auth.middleware.js";
import {
  addNewProduct,
  addUpdateProduct,
  deleteProduct,
} from "../services/menu.service.js";

const router = Router();

// GET all menu items
router.get("/", authenticateKey, async (req, res, next) => {
  const result = await getMenuItems();
  if (result.success) {
    res.json({
      success: true,
      menu: result.menu,
    });
  } else {
    next({
      status: 404,
      message: result.message,
    });
  }
});

//detta har jag skrivit
// POST ** lägg till ny produkt i menu
//tar emot req, res och next från express
router.post("/", authenticateKey, authorizeAdmin, async (req, res, next) => {
  console.log("POST menu träffad");
  console.log(req.body);
  const newProduct = req.body;
  if (!newProduct) {
    next({
      status: 400,
      message: "Ingen produkt las till",
    });
  }

  const result = await addNewProduct({
    prodId: crypto.randomUUID().substring(0, 5),
    newProduct,
    ...newProduct,
    userId: global.user.userId,
    author: global.user.username,
  });
  console.log(result);

  if (result.success) {
    res.status(201).json({
      success: true,
      message: "Du la till en produkt",
    });
  } else {
    next({
      status: 404,
      message: "det gick fel",
    });
  }
});

//PUT ** Uppdatera en produkt i menu
router.put(
  "/:prodId",
  authenticateKey,
  authorizeAdmin,
  async (req, res, next) => {
    console.log("PUT menu träffad");

    const { prodId } = req.params;
    console.log("prodId:", prodId);
    const updateProduct = req.body;
    if (!updateProduct) {
      next({
        status: 400,
        message: "Ingen produkt uppdaterades",
      });
    }
    const result = await addUpdateProduct(prodId, {
      prodId,
      ...updateProduct,
      modifiedAt: new Date(),
      userId: global.user.userId,
      author: global.user.username,
    });

    if (result.product === null) {
      res.json({
        status: 400,
        success: false,
        message: "produkten finns inte",
      });
    } else if (result.success) {
      console.log(result);
      res.json({
        success: true,
        message: "Produkten är uppdaterad",
        updateProduct: result.updateProduct,
      });
    } else {
      next({
        status: 404,
        message: "Det gick inte att uppdatera en produkt",
        //result.message,
      });
    }
  },
);

//DELETE ** Ta bort en produkt i menu
router.delete(
  "/:prodId",
  authenticateKey,
  authorizeAdmin,
  async (req, res, next) => {
    const { prodId } = req.params;
    const result = await deleteProduct(prodId, { prodId });
    console.log(result);

    if (result.product === null) {
      res.json({
        status: 400,
        success: false,
        message: "produkten finns inte",
      });
    } else if (result.success) {
      res.json({
        success: true,
        message: "Du tog bort produkten",
        updateProduct: result.updateProduct,
      });
    } else {
      next({
        status: 404,
        message: "Du lyckades inte ta bort en produkt",
      });
    }
  },
);

export default router;
