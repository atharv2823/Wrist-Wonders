const getHealth = (req, res) => {

    res.json({
        success:true,
        message:"server working properly"
    })
}

export {getHealth}