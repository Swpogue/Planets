import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class GalaxiesService{
  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }
  
  async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }
  
  async getGalaxyById(galaxyId) {
     const galaxy = await dbContext.Galaxies.findById(galaxyId)
     if (!galaxy) throw new BadRequest('NO Galaxy By this ID!')
     return galaxy
    }
  }
     
    

export const galaxiesService = new GalaxiesService()