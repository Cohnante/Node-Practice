import Product from '../models/products.model'

export const createProduct = async (req,res)=>{

        const NewProduct = new Product ({
            _id: req.body._id,
            name: req.body.name,
            Category: req.body.Category,
            Price:req.body.Price,
            imgURL: req.body.imgURL
        })

        const productSave= await NewProduct.save()
    
        res.status(201).send(productSave)
}

export const getProduct =async(req,res)=>{
     const products =await Product.find()
     res.status(200).send(products)
}

export const getProductByID =async (req,res)=>{
    const ProductAwait=await Product.findById(req.params._id)
    res.status(200).send(ProductAwait)
}

export const updateProductByID = async (req,res)=>{
    const UpdateProduct = await Product.findOneAndUpdate(req.params._id,req.body,{
        new:true
    })

    res.status(200).json(UpdateProduct)
}

export const deleteProductByID =async (req,res)=>{

    await Product.findByIdAndDelete(req.params._id)
    res.status(200).json('Delete Success')
}