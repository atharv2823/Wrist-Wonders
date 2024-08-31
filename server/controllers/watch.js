import Watch from "../model/Watch.js";


const postWatch = async (req, res) => {
    const { 
      brand, 
      price, 
      color, 
      image, 
      gender,
      review, 
      description } = req.body;
  
    
    const newWatch = new Watch({
      brand:brand, 
      price:price, 
      color:color, 
      image:image, 
      gender:gender, 
      review:review,
      description:description
    })

    const savedWatch = await newWatch.save()
  
    res.json({
      success: true,
      data: savedWatch,
      message: "Watch added successfully",
    });
  }


const getWatch =async (req, res) => { 
  
  const allWatch =await Watch.find().sort({updatedAt: -1})

    res.json({
      success: true,
      data: allWatch,
      message: "Watch added succesfully",
    });
  }


const getWatchId = async (req, res) => {
    const { id } = req.params;
  
    const watchWithId = await Watch.findOne({_id:id});
  
    res.json({
      success: watchWithId ? true : false,
      data: watchWithId || null,
      message: watchWithId ? "Watch Id found succesfully" : "Watch Id does not found",
    });
  }
  
  
const putWatchId = async (req, res) => {
    const { brand, price, color, image, gender,review, description } = req.body;
  
    const { id } = req.params;
  
   const updatedWatch =await Watch.updateOne({_id:id},{$set:{
    brand:brand, 
    price:price, 
    color:color, 
    image:image, 
    gender:gender,
    review:review, 
    description:description
   }})

   
  
    
      return res.json({
        success: true,
        data: updatedWatch,
        message: `${id} id found in shoe`,
      });
    }
  


const deleteWatchId = async (req, res) => {
    const { id } = req.params;
  
    const deleteone = await  Watch.deleteOne({_id:id})

    
      res.json({
        success: true,
        data: null,
        message: `${id} id deleted successfully`,
      });
    }
  


  export { postWatch, getWatch, getWatchId, putWatchId, deleteWatchId}