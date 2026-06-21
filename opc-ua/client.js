const {
    OPCUAClient,
    AttributeIds
} = require("node-opcua");

async function main() {
    const endpointUrl = "opc.tcp://localhost:4840/test";

    const client = OPCUAClient.create({
        endpointMustExist: false
    });

    try {
        await client.connect(endpointUrl);
        console.log("Connected");

        const session = await client.createSession();
        console.log("Session created");

        const dataValue = await session.read({
            nodeId: "ns=1;s=pressure",
            attributeId: AttributeIds.Value
        });

        console.log("Pressure:", dataValue.value.value);

        await session.close();
        await client.disconnect();

        console.log("Disconnected");
    } catch (err) {
        console.error(err);
    }
}

try {
    main();
} catch (err) {
    console.log(err);
}