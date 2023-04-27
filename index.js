import chalk from 'chalk';
import main from "./main.js";
import {configs} from "./main.js";
import axios from "axios"
import {config} from "dotenv"
config()
console.log(process.env.API_KEY)

main()
configs();
//console.log(chalk.blue('Hello world!'));
let api_url = `https://dog.ceo/api/breeds/image/random?key=${process.env.API_KEY}`
axios.get(api_url)
.then(response =>{
    // console.log(response.data);
}) 