const { validationResult, check } = require("express-validator")


//creation of (registerValidation && loginValidation)
exports.registerValidation=()=>[
    check("name","name is required").notEmpty(),
    check("email","email must be valid").isEmail(),
    check("password","should be less 6 carcters").isLength({min:6}).notEmpty(),
    check("adresse","adresse is required").notEmpty(), 
]
exports.loginValidation=()=>[
    check("email","email must be valid").isEmail(),
    check("password","should be less 6 carcters").isLength({min:6}).notEmpty(),
]

//handling error
exports.validation=async(req,res,next)=>{
    const error=validationResult(req)
    if(!error.isEmpty()){
        res.status(200).json({errors:error.array()})
    }
next()
}   

