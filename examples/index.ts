import Candor from "candor-rest-sdk";

const candor = new Candor.API({ apiKey: "", config: { enableCache: true } });

candor.on(Candor.Events.Ready, () => {});
