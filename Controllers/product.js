import { Product } from "../Models/Product.js"




export const addProduct = async (req, res) => {

    try {
        let product = await Product.create(req.body);
        res.json({ message: "Product addes sucessfully", product, sucess: true })
    } catch (error) {
        res.json(error.message)
    }

}



export const getAllproduct = async (req, res) => {
    try {
        let product = await Product.find();
        if (!product) return res.json({ message: "No product find", sucess: true })

        res.json({ message: "Fetch All product", product, sucess: true })
    } catch (error) {
        res.json(error.message);
    }

};



export const getProductById = async (req, res) => {
    const id = req.params.id
    try {
        let product = await Product.findById(id);
        if (!product) return res.json({ message: "invalid id", sucess: true })

        res.json({ message: "Fetch Specific Product", product, sucess: true })
    } catch (error) {
        res.json(error.message);
    }
}



export const updateProductById = async (req, res) => {
    const id = req.params.id
    try {
        let product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) return res.json({ message: "invalid id", sucess: true })

        res.json({ message: " Product updated successfully", product, sucess: true })
    } catch (error) {
        res.json(error.message);
    }

}



export const deltedproductby= async (req,res) =>{
     const id = req.params.id
    try {
        let product = await Product.findByIdAndDelete(id);
        if (!product) return res.json({ message: "invalid id", sucess: true })

        res.json({ message: " Product deletd successfully", sucess: true })
    } catch (error) {
        res.json(error.message);
    }

}

    
