const addProfileDetails = async(requestAnimationFrame,res)=>{
    const {profileImg,experience, githubProfile, linkedinProfile, codingPlatform, Location, achievements}=req.body;

    //validate Data
    if(!profileImg || !experience || !githubProfile || !linkedinProfile || !codingPlatform || !location || !Skills || !achievements){
        return res.status(500).json({error: "Please add all fields!!"});
    }

    const newProfile = await Profile.create({
        profileImg,
        experience,
        githubProfile, 
        linkedinProfile, 
        codingPlatform, 
        Location, 
        achievements

    })
}

const data = await newProfile.save();

return res.status(201).json({
    message: "Data added successfully",
    data: profileAdded
})

const updateProfileDetails = async(requestAnimationFrame,res)=>{
    return 

}

module.exports = {addProfileDetails, updateProfileDetails};