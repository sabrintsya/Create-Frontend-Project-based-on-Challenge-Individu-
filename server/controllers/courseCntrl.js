import asyncHandler from "express-async-handler";

import { prisma } from '../config/prismaConfig.js'

export const createCourse = asyncHandler(async (req, res) => {
   const {
      title, 
      description, 
      price, 
      address, 
      city, 
      country, 
      image, 
      userEmail, 
   } = req.body.data

   console.log(req.body.data)
   try {

      const course = await prisma.course.create({
         data: {
            title,  
            description, 
            price, 
            address, 
            country, 
            city, 
            image, 
            owner : {connect : {email: userEmail}},
         },
      });

      res.send({message: "Course created successfully",
         course
      });

   } catch(err) {
      if(err.code === "P2002") {
        throw new Error("A course with address already exists")
      }
      throw new Error(err.message)
    }
});