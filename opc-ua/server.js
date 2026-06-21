const {
    OPCUAServer,
    Variant,
    DataType
} = require("node-opcua");

async function main() {
    const server = new OPCUAServer({
        port: 4840,
        resourcePath: "/test",
        buildInfo: {
            productName: "test",
            buildNumber: "1",
            buildDate: new Date()
        }
    });

    await server.initialize();

    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();

    let pressureReadings = 25;

    namespace.addVariable({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: "pressure",
        nodeId: "ns=1;s=pressure",
        dataType: "Double",
        minimumSamplingInterval: 1000,
        value: {
            get: () =>
                new Variant({
                    dataType: DataType.Double,
                    value: pressureReadings
                })
        }
    });

    await server.start();

    console.log("OPC UA Server is running");
}

try {
    main();
} catch (err) {
    console.log(err);
}