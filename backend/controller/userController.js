import User from "../model/userSchema.js";


export const getUsers= async(request,response)=>{
    try{
        let user= await User.find();
        response.json(user);
   }catch(error){
       response.json({message:error.message})
   }
}

export const addUser=async(request,response)=>{
    const user=request.body;
    const newUser=new User(user);

    try{
         await newUser.save();
         response.json(newUser);
    }catch(error){
        response.json({message:error.message})
    }
} 

// Get a user by id
export const getUserById = async (request, response) => {
    try{
        const user = await User.findOne({_id:request.params.id});
       // console.log("USer found",user);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}