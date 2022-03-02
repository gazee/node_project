exports.errorfun=(req,res,next)=>{
    // res.status(404).send("page not found")
    //res.status(404).sendFile(path.join(__dirname,'views','e404page.html'))
    res.status(404).render("404",{pageTitile:"page Not found",path:"Error"})
}