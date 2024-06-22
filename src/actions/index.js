"use server";

//get all products

export async function fetchAllProducts() {
  try {
  } catch (error) {
    console.log(e, "Getting products error!");
    return {
      success: false,
      message: "Some error occured! Please try again",
    };
  }
}
