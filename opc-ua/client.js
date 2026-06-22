const {
    OPCUAClient,
    AttributeIds,
    TimestampsToReturn,
    ClientSubscription,
    ClientMonitoredItem
} = require("node-opcua");

async function main() {
    const endpointUrl = "opc.tcp://localhost:4840/test";

    const client = OPCUAClient.create({
        endpointMustExist: false
    });

    await client.connect(endpointUrl);

    const session = await client.createSession();

    const subscription = ClientSubscription.create(session, {
        requestedPublishingInterval: 1000,
        requestedLifetimeCount: 100,
        requestedMaxKeepAliveCount: 10,
        maxNotificationsPerPublish: 100,
        publishingEnabled: true,
        priority: 1
    });

    subscription.on("started", () => {
        console.log(
            "Subscription started:",
            subscription.subscriptionId
        );
    });

    subscription.on("terminated", () => {
        console.log("Subscription terminated");
    });

    const monitoredItem = ClientMonitoredItem.create(
        subscription,
        {
            nodeId: "ns=1;s=pressure",
            attributeId: AttributeIds.Value
        },
        {
            samplingInterval: 1000,
            discardOldest: true,
            queueSize: 10
        },
        TimestampsToReturn.Both
    );

    monitoredItem.on("changed", (dataValue) => {
        console.log(
            "Pressure changed:",
            dataValue.value.value
        );
    });

    // Keep process alive
    process.on("SIGINT", async () => {
        await subscription.terminate();
        await session.close();
        await client.disconnect();
        process.exit(0);
    });
}

main().catch(console.error);