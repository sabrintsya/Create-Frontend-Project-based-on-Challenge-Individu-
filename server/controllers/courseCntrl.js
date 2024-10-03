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
      facilities, 
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
            facilities, 
            image, 
            owner : {connect : {email: userEmail} },
         },
      });

      res.send({})

   } catch(err) {
      if(err.code === "P2002")
      {
         throw new Error("A course with address alredy there")
      }
      throw new Error("err.message")
   }
})