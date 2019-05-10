import { ethers } from 'ethers';
import   Daemon   from './daemon';

let doracle_addr = "0x3b9F1a9aeCb1991f3818f45bd4CC735f4BEE93Ac";
let private_key  = "0x564a9db84969c8159f7aa3d5393c5ecd014fce6a375842a45b12af6677b12407";
let provider     = ethers.getDefaultProvider("kovan");
let wallet       = new ethers.Wallet(private_key, provider);
let daemon       = new Daemon(doracle_addr, wallet);
daemon.start();