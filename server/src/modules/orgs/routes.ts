import {Router} from 'express';
import { Org } from './model';

export const router = Router();

router.get('/institution', async(req, res) => {
    const result = await Org.findAll();
  
    res.status(200).json(result);
  })
  
router.get('/institution/:institution', async(req, res) => {
    const institution = req.params.institution;
    const result = await Org.findOne({
    where: {
    id: institution
    }
    });

res.status(200).json(result);
})