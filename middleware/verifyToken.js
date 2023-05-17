export const verifyOwner = async (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) {
      return res.status(401).json({ success: false, error: 'Authorization required' });
    }
  
    
    const token = authorization.split(' ')[1];
  
    try {
      const { _id } = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await User.findById(_id);
      next();
    } catch (error) {
      res.status(401).json({ success: false, error: 'You must be logged in' });
    }
  };
  
export const verifyAdmin=async (req, res, next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({success: false, error:'Authorization required'});
        }
        const token = authorization.split(' ')[1];
    try {
        const {_id}= jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findById(_id)
        next();
        } catch (error) {
            res.status(401).json({success: false, error: 'You must be logged in'})
            }
    };