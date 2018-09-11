import { Router } from 'express';
import {featureConfig} from "../../config/index.js";

export default (params) => {
	let api = Router();
	api.get('/', (req, res) => {
		res.json(featureConfig);
    });
    api.get("/config",(req,res) =>{
        res.json(featureConfig)
    });

	return api;
}