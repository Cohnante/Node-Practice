import Product from '../models/products.model'
    
export const createProduct = async (req,res)=>{

    const newProduct = new Product ({
        _id: req.body._id,
        name: req.body.name,
        Category: req.body.Category,
        Price:req.body.Price,
        imgURL: req.body.imgURL
    })
    
    const productSave=await newProduct.save()

    res.status(201).send(productSave)
}

export const getProduct =async(req,res)=>{
     const products =await Product.find()
     res.status(200).send(products)
}

export const getProductByID =async (req,res)=>{
    const ProductAwait=await Product.findById(req.params._id)
    res.status(201).send(ProductAwait)
}

export const updateProductByID =(req,res)=>{

}

export const deleteProductByID =(req,res)=>{

}