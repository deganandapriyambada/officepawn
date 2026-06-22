const {
    OPCUAServer,
    Variant,
    DataType
} = require("node-opcua");

async function main() {
    const server = new OPCUAServer({
        port: 4840,
        resourcePath: "/test"
    });

    await server.initialize();

    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();

    let pressure = 25;

    const pressureNode = namespace.addVariable({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: "pressure",
        nodeId: "ns=1;s=pressure",
        dataType: DataType.Double,
        value: {
            get: () =>
                new Variant({
                    dataType: DataType.Double,
                    value: pressure
                })
        }
    });

    // Set initial value
    pressureNode.setValueFromSource(
        new Variant({
            dataType: DataType.Double,
            value: pressure
        })
    );

    setInterval(() => {
        pressure = Math.floor(Math.random() * 1000) + 1;

        pressureNode.setValueFromSource(
            new Variant({
                dataType: DataType.Double,
                value: pressure
            })
        );

        console.log("Updated pressure:", pressure);
    }, 1000);

    await server.start();

    console.log("Server running at:");
    console.log(server.getEndpointUrl());
}

main().catch(console.error);