import { toNano } from '@ton/core';
import { NFTCollection } from '../build/NFTCollection/NFTCollection_NFTCollection';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nFTCollection = provider.open(await NFTCollection.fromInit());

    await nFTCollection.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        null,
    );

    await provider.waitForDeploy(nFTCollection.address);

    // run methods on `nFTCollection`
}
