
import {update} from '../src/db.mjs'
import { env } from "process";
import { ProxyAgent, setGlobalDispatcher } from 'undici';

if (env.https_proxy) {
    // needed for Node.js < 24 which do not have "NODE_USE_ENV_PROXY" (cf https://github.com/nodejs/node/pull/57165 )
    setGlobalDispatcher(new ProxyAgent(env.https_proxy));
}

update()
